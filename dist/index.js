'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MySimpleButton = function MySimpleButton(_ref) {
    var children = _ref.children,
        onClick = _ref.onClick;
    return _react2.default.createElement(
        'button',
        { onClick: onClick },
        children
    );
};

MySimpleButton.propTypes = {
    children: _react2.default.PropTypes.string.isRequired,
    onClick: _react2.default.PropTypes.func
};

exports.default = MySimpleButton;
