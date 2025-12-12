/** Chunk was on web.js **/
/** chunk id: 600164, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function p(e, t) {
  if (null == e) return {};
  var n, r, i = _(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let m = {
    VERTICAL: Chunk149715.vertical,
    HORIZONTAL: Chunk773195.horizontal,
    HORIZONTAL_REVERSE: Chunk773195.horizontalReverse
  },
  h = {
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
      direction: i = m.HORIZONTAL,
      justify: o = h.START,
      align: l = g.STRETCH,
      wrap: c = E.NO_WRAP,
      shrink: d = 1,
      grow: _ = 1,
      basis: b = "auto",
      style: y
    } = e, O = p(e, ["children", "className", "direction", "justify", "align", "wrap", "shrink", "grow", "basis", "style"]);
    return (0, r.jsx)("div", f(u({
      style: u({
        flexShrink: d,
        flexGrow: _,
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
    wrap: _ = false
  } = e, m = p(e, ["children", "className", "shrink", "grow", "basis", "style", "wrap"]);
  let h = u({
    className: n = null != n ? n : s.flexChild,
    style: u({
      flexGrow: l,
      flexShrink: o,
      flexBasis: c
    }, d)
  }, m);
  if (!_ && "string" != typeof t && 1 === i.Children.count(t)) {
    let e = i.Children.only(t);
    return h.style = u({}, h.style, e.props.style), h.className = a()(e.props.className, n), i.cloneElement(e, h)
  }
  return (0, r.jsx)("div", f(u({}, h), {
    children: t
  }))
}, b.Direction = m, b.Align = g, b.Justify = h, b.Wrap = E;
let y = b