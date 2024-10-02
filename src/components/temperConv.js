import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const celsChange = (event) => {
        const value = event.target.value;
        setCelsius(value);
        if (value !== '') {
            const convertedValue = (value * 9 / 5) + 32;
            setFahrenheit(convertedValue.toFixed(2));
        } else {
            setFahrenheit('');
        }
    };

    const farChange = (event) => {
        const value = event.target.value;
        setFahrenheit(value);
        if (value !== '') {
            const convertedValue = (value - 32) * 5 / 9;
            setCelsius(convertedValue.toFixed(2));
        } else {
            setCelsius('');
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 300, margin: 'auto' }}>
            <TextField
                label="Цельсий (°C)"
                variant="outlined"
                value={celsius}
                onChange={celsChange}
                type="number"
                margin="normal"
            />
            <TextField
                label="Фаренгейт (°F)"
                variant="outlined"
                value={fahrenheit}
                onChange={farChange}
                type="number"
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={() => {
                setCelsius('');
                setFahrenheit('');
            }}>
                Очистить
            </Button>
        </Box>
    );
};

export default TemperatureConverter;