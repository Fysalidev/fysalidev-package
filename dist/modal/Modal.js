"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./styles.css");
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
/**
 * Modal
 * @param { object } props
 * @param {boolean} isShowing from usModal
 * @param {function} hide from useModal
 * @param {string} title
 * @returns {JSX.Element} Modal
 */

var Modal = function Modal(_ref) {
  var isShowing = _ref.isShowing,
    hide = _ref.hide,
    title = _ref.title;
  return isShowing ? /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h3", null, title), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "modal-close-button",
    onClick: hide
  }, /*#__PURE__*/_react.default.createElement("span", null, "\xD7"))))))), document.body) : null;
};
var _default = Modal;
exports.default = _default;