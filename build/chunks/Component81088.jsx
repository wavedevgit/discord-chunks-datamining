/** Chunk was on web.js **/
/** chunk id: 81088, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ds: () => b,
  Ko: () => E,
  vw: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk612853 = require("./612853.jsx"),
  Chunk311821 = require("./311821.jsx"),
  Chunk482151 = require("./482151.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let g = e => {
    let {
      message: t
    } = e;
    return (0, r.jsx)(a.M14, {
      type: "critical",
      children: t
    })
  },
  E = e => {
    var {
      onClick: t,
      loading: n,
      disabled: a,
      text: s,
      tooltipText: l
    } = e;
    let c = f({
        variant: "active",
        type: "submit",
        "data-testid": "submitButton",
        text: s
      }, m(e, ["onClick", "loading", "disabled", "text", "tooltipText"])),
      u = (0, r.jsx)(o.zxk, _(f({}, c), {
        onClick: t,
        loading: n,
        disabled: a,
        text: s
      }));
    return null != l ? (0, r.jsx)(i.u, {
      text: l,
      asContainer: true,
      children: u
    }) : u
  },
  b = e => {
    var {
      primaryCTAButtonProps: t,
      showLockIcon: n,
      onBackClick: i
    } = e, o = m(e, ["primaryCTAButtonProps", "showLockIcon", "onBackClick"]);
    return (0, r.jsxs)(a.mzw, _(f({
      className: u.checkoutModalFooter,
      direction: s.Z.Direction.HORIZONTAL,
      justify: s.Z.Justify.END,
      "data-migration-pending": true
    }, o), {
      children: [null != i ? (0, r.jsx)(c.Z, {
        onClick: i
      }) : null, n && (0, r.jsx)(l.Z, {}), (0, r.jsx)(E, f({}, t))]
    }))
  }