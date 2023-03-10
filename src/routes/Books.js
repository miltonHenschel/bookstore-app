import Book from '../components/Book';
import Form from '../components/Form';

import styles from '../styles/Books.module.css';

function Books() {
  return (
    <>
      <div className={styles.BookContainer}>
        <Book
          schoolOf="Action"
          title="The Hunger Games"
          author="Suzanne Collins"
          className="c100 p64 center"
          percentage="64"
          chapter="Chapter 17"
        />
        <Book
          schoolOf="Science Fiction"
          title="Dune"
          author="Frank Herbert"
          percentage="8"
          className="c100 p8 center"
          chapter='Chapter 3: "A Lesson Learned"'
        />
        <Book
          schoolOf="Economy"
          title="Capital in the Twenty-First Century"
          author="Suzanne Collins"
          className="c100 p0 center"
          chapter="Introduction"
        />
      </div>
      <div className={styles.Line} />
      <Form />
    </>
  );
}

export default Books;
