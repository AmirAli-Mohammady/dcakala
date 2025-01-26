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

export const ParComponent: React.FC<TitleComponentProps> = ({
  children,
  mt,
  mb = 4,
  lineHeight = "2",
  fontSize = "21px",
  variant = "body1",
  fontWeight,
}) => {
  return (
    <Typography
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
