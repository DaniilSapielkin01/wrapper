import * as React from "react";

import { themeMuiBase } from "../../assets/styles/theme-mui";

import {
  InputStyled,
  WrapperStyled,
  InputErrorStyled,
  InputWrapperStyled,
  LabelStyled,
} from "./input.styles";
import { TypographyLib } from "lib/typography";

interface IInputProps {
  placeholder?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorValue?: string | null;
  disabled?: boolean;
  label?: string;
  type?: string;
  style?: React.CSSProperties;
}

export const InputLib = React.forwardRef<HTMLInputElement, IInputProps>(
  (props, _ref) => {
    const { error, label, style, errorValue } = props;

    return (
      <WrapperStyled>
        {label && (
          <LabelStyled htmlFor={label}>
            <TypographyLib
              fontSize={12}
              fontWeight={400}
              color={themeMuiBase.palette.white}
            >
              {label}
            </TypographyLib>
          </LabelStyled>
        )}

        <InputWrapperStyled>
          <InputStyled
            {...props}
            value={props.value ?? ""}
            style={style}
            id={label}
            ref={_ref}
          />
        </InputWrapperStyled>

        {error && (
          <InputErrorStyled>
            <TypographyLib fontSize={11} color={themeMuiBase.palette.error}>
              {errorValue ?? "Error"}
            </TypographyLib>
          </InputErrorStyled>
        )}
      </WrapperStyled>
    );
  },
);

InputLib.displayName = "InputLib";
