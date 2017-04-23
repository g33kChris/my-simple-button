import React from 'react';
import styles from './MySimpleButton.css';

const MySimpleButton = ({ children, onClick }) => (
    <button className={styles.root} onClick={onClick}>
        {children}
    </button>
);

MySimpleButton.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default MySimpleButton;