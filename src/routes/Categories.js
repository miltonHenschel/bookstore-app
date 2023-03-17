import { useDispatch, useSelector } from 'react-redux';

import { checkStatus } from '../redux/features/categories/categoriesSlice';
import styles from '../styles/Categories.module.css';

function Categories() {
  const status = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <button type="button" className={styles.button} onClick={handleClick}>
        Check status
      </button>
      <h2 className={styles.h2}>{status}</h2>
    </>
  );
}

export default Categories;
