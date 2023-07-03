import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

const RangeSlider = ({slider, setSlider}) => { 
  const handleChange = (event, newValue) => {  
    setSlider(newValue)
  };

  return (
    <Box sx={{ width: "100%"}}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={slider}
        onChange={handleChange}
        valueLabelDisplay="auto" 
        min={0}
        max={4000}      
      />
    </Box>
  );
}


export default RangeSlider;