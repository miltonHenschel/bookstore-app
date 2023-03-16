/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBooks } from '../redux/features/books/booksSlice';
import AddBook from './AddBook';
import styles from '../styles/Form.module.css';

function Form() {
  const [input, setInput] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const newBook = { item_id: id, ...input };
    dispatch(addBooks(newBook));
    setInput({ title: '', author: '' });
  };

  return (
    <>
      <div className={styles.FormContainer}>
        <span className={styles.Title}>ADD NEW BOOK</span>
        <form className={styles.Form} onSubmit={handleSubmit}>
          <input
            className={styles.LessonPanel}
            type="text"
            name="title"
            value={input.title}
            onChange={handleChange}
            placeholder="Book title"
            required
          />
          <input
            className={styles.LessonPanel}
            type="text"
            name="author"
            value={input.author}
            onChange={handleChange}
            placeholder="Book author"
            required
          />
          <AddBook />
        </form>
      </div>
    </>
  );
}

export default Form;
