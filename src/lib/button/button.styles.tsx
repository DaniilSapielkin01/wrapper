import { styled } from "@mui/system";

export const ButtonStyled = styled("button")(
  ({ theme }) => `
    display: flex; 
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing(2.5)};
    border-radius: 12px;
    color: ${theme.palette.base};
    cursot: pointer;
    width: 150px;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: ${theme.palette.success};
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${theme.palette.secondarySuccess};
    }

    &:disabled {
      opacity: 0.75;
      cursor: not-allowed;
      background-color: ${theme.palette.secondarySuccess};
    }
`,
);
