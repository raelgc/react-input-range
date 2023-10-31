"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Label;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * @ignore
 * @param {Object} props
 * @param {InputRangeClassNames} props.classNames
 * @param {Function} props.formatLabel
 * @param {string} props.type
 */
function Label(props) {
  var labelValue = props.formatLabel ? props.formatLabel(props.children, props.type) : props.children;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: props.classNames["".concat(props.type, "Label")]
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: props.classNames.labelContainer
  }, labelValue));
}

/**
 * @type {Object}
 * @property {Function} children
 * @property {Function} classNames
 * @property {Function} formatLabel
 * @property {Function} type
 */
Label.propTypes = {
  children: _propTypes["default"].node.isRequired,
  classNames: _propTypes["default"].objectOf(_propTypes["default"].string).isRequired,
  formatLabel: _propTypes["default"].func,
  type: _propTypes["default"].string.isRequired
};
module.exports = exports.default;
//# sourceMappingURL=label.js.map