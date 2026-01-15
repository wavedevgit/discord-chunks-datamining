/** Chunk was on web.js **/
/** chunk id: 49402, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk781160 = require("./781160.jsx"),
  Chunk821541 = require("./821541.jsx"),
  Chunk780900 = require("./780900.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function m(e, t, n) {
  let a = (0, c.G6)(e);
  return i.forwardRef(function(u, f) {
    var {
      children: h,
      className: m,
      dir: g = "ltr",
      orientation: E = "vertical",
      overflow: b = "scroll",
      fade: y = false,
      customTheme: O = false,
      paddingFix: v = true,
      style: S,
      gap: I,
      experimental_useStack: T,
      disableFocusRingScope: C = false
    } = u, A = _(u, ["children", "className", "dir", "orientation", "overflow", "fade", "customTheme", "paddingFix", "style", "gap", "experimental_useStack", "disableFocusRingScope"]);
    let {
      scrollerRef: N,
      getScrollerState: P
    } = (0, c.Ke)(), w = (0, c.t2)(N, E);
    i.useImperativeHandle(f, () => d({
      getScrollerNode: () => N.current,
      getScrollerState: P
    }, (0, c.Ue)(N, P, w, E)), [N, P, E, w]);
    let R = C ? i.Fragment : s.Jc,
      D = (0, c.tT)({
        paddingFix: v,
        orientation: E,
        dir: g,
        className: m,
        scrollerRef: N,
        specs: a
      });
    return T ? (0, r.jsx)(l.K, p(d({
      gap: I,
      ref: N,
      className: o()(m, {
        [e]: true,
        [t]: y,
        [n]: O
      }),
      style: (0, c.uT)(S, E, b),
      dir: g
    }, A), {
      children: (0, r.jsxs)(R, {
        containerRef: N,
        children: [h, D]
      })
    })) : (0, r.jsx)("div", p(d({
      ref: N,
      className: o()(m, {
        [e]: true,
        [t]: y,
        [n]: O
      }),
      style: (0, c.uT)(S, E, b),
      dir: g
    }, A), {
      children: (0, r.jsxs)(R, {
        containerRef: N,
        children: [h, D]
      })
    }))
  })
}