import { styled } from "@mui/system";
import { themeMuiBase } from "assets/styles/theme-mui";

export interface ITypographyProps {
  fontSize?: number;
  fontWeight?: number;
  component?:
    | "div"
    | "span"
    | "time"
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
  textAlign?: "left" | "center" | "right";
  lineHeight?: string | number;
  letterSpacing?: number;
  color?: string;
  opacity?: number;
  className?: string;
  children: React.ReactNode;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  style?: React.CSSProperties;
  fontFamily?: string;
}

export const TypographyLib = ({
  fontSize = 14,
  fontWeight = 400,
  component = "span",
  color = themeMuiBase.palette.base,
  className = "",
  opacity,
  lineHeight,
  letterSpacing,
  fontFamily,
  textAlign,
  children,
  textTransform,
  style,
}: ITypographyProps) => {
  const Component = styled(component)(() => ({
    fontSize,
    textAlign,
    fontWeight,
    lineHeight,
    letterSpacing,
    fontFamily,
    opacity,
    color,
    margin: 0,
    textTransform,
  }));
  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  );
};
