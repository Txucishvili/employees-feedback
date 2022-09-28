import { Box, Button, Divider, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { Stack } from '@mui/system';
import Head from 'next/head';
import React from 'react'
import Header from './Header';
import styles from './layout.module.scss'
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './SideBar';
import Typography from '@mui/material/Typography';

export default function MainLayout({ children }: any) {
  return (
    <div className={styles.layout}>
      <div className={styles['layout--wrap']}>
        <Paper sx={{ flex: 1 }} elevation={2}>
          <Header />
          <div className={styles['layout--content']}>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }} className={styles.sidebar}>
              <SideBar />
            </Box>
            <div className={styles.content}>
              {children}
            </div>
          </div>
        </Paper>
        <div className={styles['layout--footer']}>
          <Paper elevation={1}>
            <div className={styles['layout--footer--wrap']}>
              <Typography fontSize={14}>
                Copyright (C) OptimoGroup Employees
              </Typography>
            </div>
          </Paper>
        </div>
      </div>

    </div>
  )
}
