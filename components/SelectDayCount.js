import styles from '../styles/Home.module.css';

export default function SelectDayCount() {
  return (
    <select name="xtradays" id="xtradays" className={styles.bookingInput}>

      <option value="01">1 day</option>
      <option value="02">2 days</option>
      <option value="03">3 days</option>
      <option value="04">4 days</option>
      <option value="05">5 days</option>
      <option value="06">6 days</option>
      <option value="07">7 days</option>
      <option value="08">8 days</option>
      <option value="09">9 days</option>
      <option value="10">10 days</option>

    </select>
  )
}
