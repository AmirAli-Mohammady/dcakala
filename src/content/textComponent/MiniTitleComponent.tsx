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

export const MiniTitleComponent: React.FC<TitleComponentProps> = ({
  children,
  variant = "h6",
  fontWeight = "bold",
  mb = 3,
  mt,
  color,
  fontSize,
}) => {
  return (
    <Typography mt={mt} fontSize={fontSize} color={color} mb={mb} fontWeight={fontWeight} variant={variant}>
      {children}
    </Typography>
  );
};
