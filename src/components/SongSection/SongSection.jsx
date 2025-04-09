import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./SongSection.module.css";
import "react-multi-carousel/lib/styles.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SongSection = ({ heading, data, genres }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.content}>
      <div className={styles.topSection}>
        <div className={styles.heading}>{heading}</div>
      </div>
      <Box sx={{ width: "100%", color: "white" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="genre tabs"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#34C948", 
              },
            }}
            sx={{
              "& .MuiTab-root": {
                color: "white", 
              },
              "& .Mui-selected": {
                color: "#34C948", 
              },
            }}
          >
            {genres.data?.map((genre, index) => (
              <Tab key={genre.key} label={genre.label} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>
        {genres.data?.map((genre, index) => (
          <CustomTabPanel key={genre.key} value={value} index={index}>
            <div className={styles.grid}>
              {data
                .filter((item) => item.genre.key == genre.key)
                .map((item, i) => (
                  <Card key={i} data={item} />
                ))}
            </div>
          </CustomTabPanel>
        ))}
      </Box>
    </div>
  );
};

export default SongSection;
