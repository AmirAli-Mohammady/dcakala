import { Stack,List, ListItem, Box, Typography } from "@mui/material";
import { FirstSectionData } from "./data";

export const FirstSection = () => {
  return (
    <Box mt={4}>
      <List>
        <Stack direction={"row"}>
          {FirstSectionData.map((data) => (
            <ListItem key={data.title}>
              <Box textAlign="center">
                <img
                  src={data.imgUrl}
                  alt={data.title}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <Typography fontFamily={'dana light'} variant="subtitle2" fontWeight={'bold'} mt={1}>
                  {data.title}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </Stack>
      </List>
    </Box>
  );
};
