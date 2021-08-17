import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="nav">
      <a href="index.php" target="_self">
        <Image
          src="/l_rbfgao_wh90.png"
          height="90px"
          width="93px"
          border="0"
          alt="Rafin Bass Fishing Logo"
        />
      </a>
      <ul className="nav_list">
        <li><a target="_top" href="#">HOME</a></li>
        <li><a target="_self" href="#about_us">ABOUT US</a></li>
        <li><a target="_self" href="#location">LOCATION</a></li>
        <li><a target="_self" href="#gallery">GALLERY</a></li>
        <li><a target="_self" href="#faq">F.A.Q.</a></li>
        <li><a target="_self" href="#booking">BOOKING &amp; CONTACT INFO</a></li>
      </ul>
    </nav>
  )
};
