import styles from '../styles/Home.module.css';

export default function FbSection() {
  return (
    <section className={styles.facebook}>
      <h2>JOIN OUR FACEBOOK GROUP</h2>
      <p className={styles.desc}>Wether you're a fishing enthusiast, a seasoned angler o a pro, our group has hundreds of photos, videos and anecdotes of fun times! Lots of members who just like you, share the love for fishing.</p>

      <div>
        <a
          href='https://www.facebook.com/groups/183114718702125/'
          className={styles.join_us}
          target='_blank'
        >
          <img src='/l_fb.png' />
          JOIN US!
        </a>
      </div>
      <div
        className="fb-like"
        data-href="http://rafinbassfishing.com.mx"
        data-layout="button_count"
        data-action="like"
        data-size="large"
        data-show-faces="false"
        data-share="true"
        style={{ display: "none" }}
      />
      <div
        alt="Facebook Group"
        className="fb-page"
        data-href="https://www.facebook.com/Rafin-Bass-Fishing-Guides-at-El-Oviachic-1212256868807121/"
        data-tabs="timeline"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
        style={{ clear: 'both' }}>
        <blockquote cite="https://www.facebook.com/Rafin-Bass-Fishing-Guides-at-El-Oviachic-1212256868807121/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Rafin-Bass-Fishing-Guides-at-El-Oviachic-1212256868807121/">Rafin Bass Fishing Guides at El Oviachic</a></blockquote>
      </div>
    </section>
  )
}