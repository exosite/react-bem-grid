'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactPureRenderComponent = require('react-pure-render/component');

var _reactPureRenderComponent2 = _interopRequireDefault(_reactPureRenderComponent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPropTypes = require('react-prop-types');

var Row = (function (_PureComponent) {
  _inherits(Row, _PureComponent);

  function Row() {
    _classCallCheck(this, Row);

    _get(Object.getPrototypeOf(Row.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      var ComponentClass = this.props.componentClass;

      var classes = (0, _classnames2['default'])({
        'grid__row': true,
        'grid__row--reverse': this.props.reverse,

        'grid__row--xs-start': this.props.xsStart,
        'grid__row--sm-start': this.props.smStart,
        'grid__row--md-start': this.props.mdStart,
        'grid__row--lg-start': this.props.lgStart,

        'grid__row--xs-center': this.props.xsCenter,
        'grid__row--sm-center': this.props.smCenter,
        'grid__row--md-center': this.props.mdCenter,
        'grid__row--lg-center': this.props.lgCenter,

        'grid__row--xs-end': this.props.xsEnd,
        'grid__row--sm-end': this.props.smEnd,
        'grid__row--md-end': this.props.mdEnd,
        'grid__row--lg-end': this.props.lgEnd,

        'grid__row--xs-top': this.props.xsTop,
        'grid__row--sm-top': this.props.smTop,
        'grid__row--md-top': this.props.mdTop,
        'grid__row--lg-top': this.props.lgTop,

        'grid__row--xs-middle': this.props.xsMiddle,
        'grid__row--sm-middle': this.props.smMiddle,
        'grid__row--md-middle': this.props.mdMiddle,
        'grid__row--lg-middle': this.props.lgMiddle,

        'grid__row--xs-bottom': this.props.xsBottom,
        'grid__row--sm-bottom': this.props.smBottom,
        'grid__row--md-bottom': this.props.mdBottom,
        'grid__row--lg-bottom': this.props.lgBottom,

        'grid__row--xs-around': this.props.xsAround,
        'grid__row--sm-around': this.props.smAround,
        'grid__row--md-around': this.props.mdAround,
        'grid__row--lg-around': this.props.lgAround,

        'grid__row--xs-between': this.props.xsBetween,
        'grid__row--sm-between': this.props.smBetween,
        'grid__row--md-between': this.props.mdBetween,
        'grid__row--lg-between': this.props.lgBetween
      }, this.props.className);

      return _react2['default'].createElement(
        ComponentClass,
        { className: classes, style: this.props.style },
        this.props.children
      );
    }
  }]);

  return Row;
})(_reactPureRenderComponent2['default']);

Row.propTypes = {
  reverse: _propTypes2['default'].bool,
  className: _propTypes2['default'].string,
  style: _propTypes2['default'].object,
  children: _propTypes2['default'].node,
  componentClass: _reactPropTypes.elementType,

  xsStart: _propTypes2['default'].bool,
  smStart: _propTypes2['default'].bool,
  mdStart: _propTypes2['default'].bool,
  lgStart: _propTypes2['default'].bool,

  xsCenter: _propTypes2['default'].bool,
  smCenter: _propTypes2['default'].bool,
  mdCenter: _propTypes2['default'].bool,
  lgCenter: _propTypes2['default'].bool,

  xsEnd: _propTypes2['default'].bool,
  smEnd: _propTypes2['default'].bool,
  mdEnd: _propTypes2['default'].bool,
  lgEnd: _propTypes2['default'].bool,

  xsTop: _propTypes2['default'].bool,
  smTop: _propTypes2['default'].bool,
  mdTop: _propTypes2['default'].bool,
  lgTop: _propTypes2['default'].bool,

  xsMiddle: _propTypes2['default'].bool,
  smMiddle: _propTypes2['default'].bool,
  mdMiddle: _propTypes2['default'].bool,
  lgMiddle: _propTypes2['default'].bool,

  xsBottom: _propTypes2['default'].bool,
  smBottom: _propTypes2['default'].bool,
  mdBottom: _propTypes2['default'].bool,
  lgBottom: _propTypes2['default'].bool,

  xsAround: _propTypes2['default'].bool,
  smAround: _propTypes2['default'].bool,
  mdAround: _propTypes2['default'].bool,
  lgAround: _propTypes2['default'].bool,

  xsBetween: _propTypes2['default'].bool,
  smBetween: _propTypes2['default'].bool,
  mdBetween: _propTypes2['default'].bool,
  lgBetween: _propTypes2['default'].bool
};

Row.defaultProps = {
  componentClass: 'div'
};

exports['default'] = Row;
module.exports = exports['default'];