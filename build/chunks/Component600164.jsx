/** Chunk was on web.js **/
/** chunk id: 600164, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk773195 = require("./773195.js"),
  Chunk149715 = require("./149715.js");

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
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let h = {
    VERTICAL: Chunk149715.vertical,
    HORIZONTAL: Chunk773195.horizontal,
    HORIZONTAL_REVERSE: Chunk773195.horizontalReverse
  },
  m = {
    START: Chunk149715.justifyStart,
    END: Chunk149715.justifyEnd,
    CENTER: Chunk149715.justifyCenter,
    BETWEEN: Chunk149715.justifyBetween,
    AROUND: Chunk149715.justifyAround
  },
  g = {
    START: Chunk149715.alignStart,
    END: Chunk149715.alignEnd,
    CENTER: Chunk149715.alignCenter,
    STRETCH: Chunk149715.alignStretch,
    BASELINE: Chunk149715.alignBaseline
  },
  E = {
    NO_WRAP: Chunk149715.noWrap,
    WRAP: Chunk149715.wrap,
    WRAP_REVERSE: Chunk149715.wrapReverse
  },
  b = e => {
    var {
      children: t,
      className: n,
      direction: i = h.HORIZONTAL,
      justify: a = m.START,
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
      className: o()(s.flex, i, a, l, c, n)
    }, O), {
      children: t
    }))
  };
b.Child = e => {
  var {
    children: t,
    className: n,
    shrink: a = 1,
    grow: l = 1,
    basis: c = "auto",
    style: d,
    wrap: p = false
  } = e, h = _(e, ["children", "className", "shrink", "grow", "basis", "style", "wrap"]);
  let m = u({
    className: n = null != n ? n : s.flexChild,
    style: u({
      flexGrow: l,
      flexShrink: a,
      flexBasis: c
    }, d)
  }, h);
  if (!p && "string" != typeof t && 1 === i.Children.count(t)) {
    let e = i.Children.only(t);
    return m.style = u({}, m.style, e.props.style), m.className = o()(e.props.className, n), i.cloneElement(e, m)
  }
  return (0, r.jsx)("div", f(u({}, m), {
    children: t
  }))
}, b.Direction = h, b.Align = g, b.Justify = m, b.Wrap = E;
let y = b