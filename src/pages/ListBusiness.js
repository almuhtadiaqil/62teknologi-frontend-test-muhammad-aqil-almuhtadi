import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, Grid, Pagination } from "@mui/material";
import BusinessCard from "../component/BusinessCard";

function ListBusiness() {
  const [businesses, setBusinesses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const API_KEY =
    "Ubf1-f0uqsJUnssqPMGo-tiFeZTT85oFmKfznlPmjDtX8s83jYMoAb-ApuD63wgq6";
  const API_URL = "https://api.yelp.com/v3/businesses/search/";

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          term: searchTerm,
          location: location,
          limit: 10,
          offset: (currentPage - 1) * 10,
        },
      });

      setBusinesses(response.data.businesses);
      setTotalPages(Math.ceil(response.data.total / 10));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    setCurrentPage(1);
    fetchData();
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>List Business</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="Search term"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="Location"
            variant="outlined"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        {businesses.map((business) => (
          <Grid key={business.id} item xs={12} sm={6} md={4} lg={3}>
            <BusinessCard business={business} />
          </Grid>
        ))}
      </Grid>
      <div style={{ marginTop: "20px" }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </div>
  );
}

export default ListBusiness;
