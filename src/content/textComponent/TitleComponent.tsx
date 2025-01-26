import { Typography } from "@mui/material";

type TitleComponentProps = {
  fontWeight?: "bold" | number;
  children: React.ReactNode;
  textAlign?: "left" | "center" | "right";
  color?: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"; // مقدار مجاز برای variant
  mt?: number;
  mb?: number;
  lineHeight?: number | string;
  fontSize?: number | string;
};

export const TitleComponent: React.FC<TitleComponentProps> = ({
  children,
  textAlign = "center",
  color = "var(--title-color)",
  variant = "h4",
  mt = 2,
  mb,
  lineHeight,
  fontSize,
  fontWeight,
}) => {
  return (
    <Typography
      textAlign={textAlign}
      color={color}
      mt={mt}
      mb={mb}
      lineHeight={lineHeight}
      fontSize={fontSize}
      variant={variant}
      fontWeight={fontWeight}
    >
      {children}
    </Typography>
  );
};
