/** Chunk was on web.js **/
/** chunk id: 715318, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk858042 = require("./858042.jsx"),
  Chunk388032 = require("./388032.jsx");

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

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e) {
  let {
    applicationId: t,
    className: n,
    viewId: u
  } = e, f = i.useRef(null), p = (0, s.Z)({
    id: t,
    label: c.intl.string(c.t["FfCL+/"])
  }), h = (0, l.M)({
    applicationId: t,
    viewId: u
  });
  return null == p && null == h ? null : (0, r.jsx)(a.yRy, {
    targetElementRef: f,
    align: "top",
    position: "right",
    disablePointerEvents: false,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(a.v2r, {
        navId: "game-profile-context",
        onClose: () => {
          (0, o.Zy)(), t()
        },
        "aria-label": c.intl.string(c.t.PNeFgY),
        onSelect: () => {},
        children: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.kSQ, {
            children: p
          }), (0, r.jsx)(a.kSQ, {
            children: h
          })]
        })
      })
    },
    children: e => (0, r.jsx)(a.ua7, {
      text: c.intl.string(c.t.UKOtz8),
      children: t => (0, r.jsx)(a.P3F, _(d({
        innerRef: f,
        className: n
      }, t, e), {
        children: (0, r.jsx)(a.xhG, {
          size: "xs",
          color: a.TVs.colors.WHITE
        })
      }))
    })
  })
}