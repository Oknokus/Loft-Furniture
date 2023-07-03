import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { debounce } from '@mui/material';

const RangeSlider = ({slider, setSlider}) => { 
  const handleChange = (event, newValue) => {  
    setSlider(newValue)
  };

  return (
    <Box sx={{ width: "100%"}}>
      <Slider      
        value={slider}
        onChange={debounce(handleChange, 100)}
        valueLabelDisplay="auto" 
        step={10}
        min={0}
        max={3000}      
      />
    </Box>
  );
}


export default RangeSlider;