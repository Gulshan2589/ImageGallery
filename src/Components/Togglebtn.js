import React from 'react'
import Switch from '@mui/material/Switch';

export const Togglebtn = ({ handleChange, isChecked }) => {
    return (
        <Switch
            checked={isChecked}
            color="primary"
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
};



