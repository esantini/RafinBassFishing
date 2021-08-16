import Head from 'next/head';
import NavBar from '../components/NavBar';
import FbSection from '../components/FbSection';
import AboutUs from '../components/AboutUs';
import Location from '../components/Location';
import Gallery from '../components/Gallery';
import Faq from '../components/Faq';
import Booking from '../components/Booking';
import styles from '../styles/Home.module.css';

function Home({ images }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>RAFIN BASS FISHING GUIDES</title>
        <meta name="description" content="COME AND LIVE IT" />
        <meta name="viewport" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="Description" content="Rafin Bass Fishing Guides At El Oviachic is a friends trip kind, based on in-town food, great fishing days and having a great time." />
        <meta name="Keywords" content="bass, fishing, oviachic, rafin, Guides, Bass fishing guides, Oviachic lake, Fishing in mexico, Black bass, Large mouth bass, Presa el oviachic, Lobina, Lobina negra, Pesca deportiva, fishing guides, come and live it, obregon, sonora, mexico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        <div className={styles.topPanel}>

          <header>
            <h1>Rafin Bass Fishing Guides At El Oviachic</h1>
            <p>is a friends trip kind, based on in-town food, great fishing days and having a great time.</p>
            <h3>COME AND LIVE IT!</h3>
          </header>

          <FbSection />
        </div>

        <AboutUs />

        <Location />

        <Gallery images={images} />

        <Faq />

        <Booking />

      </main>

      <div id="fb-root"></div>
    </div>
  )
}

import fs from 'fs';
import path from 'path';
// This function gets called at build time
export async function getStaticProps() {
  const imagesDir = 'gallery_images';
  const dir = path.resolve('./public', imagesDir);
  const images = fs.readdirSync(dir);
  images.splice(42);

  // By returning { props: { images } }, the component
  // will receive `images` as a prop at build time
  return {
    props: {
      images,
    },
  }
}

export default Home;
