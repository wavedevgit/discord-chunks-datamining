/** Chunk was on 26436 **/
"use strict";
r.d(t, {
  Z: () => s
});
var n = r(192379),
  o = r(924102),
  a = r(820611),
  i = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  l = function() {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, r, n) {
      return r && e(t.prototype, r), n && e(t, n), t
    }
  }();
let s = function(e) {
  var t = function(t) {
    function r(e) {
      ! function(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
      }(this, r);
      var t = function(e, t) {
        if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t && ("object" == typeof t || "function" == typeof t) ? t : e
      }(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
      return t.handleChange = function(e, r) {
        if (a.LX(e)) {
          var n = a.jH(e, e.h || t.state.oldHue);
          t.setState(n), t.props.onChangeComplete && t.debounce(t.props.onChangeComplete, n, r), t.props.onChange && t.props.onChange(n, r)
        }
      }, t.handleSwatchHover = function(e, r) {
        if (a.LX(e)) {
          var n = a.jH(e, e.h || t.state.oldHue);
          t.props.onSwatchHover && t.props.onSwatchHover(n, r)
        }
      }, t.state = i({}, a.jH(e.color, 0)), t.debounce = (0, o.Z)(function(e, t, r) {
        e(t, r)
      }, 100), t
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
    }(r, t), l(r, [{
      key: "render",
      value: function() {
        var t = {};
        return this.props.onSwatchHover && (t.onSwatchHover = this.handleSwatchHover), n.createElement(e, i({}, this.props, this.state, {
          onChange: this.handleChange
        }, t))
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(e, t) {
        return i({}, a.jH(e.color, t.oldHue))
      }
    }]), r
  }(n.PureComponent || n.Component);
  return t.propTypes = i({}, e.propTypes), t.defaultProps = i({}, e.defaultProps, {
    color: {
      h: 250,
      s: .5,
      l: .2,
      a: 1
    }
  }), t
}