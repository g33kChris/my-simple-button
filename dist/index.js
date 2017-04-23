'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MySimpleButton = require('./MySimpleButton.css');

var _MySimpleButton2 = _interopRequireDefault(_MySimpleButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MySimpleButton = function MySimpleButton(_ref) {
    var children = _ref.children,
        onClick = _ref.onClick;
    return _react2.default.createElement(
        'button',
        { className: _MySimpleButton2.default.root, onClick: onClick },
        children
    );
};

MySimpleButton.propTypes = {
    children: _react2.default.PropTypes.string.isRequired,
    onClick: _react2.default.PropTypes.func
};

exports.default = MySimpleButton;
