import styles from './nav.module.css';
import Link from 'next/link';

const Nav = () => {
  return (<>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" />
  <div className={styles.dif}></div>
    <nav className={styles.navi}>
      {/* <h1 className={styles.logo}>JUGRAFIYA</h1> */}
      <img src="jlogo.png" alt="LOGO" className={styles.lim}/>
      <ul className={styles.links}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Nav;