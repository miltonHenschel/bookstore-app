import PropTypes from 'prop-types';

function Button({ content }) {
  return <button type="button">{content}</button>;
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Button;
