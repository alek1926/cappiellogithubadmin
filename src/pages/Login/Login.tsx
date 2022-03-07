import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
const css = require('./Login.css')


export const Login = () => {

    return(
    <>    
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div className="centra">
        <Grid container spacing={1}>
        <Grid item xs={12} lg={6}>
        <TextField 
        id="outlined-basic" 
        label="Username" 
        variant="outlined" />
        </Grid>
        <Grid item xs={12} lg={6}>
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        </Grid>
        <Grid item xs={12} lg={12}>
    <Button variant="outlined" size="large" id="login">Log In</Button>
    </Grid>
    </Grid>
    </div>
    </Box>
    </>
    );
}