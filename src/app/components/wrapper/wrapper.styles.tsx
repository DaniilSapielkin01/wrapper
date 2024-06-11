import { styled } from "@mui/system";

export const WrapperStyled = styled("div")(
  ({ theme }) => `
    overflow: hidden;
    background-color: ${theme.palette.black};
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`,
);

export const BodyStyled = styled("div")(
  ({ theme }) => `
    width: 560px;
    height: 460px;
    border-radius: 12px;
    padding: ${theme.spacing(5)};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(3)};
    background-color: ${theme.palette.lightBlack};
`,
);

export const WrapperInputStyled = styled("div")(
  ({ theme }) => `
  display: flex;
  align-items: end;
  gap: ${theme.spacing(3)};
`,
);

export const BalanceStyled = styled("div")(
  ({ theme }) => `
  display: flex;
  align-items: center;
`,
);

export const TokenStyled = styled("div")(
  ({ theme }) => `
    border-radius: 12px;
    border: 1px solid ${theme.palette.borderColor};
    padding: ${theme.spacing(3)};
    gap: ${theme.spacing(1.5)};
    display: flex; 
    align-items: center;
    justify-content: center;
`,
);

export const IconChangeStyled = styled("div")(
  ({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing(2.5)};
  margin: 0 ${theme.spacing(4)};
  cursor: pointer;
  border: 1px solid ${theme.palette.borderColor};
  width: 42px;
  height: 42px;
  border-radius: 50%;
  color: white;
  transition: all 0.2s ease-in-out;
    
  &:hover {
    background-color: ${theme.palette.hover};
  }
`,
);

export const ErrorBoxStyled = styled("div")(
  ({ theme }) => `
  width: fit-content;
  padding: ${theme.spacing(3)};
  margin-top: ${theme.spacing(5)};
  border-radius: 12px;
  border: 1px solid ${theme.palette.error};
`,
);
