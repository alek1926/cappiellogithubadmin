import * as React from 'react';
import {Logo} from './Logo';
import { Button } from '@mui/material';
import {callApi} from '../../api/callApi';

const css = require('./Navbar.css')

export const Navbar = () => {

  return (
    <>
  <div className="topnav">
  <a className="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
<div className="Logo">
  <Logo />
</div>
</>
  );
};