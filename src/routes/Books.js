import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchBooksFromAPI } from '../redux/features/books/booksSlice';
import Book from '../components/Book';
import Form from '../components/Form';

import styles from '../styles/Books.module.css';

function Books() {
  const books = useSelector((state) => state.books);
  const isLoading = useSelector((state) => state.books.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksFromAPI());
  }, [dispatch]);

  return (
    <>
      {books.booksItem.length === 0 && (
        <div className={styles.BookContainer}>
          {isLoading && <h2 className={styles.h2}>Loading...</h2>}
          {!isLoading && <h2 className={styles.h2}>Empty library...</h2>}
        </div>
      )}
      <div className={styles.BookContainer}>
        {books.booksItem.map((book) => (
          <Book
            key={book.id}
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
