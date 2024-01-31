import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Link,
} from "@mui/material";

const BusinessCard = ({ business }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={business.image_url}
        alt={business.name}
        style={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {business.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {business.location.address1}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Rating: {business.rating}
        </Typography>
        <Button variant="contained" color="primary">
          <Link
            href={business.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            See on Yelp
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default BusinessCard;
