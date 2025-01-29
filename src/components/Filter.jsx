import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

const Filter = ({ onFilterChange }) => {
  const [state, setState] = React.useState({
    left: false,
  });

  const [filters, setFilters] = React.useState({
    type: "",
    priceRange: "",
    condition: "",
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => {
      const updatedFilters = { ...prev, [key]: value };
      onFilterChange(updatedFilters); // Pass the updated filters to the parent
      return updatedFilters;
    });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "left" ? 250 : "auto", // Set width for desktop
        maxWidth: "100%", // Make it responsive for mobile
      }}
      role="presentation"
    >
      <div className="w-full bg-white p-6 shadow-lg h-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Filter Vehicles</h2>

        {/* Vehicle Type Filter */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Vehicle Type</label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.type}
            onChange={(e) => handleFilterChange("type", e.target.value)}
          >
            <option value="">All</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Price Range</label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.priceRange}
            onChange={(e) => handleFilterChange("priceRange", e.target.value)}
          >
            <option value="">All</option>
            <option value="low">0 - $5/hr</option>
            <option value="mid">$6 - $10/hr</option>
            <option value="high">$11+/hr</option>
          </select>
        </div>

        {/* Condition Filter */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Condition</label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.condition}
            onChange={(e) => handleFilterChange("condition", e.target.value)}
          >
            <option value="">All</option>
            <option value="excellent">Excellent</option>
            <option value="very good">Very Good</option>
            <option value="good">Good</option>
          </select>
        </div>

        {/* Reset Filters Button */}
        <button
          className="w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
          onClick={() => {
            const resetFilters = { type: "", priceRange: "", condition: "" };
            setFilters(resetFilters);
            onFilterChange(resetFilters);
          }}
        >
          Reset Filters
        </button>
      </div>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            className="bg-blue-500 text-white p-2 rounded-md fixed top-4 left-4 transition-all duration-300 transform hover:scale-105 z-50"
            style={{
              position: "fixed",
              top: "5rem", // Positioned at the top
              left: "3rem", // Positioned at the left
              opacity: state[anchor] ? 0 : 1, // Fade out when the drawer is open
              pointerEvents: state[anchor] ? "none" : "auto", // Disable button when drawer is open
            }}
          >
            Filter
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)} // Only close when explicitly triggered
            sx={{
              width: "100%", // Mobile-first design
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: "100%", // Full width on mobile
                maxWidth: 250, // Limited width on desktop
              },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Filter;
