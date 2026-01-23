/** Chunk was on web.js **/
/** chunk id: 217356, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk770178 = require("./770178.js"),
  Chunk765548 = require("./765548.js"),
  Chunk685073 = require("./685073.js"),
  Chunk534400 = require("./534400.jsx"),
  Chunk277150 = require("./277150.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = g(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let E = Chunk64700.memo(function(e) {
  let {
    children: t,
    isOverlay: n,
    contextGuildId: a
  } = e, f = m(e, ["children", "isOverlay", "contextGuildId"]), [_, g] = i.useState({
    maskImage: "none"
  }), E = i.useRef(null), y = (0, l.A)(() => {
    var e, t, r, i;
    let a = null != (e = null == (r = b.current) ? true : r.getBoundingClientRect()) ? e : null,
      s = null != (t = null == (i = E.current) ? true : i.getBoundingClientRect()) ? t : null;
    if (n || null == a || null == s) return void g({
      maskImage: "none"
    });
    let o = s.right - a.right,
      l = s.width - o;
    l > s.width ? g({
      maskImage: "none"
    }) : g({
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ".concat(l, "px)")
    })
  }), b = (0, o.w)(y), O = (0, c.Wb)(f.userId, a);
  return (0, r.jsxs)("div", {
    className: s()(d.kL, n && d.ur),
    ref: b,
    children: [(0, r.jsx)("div", {
      className: d.QV,
      children: t
    }), (0, r.jsx)("div", {
      className: d.Qz,
      children: (0, r.jsx)("span", {
        className: s()(d.Tm, !O && n && d.pN),
        ref: E,
        style: _,
        children: (0, r.jsx)(u.Ay, h(p({}, f), {
          contextGuildId: a,
          className: s()(f.className, n && d.ZW),
          disableGuildProfile: true
        }))
      })
    })]
  })
})