import { useEffect, useRef, useState } from "react";
import { ethers } from "ethers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import BN from "bn.js";

import { TypeToken } from "utils/enums";
import wethABI from "contracts/abi/weth.json";
import { WethContract } from "./wethContract";
import { Weth } from "../../../types/web3-v1-contracts";

// Sepolia
const WETH_CONTRACT = "0x7b79995e5f793a07bc00c21412e50ecae098e7f9";

export function useContractProvider() {
  const { walletProvider } = useWeb3ModalProvider();
  const { address } = useWeb3ModalAccount();

  const [etherProvider, setEtherProvider] =
    useState<null | ethers.BrowserProvider>(null);

  const wethContract = useRef<WethContract | null>(null);

  useEffect(() => {
    if (walletProvider) {
      (async () => {
        const provider = new ethers.BrowserProvider(walletProvider);
        const signer = await provider.getSigner();

        setEtherProvider(provider);

        const contract = new ethers.Contract(
          WETH_CONTRACT,
          wethABI,
          signer,
        ) as any as Weth;

        wethContract.current = await new WethContract(contract);
      })();
    }
  }, [walletProvider, address]);

  const getBalance = async (type: string) => {
    try {
      if (!etherProvider || !address || !wethContract.current) {
        throw Error("Not found Provider");
      }

      switch (type) {
        case TypeToken.ETH: {
          const balance = await etherProvider.getBalance(address);
          return ethers.formatEther(balance);
        }

        case TypeToken.WETH: {
          const balance = await wethContract.current.balanceOf(address);
          return balance;
        }
      }
    } catch (e) {
      console.log(`<-- ${e} -->`);
    }
  };

  const handleDeposite = async (amount: number | string | BN) => {
    try {
      if (!wethContract.current || !address)
        throw Error("Not found WethContract ");
      await wethContract.current.deposit(amount);
    } catch (e) {
      console.log(`<-- ${e} -->`);
    }
  };

  const handleWithdraw = async (amount: number | string | BN) => {
    try {
      if (!wethContract.current || !address)
        throw Error("Not found WethContract ");

      await wethContract.current.withdraw(amount);
    } catch (e) {
      console.log(`<-- ${e} -->`);
    }
  };

  return {
    etherProvider,
    getBalance,
    handleDeposite,
    handleWithdraw,
    wethContract,
  };
}
