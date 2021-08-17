import Image from 'next/image';
import GridGallery from 'react-photo-gallery';
import styles from '../styles/Home.module.css';

export default function Gallery({ images }) {
  return (
    <section className={styles.gallery} id='gallery'>
      <h2>GALLERY</h2>
      <p>Click on image to zoom-in. Enjoy!</p>
      <div style={{ position: 'absolute', top: '100px' }}>
        <Image src='/construction.png' width='200px' height='100px' alt="In Construction" />
      </div>
      <div className={styles.images}>
        <GridGallery photos={images} />
      </div>
    </section>
  );
}
