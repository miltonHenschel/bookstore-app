import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

import styles from '../styles/Books.module.css';

function Books() {
  const books = useSelector((state) => state.books);

  if (books.length === 0) {
    return (
      <>
        <div className={styles.BookContainer}>
          <h2 className={styles.h2}>Empty library...</h2>
        </div>
        <div className={styles.Line} />
        <Form />
      </>
    );
  }

  return (
    <>
      <div className={styles.BookContainer}>
        {books.booksItem.map((book) => (
          <Book
            key={book.itemId}
            id={book.itemId}
            category={book.category}
            title={book.title}
            author={book.author}
            className={book.className}
            percentage={book.percentage}
            chapter={book.chapter}
          />
        ))}
      </div>
      <div className={styles.Line} />
      <Form />
    </>
  );
}

export default Books;
