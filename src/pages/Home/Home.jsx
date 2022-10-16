import React from "react";
import { Card } from "../../components";
import { Grid, GridItem } from "react-masonry-grid";
import data from "../../data.json";

const Home = () => {
  return (
    <div className="home">
      <Grid gutter={10} columnWidth={350} rowHeight={10}>
        {data.images &&
          data.images.map((image, idx) => {
            return (
              <GridItem key={idx}>
                <Card image={image.urls.small} />;
              </GridItem>
            );
          })}
      </Grid>
    </div>
  );
};

export default Home;
