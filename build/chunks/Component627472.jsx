/** Chunk was on web.js **/
/** chunk id: 627472, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => m
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk781160 = require("./781160.jsx"),
  Chunk780900 = require("./780900.js");

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

function m(e, t) {
  let n = (0, l.G6)(e);
  return i.forwardRef(function(o, c) {
    var {
      children: d,
      className: _,
      dir: m = "ltr",
      orientation: h = "vertical",
      paddingFix: g = true,
      fade: E = false,
      onScroll: b,
      style: y
    } = o, O = p(o, ["children", "className", "dir", "orientation", "paddingFix", "fade", "onScroll", "style"]);
    let v = i.useRef(null),
      S = (0, l.tT)({
        paddingFix: g,
        orientation: h,
        dir: m,
        className: _,
        scrollerRef: v,
        specs: n
      });
    return (0, r.jsx)("div", f(u({
      ref: e => {
        "function" == typeof c ? c(e) : null != c && (c.current = e), v.current = e
      },
      className: a()(_, {
        [e]: true,
        [t]: E
      }),
      style: (0, l.uT)(y, h),
      dir: m
    }, O), {
      children: (0, r.jsxs)(s.Jc, {
        containerRef: v,
        children: [d, S]
      })
    }))
  })
}