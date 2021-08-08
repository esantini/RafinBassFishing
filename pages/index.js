import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import FbSection from '../components/FbSection';
import AboutUs from '../components/AboutUs';
import Location from '../components/Location';
import Gallery from '../components/Gallery';
import Faq from '../components/Faq';
import Booking from '../components/Booking';
import styles from '../styles/Home.module.css';

const prod = true; // TODO env === prod

export default function Home() {
  useEffect(() => {
    if (typeof document === 'undefined' || !prod) return;
    let d = document, s = 'script', id = 'facebook-jssdk';
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.7&appId=665461240289816";
    fjs.parentNode.insertBefore(js, fjs);
  }, []);
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

        <Location prod={prod} />

        <Gallery />

        <Faq />

        <Booking />

      </main>

      <div id="fb-root"></div>
    </div>
  )
}
