import { Height } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import coach from "../images/coach.jpg";
import Points from "./Points";

const CoachSection = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <Typography sx={{ my: 4 }} variant="h5">
        Coach Profile
      </Typography>
      <img
        src={coach}
        alt="coach image"
        style={{
          width: 250,
          height: 250,
          borderRadius: "50%",
          display: "block",
        }}
      />
      <Typography variant="h6" sx={{ mt: 3, mb: 4 }}>
        Wen Tianxiang
      </Typography>
      <Points />
    </div>
  );
};

export default CoachSection;
