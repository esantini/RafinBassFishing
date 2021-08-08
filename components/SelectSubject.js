export default function SelectSubject() {
  return (
    <div>
      <h5> Subject: </h5>

      <input name="subject" type="radio" id='subject0' value="Booking" defaultChecked />
      <label htmlFor='subject0'>Booking</label>

      <input name="subject" type="radio" id='subject1' value="Comments" />
      <label htmlFor='subject1'>Comments or Questions</label>
    </div>
  )
}