/** Chunk was on 30202 **/
/** chunk id: 324815, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk18582 = require("./18582.jsx"),
  Chunk630099 = require("./630099.js");
let o = {
  white: Chunk630099.borderWhite,
  green: Chunk630099.borderGreen
};

function c(e) {
  var t, n, {
      className: r,
      color: c,
      onClick: d,
      disabled: u,
      children: m,
      muted: p = false
    } = e,
    g = function(e, t) {
      if (null == e) return {};
      var n, i, r = function(e, t) {
        if (null == e) return {};
        var n, i, r = {},
          s = Object.keys(e);
        for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["className", "color", "onClick", "disabled", "children", "muted"]);
  return (0, i.jsx)(a.Z, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = n[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = i
      })
    }
    return e
  }({}, g), n = n = {
    muted: p,
    className: s()(u ? l.buttonDisabled : l.buttonEnabled, o[c], r),
    onClick: u ? true : d,
    children: m
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}