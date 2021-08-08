import Image from 'next/image';
import SelectDay from './SelectDay';
import SelectMonth from './SelectMonth';
import SelectDayCount from './SelectDayCount';
import SelectSubject from './SelectSubject';
import styles from '../styles/Home.module.css';

export default function Booking() {
  return (
    <section className={styles.booking} id='booking'>
      <h2>BOOKING</h2>

      <div className={styles.contact}>

        <p>From everywhere in the world, please use this form to make your reservation or simply drop us a line and tell us what&apos;s on your mind. We&apos;ll make sure to get back to you as soon as possible.</p>

        <dl>
          <dt>Rafin Bass Fishing Guides at el Oviachic</dt>
          <dd><strong>Phone:</strong> +52 1 (644) 998-8783</dd>
          <dd><strong>Address:</strong> Jalisco 950 Sur, Ciudad Obreg&oacute;n, Sonora, M&eacute;xico</dd>
          <dd><strong>Email:</strong> raosga@hotmail.com</dd>
        </dl>

        <form action='handler' method='POST' name='booking' id='bookingform'>
          <div className="display-flex">
            <div style={{ width: '50%' }} className="flex-column">
              <input disabled name="nombre" type="text" className={styles.bookingInput} id="nombre" size="50" placeholder='Your name' required />
              <input disabled name="correo" type="text" className={styles.bookingInput} id="correo" size="50" placeholder='email' required />
              <input disabled name="tel" type="text" className={styles.bookingInput} id="tel" size="50" placeholder='Tel' required />
              <input disabled name="ciudad" type="text" className={styles.bookingInput} id="tel" size="50" placeholder='City' required />
              <textarea disabled name="coms" cols="49" rows="3" className={styles.bookingInput} id="coms" placeholder='Your Comments'></textarea>
            </div>

            <div style={{ width: '50%' }}>
              <h5> Making a Reservation? &nbsp;&nbsp;&nbsp;# Days:</h5>

              <SelectMonth />

              <SelectDay />

              <SelectDayCount />

              <SelectSubject />

              <Image src='/construction.png' width='200px' height='100px' alt="In Construction" />
              <input disabled type='submit' name='submit' value='send' />
            </div>

          </div>

          <div style={{ position: 'absolute', top: '20px' }}>
            <Image src='/construction.png' width='200px' height='100px' alt="In Construction" />
          </div>

        </form>


      </div>
    </section>
  );
}
