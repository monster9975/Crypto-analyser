import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ coin }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4} >
      <Card sx={{display:"flex" , alignItems:"flex-start" , flexDirection:"column",   border:"2px solid grey"}}>
        <CardMedia sx={{ height:"50px", width:"50px", margin:"15px" }} image={coin?.image} />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name = {coin.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
           Symbol = {coin.symbol}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Current price = {coin.current_price}$
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/coin/${coin.id}`}>
            <Button size="small">View</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardItem;
