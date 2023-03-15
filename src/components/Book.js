/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { removeBooks } from '../redux/features/books/booksSlice';
import styles from '../styles/Book.module.css';

function Book({
  category, title, author, className, percentage, chapter,
}) {
  const dispatch = useDispatch();
  const id = uuidv4();

  return (
    <>
      <div className={styles.LessonPanel}>
        <div className="Div1">
          <section className="Div1Sec1">
            <span className={styles.SchoolOf}>{category}</span>
            <span className={styles.Title}>{title}</span>
            <span className={styles.Author}>{author}</span>
          </section>
          <section className="Div1Sec2">
            <span className={styles.Comments}>Comment</span>
            <div className={styles.Line2} />
            <span className={styles.Remove}>
              <button
                type="button"
                onClick={() => {
                  dispatch(removeBooks(id));
                }}
              >
                Remove
              </button>
            </span>
            <div className={styles.Line2} />
            <span className={styles.Edit}>Edit</span>
          </section>
        </div>

        <div className="Div2">
          <div className="Div2Div1">
            <div className={className}>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
            </div>
            <div className="Div2Div1Div1">
              <span className={styles.PercentComplete}>
                {percentage}
                %
              </span>
              <span className={styles.Completed}>Completed</span>
            </div>
          </div>
          <div className={styles.Line1} />
          <div className="Div2Div2">
            <span className={styles.CurrentChapter}>Current Chapter</span>
            <span className={styles.CurrentLesson}>{chapter}</span>
            <span className={styles.UpdateProgress}>Update Progress</span>
          </div>
        </div>
      </div>
    </>
  );
}

Book.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  percentage: PropTypes.number,
  className: PropTypes.string,
  chapter: PropTypes.string,
};

Book.defaultProps = {
  category: '',
  percentage: 0,
  className: 'c100 p0 center',
  chapter: '',
};

export default Book;
