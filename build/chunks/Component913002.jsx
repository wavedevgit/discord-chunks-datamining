/** Chunk was on web.js **/
/** chunk id: 913002, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk951394 = require("./951394.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk650054 = require("./650054.js");

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

function I(e) {
  let {
    isVisible: t,
    isExpandable: n,
    onCloseProfile: a
  } = e, {
    analyticsLocations: g
  } = (0, d.ZP)(), {
    trackUserProfileAction: E
  } = (0, p.KZ)(), b = i.useRef(null), y = i.useRef(null), [I, S] = (0, s.Wu)([u.Z], () => [u.Z.useReducedMotion, u.Z.keyboardModeEnabled]), T = !n || I || S ? 0 : O, A = () => {
    E({
      action: "PRESS_EDIT_CUSTOM_STATUS"
    }), v(g), null == a || a()
  }, C = () => {
    E({
      action: "PRESS_CLEAR_CUSTOM_STATUS"
    }), _.Ok.updateSetting(true)
  };
  return (0, r.jsxs)(f.ZP, {
    className: o()(m.popover, {
      [m.visible]: t,
      [m.expandable]: n
    }),
    children: [(0, r.jsx)(l.u, {
      asContainer: true,
      targetElementRef: b,
      text: h.intl.string(h.t.bt75uw),
      delay: T,
      "aria-label": false,
      children: (0, r.jsx)(f.zx, {
        ref: b,
        className: o()(m.button, m.left),
        "aria-label": h.intl.string(h.t.QdHxos),
        "aria-haspopup": "dialog",
        onClick: A,
        children: (0, r.jsx)(c.vdY, {
          size: "xs",
          colorClass: m.icon
        })
      })
    }), (0, r.jsx)(l.u, {
      asContainer: true,
      text: h.intl.string(h.t.VkKicb),
      delay: T,
      "aria-label": false,
      children: (0, r.jsx)(f.zx, {
        ref: y,
        className: o()(m.button, m.right),
        "aria-label": h.intl.string(h.t.wfYTHe),
        onClick: C,
        children: (0, r.jsx)(c.XHJ, {
          size: "xs",
          colorClass: m.icon
        })
      })
    })]
  })
}