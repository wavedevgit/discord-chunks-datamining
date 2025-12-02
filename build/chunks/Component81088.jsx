/** Chunk was on web.js **/
/** chunk id: 81088, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ds: () => g,
  Ko: () => h,
  vw: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk612853 = require("./612853.jsx"),
  Chunk482151 = require("./482151.js");

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
let m = e => {
    let {
      message: t
    } = e;
    return (0, r.jsx)(o.M14, {
      type: "critical",
      children: t
    })
  },
  h = e => {
    var {
      onClick: t,
      loading: n,
      disabled: o,
      text: s,
      tooltipText: l
    } = e;
    let c = u({
        variant: "active",
        type: "submit",
        "data-testid": "submitButton",
        text: s
      }, p(e, ["onClick", "loading", "disabled", "text", "tooltipText"])),
      d = (0, r.jsx)(a.zxk, f(u({}, c), {
        onClick: t,
        loading: n,
        disabled: o,
        text: s
      }));
    return null != l ? (0, r.jsx)(i.u, {
      text: l,
      asContainer: true,
      children: d
    }) : d
  },
  g = e => {
    let {
      primaryCTAButtonProps: t
    } = e;
    return (0, r.jsxs)(o.mzw, {
      className: l.checkoutModalFooter,
      "data-migration-pending": true,
      children: [(0, r.jsx)(h, u({}, t)), (0, r.jsx)(s.Z, {})]
    })
  }