import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBooksToAPI } from '../redux/features/books/booksSlice';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const itemId = uuidv4();
    const newBook = { itemId, ...input };
    // dispatch(addBooks(newBook));
    await dispatch(addBooksToAPI(newBook));
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
