/** Chunk was on web.js **/
/** chunk id: 913002, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk951394 = require("./951394.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk81064 = require("./81064.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = 300,
  v = e => (0, c.ZDy)(async () => {
    let {
      default: t
    } = await n.e("76215").then(n.bind(n, 66630));
    return n => (0, r.jsx)(t, y(E({}, n), {
      sourceAnalyticsLocations: e
    }))
  });

function S(e) {
  let {
    isVisible: t,
    isExpandable: n,
    onCloseProfile: o
  } = e, {
    analyticsLocations: g
  } = (0, d.ZP)(), {
    trackUserProfileAction: E
  } = (0, _.KZ)(), b = i.useRef(null), y = i.useRef(null), [S, I] = (0, s.Wu)([u.Z], () => [u.Z.useReducedMotion, u.Z.keyboardModeEnabled]), T = !n || S || I ? 0 : O, C = () => {
    E({
      action: "PRESS_EDIT_CUSTOM_STATUS"
    }), v(g), null == o || o()
  }, A = () => {
    E({
      action: "PRESS_CLEAR_CUSTOM_STATUS"
    }), p.Ok.updateSetting(true)
  };
  return (0, r.jsxs)(f.ZP, {
    className: a()(h.popover, {
      [h.visible]: t,
      [h.expandable]: n
    }),
    children: [(0, r.jsx)(l.u, {
      asContainer: true,
      targetElementRef: b,
      text: m.intl.string(m.t.bt75uw),
      delay: T,
      ariaHidden: true,
      children: (0, r.jsx)(f.zx, {
        ref: b,
        className: a()(h.button, h.left),
        "aria-label": m.intl.string(m.t.QdHxos),
        "aria-haspopup": "dialog",
        onClick: C,
        children: (0, r.jsx)(c.vdY, {
          size: "xs",
          colorClass: h.icon
        })
      })
    }), (0, r.jsx)(l.u, {
      asContainer: true,
      text: m.intl.string(m.t.VkKicb),
      delay: T,
      ariaHidden: true,
      children: (0, r.jsx)(f.zx, {
        ref: y,
        className: a()(h.button, h.right),
        "aria-label": m.intl.string(m.t.wfYTHe),
        onClick: A,
        children: (0, r.jsx)(c.XHJ, {
          size: "xs",
          colorClass: h.icon
        })
      })
    })]
  })
}