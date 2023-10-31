"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _autobindDecorator = _interopRequireDefault(require("autobind-decorator"));
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
var Track = exports["default"] = (_class = /*#__PURE__*/function (_React$Component) {
  _inherits(Track, _React$Component);
  var _super = _createSuper(Track);
  /**
   * @override
   * @return {Object}
   * @property {Function} children
   * @property {Function} classNames
   * @property {Boolean} draggableTrack
   * @property {Function} onTrackDrag
   * @property {Function} onTrackMouseDown
   * @property {Function} percentages
   */

  /**
   * @param {Object} props
   * @param {InputRangeClassNames} props.classNames
   * @param {Boolean} props.draggableTrack
   * @param {Function} props.onTrackDrag
   * @param {Function} props.onTrackMouseDown
   * @param {number} props.percentages
   */
  function Track(props) {
    var _this;
    _classCallCheck(this, Track);
    _this = _super.call(this, props);

    /**
     * @private
     * @type {?Component}
     */
    _this.node = null;
    _this.trackDragEvent = null;
    return _this;
  }

  /**
   * @private
   * @param {SyntheticEvent} event
   * @return {void}
   */
  _createClass(Track, [{
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      if (!this.props.draggableTrack) {
        return;
      }
      if (this.trackDragEvent !== null) {
        this.props.onTrackDrag(event, this.trackDragEvent);
      }
      this.trackDragEvent = event;
    }

    /**
     * @private
     * @return {void}
     */
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp() {
      if (!this.props.draggableTrack) {
        return;
      }
      this.removeDocumentMouseMoveListener();
      this.removeDocumentMouseUpListener();
      this.trackDragEvent = null;
    }

    /**
     * @private
     * @param {SyntheticEvent} event - User event
     */
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(event) {
      var clientX = event.touches ? event.touches[0].clientX : event.clientX;
      var trackClientRect = this.getClientRect();
      var position = {
        x: clientX - trackClientRect.left,
        y: 0
      };
      this.props.onTrackMouseDown(event, position);
      if (this.props.draggableTrack) {
        this.addDocumentMouseMoveListener();
        this.addDocumentMouseUpListener();
      }
    }

    /**
     * @private
     * @param {SyntheticEvent} event - User event
     */
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(event) {
      event.preventDefault();
      this.handleMouseDown(event);
    }

    /**
     * @private
     * @return {ClientRect}
     */
  }, {
    key: "getClientRect",
    value: function getClientRect() {
      return this.node.getBoundingClientRect();
    }

    /**
     * @private
     * @return {Object} CSS styles
     */
  }, {
    key: "getActiveTrackStyle",
    value: function getActiveTrackStyle() {
      var width = "".concat((this.props.percentages.max - this.props.percentages.min) * 100, "%");
      var left = "".concat(this.props.percentages.min * 100, "%");
      return {
        left: left,
        width: width
      };
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
     * @override
     * @return {JSX.Element}
     */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var activeTrackStyle = this.getActiveTrackStyle();
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.classNames.track,
        onMouseDown: this.handleMouseDown,
        onTouchStart: this.handleTouchStart,
        ref: function ref(node) {
          _this2.node = node;
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: activeTrackStyle,
        className: this.props.classNames.activeTrack
      }), this.props.children);
    }
  }]);
  return Track;
}(_react["default"].Component), (_applyDecoratedDescriptor(_class.prototype, "handleMouseMove", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseMove"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMouseUp", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseUp"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMouseDown", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleTouchStart", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleTouchStart"), _class.prototype)), _class);
Track.propTypes = {
  children: _propTypes["default"].node.isRequired,
  classNames: _propTypes["default"].objectOf(_propTypes["default"].string).isRequired,
  draggableTrack: _propTypes["default"].bool,
  onTrackDrag: _propTypes["default"].func,
  onTrackMouseDown: _propTypes["default"].func.isRequired,
  percentages: _propTypes["default"].objectOf(_propTypes["default"].number).isRequired
};
module.exports = exports.default;
//# sourceMappingURL=track.js.map