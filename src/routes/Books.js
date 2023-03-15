/* eslint-disable max-len */
import { useState } from 'react';
// import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

import styles from '../styles/Books.module.css';

function Books() {
  const [books] = useState([
    {
      item_id: 'item1',
      category: 'Action',
      title: 'The Great Gatsby',
      author: 'John Smith',
      // className: 'c100 p64 center',
      // percentage: 64,
      // chapter: 'Chapter 17',
    },
    {
      item_id: 'item2',
      category: 'Fiction',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      // className: 'c100 p8 center',
      // percentage: 8,
      // chapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      item_id: 'item3',
      category: 'Nonfiction',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      // className: 'c100 p0 center',
      // percentage: 0,
      // chapter: 'Introduction',
    },
  ]);

  // const books = useSelector((state) => state.books);

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
        {/* <Book
          schoolOf="Action"
          title="The Hunger Games"
          author="Suzanne Collins"
          className="c100 p64 center"
          percentage={64}
          chapter="Chapter 17"
        />
        <Book
          schoolOf="Science Fiction"
          title="Dune"
          author="Frank Herbert"
          percentage={8}
          className="c100 p8 center"
          chapter='Chapter 3: "A Lesson Learned"'
        />
        <Book
          schoolOf="Economy"
          title="Capital in the Twenty-First Century"
          author="Suzanne Collins"
          className="c100 p0 center"
          chapter="Introduction"
        /> */}
        {books.map((book) => (
          <Book
            key={book.id}
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
