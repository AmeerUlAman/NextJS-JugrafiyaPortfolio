import styles from './nav.module.css';
import Link from 'next/link';

const Nav = () => {
  return (<>
  
  <div className={styles.dif}></div>
    <nav className={styles.navi}>
      <h1>#LOGO</h1>
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