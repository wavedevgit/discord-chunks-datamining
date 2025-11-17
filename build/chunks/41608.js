/** Chunk was on 66382 **/
/** chunk id: 41608, original params: e,t,r (module,exports,require) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.hover = true;
var n, o = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  a = (n = require("./473749.js")) && n.__esModule ? n : {
    default: n
  };

function i(e, t) {
  if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && ("object" == typeof t || "function" == typeof t) ? t : e
}
var l = exports.hover = function(e) {
  var t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "span",
    r = a.default.Component;
  if ("function" != typeof r && null !== r) throw TypeError("Super expression must either be null or a function, not " + typeof r);

  function n() {
    if (!(this instanceof n)) throw TypeError("Cannot call a class as a function");
    for (var r, l, s, u = arguments.length, c = Array(u), p = 0; p < u; p++) c[p] = arguments[p];
    return l = s = i(this, (r = n.__proto__ || Object.getPrototypeOf(n)).call.apply(r, [this].concat(c))), s.state = {
      hover: false
    }, s.handleMouseOver = function() {
      return s.setState({
        hover: true
      })
    }, s.handleMouseOut = function() {
      return s.setState({
        hover: false
      })
    }, s.render = function() {
      return a.default.createElement(t, {
        onMouseOver: s.handleMouseOver,
        onMouseOut: s.handleMouseOut
      }, a.default.createElement(e, o({}, s.props, s.state)))
    }, i(s, l)
  }
  return n.prototype = Object.create(r && r.prototype, {
    constructor: {
      value: n,
      enumerable: false,
      writable: true,
      configurable: true
    }
  }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(n, r) : n.__proto__ = r), n
};
exports.default = l