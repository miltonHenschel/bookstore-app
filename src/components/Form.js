import styles from '../styles/Form.module.css';

function Form() {
  return (
    <>
      <div className={styles.FormContainer}>
        <span className={styles.Title}>ADD NEW BOOK</span>
        <form className={styles.Form}>
          <input
            className={styles.LessonPanel}
            type="text"
            name="bookTitle"
            placeholder="Book title"
          />
          <input
            className={styles.LessonPanel}
            type="text"
            name="bookAuthor"
            placeholder="Book author"
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
