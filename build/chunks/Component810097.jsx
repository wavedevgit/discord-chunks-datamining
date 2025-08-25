/** Chunk was on web.js **/
/** chunk id: 810097, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => T,
  _1: () => y,
  jd: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk951394 = require("./951394.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk837411 = require("./837411.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk734623 = require("./734623.js");

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
let y = 2700,
  O = "> -# *",
  v = {
    [Chunk228168.n_.AVATAR]: () => Chunk388032.intl.string(Chunk388032.t["fEUP/v"]),
    [Chunk228168.n_.STATUS]: () => Chunk388032.intl.string(Chunk388032.t.TKdBCw),
    [Chunk228168.n_.ACTIVITY]: () => Chunk388032.intl.string(Chunk388032.t.bSe71N)
  },
  I = {
    [Chunk228168.n_.AVATAR]: () => Chunk388032.intl.string(Chunk388032.t.xvN0fX),
    [Chunk228168.n_.STATUS]: () => Chunk388032.intl.string(Chunk388032.t["C/vzS0"]),
    [Chunk228168.n_.ACTIVITY]: () => Chunk388032.intl.string(Chunk388032.t.ObfsSk)
  };

function T(e) {
  let {
    user: t,
    sourceType: n,
    isVisible: o,
    isExpandable: m,
    interactionSourceId: E,
    targetRef: y,
    onAction: O,
    renderMoreButtonPopout: T
  } = e, S = i.useRef(null), A = (0, s.e7)([u.default], () => u.default.getId() === t.id), C = (0, d.Z)(t.id), {
    onInteraction: N,
    onInteractionPopoutTargetRefChange: R
  } = (0, f.Xo)();
  if (t.bot || A || !C) return null;
  let P = () => {
      R(y), n === _.n_.AVATAR ? O({
        action: "PRESS_REACT_AVATAR"
      }) : n === _.n_.STATUS ? O({
        action: "PRESS_REACT_CUSTOM_STATUS"
      }) : O({
        action: "PRESS_REACT_ACTIVITY"
      }), null == N || N({
        interactionType: _.P.REACT,
        interactionSource: n,
        interactionSourceId: E
      })
    },
    w = () => {
      R(y), n === _.n_.AVATAR ? O({
        action: "PRESS_REPLY_AVATAR"
      }) : n === _.n_.STATUS ? O({
        action: "PRESS_REPLY_CUSTOM_STATUS"
      }) : O({
        action: "PRESS_REPLY_ACTIVITY"
      }), null == N || N({
        interactionType: _.P.REPLY,
        interactionSource: n,
        interactionSourceId: E
      })
    };
  return (0, r.jsxs)(c.ZP, {
    className: a()(h.popover, {
      [h.visible]: o,
      [h.expandable]: m,
      [h.statusPopover]: n === _.n_.STATUS,
      [h.avatarPopover]: n === _.n_.AVATAR,
      [h.activityPopover]: n === _.n_.ACTIVITY
    }),
    children: [(0, r.jsx)(l.DY3, {
      text: p.intl.string(p.t.nhaI4e),
      shouldShow: o,
      className: h.tooltipContainer,
      delay: 0,
      "aria-label": false,
      children: (0, r.jsx)(c.zx, {
        onClick: P,
        className: h.button,
        "aria-label": v[n](),
        "aria-haspopup": "dialog",
        children: (0, r.jsx)(l.EO4, {
          size: "xs",
          className: h.icon
        })
      })
    }), (0, r.jsx)(l.DY3, {
      text: p.intl.string(p.t.RmDYKC),
      shouldShow: o,
      className: h.tooltipContainer,
      delay: 0,
      "aria-label": false,
      children: (0, r.jsx)(c.zx, {
        onClick: w,
        className: h.button,
        "aria-label": I[n](),
        "aria-haspopup": "dialog",
        children: (0, r.jsx)(l.n$P, {
          size: "xs",
          className: h.icon
        })
      })
    }), null == T ? true : T(e => {
      let t = () => {
        var t;
        R(S), null == (t = e.onClick) || t.call(e)
      };
      return (0, r.jsx)(l.DY3, {
        text: p.intl.string(p.t.UKOtz8),
        shouldShow: o,
        className: h.tooltipContainer,
        delay: 0,
        "aria-label": false,
        children: (0, r.jsx)(c.zx, b(g({
          ref: S
        }, e), {
          onClick: t,
          className: h.button,
          "aria-label": p.intl.string(p.t.UKOtz8),
          children: (0, r.jsx)(l.xhG, {
            size: "xs",
            className: h.icon
          })
        }))
      })
    })]
  })
}