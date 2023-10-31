"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _autobindDecorator = _interopRequireDefault(require("autobind-decorator"));
var _label = _interopRequireDefault(require("./label"));
var _desc, _value, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;
  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }
  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);
  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }
  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }
  return desc;
}
/**
 * @ignore
 */
var Slider = exports["default"] = (_class = /*#__PURE__*/function (_React$Component) {
  _inherits(Slider, _React$Component);
  var _super = _createSuper(Slider);
  /**
   * Accepted propTypes of Slider
   * @override
   * @return {Object}
   * @property {Function} ariaLabelledby
   * @property {Function} ariaControls
   * @property {Function} className
   * @property {Function} formatLabel
   * @property {Function} maxValue
   * @property {Function} minValue
   * @property {Function} onSliderDrag
   * @property {Function} onSliderKeyDown
   * @property {Function} percentage
   * @property {Function} type
   * @property {Function} value
   */

  /**
   * @param {Object} props
   * @param {string} [props.ariaLabelledby]
   * @param {string} [props.ariaControls]
   * @param {InputRangeClassNames} props.classNames
   * @param {Function} [props.formatLabel]
   * @param {number} [props.maxValue]
   * @param {number} [props.minValue]
   * @param {Function} props.onSliderKeyDown
   * @param {Function} props.onSliderDrag
   * @param {number} props.percentage
   * @param {number} props.type
   * @param {number} props.value
   */
  function Slider(props) {
    var _this;
    _classCallCheck(this, Slider);
    _this = _super.call(this, props);

    /**
     * @private
     * @type {?Component}
     */
    _this.node = null;
    return _this;
  }

  /**
   * @ignore
   * @override
   * @return {void}
   */
  _createClass(Slider, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeDocumentMouseMoveListener();
      this.removeDocumentMouseUpListener();
      this.removeDocumentTouchEndListener();
      this.removeDocumentTouchMoveListener();
    }

    /**
     * @private
     * @return {void}
     */
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown() {
      this.addDocumentMouseMoveListener();
      this.addDocumentMouseUpListener();
    }

    /**
     * @private
     * @return {void}
     */
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp() {
      this.removeDocumentMouseMoveListener();
      this.removeDocumentMouseUpListener();
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      this.props.onSliderDrag(event, this.props.type);
    }

    /**
     * @private
     * @return {void}
     */
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart() {
      this.addDocumentTouchEndListener();
      this.addDocumentTouchMoveListener();
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(event) {
      this.props.onSliderDrag(event, this.props.type);
    }

    /**
     * @private
     * @return {void}
     */
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd() {
      this.removeDocumentTouchMoveListener();
      this.removeDocumentTouchEndListener();
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      this.props.onSliderKeyDown(event, this.props.type);
    }

    /**
     * @private
     * @return {Object}
     */
  }, {
    key: "getStyle",
    value: function getStyle() {
      var perc = (this.props.percentage || 0) * 100;
      var style = {
        position: 'absolute',
        left: "".concat(perc, "%")
      };
      return style;
    }

    /**
     * Listen to mousemove event
     * @private
     * @return {void}
     */
  }, {
    key: "addDocumentMouseMoveListener",
    value: function addDocumentMouseMoveListener() {
      this.removeDocumentMouseMoveListener();
      this.node.ownerDocument.addEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * Listen to mouseup event
     * @private
     * @return {void}
     */
  }, {
    key: "addDocumentMouseUpListener",
    value: function addDocumentMouseUpListener() {
      this.removeDocumentMouseUpListener();
      this.node.ownerDocument.addEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * Listen to touchmove event
     * @private
     * @return {void}
     */
  }, {
    key: "addDocumentTouchMoveListener",
    value: function addDocumentTouchMoveListener() {
      this.removeDocumentTouchMoveListener();
      this.node.ownerDocument.addEventListener('touchmove', this.handleTouchMove);
    }

    /**
     * Listen to touchend event
     * @private
     * @return {void}
     */
  }, {
    key: "addDocumentTouchEndListener",
    value: function addDocumentTouchEndListener() {
      this.removeDocumentTouchEndListener();
      this.node.ownerDocument.addEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * @private
     * @return {void}
     */
  }, {
    key: "removeDocumentMouseMoveListener",
    value: function removeDocumentMouseMoveListener() {
      this.node.ownerDocument.removeEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * @private
     * @return {void}
     */
  }, {
    key: "removeDocumentMouseUpListener",
    value: function removeDocumentMouseUpListener() {
      this.node.ownerDocument.removeEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * @private
     * @return {void}
     */
  }, {
    key: "removeDocumentTouchMoveListener",
    value: function removeDocumentTouchMoveListener() {
      this.node.ownerDocument.removeEventListener('touchmove', this.handleTouchMove);
    }

    /**
     * @private
     * @return {void}
     */
  }, {
    key: "removeDocumentTouchEndListener",
    value: function removeDocumentTouchEndListener() {
      this.node.ownerDocument.removeEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * @override
     * @return {JSX.Element}
     */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var style = this.getStyle();
      return /*#__PURE__*/_react["default"].createElement("span", {
        className: this.props.classNames.sliderContainer,
        ref: function ref(node) {
          _this2.node = node;
        },
        style: style
      }, /*#__PURE__*/_react["default"].createElement(_label["default"], {
        classNames: this.props.classNames,
        formatLabel: this.props.formatLabel,
        type: "value"
      }, this.props.value), /*#__PURE__*/_react["default"].createElement("div", {
        "aria-labelledby": this.props.ariaLabelledby,
        "aria-controls": this.props.ariaControls,
        "aria-valuemax": this.props.maxValue,
        "aria-valuemin": this.props.minValue,
        "aria-valuenow": this.props.value,
        className: this.props.classNames.slider,
        draggable: "false",
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown,
        onTouchStart: this.handleTouchStart,
        role: "slider",
        tabIndex: "0"
      }));
    }
  }]);
  return Slider;
}(_react["default"].Component), (_applyDecoratedDescriptor(_class.prototype, "handleMouseDown", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMouseUp", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseUp"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMouseMove", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseMove"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleTouchStart", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleTouchStart"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleTouchMove", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleTouchMove"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleTouchEnd", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleTouchEnd"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleKeyDown", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleKeyDown"), _class.prototype)), _class);
Slider.propTypes = {
  ariaLabelledby: _propTypes["default"].string,
  ariaControls: _propTypes["default"].string,
  classNames: _propTypes["default"].objectOf(_propTypes["default"].string).isRequired,
  formatLabel: _propTypes["default"].func,
  maxValue: _propTypes["default"].number,
  minValue: _propTypes["default"].number,
  onSliderDrag: _propTypes["default"].func.isRequired,
  onSliderKeyDown: _propTypes["default"].func.isRequired,
  percentage: _propTypes["default"].number.isRequired,
  type: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].number.isRequired
};
module.exports = exports.default;
//# sourceMappingURL=slider.js.map