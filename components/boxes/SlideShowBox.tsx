import { Box, Card, CardMedia } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const SlideShowBox = () => {
  const CardMediaSX: {} = { height: "50rem", width: "100%", position: "absolute" };
  return (
    <Box>
      <Card sx={{ height: "50rem" }}>
        <Carousel interval={8000} animation="fade" indicators={false} navButtonsAlwaysInvisible={true}>
          <CardMedia sx={CardMediaSX} image="https://cdn.pixabay.com/photo/2017/03/27/15/21/man-2179358_960_720.jpg" />
          <CardMedia sx={CardMediaSX} image="https://cdn.pixabay.com/photo/2017/08/06/00/27/yoga-2587066_960_720.jpg" />
          <CardMedia sx={CardMediaSX} image="https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_960_720.jpg" />
        </Carousel>
      </Card>
    </Box>
  );
};

export default SlideShowBox;
