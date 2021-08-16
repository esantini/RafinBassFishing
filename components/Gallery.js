import Image from 'next/image';
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

        {images && images.map(img => (
          <div className={styles.imageWrap} key={img}>
            <Image src={`/gallery_images/t/${img}`} width="200px" height="200px" />
          </div>
        ))}
      </div>
    </section>
  );
}
