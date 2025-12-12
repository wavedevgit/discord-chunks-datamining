/** Chunk was on web.js **/
/** chunk id: 600164, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk164222 = require("./164222.js"),
  Chunk727829 = require("./727829.js");

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
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let m = {
    VERTICAL: Chunk727829.vertical,
    HORIZONTAL: Chunk164222.horizontal,
    HORIZONTAL_REVERSE: Chunk164222.horizontalReverse
  },
  h = {
    START: Chunk727829.justifyStart,
    END: Chunk727829.justifyEnd,
    CENTER: Chunk727829.justifyCenter,
    BETWEEN: Chunk727829.justifyBetween,
    AROUND: Chunk727829.justifyAround
  },
  g = {
    START: Chunk727829.alignStart,
    END: Chunk727829.alignEnd,
    CENTER: Chunk727829.alignCenter,
    STRETCH: Chunk727829.alignStretch,
    BASELINE: Chunk727829.alignBaseline
  },
  E = {
    NO_WRAP: Chunk727829.noWrap,
    WRAP: Chunk727829.wrap,
    WRAP_REVERSE: Chunk727829.wrapReverse
  },
  b = e => {
    var {
      children: t,
      className: n,
      direction: i = m.HORIZONTAL,
      justify: a = h.START,
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
    wrap: _ = false
  } = e, m = p(e, ["children", "className", "shrink", "grow", "basis", "style", "wrap"]);
  let h = u({
    className: n = null != n ? n : s.flexChild,
    style: u({
      flexGrow: l,
      flexShrink: a,
      flexBasis: c
    }, d)
  }, m);
  if (!_ && "string" != typeof t && 1 === i.Children.count(t)) {
    let e = i.Children.only(t);
    return h.style = u({}, h.style, e.props.style), h.className = o()(e.props.className, n), i.cloneElement(e, h)
  }
  return (0, r.jsx)("div", f(u({}, h), {
    children: t
  }))
}, b.Direction = m, b.Align = g, b.Justify = h, b.Wrap = E;
let y = b