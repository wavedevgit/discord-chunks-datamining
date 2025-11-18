/** Chunk was on web.js **/
/** chunk id: 732380, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O1: () => m,
  Q1: () => h,
  f6: () => E,
  pt: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk298033 = require("./298033.js");

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

function _(e, t) {
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function h(e) {
  let {
    action: t,
    onClick: n
  } = e, {
    trackUserProfileAction: r
  } = (0, c.KZ)();
  return e => {
    null != t && r({
      action: t
    }), null == n || n(e)
  }
}

function m(e) {
  var {
    action: t,
    onClick: n,
    variant: i = "secondary",
    size: a = "sm"
  } = e, o = _(e, ["action", "onClick", "variant", "size"]);
  let s = h({
    action: t,
    onClick: n
  });
  return (0, r.jsx)(l.Button, f({
    onClick: s,
    variant: i,
    size: a
  }, o))
}

function g(e) {
  var {
    action: t,
    onClick: n,
    variant: i = "secondary",
    size: a = "sm",
    tooltipText: s,
    "aria-label": c,
    buttonRef: u
  } = e, d = _(e, ["action", "onClick", "variant", "size", "tooltipText", "aria-label", "buttonRef"]);
  let p = h({
    action: t,
    onClick: n
  });
  return (0, r.jsx)(o.u, {
    asContainer: true,
    targetElementRef: u,
    text: s,
    children: (0, r.jsx)(l.hU, f({
      onClick: p,
      variant: i,
      size: a,
      "aria-label": null != c ? c : s
    }, d))
  })
}

function E(e) {
  let {
    icon: t,
    tooltipText: n,
    action: i,
    onClick: l,
    buttonRef: c,
    disabled: d = false
  } = e, f = h({
    action: i,
    onClick: l
  });
  return (0, r.jsx)(o.u, {
    asContainer: true,
    text: n,
    children: (0, r.jsx)(s.P3F, {
      innerRef: c,
      className: a()(u.bannerButton, {
        [u.disabled]: d
      }),
      onClick: f,
      "aria-label": n,
      "aria-disabled": d,
      children: (0, r.jsx)(t, {
        size: "xs",
        color: "currentColor"
      })
    })
  })
}