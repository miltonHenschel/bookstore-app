import { NavLink } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';

import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <>
      <div className={styles.panelContainer}>
        <div className={styles.panel}>
          <div>
            <span className={styles.BookstoreCMS}>Bookstore CMS</span>
            <span className={styles.BOOKS}>
              <NavLink
                className=""
                style={({ isActive }) => ({
                  color: isActive ? '#0290ff' : '#121212',
                })}
                to="/"
              >
                BOOKS
              </NavLink>
            </span>
            <span className={styles.CATEGORIES}>
              <NavLink
                className=""
                style={({ isActive }) => ({
                  color: isActive ? '#0290ff' : '#121212',
                })}
                to="categories"
              >
                CATEGORIES
              </NavLink>
            </span>
          </div>
          <div className={styles.login}>
            <BsPerson />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
