'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var _lodashIsnumber = require('lodash.isnumber');

var _lodashIsnumber2 = _interopRequireDefault(_lodashIsnumber);

var Col = (function (_PureComponent) {
  _inherits(Col, _PureComponent);

  function Col() {
    _classCallCheck(this, Col);

    _get(Object.getPrototypeOf(Col.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Col, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var ComponentClass = this.props.componentClass;

      var classes = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, 'grid__col--xs' + ((0, _lodashIsnumber2['default'])(this.props.xs) ? '-' + this.props.xs : ''), this.props.xs >= 0), _defineProperty(_classNames, 'grid__col--sm' + ((0, _lodashIsnumber2['default'])(this.props.sm) ? '-' + this.props.sm : ''), this.props.sm >= 0), _defineProperty(_classNames, 'grid__col--md' + ((0, _lodashIsnumber2['default'])(this.props.md) ? '-' + this.props.md : ''), this.props.md >= 0), _defineProperty(_classNames, 'grid__col--lg' + ((0, _lodashIsnumber2['default'])(this.props.lg) ? '-' + this.props.lg : ''), this.props.lg >= 0), _defineProperty(_classNames, 'grid__col--xs-offset-' + this.props.xsOffset, this.props.xsOffset >= 0), _defineProperty(_classNames, 'grid__col--sm-offset-' + this.props.smOffset, this.props.smOffset >= 0), _defineProperty(_classNames, 'grid__col--md-offset-' + this.props.mdOffset, this.props.mdOffset >= 0), _defineProperty(_classNames, 'grid__col--lg-offset-' + this.props.lgOffset, this.props.lgOffset >= 0), _defineProperty(_classNames, 'grid__col--reverse', this.props.reverse), _defineProperty(_classNames, 'grid__col--xs-first', this.props.xsFirst), _defineProperty(_classNames, 'grid__col--sm-first', this.props.smFirst), _defineProperty(_classNames, 'grid__col--md-first', this.props.mdFirst), _defineProperty(_classNames, 'grid__col--lg-first', this.props.lgFirst), _defineProperty(_classNames, 'grid__col--xs-last', this.props.xsLast), _defineProperty(_classNames, 'grid__col--sm-last', this.props.smLast), _defineProperty(_classNames, 'grid__col--md-last', this.props.mdLast), _defineProperty(_classNames, 'grid__col--lg-last', this.props.lgLast), _classNames), this.props.className);

      return _react2['default'].createElement(
        ComponentClass,
        { className: classes, style: this.props.style },
        this.props.children
      );
    }
  }]);

  return Col;
})(_reactPureRenderComponent2['default']);

Col.propTypes = {
  className: _propTypes2['default'].string,
  style: _propTypes2['default'].object,
  children: _propTypes2['default'].node,
  componentClass: _reactPropTypes.elementType,

  xs: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].bool]),
  sm: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].bool]),
  md: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].bool]),
  lg: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].bool]),

  xsOffset: _propTypes2['default'].number,
  smOffset: _propTypes2['default'].number,
  mdOffset: _propTypes2['default'].number,
  lgOffset: _propTypes2['default'].number,

  reverse: _propTypes2['default'].bool,

  xsFirst: _propTypes2['default'].bool,
  smFirst: _propTypes2['default'].bool,
  mdFirst: _propTypes2['default'].bool,
  lgFirst: _propTypes2['default'].bool,

  xsLast: _propTypes2['default'].bool,
  smLast: _propTypes2['default'].bool,
  mdLast: _propTypes2['default'].bool,
  lgLast: _propTypes2['default'].bool
};

Col.defaultProps = {
  componentClass: 'div'
};

exports['default'] = Col;
module.exports = exports['default'];