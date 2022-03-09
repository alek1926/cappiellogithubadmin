import * as React from 'react';
import {Logo} from './Logo';
import { Button } from '@mui/material';
import {callApi} from '../../api/callApi';
import {NuovaClasse} from '../NuovaClasse/NuovaClasse';
import Grid from '@mui/material/Grid';

const css = require('./Navbar.css')

export const Navbar = () => {

  return (
    <>
    <Grid container spacing={1}>
        <Grid item xs={3}>
  <div className="topnav">
  <a className="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
</Grid>
<Grid item xs={6}>
<div className="Logo">
  <Logo />
</div>
</Grid>
<Grid item xs={3}>
<div>
<NuovaClasse />
</div>
</Grid>
</Grid>
</>
  );
};