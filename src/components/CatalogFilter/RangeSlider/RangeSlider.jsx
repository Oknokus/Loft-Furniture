import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

function valuetext() { 
}

const RangeSlider = () => {
  const [value, setValue] = useState([20, 100]);

  const handleChange = () => {
   
  };

  return (
    <Box sx={{ width: "100%"}}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}


export default RangeSlider;