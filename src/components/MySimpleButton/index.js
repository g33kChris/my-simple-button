import React from 'react';

const MySimpleButton = ({ children, onClick }) => (
    <button onClick={onClick}>
        {children}
    </button>
);

MySimpleButton.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default MySimpleButton;