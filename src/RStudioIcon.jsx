import PropTypes from 'prop-types';

const RStudioIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#75AADB"
      d="M102 109.5H26.1c-3.9 0-7.1-3.2-7.1-7.1V25.6c0-3.9 3.2-7.1 7.1-7.1H102c3.9 0 7.1 3.2 7.1 7.1v76.8c0 3.9-3.2 7.1-7.1 7.1z"
    />
    <path
      fill="#fff"
      d="M47.3 50.9h14.8v5.9H47.3zm0 11.8h14.8v5.9H47.3zm0 11.8h14.8v5.9H47.3zm22.2-23.6h14.8v5.9H69.5zm0 11.8h14.8v5.9H69.5z"
    />
    <path
      fill="#fff"
      d="M34.7 50.9h5.9v29.5h-5.9z"
    />
  </svg>
);

RStudioIcon.propTypes = {
  className: PropTypes.string, // Validates that className is a string
};

export default RStudioIcon;