import PropTypes from 'prop-types';
import styles from '../styles/Input.styles.js';

const Input = ({ label, hideLabel, hasError, attributes }) => {
  return (
    <div className={`input ${hasError ? 'input--error' : ''}`}>
      <label className={`input__label ${hideLabel ? 'input__label--hidden' : ''}`} htmlFor={label.replace(/ /g, '')} dangerouslySetInnerHTML={{ __html: label }} />
      <input className="input__input" id={label.replace(/ /g, '')} aria-invalid={hasError ? true : null} aria-describedby={hasError ? `${label.replace(/ /g, '')}Error` : null} {...attributes} />

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  hideLabel: PropTypes.bool,
  hasError: PropTypes.bool,
  attributes: PropTypes.object
};

export default Input;
