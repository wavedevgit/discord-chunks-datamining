/** Chunk was on web.js **/
/** chunk id: 600164, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk794913 = require("./794913.js"),
  Chunk893354 = require("./893354.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let h = {
    VERTICAL: Chunk893354.vertical,
    HORIZONTAL: Chunk794913.horizontal,
    HORIZONTAL_REVERSE: Chunk794913.horizontalReverse
  },
  m = {
    START: Chunk893354.justifyStart,
    END: Chunk893354.justifyEnd,
    CENTER: Chunk893354.justifyCenter,
    BETWEEN: Chunk893354.justifyBetween,
    AROUND: Chunk893354.justifyAround
  },
  g = {
    START: Chunk893354.alignStart,
    END: Chunk893354.alignEnd,
    CENTER: Chunk893354.alignCenter,
    STRETCH: Chunk893354.alignStretch,
    BASELINE: Chunk893354.alignBaseline
  },
  E = {
    NO_WRAP: Chunk893354.noWrap,
    WRAP: Chunk893354.wrap,
    WRAP_REVERSE: Chunk893354.wrapReverse
  },
  b = e => {
    var {
      children: t,
      className: n,
      direction: i = h.HORIZONTAL,
      justify: o = m.START,
      align: l = g.STRETCH,
      wrap: c = E.NO_WRAP,
      shrink: d = 1,
      grow: p = 1,
      basis: b = "auto",
      style: y
    } = e, O = _(e, ["children", "className", "direction", "justify", "align", "wrap", "shrink", "grow", "basis", "style"]);
    return (0, r.jsx)("div", f(u({
      style: u({
        flexShrink: d,
        flexGrow: p,
        flexBasis: b
      }, y),
      className: a()(s.flex, i, o, l, c, n)
    }, O), {
      children: t
    }))
  };
b.Child = e => {
  var {
    children: t,
    className: n,
    shrink: o = 1,
    grow: l = 1,
    basis: c = "auto",
    style: d,
    wrap: p = false
  } = e, h = _(e, ["children", "className", "shrink", "grow", "basis", "style", "wrap"]);
  let m = u({
    className: n = null != n ? n : s.flexChild,
    style: u({
      flexGrow: l,
      flexShrink: o,
      flexBasis: c
    }, d)
  }, h);
  if (!p && "string" != typeof t && 1 === i.Children.count(t)) {
    let e = i.Children.only(t);
    return m.style = u({}, m.style, e.props.style), m.className = a()(e.props.className, n), i.cloneElement(e, m)
  }
  return (0, r.jsx)("div", f(u({}, m), {
    children: t
  }))
}, b.Direction = h, b.Align = g, b.Justify = m, b.Wrap = E;
let y = b