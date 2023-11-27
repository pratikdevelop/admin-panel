/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './component/Header';
import SideBar from './component/sideBar';
import { Box, CssBaseline, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

const App = () => {
  return (
    <>
       <CssBaseline />
      <Header />
      <SideBar />
    </>
  )
}

export default App