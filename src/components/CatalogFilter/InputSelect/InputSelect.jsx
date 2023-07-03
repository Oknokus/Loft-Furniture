import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BasicSelect = ({title, state, setState, array}) => { 
  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label={title}
          onChange={e => handleChange(e)}
        >
          {
          array.map(item => (
            <MenuItem 
                key={item}    
                value={item}>{
                    item === "desc" ? "По убываению" : item === "asc" ? "По возрастанию" : item === "rate" ? "По рейтингу" : item
                }</MenuItem>
          ))
        }
            <MenuItem value="">По умолчанию</MenuItem>            
        </Select>
      </FormControl>
    </Box>
  );
}

export default BasicSelect;