import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import axios from 'axios';
import Section from '../../components/Section/Section';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    fetchTopAlbums();
    fetchNewAlbums();
  }, []);

  const fetchNewAlbums = async () => {
    try {
      console.log("making axios req");
      const response = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
      setNewAlbums(response.data); 
    } catch (error) {
      console.error("Failed to fetch albums", error);
    }
  }

  const fetchTopAlbums = async () => {
    try {
      console.log("making axios req");
      const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
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
        <Section data={newAlbums} heading={'New Albums'}/>
      </div>
    </>
  );
};

export default HomePage;
