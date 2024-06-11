import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { ethers } from "ethers";

import { useWeb3ModalAccount } from "@web3modal/ethers/react";

import { ButtonLib, InputLib, TypographyLib } from "lib";
import Swap from "assets/svg/Swapp";
import { themeMuiBase } from "assets/styles/theme-mui";
import { BtnConnect } from "components/btn-connect";
import { useContractProvider } from "contracts/provider";

import { TypeToken } from "utils/enums";

import {
  BalanceStyled,
  BodyStyled,
  ErrorBoxStyled,
  IconChangeStyled,
  TokenStyled,
  WrapperInputStyled,
  WrapperStyled,
} from "./wrapper.styles";

interface TokenBalance {
  token: string;
  balance: string;
}

export const Wrapper = () => {
  const { address } = useWeb3ModalAccount();
  const {
    getBalance,
    etherProvider,
    wethContract,
    handleWithdraw,
    handleDeposite,
  } = useContractProvider();

  const [tokenSell, setTokenSell] = useState<TokenBalance>({
    token: TypeToken.ETH,
    balance: "0",
  });
  const [tokenBuy, setTokenBuy] = useState<TokenBalance>({
    token: TypeToken.WETH,
    balance: "0",
  });
  const [value, setValue] = useState("");

  const condError = +tokenSell.balance < +value;
  const condEnter = +value > 0;

  const fetchBalances = async () => {
    const balanceSell = await getBalance(tokenSell.token);
    const balanceBuy = await getBalance(tokenBuy.token);

    setTokenSell((prev) => ({ ...prev, balance: balanceSell ?? "0" }));
    setTokenBuy((prev) => ({ ...prev, balance: balanceBuy ?? "0" }));
  };

  useEffect(() => {
    if (address && etherProvider && wethContract.current) {
      fetchBalances();
    }
  }, [address, wethContract.current]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();
    if (inputValue === "" || /^\d+(\.\d*)?$/.test(inputValue)) {
      setValue(inputValue);
    }
  };

  const handleChangeTokens = () => {
    setTokenBuy(tokenSell);
    setTokenSell(tokenBuy);
  };

  const handleSwap = async () => {
    if (!condEnter) return;
    const parseValue = ethers.parseUnits(value, "ether");

    if (tokenSell.token === TypeToken.ETH) {
      await handleDeposite(String(parseValue));
    }

    if (tokenSell.token === TypeToken.WETH) {
      await handleWithdraw(String(parseValue));
    }

    fetchBalances();
    setValue("0");
  };

  return (
    <WrapperStyled>
      <BodyStyled>
        <WrapperInputStyled>
          <Box width={"50%"}>
            <InputLib
              label="Sell"
              disabled={!address}
              placeholder="0"
              value={value}
              onChange={handleChange}
            />
          </Box>

          <Box display={"flex"} alignItems={"center"}>
            <TokenStyled>
              <TypographyLib fontSize={16} color={themeMuiBase.palette.white}>
                {tokenSell.token}
              </TypographyLib>
              <TypographyLib
                fontSize={12}
                color={themeMuiBase.palette.placeholder}
              >
                |
              </TypographyLib>
              <BalanceStyled>
                <TypographyLib
                  fontSize={12}
                  color={themeMuiBase.palette.placeholder}
                >
                  Balance: {parseFloat(Number(tokenSell.balance).toFixed(2))}
                </TypographyLib>
              </BalanceStyled>
            </TokenStyled>
            <IconChangeStyled onClick={handleChangeTokens}>
              <Swap />
            </IconChangeStyled>
          </Box>
        </WrapperInputStyled>
        <WrapperInputStyled>
          <Box width={"50%"}>
            <InputLib
              disabled={!address}
              label="Buy"
              placeholder="0"
              value={value}
              onChange={handleChange}
            />
          </Box>

          <Box display={"flex"} alignItems={"center"}>
            <TokenStyled>
              <TypographyLib fontSize={16} color={themeMuiBase.palette.white}>
                {tokenBuy.token}
              </TypographyLib>
              <TypographyLib
                fontSize={12}
                color={themeMuiBase.palette.placeholder}
              >
                |
              </TypographyLib>
              <BalanceStyled>
                <TypographyLib
                  fontSize={12}
                  color={themeMuiBase.palette.placeholder}
                >
                  Balance: {parseFloat(Number(tokenBuy.balance).toFixed(2))}
                </TypographyLib>
              </BalanceStyled>
            </TokenStyled>
          </Box>
        </WrapperInputStyled>

        {address ? (
          <ButtonLib onClick={handleSwap} disabled={condError || !condEnter}>
            {condEnter ? "Swap" : `Enter ${tokenSell.token} amount`}
          </ButtonLib>
        ) : (
          <BtnConnect />
        )}

        {condError && (
          <ErrorBoxStyled>
            <TypographyLib color={themeMuiBase.palette.white}>
              Insufficient {tokenSell.token} balance
            </TypographyLib>
          </ErrorBoxStyled>
        )}
      </BodyStyled>
    </WrapperStyled>
  );
};
