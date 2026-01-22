/** Chunk was on web.js **/
/** chunk id: 763969, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => h
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk187322 = require("./187322.jsx"),
  Chunk842867 = require("./842867.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = _(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function h(e, t) {
  let n = (0, l.dG)(e);
  return i.forwardRef(function(a, c) {
    let [d, ..._] = [a, c], {
      children: h,
      className: m,
      dir: g = "ltr",
      orientation: E = "vertical",
      paddingFix: b = true,
      fade: y = false,
      onScroll: O,
      style: A
    } = d, v = p(d, ["children", "className", "dir", "orientation", "paddingFix", "fade", "onScroll", "style"]), [S] = _, I = i.useRef(null), T = (0, l._I)({
      paddingFix: b,
      orientation: E,
      dir: g,
      className: m,
      scrollerRef: I,
      specs: n
    });
    return (0, r.jsx)("div", f(u({
      ref: e => {
        "function" == typeof S ? S(e) : null != S && (S.current = e), I.current = e
      },
      className: s()(m, {
        [e]: true,
        [t]: y
      }),
      style: (0, l.Ze)(A, E),
      dir: g
    }, v), {
      children: (0, r.jsxs)(o.xp, {
        containerRef: I,
        children: [h, T]
      })
    }))
  })
}