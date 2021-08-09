import { useState } from 'react';
import Image from 'next/image';
import SelectDay from './SelectDay';
import SelectMonth from './SelectMonth';
import SelectDayCount from './SelectDayCount';
import SelectSubject from './SelectSubject';
import styles from '../styles/Home.module.css';

export default function Booking() {
  const [subject, setSubject] = useState('booking');
  return (
    <section className={styles.booking} id='booking'>
      <h2>BOOKING</h2>

      <div className={styles.contact}>

        <p>
          If you want to make a reservation, ask me a question or simply check if a date is available feel free to <span style={{ textDecoration: "line-through" }}>use the form below</span> (under construction)
          or contact me directly via email at <strong>raosga@hotmail.com</strong>
        </p>

        <dl>
          <dt>Rafin Bass Fishing Guides at el Oviachic</dt>
          <dd><strong>Phone:</strong> +52 1 (644) 998-8783</dd>
          <dd><strong>Address:</strong> Jalisco 950 Sur, Ciudad Obreg&oacute;n, Sonora, M&eacute;xico</dd>
          <dd><strong>Email:</strong> raosga@hotmail.com</dd>
        </dl>

        <form action='handler' method='POST' name='booking' id='bookingform'>
          <h3 style={{ marginBottom: 0 }}>Contact me: </h3>
          <div className="display-flex">

            <div className={styles.selectFields}>

              <SelectSubject setValue={setSubject} />

              {subject === 'booking' && (
                <div>
                  <div className={styles.bookingSelect} >
                    <h5>When</h5>
                    <div>
                      <SelectMonth />
                      <SelectDay />
                    </div>
                  </div>

                  <div className={styles.bookingSelect} >
                    <h5>How Long?</h5>
                    <div>
                      <SelectDayCount />
                    </div>
                  </div>
                </div>
              )}

            </div>

            <div className={styles.textFields}>


              <input disabled name="nombre" type="text" className={styles.bookingInput} id="nombre" size="50" placeholder='Your name' required />
              <input disabled name="correo" type="text" className={styles.bookingInput} id="correo" size="50" placeholder='email' required />
              <input disabled name="tel" type="text" className={styles.bookingInput} id="tel" size="50" placeholder='Tel' required />
              <textarea disabled name="coms" cols="49" rows="3" className={styles.bookingInput} id="coms" placeholder='Your Comments or Questions'></textarea>


              <Image src='/construction.png' width='200px' height='100px' alt="In Construction" />
              <input disabled type='submit' name='submit' value='send' />
            </div>

          </div>

          <div style={{ position: 'absolute', top: '20px', display: 'none' }}>
            <Image src='/construction.png' width='200px' height='100px' alt="In Construction" />
          </div>

        </form>


      </div>
    </section>
  );
}
