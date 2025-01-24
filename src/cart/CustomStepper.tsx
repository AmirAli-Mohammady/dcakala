import React from "react";
import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const steps = [
  { label: "سبد خرید", icon: <ShoppingCartIcon />, activeColor: "#ff7900" },
  { label: "آدرس و نحوه ارسال", icon: <LocationOnIcon />, activeColor: "#9e9e9e" },
  { label: "روش پرداخت", icon: <PaymentIcon />, activeColor: "#9e9e9e" },
];

const CustomStepper: React.FC<{ activeStep: number }> = ({ activeStep }) => {
  return (
    <Box sx={{ width: "100%", py: 2 }}>
      <Stepper alternativeLabel activeStep={activeStep} sx={{ direction: "ltr" }}>
        {steps.map((step, index) => (
          <Step key={index} completed={index < activeStep}>
            <StepLabel
              StepIconComponent={() => (
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: index <= activeStep ? step.activeColor : "#e0e0e0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {index < activeStep ? (
                    <CheckCircleIcon sx={{ color: "#fff" }} />
                  ) : (
                    React.cloneElement(step.icon, {
                      sx: { color: index === activeStep ? "#fff" : "#9e9e9e" },
                    })
                  )}
                </Box>
              )}
            >
              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  color: index === activeStep ? step.activeColor : "#9e9e9e",
                  fontWeight: index === activeStep ? "bold" : "normal",
                }}
              >
                {step.label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default CustomStepper;
