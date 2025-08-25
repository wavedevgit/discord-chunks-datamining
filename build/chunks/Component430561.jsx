/** Chunk was on web.js **/
/** chunk id: 430561, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GY: () => g,
  PI: () => h,
  RT: () => E,
  ls: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk765250 = require("./765250.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk962967 = require("./962967.js");

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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: u.titleWrapper,
    children: (0, r.jsx)(s.Text, {
      variant: "text-xs/semibold",
      color: "header-primary",
      children: t
    })
  })
}

function m(e) {
  let {
    onClick: t
  } = e, n = c.intl.string(c.t["3D5yo6"]);
  return (0, r.jsx)(s.ua7, {
    text: n,
    "aria-label": n,
    children: e => (0, r.jsx)(s.P3F, p(f({}, e), {
      className: u.button,
      onClick: t,
      children: (0, r.jsx)(s.ewm, {
        size: "xxs",
        color: a.Z.colors.INTERACTIVE_ACTIVE
      })
    }))
  })
}

function g(e) {
  let {
    widgetId: t,
    showAllStreams: n
  } = e, i = n ? c.intl.string(c.t.q2B3rq) : c.intl.string(c.t.JKGi6u), d = () => {
    (0, l.zG)(t, {
      showAllStreams: !n
    })
  };
  return (0, r.jsx)(s.ua7, {
    text: i,
    "aria-label": i,
    children: e => (0, r.jsx)(s.P3F, p(f({}, e), {
      className: o()(u.button, n && u.active),
      onClick: d,
      children: (0, r.jsx)(s.pzj, {
        size: "xxs",
        color: n ? a.Z.colors.BG_BRAND : a.Z.colors.INTERACTIVE_ACTIVE
      })
    }))
  })
}

function E(e) {
  let {
    id: t,
    pinned: n
  } = e, i = n ? c.intl.string(c.t.cSu80t) : c.intl.string(c.t.cM8Vnp);
  return (0, r.jsx)(s.ua7, {
    text: i,
    "aria-label": i,
    children: e => (0, r.jsx)(s.P3F, p(f({}, e), {
      className: o()(u.button, n && u.active),
      onClick: () => (0, l.xh)(t),
      children: (0, r.jsx)(s.k5M, {
        size: "xxs",
        color: n ? a.Z.colors.BG_BRAND : a.Z.colors.INTERACTIVE_ACTIVE
      })
    }))
  })
}