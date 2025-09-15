/** Chunk was on web.js **/
/** chunk id: 555830, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk483517 = require("./483517.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk571818 = require("./571818.js");

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
let p = new Set;

function h(e) {
  let {
    activity: t,
    variant: u = "vertical"
  } = e, [f, h] = i.useState(false), m = "".concat(t.name, "-").concat(t.application_id), g = "vertical" === u, E = i.useCallback(e => {
    e.stopPropagation(), p.add(m), h(true)
  }, [m]), b = i.useCallback(e => {
    e.stopPropagation(), (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("82077").then(n.bind(n, 953848));
      return n => (0, r.jsx)(e, _(d({}, n), {
        detectedActivity: t,
        onSubmitted: () => {
          p.add(m), h(true)
        }
      }))
    })
  }, [t, m]);
  return f ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {}), (0, r.jsx)("div", {
      className: c.container,
      children: (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: c.thankYouText,
        children: l.intl.string(l.t.X0TrNT)
      })
    })]
  }) : p.has(m) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {}), (0, r.jsx)("div", {
      className: c.container,
      children: (0, r.jsxs)("div", {
        className: g ? c.contentVertical : c.contentHorizontal,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          className: c.prompt,
          children: l.intl.string(l.t["9g7v6e"])
        }), (0, r.jsxs)("div", {
          className: g ? c.buttonsVertical : c.buttonsHorizontal,
          children: [(0, r.jsx)(a.zx, {
            size: a.zx.Sizes.SMALL,
            look: a.zx.Looks.FILLED,
            color: a.zx.Colors.PRIMARY,
            onClick: E,
            className: g ? c.buttonVertical : c.buttonHorizontal,
            children: l.intl.string(l.t.p89ACg)
          }), (0, r.jsx)(a.zx, {
            size: a.zx.Sizes.SMALL,
            look: a.zx.Looks.FILLED,
            color: a.zx.Colors.PRIMARY,
            onClick: b,
            className: g ? c.buttonVertical : c.buttonHorizontal,
            children: l.intl.string(l.t.gm1Ven)
          })]
        })]
      })
    })]
  })
}