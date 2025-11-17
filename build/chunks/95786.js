/** Chunk was on 66382 **/
/** chunk id: 95786, original params: e,t,r (module,exports,require) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.handleFocus = true;
var n, o = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  a = function() {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, r, n) {
      return r && e(t.prototype, r), n && e(t, n), t
    }
  }(),
  i = (n = require("./473749.js")) && n.__esModule ? n : {
    default: n
  };

function l(e, t) {
  if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && ("object" == typeof t || "function" == typeof t) ? t : e
}
exports.handleFocus = function(e) {
  var t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "span",
    r = i.default.Component;
  if ("function" != typeof r && null !== r) throw TypeError("Super expression must either be null or a function, not " + typeof r);

  function n() {
    if (!(this instanceof n)) throw TypeError("Cannot call a class as a function");
    for (var e, t, r, o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
    return t = r = l(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [this].concat(a))), r.state = {
      focus: false
    }, r.handleFocus = function() {
      return r.setState({
        focus: true
      })
    }, r.handleBlur = function() {
      return r.setState({
        focus: false
      })
    }, l(r, t)
  }
  return n.prototype = Object.create(r && r.prototype, {
    constructor: {
      value: n,
      enumerable: false,
      writable: true,
      configurable: true
    }
  }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(n, r) : n.__proto__ = r), a(n, [{
    key: "render",
    value: function() {
      return i.default.createElement(t, {
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      }, i.default.createElement(e, o({}, this.props, this.state)))
    }
  }]), n
}