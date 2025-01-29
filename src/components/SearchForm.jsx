import React, { useState } from "react";
import styles from "../styles/SearchForm.module.scss";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  
  

  const Cities = [
    { city: "Mumbai" },
    { city: "Delhi" },
    { city: "Pune" },
    { city: "Dharashiv" },
    { city: "Cha. Sambhajinagar" },
    { city: "Jalgaon" },
    { city: "Bhusawal" },
  ];

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!city || !startDate || !startTime || !endDate || !endTime) {
      alert("Please fill all the required fields.");
      return;
    }

    const formattedStartDate = dayjs(startDate).format("YYYY-MM-DD");
    const formattedStartTime = dayjs(startTime).format("HH:mm");
    const formattedEndDate = dayjs(endDate).format("YYYY-MM-DD");
    const formattedEndTime = dayjs(endTime).format("HH:mm");
    
    

    try {
      const response = await axios.get("http://localhost:5000/vehicles", {
        params: {
          city,
          startDate_gte: `${formattedStartDate}T${formattedStartTime}`,
          endDate_lte: `${formattedEndDate}T${formattedEndTime}`,
        },
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.search_form_container}>
        {/* City Selection */}
        <Autocomplete
          disablePortal
          options={Cities}
          getOptionLabel={(option) => option.city}
          size="small"
          onChange={(event, newValue) => setCity(newValue?.city || "")}
          sx={{
            width: 200,
            ".MuiAutocomplete-inputRoot": {
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
              height: 40,
            },
            ".MuiInputBase-input": {
              fontSize: "1.2rem",
              padding: "10px",
            },
          }}
          renderInput={(params) => <TextField {...params} label="City" />}
        />

        {/* Date and Time Pickers */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box className={styles.date_and_time_picker}>
            {/* Start Date and Time */}
            <Box>
              <DatePicker
                label="Pick a start date"
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    size: "small",
                    sx: { width: "170px" },
                  },
                }}
              />
            </Box>
            <Box>
              <TimePicker
                label="Pick a start time"
                value={startTime}
                onChange={(newValue) => setStartTime(newValue)}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    size: "small",
                    sx: { width: "170px" },
                  },
                }}
              />
            </Box>

            <Typography className={styles.to_label}>To</Typography>

            {/* End Date and Time */}
            <Box>
              <DatePicker
                label="Pick an end date"
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
                minDate={startDate}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    size: "small",
                    sx: { width: "170px" },
                  },
                }}
              />
            </Box>
            <Box>
              <TimePicker
                label="Pick an end time"
                value={endTime}
                onChange={(newValue) => setEndTime(newValue)}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    size: "small",
                    sx: { width: "170px" },
                  },
                }}
              />
            </Box>
            <Button
              sx={{ height: 38, marginTop: "10px" }}
              variant="outlined"
              onClick={handleSearch}
            >
              Search
            </Button>
          </Box>
        </LocalizationProvider>

        {/* Search Button */}
      </div>

      {/* Search Results */}
      {/* <div className={styles.results_container}>
        {searchResults.length > 0 ? (
          searchResults.map((vehicle) => (
            <Box key={vehicle.id} className={styles.vehicle_card}>
              <Typography variant="h6">{vehicle.name}</Typography>
              <Typography>Type: {vehicle.vehicleType}</Typography>
              <Typography>City: {vehicle.city}</Typography>
              <Typography>Price/Day: ₹{vehicle.pricePerDay}</Typography>
            </Box>
          ))
        ) : (
          <Typography>No vehicles found for the selected criteria.</Typography>
        )}
      </div> */}
    </div>
  );
};

export default SearchForm;
