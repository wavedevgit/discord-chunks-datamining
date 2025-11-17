/** Chunk was on 66382 **/
/** chunk id: 564405, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  I: () => l
});
var Chunk473749 = require("./473749.js"),
  o = Object.assign || function(e) {
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
  }();

function i(e, t) {
  if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && ("object" == typeof t || "function" == typeof t) ? t : e
}
var l = function(e) {
  var t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "span",
    r = n.Component;
  if ("function" != typeof r && null !== r) throw TypeError("Super expression must either be null or a function, not " + typeof r);

  function l() {
    if (!(this instanceof l)) throw TypeError("Cannot call a class as a function");
    for (var e, t, r, n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
    return t = r = i(this, (e = l.__proto__ || Object.getPrototypeOf(l)).call.apply(e, [this].concat(o))), r.state = {
      focus: false
    }, r.handleFocus = function() {
      return r.setState({
        focus: true
      })
    }, r.handleBlur = function() {
      return r.setState({
        focus: false
      })
    }, i(r, t)
  }
  return l.prototype = Object.create(r && r.prototype, {
    constructor: {
      value: l,
      enumerable: false,
      writable: true,
      configurable: true
    }
  }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(l, r) : l.__proto__ = r), a(l, [{
    key: "render",
    value: function() {
      return n.createElement(t, {
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      }, n.createElement(e, o({}, this.props, this.state)))
    }
  }]), l
}