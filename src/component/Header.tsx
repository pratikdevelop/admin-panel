/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import NotificationIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { deepOrange } from '@mui/material/colors';
import Search from './Search';
const Header = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'white',
        }}
      >
        <Toolbar>
          <Typography className="text-xl font-bold text-slate-900">
            ASSIDUUS
          </Typography>

          <Box className="ml-auto flex items-center space-x-4">
            <Search />
            <IconButton aria-label="delete">
              <NotificationIcon />
            </IconButton>
            <Avatar
              src="/download.jpg"
              sx={{
                bgcolor: deepOrange[500],
                fontSize: '1rem',
                fontWeight: 900,
                width: 30,
                height: 30,
              }}
              sizes="sm"
            ></Avatar>
            <IconButton aria-label="delete">
              <ArrowDropDownIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
