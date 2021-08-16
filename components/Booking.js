import { useState } from 'react';
import Image from 'next/image';
import SelectDay from './SelectDay';
import SelectMonth from './SelectMonth';
import SelectDayCount from './SelectDayCount';
import SelectSubject from './SelectSubject';
import styles from '../styles/Home.module.css';

export default function Booking() {
  const [subject, setSubject] = useState('Booking');

  const submitBooking = async e => {
    e.preventDefault();

    const formBody = {
      name: e.target.name.value,
      subject: e.target.subject.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    const res = await fetch('/api/booking', {
      body: JSON.stringify(formBody),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });
  }

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

        <form onSubmit={submitBooking} method='POST' name='booking' id='bookingform'>
          <h3 style={{ marginBottom: 0 }}>Contact me: </h3>
          <div className={styles.formColumns}>

            <div className={styles.selectFields}>

              <SelectSubject setValue={setSubject} />
              <div className={`${styles.bookingSelectContainer} ${subject === 'Booking' ? '' : styles.hide}`} >
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

            </div>

            <div className={styles.textFields}>

              <input name="name" type="text" className={styles.bookingInput} id="name" placeholder='Your name' required />
              <input name="email" type="text" className={styles.bookingInput} id="email" placeholder='E-Mail' required />
              <input name="phone" type="text" className={styles.bookingInput} id="phone" placeholder='Phone' required />
              <textarea name="message" className={styles.bookingInput} id="message" placeholder='Your Comments or Questions' />

              <div>
                <Image src='/construction.png' width='200px' height='100px' alt="In Construction" />
                <input type='submit' name='submit' value='send' />
              </div>
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
