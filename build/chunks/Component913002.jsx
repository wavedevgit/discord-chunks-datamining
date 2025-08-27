/** Chunk was on web.js **/
/** chunk id: 913002, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk951394 = require("./951394.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk81064 = require("./81064.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = 300,
  O = e => (0, l.ZDy)(async () => {
    let {
      default: t
    } = await n.e("31649").then(n.bind(n, 475613));
    return n => (0, r.jsx)(t, b(g({}, n), {
      sourceAnalyticsLocations: e,
      location: "UserProfileCustomStatusBubbleEditBar"
    }))
  });

function v(e) {
  let {
    isVisible: t,
    isExpandable: n,
    onCloseProfile: a
  } = e, {
    analyticsLocations: m
  } = (0, u.ZP)(), {
    trackUserProfileAction: g
  } = (0, _.KZ)(), E = i.useRef(null), b = i.useRef(null), [v, I] = (0, s.Wu)([c.Z], () => [c.Z.useReducedMotion, c.Z.keyboardModeEnabled]), T = !n || v || I ? 0 : y, S = () => {
    g({
      action: "PRESS_EDIT_CUSTOM_STATUS"
    }), O(m), null == a || a()
  }, A = () => {
    g({
      action: "PRESS_CLEAR_CUSTOM_STATUS"
    }), f.Ok.updateSetting(true)
  };
  return (0, r.jsxs)(d.ZP, {
    className: o()(h.popover, {
      [h.visible]: t,
      [h.expandable]: n
    }),
    children: [(0, r.jsx)(l.DY3, {
      targetElementRef: E,
      text: p.intl.string(p.t.bt75u7),
      delay: T,
      "aria-label": false,
      children: (0, r.jsx)(d.zx, {
        ref: E,
        className: o()(h.button, h.left),
        "aria-label": p.intl.string(p.t.QdHxoq),
        "aria-haspopup": "dialog",
        onClick: S,
        children: (0, r.jsx)(l.vdY, {
          size: "xs",
          colorClass: h.icon
        })
      })
    }), (0, r.jsx)(l.DY3, {
      text: p.intl.string(p.t.VkKicX),
      delay: T,
      "aria-label": false,
      children: (0, r.jsx)(d.zx, {
        ref: b,
        className: o()(h.button, h.right),
        "aria-label": p.intl.string(p.t.wfYTHR),
        onClick: A,
        children: (0, r.jsx)(l.XHJ, {
          size: "xs",
          colorClass: h.icon
        })
      })
    })]
  })
}