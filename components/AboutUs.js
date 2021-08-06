import styles from '../styles/Home.module.css';

export default function AboutUs() {
  return (
    <section id="about_us">
      <div className={styles.aboutUsInfo}>

        <h2>ABOUT US</h2>

        <p>Great times and great fishing at Lake Oviachic it's what is all about! Convenient, short trip from a mid-sized city for accomodations, year-round fishing season, beautiful sunsets and monster largemouth bass makes up for the best trip ever!</p>
        <p>We have the best knowledgeable guides (english speaking, of course) and  fully loaded boats and equipment so you'll just have to worry about fishing that trophy bass you've been dreaming about!</p>
        <p>&nbsp;</p>
        <p>Come have fun with us, we'll put you right on the fish</p>

      </div>

      <div className={styles.aboutUsBackground} />
    </section>
  );
}
