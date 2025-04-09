import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import axios from 'axios';
import Section from '../../components/Section/Section';
import styles from './HomePage.module.css';
import SongSection from '../../components/SongSection/SongSection';

const HomePage = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [genres, setGenres] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchTopAlbums();
    fetchNewAlbums();
    fetchSongs();
    fetchGenres();
  }, []);

  const fetchSongs = async () => {
    try {
      const response = await axios.get('https://qtify-backend-labs.crio.do/songs');
      setSongs(response.data); 
    } catch (error) {
      console.error("Failed to fetch songs", error);
    }
  }

  const fetchGenres = async () => {
    try {
      const response = await axios.get('https://qtify-backend-labs.crio.do/genres');
      setGenres(response.data); 
    } catch (error) {
      console.error("Failed to fetch genres", error);
    }
  }

  const fetchNewAlbums = async () => {
    try {
      const response = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
      setNewAlbums(response.data); 
    } catch (error) {
      console.error("Failed to fetch albums", error);
    }
  }

  const fetchTopAlbums = async () => {
    try {
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
        <SongSection data={songs} heading={'Songs'} genres={genres}/>
      </div>
    </>
  );
};

export default HomePage;
