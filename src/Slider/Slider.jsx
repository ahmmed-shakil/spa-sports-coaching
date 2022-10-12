import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import slider1 from "../images/slider-2.jpg";
import slider2 from "../images/slider-1jpg.jpg";
import slider3 from "../images/slider-3.jpg";

import "./Slider.css";

// import required modules
import { Navigation } from "swiper";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";

const Slider = () => {
  return (
    <>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} className="carousel" alt="slider-1" />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "40%",
              transform: "translate(-50%,-50%)",
              fontFamily: "Roboto",
              color: "whitesmoke",
              width: "40%",
              textAlign: "left",
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: "bolder", fontSize: "60px" }}
            >
              Power, Positive, Persistence
            </Typography>
            <Typography variant="h5" sx={{ my: 3 }}>
              Change your physique on the court or field at GymPress stadium.
            </Typography>
            <Button
              variant="container"
              sx={{
                background: "#f6c505",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              REGISTER NOW
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="slider-2" />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "40%",
              transform: "translate(-50%,-50%)",
              fontFamily: "Roboto",
              color: "whitesmoke",
              width: "40%",
              textAlign: "left",
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: "bolder", fontSize: "70px" }}
            >
              Power, Positive, Persistence
            </Typography>
            <Typography variant="h5" sx={{ my: 3 }}>
              Change your physique on the court or field at GymPress stadium.
            </Typography>
            <Button
              variant="container"
              sx={{
                background: "#f6c505",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              REGISTER NOW
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="slider-3" />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "40%",
              transform: "translate(-50%,-50%)",
              fontFamily: "Roboto",
              color: "whitesmoke",
              width: "40%",
              textAlign: "left",
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: "bolder", fontSize: "70px" }}
            >
              Power, Positive, Persistence
            </Typography>
            <Typography variant="h5" sx={{ my: 3 }}>
              Change your physique on the court or field at GymPress stadium.
            </Typography>
            <Button
              variant="container"
              sx={{
                background: "#f6c505",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              REGISTER NOW
            </Button>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
