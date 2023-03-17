import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { removeBooks } from '../redux/features/books/booksSlice';

function RemoveBook({ id }) {
  const dispatch = useDispatch();

  const handleRemoveBooks = () => {
    dispatch(removeBooks(id));
  };

  return (
    <button type="button" onClick={handleRemoveBooks}>
      Remove
    </button>
  );
}

RemoveBook.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RemoveBook;
