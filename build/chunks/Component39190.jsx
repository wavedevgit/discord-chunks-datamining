/** Chunk was on web.js **/
/** chunk id: 39190, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk69940 = require("./69940.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = p(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let _ = Chunk64700.forwardRef(function(e, t) {
  let [n, ...i] = [e, t], {
    currentPageIndex: l,
    numPages: u,
    onChangePage: p,
    children: _,
    showPageCount: h = true
  } = n, m = f(n, ["currentPageIndex", "numPages", "onChangePage", "children", "showPageCount"]), [g] = i, E = l <= 0, y = l >= u - 1, b = h ? s.intl.format(s.t.MtpIwg, {
    currentPage: l + 1,
    numPages: u
  }) : s.intl.format(s.t.bKI77c, {
    currentPage: l + 1
  });
  return (0, r.jsxs)("div", d(c({
    ref: g
  }, m), {
    children: [_, (0, r.jsx)("div", {
      className: o.v,
      children: (0, r.jsxs)("div", {
        className: o.U,
        children: [(0, r.jsx)(a.K0, {
          variant: "icon-only",
          icon: a.n2b,
          disabled: E,
          onClick: () => p(l - 1),
          "aria-label": s.intl.string(s.t.vgfxaA)
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          children: b
        }), (0, r.jsx)(a.K0, {
          variant: "icon-only",
          icon: a._BQ,
          disabled: y,
          onClick: () => p(l + 1),
          "aria-label": s.intl.string(s.t.XiOHRX)
        })]
      })
    })]
  }))
})