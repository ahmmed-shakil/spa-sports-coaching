import { Divider, Typography } from "@mui/material";
import React from "react";

const FormTitle = () => {
  return (
    <div>
      <Divider />
      <Typography variant="h5" sx={{ py: 4 }}>
        REGISTER YOUR LESSON NOW
      </Typography>
      <Divider />
    </div>
  );
};

export default FormTitle;
