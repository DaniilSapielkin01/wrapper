import { ethers } from "ethers";
import BN from "bn.js";

import { Weth } from "../../../types/web3-v1-contracts/Weth";

export class WethContract {
  wethContract: Weth;

  constructor(contract: Weth) {
    this.wethContract = contract;
  }

  async balanceOf(account: string) {
    const balance = await this.wethContract.balanceOf(account);
    return ethers.formatEther(balance);
  }

  async deposit(amount: number | string | BN): Promise<void> {
    try {
      const tx = await this.wethContract.deposit({ value: amount });
      await tx.wait();
    } catch (e) {
      console.error(`<--11 ${e} -->`);
    }
  }

  async withdraw(amount: number | string | BN): Promise<void> {
    try {
      const tx = await this.wethContract.withdraw(amount);
      await tx.wait();
    } catch (e) {
      console.error(`<-- ${e} -->`);
    }
  }
}
