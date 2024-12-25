import { Box, ImageListItem, IconButton } from "@mui/material";
import { useState } from "react";
import { sliderData } from "./data";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const BanerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };  
  

  return (
    <Box sx={{ position: "relative", width: "100%", height: 284 }}>
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          color: "#ff7900",
          height: "50px", 
          width: "50px",
          zIndex:'99'  
        }}
      >
        <ChevronLeftIcon sx={{ fontSize: 120 }} /> 
      </IconButton>

      <ImageListItem key={sliderData[currentIndex].id}>
        <img
          src={`${sliderData[currentIndex].imgUrl}?w=800&h=284&fit=crop&auto=format`}
          alt={`Slide ${currentIndex + 1}`}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </ImageListItem>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          color: "#ff7900",
          height: "50px", 
          width: "50px",  
        }}
      >
        <ChevronRightIcon sx={{ fontSize: 120 }} /> 
      </IconButton>

      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
        }}
      >
        {sliderData.map((_, index: number) => (
          <IconButton
            key={index}
            onClick={() => handleDotClick(index)}
            onMouseEnter={() => handleDotClick(index)}
            sx={{
              padding: 0,
              color: index === currentIndex ? "white" : "gray",
              transition: "color 0.3s",
            }}
          >
            {index === currentIndex ? (
              <FiberManualRecordIcon sx={{ fontSize: 16 }} />
            ) : (
              <RadioButtonUncheckedIcon sx={{ fontSize: 12 }} />
            )}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};
