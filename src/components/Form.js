import styles from '../styles/Form.module.css';

function Form() {
  return (
    <>
      <div className={styles.FormContainer}>
        <span className={styles.Title}>ADD NEW BOOK</span>
        <form className={styles.Form}>
          <input
            className={styles.LessonPanelInput}
            type="text"
            name="bookTitle"
            placeholder="Book title"
          />
          <select className={styles.LessonPanelSelect} name="Category">
            <option className={styles.Title} value="" selected>
              Category
            </option>
          </select>
          <button type="submit" className={styles.Rectangle2}>
            ADD BOOK
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
