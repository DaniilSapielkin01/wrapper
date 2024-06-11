import { styled } from "@mui/system";

export const WrapperStyled = styled("div")`
  position: relative;
  width: 100%;
`;

export const InputWrapperStyled = styled("div")(({ theme }) => {
  return {
    width: "100%",
    display: "flex",
    alignItems: "center",
    border: `1px solid ${theme.palette.borderColor}`,
    borderRadius: "12px",
    background: theme.palette.lightBlack,
  };
});

export const InputStyled = styled("input")(
  ({ theme }) => `
      font-size: 0.875rem;
      font-weight: 400;
      width: 100%;
      line-height: 1.5;
      padding:  0 ${theme.spacing(2.5)};
      height: 42px;
      color: ${theme.palette.white};
      border: none;
      border-radius: ${theme.spacing(2)};
      background: transparent;
      text-overflow: ellipsis;
    
      &::placeholder {
        color: ${theme.palette.placeholder};
      }
    
      &:hover {
        border-color: ${theme.palette.blue};
      }
    
      &:focus {
        border-color: ${theme.palette.blue};
      }
    
      &:focus-visible, & > input > &:focus-visible {
        outline: 0;
      }
    
      & > input {
        border: none;
        outline: none;
        padding: 0;
        margin: 0;
        width: 100%;
        text-overflow: ellipsis;
      }
    
      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    
        & > input {
          cursor: not-allowed;
        }
    
        &:hover {
          border-color: ${theme.palette.borderColor};
        }
      
        &:focus {
          border-color: ${theme.palette.borderColor};
        }
      }
    `,
);

export const InputErrorStyled = styled("div")(
  ({ theme }) => `
    position: absolute;
    bottom: -${theme.spacing(4)};
    left: ${theme.spacing(5)};
    color: ${theme.palette.error}
  `,
);

export const LabelStyled = styled("label")(({ theme }) => {
  return {
    display: "flex",
    color: theme.palette.white,
    paddingLeft: theme.spacing(2),
    margin: `${theme.spacing(2)} 0`,
    cursor: "pointer",
  };
});
