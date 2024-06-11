import React from "react";
import { ButtonStyled } from "./button.styles";

interface IButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
  children: React.ReactNode;
  styles?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function ButtonLib({
  onClick,
  onMouseOver,
  onMouseLeave,
  children,
  styles,
  disabled,
}: IButtonProps) {
  return (
    <ButtonStyled
      style={styles}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
    >
      {children}
    </ButtonStyled>
  );
}
