import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Gallery() {
  return (
    <section className={styles.gallery} id='gallery'>
      <h2>GALLERY</h2>
      <p>Click on image to zoom-in. Enjoy!</p>
      <div style={{ position: 'absolute', top: '100px' }}>
        <Image src='/construction.png' width='200px' height='100px' />
      </div>
    </section>
  );
}
