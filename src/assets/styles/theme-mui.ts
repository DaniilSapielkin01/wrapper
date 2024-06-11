export const themeMuiBase = {
  palette: {
    black: "#000",
    white: "rgb(255, 255, 255)",
    lightSecondary: "#FFFFFF80",
    error: "#FF2E1FAB",
    success: "rgb(18, 255, 128)",

    lightBlack: "rgb(28, 28, 28)",
    base: "rgba(0, 0, 0, 0.87)",
    borderColor: "rgb(155, 155, 155)",
    secondarySuccess: "rgb(12, 178, 89)",
    placeholder: "rgb(155, 155, 155)",
    hover: "#ffffff1c",
  },

  spacing: (factor: number) => `${0.25 * factor}rem`,
};
