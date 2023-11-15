import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  <Card
    key={index}
    sx={{
      minWidth: 300,
      maxWidth: 350,
      display: "inline-block",
      m: 1,
      ml: 6,
    }}
  >
    <CardMedia
      sx={{ height: 140 }}
      image={product.image}
      title={product.title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {product.title}
      </Typography>
      <Typography sx={{ m: 1 }}>
        <Chip label={product.category} color="success" />
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <Rating name="read-only" value={product.rating} readOnly />
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="large" onClick={onClickAddCart}>
        Buy for ${product.price}
      </Button>
    </CardActions>
  </Card>;

  useEffect(() => {
    getData();
  }, []);

  return <></>;
};

export default ProductDetail;
