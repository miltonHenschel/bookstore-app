/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBooks } from '../redux/features/books/booksSlice';
import styles from '../styles/Form.module.css';

function Form() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    bookTitle: '',
    bookAuthor: '',
  });

  const handleChange = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
    // setInput({
    //   ...input,
    //   [e.target.name]: e.target.value,
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const newBook = { item_id: id, ...input };
    dispatch(addBooks(newBook));
    setInput({ bookTitle: '', bookAuthor: '' });
  };

  return (
    <>
      <div className={styles.FormContainer}>
        <span className={styles.Title}>ADD NEW BOOK</span>
        <form className={styles.Form} onSubmit={handleSubmit}>
          <input
            className={styles.LessonPanel}
            type="text"
            name="bookTitle"
            value={input.bookTitle}
            onChange={handleChange}
            placeholder="Book title"
            required
          />
          <input
            className={styles.LessonPanel}
            type="text"
            name="bookAuthor"
            value={input.bookAuthor}
            onChange={handleChange}
            placeholder="Book author"
            required
          />
          <button type="submit" className={styles.Rectangle2}>
            ADD BOOK
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
