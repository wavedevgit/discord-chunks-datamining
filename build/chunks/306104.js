/** Chunk was on 26436 **/
"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
}), t.hover = void 0;
var n, o = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  a = (n = r(192379)) && n.__esModule ? n : {
    default: n
  };

function i(e, t) {
  if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && ("object" == typeof t || "function" == typeof t) ? t : e
}
var l = t.hover = function(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
  return function(r) {
    function n() {
      ! function(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
      }(this, n);
      for (var r, l, s, u = arguments.length, c = Array(u), p = 0; p < u; p++) c[p] = arguments[p];
      return l = s = i(this, (r = n.__proto__ || Object.getPrototypeOf(n)).call.apply(r, [this].concat(c))), s.state = {
        hover: !1
      }, s.handleMouseOver = function() {
        return s.setState({
          hover: !0
        })
      }, s.handleMouseOut = function() {
        return s.setState({
          hover: !1
        })
      }, s.render = function() {
        return a.default.createElement(t, {
          onMouseOver: s.handleMouseOver,
          onMouseOut: s.handleMouseOut
        }, a.default.createElement(e, o({}, s.props, s.state)))
      }, i(s, l)
    }
    return ! function(e, t) {
      if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(n, r), n
  }(a.default.Component)
};
t.default = l