import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import { networks } from "./networks";

export const projectId = "aea8457bbc6e78fe7395b0632a17d5ce";

const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com",
  icons: ["https://avatars.mywebsite.com/"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: networks,
  projectId,
  themeMode: "light",
});

export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
  return children;
}
