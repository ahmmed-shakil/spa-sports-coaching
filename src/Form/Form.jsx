import { Button, MenuItem, TextField, Typography } from "@mui/material";
import React from "react";
import "./Form.css";

const classes = [
  { label: "Private Class 1 to 1" },
  { label: "Private Class 1 to 2" },
  { label: "Group Class" },
];
const levels = [
  { label: "Beginner" },
  { label: "Intermediate" },
  { label: "Advance" },
];
const locations = [
  { label: "HK Squash Centre" },
  { label: "Cornwall Street Squash and Table Tennis Centre" },
  { label: "Others, please specify(Provide freetext textbox for entry" },
];
const days = [
  { label: "Monday" },
  { label: "Tuesday" },
  { label: "Wednesday" },
  { label: "Thursday" },
  { label: "Friday" },
  { label: "Saturday" },
  { label: "Sunday" },
];
const times = [
  { label: "0800-1200" },
  { label: "1200-1500" },
  { label: "1500-1900" },
  { label: "1900-2200" },
];

const Form = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [selectClass, setClass] = React.useState("");
  const [level, setLevel] = React.useState("");
  const [locationOne, setLocationOne] = React.useState("");
  const [locationTwo, setLocationTwo] = React.useState("");
  const [dayOne, setDayOne] = React.useState("");
  const [dayTwo, setDayTwo] = React.useState("");
  const [timeOne, setTimeOne] = React.useState("");
  const [timeTwo, setTimeTwo] = React.useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleClassChange = (event) => {
    setClass(event.target.value);
  };
  const handleLevelChange = (event) => {
    setClass(event.target.value);
  };
  const handleLocationOneChange = (event) => {
    setClass(event.target.value);
  };
  const handleLocationTwoChange = (event) => {
    setClass(event.target.value);
  };
  const handleDayOneChange = (event) => {
    setClass(event.target.value);
  };
  const handleDayTwoChange = (event) => {
    setClass(event.target.value);
  };
  const handleTimeOneChange = (event) => {
    setClass(event.target.value);
  };
  const handleTimeTwoChange = (event) => {
    setClass(event.target.value);
  };

  return (
    <div className="form-container">
      <form>
        <TextField
          sx={{ my: 1 }}
          type="text"
          id="outlined-name"
          label="Name"
          value={name}
          fullWidth
          onChange={handleNameChange}
        />

        <TextField
          sx={{ my: 1 }}
          type="email"
          id="outlined-email"
          label="Email"
          value={email}
          fullWidth
          onChange={handleEmailChange}
        />

        <TextField
          sx={{ my: 1 }}
          type="phone"
          id="outlined-phone"
          label="Phone"
          value={phone}
          fullWidth
          onChange={handlePhoneChange}
        />

        <TextField
          sx={{ my: 1 }}
          id="outlined-select-class"
          select
          label="Select Class"
          value={selectClass}
          onChange={handleClassChange}
          fullWidth
          helperText="Please select your class"
        >
          {classes.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          sx={{ my: 1 }}
          id="outlined-select-level"
          select
          label="Select Level"
          value={level}
          onChange={handleLevelChange}
          fullWidth
          helperText="Please select your level"
        >
          {levels.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {/* DAY 1 */}
        <Typography variant="h5">Preferred Day (1st Choice)</Typography>
        <TextField
          sx={{ my: 1 }}
          id="outlined-select-location-1"
          select
          label="Select Location"
          value={locationOne}
          onChange={handleLocationOneChange}
          fullWidth
          helperText="Please select your location"
        >
          {locations.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          sx={{ my: 1 }}
          id="outlined-select-day-1"
          select
          label="Select Day"
          value={dayOne}
          onChange={handleDayOneChange}
          fullWidth
          helperText="Please select your date"
        >
          {days.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          sx={{ my: 1 }}
          id="outlined-select-time-1"
          select
          label="Select Time"
          value={timeOne}
          onChange={handleTimeOneChange}
          fullWidth
          helperText="Please select your time"
        >
          {times.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        {/* DAY 2 */}
        <Typography variant="h5">Preferred Day (2nd Choice)</Typography>
        <TextField
          sx={{ my: 1 }}
          id="outlined-select-location-2"
          select
          label="Select Location"
          value={locationTwo}
          onChange={handleLocationTwoChange}
          fullWidth
          helperText="Please select your location"
        >
          {locations.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          sx={{ my: 1 }}
          id="outlined-select-day-2"
          select
          label="Select Day"
          value={dayTwo}
          onChange={handleDayTwoChange}
          fullWidth
          helperText="Please select your date"
        >
          {days.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          sx={{ my: 1 }}
          id="outlined-select-time-2"
          select
          label="Select Time"
          value={timeTwo}
          onChange={handleTimeOneChange}
          fullWidth
          helperText="Please select your time"
        >
          {times.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="contained" size="large" sx={{ background: "black" }}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
