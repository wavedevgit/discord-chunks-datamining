/** Chunk was on web.js **/
/** chunk id: 880947, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk187322 = require("./187322.jsx"),
  Chunk331322 = require("./331322.jsx"),
  Chunk842867 = require("./842867.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = h(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function m(e, t, n) {
  let a = (0, c.dG)(e);
  return i.forwardRef(function(u, f) {
    let [h, ...m] = [u, f], {
      children: g,
      className: E,
      dir: y = "ltr",
      orientation: b = "vertical",
      overflow: O = "scroll",
      fade: v = false,
      customTheme: A = false,
      paddingFix: I = true,
      style: S,
      gap: T,
      experimental_useStack: C,
      disableFocusRingScope: N = false
    } = h, R = _(h, ["children", "className", "dir", "orientation", "overflow", "fade", "customTheme", "paddingFix", "style", "gap", "experimental_useStack", "disableFocusRingScope"]), [w] = m, {
      scrollerRef: P,
      getScrollerState: D
    } = (0, c.s$)(), x = (0, c.kR)(P, b);
    i.useImperativeHandle(w, () => d({
      getScrollerNode: () => P.current,
      getScrollerState: D
    }, (0, c.cJ)(P, D, x, b)), [P, D, b, x]);
    let L = N ? i.Fragment : o.xp,
      j = (0, c._I)({
        paddingFix: I,
        orientation: b,
        dir: y,
        className: E,
        scrollerRef: P,
        specs: a
      });
    return C ? (0, r.jsx)(l.B, p(d({
      gap: T,
      ref: P,
      className: s()(E, {
        [e]: true,
        [t]: v,
        [n]: A
      }),
      style: (0, c.Ze)(S, b, O),
      dir: y
    }, R), {
      children: (0, r.jsxs)(L, {
        containerRef: P,
        children: [g, j]
      })
    })) : (0, r.jsx)("div", p(d({
      ref: P,
      className: s()(E, {
        [e]: true,
        [t]: v,
        [n]: A
      }),
      style: (0, c.Ze)(S, b, O),
      dir: y
    }, R), {
      children: (0, r.jsxs)(L, {
        containerRef: P,
        children: [g, j]
      })
    }))
  })
}