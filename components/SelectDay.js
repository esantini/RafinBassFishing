import styles from '../styles/Home.module.css';

const options = [];
for (let i = 1; i <= 31; i++) {
  options.push(<option value={i} key={i}>{i}</option>);
}

export default function SelectDay() {
  return (
    <select name="day" id="day" className={styles.bookingInput}>
      <option>-Day-</option>
      {options}
    </select>
  );
}