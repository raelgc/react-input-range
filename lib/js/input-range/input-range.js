"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _autobindDecorator = _interopRequireDefault(require("autobind-decorator"));
var valueTransformer = _interopRequireWildcard(require("./value-transformer"));
var _defaultClassNames = _interopRequireDefault(require("./default-class-names"));
var _label = _interopRequireDefault(require("./label"));
var _rangePropType = _interopRequireDefault(require("./range-prop-type"));
var _valuePropType = _interopRequireDefault(require("./value-prop-type"));
var _slider = _interopRequireDefault(require("./slider"));
var _track = _interopRequireDefault(require("./track"));
var _utils = require("../utils");
var _keyCodes = require("./key-codes");
var _desc, _value, _class;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
 * A React component that allows users to input numeric values within a range
 * by dragging its sliders.
 */
var InputRange = exports["default"] = (_class = /*#__PURE__*/function (_React$Component) {
  _inherits(InputRange, _React$Component);
  var _super = _createSuper(InputRange);
  /**
   * @param {Object} props
   * @param {boolean} [props.allowSameValues]
   * @param {string} [props.ariaLabelledby]
   * @param {string} [props.ariaControls]
   * @param {InputRangeClassNames} [props.classNames]
   * @param {boolean} [props.disabled = false]
   * @param {Function} [props.formatLabel]
   * @param {number|Range} [props.maxValue = 10]
   * @param {number|Range} [props.minValue = 0]
   * @param {string} [props.name]
   * @param {string} props.onChange
   * @param {Function} [props.onChangeComplete]
   * @param {Function} [props.onChangeStart]
   * @param {number} [props.step = 1]
   * @param {number|Range} props.value
   */
  function InputRange(props) {
    var _this;
    _classCallCheck(this, InputRange);
    _this = _super.call(this, props);

    /**
     * @private
     * @type {?number}
     */
    _this.startValue = null;

    /**
     * @private
     * @type {?Component}
     */
    _this.node = null;

    /**
     * @private
     * @type {?Component}
     */
    _this.trackNode = null;

    /**
     * @private
     * @type {bool}
     */
    _this.isSliderDragging = false;

    /**
     * @private
     * @type {?string}
     */
    _this.lastKeyMoved = null;
    return _this;
  }

  /**
   * @ignore
   * @override
   * @return {void}
   */
  _createClass(InputRange, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeDocumentMouseUpListener();
      this.removeDocumentTouchEndListener();
    }

    /**
     * Handle any "mousemove" event received by the slider
     * @private
     * @param {SyntheticEvent} event
     * @param {string} key
     * @return {void}
     */
  }, {
    key: "handleSliderDrag",
    value: function handleSliderDrag(event, key) {
      var _this2 = this;
      if (this.props.disabled) {
        return;
      }
      var position = valueTransformer.getPositionFromEvent(event, this.getTrackClientRect());
      this.isSliderDragging = true;
      requestAnimationFrame(function () {
        return _this2.updatePosition(key, position);
      });
    }

    /**
     * Handle any "mousemove" event received by the track
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */
  }, {
    key: "handleTrackDrag",
    value: function handleTrackDrag(event, prevEvent) {
      if (this.props.disabled || !this.props.draggableTrack || this.isSliderDragging) {
        return;
      }
      var _this$props = this.props,
        maxValue = _this$props.maxValue,
        minValue = _this$props.minValue,
        _this$props$value = _this$props.value,
        max = _this$props$value.max,
        min = _this$props$value.min;
      var position = valueTransformer.getPositionFromEvent(event, this.getTrackClientRect());
      var value = valueTransformer.getValueFromPosition(position, minValue, maxValue, this.getTrackClientRect());
      var stepValue = valueTransformer.getStepValueFromValue(value, this.props.step);
      var prevPosition = valueTransformer.getPositionFromEvent(prevEvent, this.getTrackClientRect());
      var prevValue = valueTransformer.getValueFromPosition(prevPosition, minValue, maxValue, this.getTrackClientRect());
      var prevStepValue = valueTransformer.getStepValueFromValue(prevValue, this.props.step);
      var offset = prevStepValue - stepValue;
      var transformedValues = {
        min: min - offset,
        max: max - offset
      };
      this.updateValues(transformedValues);
    }

    /**
     * Handle any "keydown" event received by the slider
     * @private
     * @param {SyntheticEvent} event
     * @param {string} key
     * @return {void}
     */
  }, {
    key: "handleSliderKeyDown",
    value: function handleSliderKeyDown(event, key) {
      if (this.props.disabled) {
        return;
      }
      switch (event.keyCode) {
        case _keyCodes.LEFT_ARROW:
        case _keyCodes.DOWN_ARROW:
          event.preventDefault();
          this.decrementValue(key);
          break;
        case _keyCodes.RIGHT_ARROW:
        case _keyCodes.UP_ARROW:
          event.preventDefault();
          this.incrementValue(key);
          break;
        default:
          break;
      }
    }

    /**
     * Handle any "mousedown" event received by the track
     * @private
     * @param {SyntheticEvent} event
     * @param {Point} position
     * @return {void}
     */
  }, {
    key: "handleTrackMouseDown",
    value: function handleTrackMouseDown(event, position) {
      if (this.props.disabled) {
        return;
      }
      var _this$props2 = this.props,
        maxValue = _this$props2.maxValue,
        minValue = _this$props2.minValue,
        _this$props2$value = _this$props2.value,
        max = _this$props2$value.max,
        min = _this$props2$value.min;
      event.preventDefault();
      var value = valueTransformer.getValueFromPosition(position, minValue, maxValue, this.getTrackClientRect());
      var stepValue = valueTransformer.getStepValueFromValue(value, this.props.step);
      if (!this.props.draggableTrack || stepValue > max || stepValue < min) {
        this.updatePosition(this.getKeyByPosition(position), position);
      }
    }

    /**
     * Handle the start of any mouse/touch event
     * @private
     * @return {void}
     */
  }, {
    key: "handleInteractionStart",
    value: function handleInteractionStart() {
      if (this.props.onChangeStart) {
        this.props.onChangeStart(this.props.value);
      }
      if (this.props.onChangeComplete && !(0, _utils.isDefined)(this.startValue)) {
        this.startValue = this.props.value;
      }
    }

    /**
     * Handle the end of any mouse/touch event
     * @private
     * @return {void}
     */
  }, {
    key: "handleInteractionEnd",
    value: function handleInteractionEnd() {
      if (this.isSliderDragging) {
        this.isSliderDragging = false;
      }
      if (!this.props.onChangeComplete || !(0, _utils.isDefined)(this.startValue)) {
        return;
      }
      if (this.startValue !== this.props.value) {
        this.props.onChangeComplete(this.props.value);
      }
      this.startValue = null;
    }

    /**
     * Handle any "keydown" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      this.handleInteractionStart(event);
    }

    /**
     * Handle any "keyup" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */
  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(event) {
      this.handleInteractionEnd(event);
    }

    /**
     * Handle any "mousedown" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(event) {
      this.handleInteractionStart(event);
      this.addDocumentMouseUpListener();
    }

    /**
     * Handle any "mouseup" event received by the component
     * @private
     * @param {SyntheticEvent} event
     */
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(event) {
      this.handleInteractionEnd(event);
      this.removeDocumentMouseUpListener();
    }

    /**
     * Handle any "touchstart" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(event) {
      this.handleInteractionStart(event);
      this.addDocumentTouchEndListener();
    }

    /**
     * Handle any "touchend" event received by the component
     * @private
     * @param {SyntheticEvent} event
     */
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(event) {
      this.handleInteractionEnd(event);
      this.removeDocumentTouchEndListener();
    }

    /**
     * Return the CSS class name of the component
     * @private
     * @return {string}
     */
  }, {
    key: "getComponentClassName",
    value: function getComponentClassName() {
      if (!this.props.disabled) {
        return this.props.classNames.inputRange;
      }
      return this.props.classNames.disabledInputRange;
    }

    /**
     * Return the bounding rect of the track
     * @private
     * @return {ClientRect}
     */
  }, {
    key: "getTrackClientRect",
    value: function getTrackClientRect() {
      return this.trackNode.getClientRect();
    }

    /**
     * Return the slider key closest to a point
     * @private
     * @param {Point} position
     * @return {string}
     */
  }, {
    key: "getKeyByPosition",
    value: function getKeyByPosition(position) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var positions = valueTransformer.getPositionsFromValues(values, this.props.minValue, this.props.maxValue, this.getTrackClientRect());
      if (this.isMultiValue()) {
        var distanceToMin = (0, _utils.distanceTo)(position, positions.min);
        var distanceToMax = (0, _utils.distanceTo)(position, positions.max);
        if (distanceToMin < distanceToMax) {
          return 'min';
        }
      }
      return 'max';
    }

    /**
     * Return all the slider keys
     * @private
     * @return {string[]}
     */
  }, {
    key: "getKeys",
    value: function getKeys() {
      if (this.isMultiValue()) {
        return ['min', 'max'];
      }
      return ['max'];
    }

    /**
     * Return true if the difference between the new and the current value is
     * greater or equal to the step amount of the component
     * @private
     * @param {Range} values
     * @return {boolean}
     */
  }, {
    key: "hasStepDifference",
    value: function hasStepDifference(values) {
      var currentValues = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      return (0, _utils.length)(values.min, currentValues.min) >= this.props.step || (0, _utils.length)(values.max, currentValues.max) >= this.props.step;
    }

    /**
     * Return true if the component accepts a min and max value
     * @private
     * @return {boolean}
     */
  }, {
    key: "isMultiValue",
    value: function isMultiValue() {
      return (0, _utils.isObject)(this.props.value);
    }

    /**
     * Return true if the range is within the max and min value of the component
     * @private
     * @param {Range} values
     * @return {boolean}
     */
  }, {
    key: "isWithinRange",
    value: function isWithinRange(values) {
      if (this.isMultiValue()) {
        return values.min >= this.props.minValue && values.max <= this.props.maxValue && this.props.allowSameValues ? values.min <= values.max : values.min < values.max;
      }
      return values.max >= this.props.minValue && values.max <= this.props.maxValue;
    }

    /**
     * Return true if the new value should trigger a render
     * @private
     * @param {Range} values
     * @return {boolean}
     */
  }, {
    key: "shouldUpdate",
    value: function shouldUpdate(values) {
      return this.isWithinRange(values) && this.hasStepDifference(values);
    }

    /**
     * Update the position of a slider
     * @private
     * @param {string} key
     * @param {Point} position
     * @return {void}
     */
  }, {
    key: "updatePosition",
    value: function updatePosition(key, position) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var positions = valueTransformer.getPositionsFromValues(values, this.props.minValue, this.props.maxValue, this.getTrackClientRect());
      positions[key] = position;
      this.lastKeyMoved = key;
      this.updatePositions(positions);
    }

    /**
     * Update the positions of multiple sliders
     * @private
     * @param {Object} positions
     * @param {Point} positions.min
     * @param {Point} positions.max
     * @return {void}
     */
  }, {
    key: "updatePositions",
    value: function updatePositions(positions) {
      var values = {
        min: valueTransformer.getValueFromPosition(positions.min, this.props.minValue, this.props.maxValue, this.getTrackClientRect()),
        max: valueTransformer.getValueFromPosition(positions.max, this.props.minValue, this.props.maxValue, this.getTrackClientRect())
      };
      var transformedValues = {
        min: valueTransformer.getStepValueFromValue(values.min, this.props.step),
        max: valueTransformer.getStepValueFromValue(values.max, this.props.step)
      };
      this.updateValues(transformedValues);
    }

    /**
     * Update the value of a slider
     * @private
     * @param {string} key
     * @param {number} value
     * @return {void}
     */
  }, {
    key: "updateValue",
    value: function updateValue(key, value) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      values[key] = value;
      this.updateValues(values);
    }

    /**
     * Update the values of multiple sliders
     * @private
     * @param {Range|number} values
     * @return {void}
     */
  }, {
    key: "updateValues",
    value: function updateValues(values) {
      if (!this.shouldUpdate(values)) {
        return;
      }
      this.props.onChange(this.isMultiValue() ? values : values.max);
    }

    /**
     * Increment the value of a slider by key name
     * @private
     * @param {string} key
     * @return {void}
     */
  }, {
    key: "incrementValue",
    value: function incrementValue(key) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var value = values[key] + this.props.step;
      this.updateValue(key, value);
    }

    /**
     * Decrement the value of a slider by key name
     * @private
     * @param {string} key
     * @return {void}
     */
  }, {
    key: "decrementValue",
    value: function decrementValue(key) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var value = values[key] - this.props.step;
      this.updateValue(key, value);
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
     * Stop listening to mouseup event
     * @private
     * @return {void}
     */
  }, {
    key: "removeDocumentMouseUpListener",
    value: function removeDocumentMouseUpListener() {
      this.node.ownerDocument.removeEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * Stop listening to touchend event
     * @private
     * @return {void}
     */
  }, {
    key: "removeDocumentTouchEndListener",
    value: function removeDocumentTouchEndListener() {
      this.node.ownerDocument.removeEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * Return JSX of sliders
     * @private
     * @return {JSX.Element}
     */
  }, {
    key: "renderSliders",
    value: function renderSliders() {
      var _this3 = this;
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var percentages = valueTransformer.getPercentagesFromValues(values, this.props.minValue, this.props.maxValue);
      var keys = this.props.allowSameValues && this.lastKeyMoved === 'min' ? this.getKeys().reverse() : this.getKeys();
      return keys.map(function (key) {
        var value = values[key];
        var percentage = percentages[key];
        var _this3$props = _this3.props,
          maxValue = _this3$props.maxValue,
          minValue = _this3$props.minValue;
        if (key === 'min') {
          maxValue = values.max;
        } else {
          minValue = values.min;
        }
        var slider = /*#__PURE__*/_react["default"].createElement(_slider["default"], {
          ariaLabelledby: _this3.props.ariaLabelledby,
          ariaControls: _this3.props.ariaControls,
          classNames: _this3.props.classNames,
          formatLabel: _this3.props.formatLabel,
          key: key,
          maxValue: maxValue,
          minValue: minValue,
          onSliderDrag: _this3.handleSliderDrag,
          onSliderKeyDown: _this3.handleSliderKeyDown,
          percentage: percentage,
          type: key,
          value: value
        });
        return slider;
      });
    }

    /**
     * Return JSX of hidden inputs
     * @private
     * @return {JSX.Element}
     */
  }, {
    key: "renderHiddenInputs",
    value: function renderHiddenInputs() {
      var _this4 = this;
      if (!this.props.name) {
        return [];
      }
      var isMultiValue = this.isMultiValue();
      var values = valueTransformer.getValueFromProps(this.props, isMultiValue);
      return this.getKeys().map(function (key) {
        var value = values[key];
        var name = isMultiValue ? "".concat(_this4.props.name).concat((0, _utils.captialize)(key)) : _this4.props.name;
        return /*#__PURE__*/_react["default"].createElement("input", {
          key: key,
          type: "hidden",
          name: name,
          value: value
        });
      });
    }

    /**
     * @ignore
     * @override
     * @return {JSX.Element}
     */
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      var componentClassName = this.getComponentClassName();
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var percentages = valueTransformer.getPercentagesFromValues(values, this.props.minValue, this.props.maxValue);
      return /*#__PURE__*/_react["default"].createElement("div", {
        "aria-disabled": this.props.disabled,
        ref: function ref(node) {
          _this5.node = node;
        },
        className: componentClassName,
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp,
        onMouseDown: this.handleMouseDown,
        onTouchStart: this.handleTouchStart
      }, /*#__PURE__*/_react["default"].createElement(_label["default"], {
        classNames: this.props.classNames,
        formatLabel: this.props.formatLabel,
        type: "min"
      }, this.props.minValue), /*#__PURE__*/_react["default"].createElement(_track["default"], {
        classNames: this.props.classNames,
        draggableTrack: this.props.draggableTrack,
        ref: function ref(trackNode) {
          _this5.trackNode = trackNode;
        },
        percentages: percentages,
        onTrackDrag: this.handleTrackDrag,
        onTrackMouseDown: this.handleTrackMouseDown
      }, this.renderSliders()), /*#__PURE__*/_react["default"].createElement(_label["default"], {
        classNames: this.props.classNames,
        formatLabel: this.props.formatLabel,
        type: "max"
      }, this.props.maxValue), this.renderHiddenInputs());
    }
  }]);
  return InputRange;
}(_react["default"].Component), (_applyDecoratedDescriptor(_class.prototype, "handleSliderDrag", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleSliderDrag"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleTrackDrag", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleTrackDrag"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleSliderKeyDown", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleSliderKeyDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleTrackMouseDown", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleTrackMouseDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleInteractionStart", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleInteractionStart"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleInteractionEnd", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleInteractionEnd"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleKeyDown", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleKeyDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleKeyUp", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleKeyUp"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMouseDown", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMouseUp", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseUp"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleTouchStart", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleTouchStart"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleTouchEnd", [_autobindDecorator["default"]], Object.getOwnPropertyDescriptor(_class.prototype, "handleTouchEnd"), _class.prototype)), _class);
InputRange.propTypes = {
  allowSameValues: _propTypes["default"].bool,
  ariaLabelledby: _propTypes["default"].string,
  ariaControls: _propTypes["default"].string,
  classNames: _propTypes["default"].objectOf(_propTypes["default"].string),
  disabled: _propTypes["default"].bool,
  draggableTrack: _propTypes["default"].bool,
  formatLabel: _propTypes["default"].func,
  maxValue: _rangePropType["default"],
  minValue: _rangePropType["default"],
  name: _propTypes["default"].string,
  onChangeStart: _propTypes["default"].func,
  onChange: _propTypes["default"].func.isRequired,
  onChangeComplete: _propTypes["default"].func,
  step: _propTypes["default"].number,
  value: _valuePropType["default"]
};
InputRange.defaultProps = {
  allowSameValues: false,
  classNames: _defaultClassNames["default"],
  disabled: false,
  maxValue: 10,
  minValue: 0,
  step: 1
};
module.exports = exports.default;
//# sourceMappingURL=input-range.js.map