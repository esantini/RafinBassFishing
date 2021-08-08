import styles from '../styles/Home.module.css';

export default function SelectDayCount() {
  return (
    <select name="xtradays" id="xtradays" className={styles.bookingInput}>

      <option value="01">01</option>
      <option value="02">02</option>
      <option value="03">03</option>
      <option value="04">04</option>
      <option value="05">05</option>
      <option value="06">06</option>
      <option value="07">07</option>
      <option value="08">08</option>
      <option value="09">09</option>
      <option value="10">10</option>

    </select>
  )
}