import { Box, Grid } from "@mui/material";
import { SecendSectionData } from "./data"; 

export const SecendSection = () => {
  return (
    <Box>
      <Grid container spacing={2}> 
        {SecendSectionData.slice(0, 2).map((data) => ( 
          <Grid item xs={6} key={data.imgUrl}> 
            <img 
              src={data.imgUrl} 
              alt={data.imgUrl} 
              loading="lazy"
              style={{ width: '100%', borderRadius: '8px' }} 
            />
          </Grid>
        ))}
        {SecendSectionData[2] && ( 
          <Grid item xs={12}> 
            <img 
              src={SecendSectionData[2].imgUrl} 
              alt={SecendSectionData[2].imgUrl} 
              loading="lazy"
              style={{ width: '100%', borderRadius: '8px' }} 
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
