import { Box, Stack, ButtonGroup, Button } from "@mui/material";

const BrandsIcon = [
  `https://dashboard.dcakala.com/public/images/brand/2023/11/Taba-Electronic_medium.webp`,
  `https://dashboard.dcakala.com/public/images/brand/2023/11/Suzuki_medium.webp`,
  `https://dashboard.dcakala.com/public/images/brand/2023/11/Commax_medium.webp`,
  `https://dashboard.dcakala.com/public/images/brand/2023/11/Electropeyk_medium.webp`,
  `https://dashboard.dcakala.com/public/images/brand/2023/11/Simaran_medium.webp`,
];

export default function BestBrands() {
  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <ButtonGroup
          sx={{
            width: "100%", 
            justifyContent: "space-between", 
          }}
          variant="outlined"
        >
          {BrandsIcon.map((src, index) => (
            <Button
              key={index}
              variant='text'
              color="error"
              sx={{
                flexGrow: 1, 
                transition: "background-color 0.3s ease",
                padding: "16px", 
                "&:hover": {
                  backgroundColor: "blue", 
                },
              }}
            >
              <img
                src={src}
                alt={`brand-${index}`}
                style={{
                  width: "60px", 
                  height: "60px", 
                }}
              />
            </Button>
          ))}
        </ButtonGroup>
      </Stack>
    </Box>
  );
}
