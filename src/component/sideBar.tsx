"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import LinePlot from "./Chart";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LineChart from "./LineChart";
const SideBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: "20vw",
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 250, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <Box sx={{ width: "80vw", overflow: "auto", marginLeft: "auto" }}>
          <List>
            {[
              "dashboard",
              "Accounts",
              "Payroll",
              "Reports",
              "Advisor",
              "Contacts",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  selected={selectedIndex === index}
                  onClick={() => setSelectedIndex(index)}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 3, p: 3, height: "100vh" }}>
        <Toolbar />
        <Card sx={{ maxWidth: 400 }}>
          <CardHeader title="Checking Account" />
          <CardContent>
            {/* <LinePlot /> */}
            <LineChart/>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default SideBar;
