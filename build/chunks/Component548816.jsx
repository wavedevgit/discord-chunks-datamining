/** Chunk was on 1272 **/
/** chunk id: 548816, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk890333 = require("./890333.js");

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function u(e) {
  var {
    padded: t = true,
    inset: n = false,
    active: i = false,
    className: u,
    children: d,
    onClick: p,
    ref: f,
    noBackground: h = false
  } = e, m = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["padded", "inset", "active", "className", "children", "onClick", "ref", "noBackground"]);
  return null != p ? (0, r.jsx)(a.P3F, c(o({
    innerRef: f,
    onClick: p,
    tabIndex: null != p ? 0 : false,
    className: l()(u, {
      [s.outer]: !n,
      [s.inset]: n,
      [s.padded]: t,
      [s.active]: i,
      [s.interactive]: null != p,
      [s.noBackground]: h
    })
  }, m), {
    children: d
  })) : (0, r.jsx)("div", c(o({
    ref: f,
    className: l()(u, {
      [s.outer]: !n,
      [s.inset]: n,
      [s.padded]: t,
      [s.active]: i,
      [s.noBackground]: h
    })
  }, m), {
    children: d
  }))
}