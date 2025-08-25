/** Chunk was on web.js **/
/** chunk id: 239827, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk729020 = require("./729020.js");

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
let p = Chunk647438.forwardRef(function(e, t) {
  var {
    currentPageIndex: n,
    numPages: i,
    onChangePage: l,
    children: u,
    showPageCount: _ = true
  } = e, p = f(e, ["currentPageIndex", "numPages", "onChangePage", "children", "showPageCount"]);
  let h = n <= 0,
    m = n >= i - 1,
    g = _ ? a.intl.format(a.t.MtpIws, {
      currentPage: n + 1,
      numPages: i
    }) : a.intl.format(a.t.bKI77e, {
      currentPage: n + 1
    });
  return (0, r.jsxs)("div", d(c({
    ref: t
  }, p), {
    children: [u, (0, r.jsx)("div", {
      className: s.pageActions,
      children: (0, r.jsxs)("div", {
        className: s.buttons,
        children: [(0, r.jsx)(o.hU, {
          variant: "icon-only",
          icon: o.V7D,
          disabled: h,
          onClick: () => l(n - 1),
          "aria-label": a.intl.string(a.t.vgfxaG)
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          children: g
        }), (0, r.jsx)(o.hU, {
          variant: "icon-only",
          icon: o.Fbu,
          disabled: m,
          onClick: () => l(n + 1),
          "aria-label": a.intl.string(a.t.XiOHRU)
        })]
      })
    })]
  }))
})