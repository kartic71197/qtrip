import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import axios from 'axios';
import Section from '../../components/Section/Section';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [topAlbums, setTopAlbums] = useState([]);

  useEffect(() => {
    fetchTopAlbums();
  }, []);

  const fetchTopAlbums = async () => {
    try {
      console.log("making axios req");
      const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
      console.log(response.data);
      setTopAlbums(response.data); 
    } catch (error) {
      console.error("Failed to fetch albums", error);
    }
  };

  return (
    <>
      <Hero />
      <div className={styles.section}>
        <Section data={topAlbums} heading={'Top Albums'}/>
      </div>
    </>
  );
};

export default HomePage;
