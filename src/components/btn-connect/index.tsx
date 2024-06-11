import { useWeb3Modal } from "@web3modal/ethers/react";
import { ButtonLib } from "lib";

export const BtnConnect = () => {
  const { open } = useWeb3Modal();

  const handleClick = () => {
    open();
  };

  return <ButtonLib onClick={handleClick}>Connect Wallet</ButtonLib>;
};
