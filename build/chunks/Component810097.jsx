/** Chunk was on web.js **/
/** chunk id: 810097, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => S,
  _1: () => O,
  jd: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk951394 = require("./951394.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk837411 = require("./837411.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk734623 = require("./734623.js");

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
let O = 2700,
  v = "> -# *",
  I = {
    [Chunk228168.n_.AVATAR]: () => Chunk388032.intl.string(Chunk388032.t["fEUP/i"]),
    [Chunk228168.n_.STATUS]: () => Chunk388032.intl.string(Chunk388032.t.TKdBC8),
    [Chunk228168.n_.ACTIVITY]: () => Chunk388032.intl.string(Chunk388032.t.bSe71F)
  },
  T = {
    [Chunk228168.n_.AVATAR]: () => Chunk388032.intl.string(Chunk388032.t.xvN0fV),
    [Chunk228168.n_.STATUS]: () => Chunk388032.intl.string(Chunk388032.t["C/vzS7"]),
    [Chunk228168.n_.ACTIVITY]: () => Chunk388032.intl.string(Chunk388032.t.ObfsSj)
  };

function S(e) {
  let {
    user: t,
    sourceType: n,
    isVisible: a,
    isExpandable: g,
    interactionSourceId: b,
    targetRef: O,
    onAction: v,
    renderMoreButtonPopout: S
  } = e, A = i.useRef(null), C = (0, s.e7)([d.default], () => d.default.getId() === t.id), N = (0, f.Z)(t.id), {
    onInteraction: R,
    onInteractionPopoutTargetRefChange: P
  } = (0, _.Xo)();
  if (t.bot || C || !N) return null;
  let D = () => {
      P(O), n === p.n_.AVATAR ? v({
        action: "PRESS_REACT_AVATAR"
      }) : n === p.n_.STATUS ? v({
        action: "PRESS_REACT_CUSTOM_STATUS"
      }) : v({
        action: "PRESS_REACT_ACTIVITY"
      }), null == R || R({
        interactionType: p.P.REACT,
        interactionSource: n,
        interactionSourceId: b
      })
    },
    w = () => {
      P(O), n === p.n_.AVATAR ? v({
        action: "PRESS_REPLY_AVATAR"
      }) : n === p.n_.STATUS ? v({
        action: "PRESS_REPLY_CUSTOM_STATUS"
      }) : v({
        action: "PRESS_REPLY_ACTIVITY"
      }), null == R || R({
        interactionType: p.P.REPLY,
        interactionSource: n,
        interactionSourceId: b
      })
    };
  return (0, r.jsxs)(u.ZP, {
    className: o()(m.popover, {
      [m.visible]: a,
      [m.expandable]: g,
      [m.statusPopover]: n === p.n_.STATUS,
      [m.avatarPopover]: n === p.n_.AVATAR,
      [m.activityPopover]: n === p.n_.ACTIVITY
    }),
    children: [(0, r.jsx)(l.u, {
      asContainer: true,
      text: h.intl.string(h.t.nhaI4b),
      shouldShow: a,
      delay: 0,
      "aria-label": false,
      children: (0, r.jsx)(u.zx, {
        onClick: D,
        className: m.button,
        "aria-label": I[n](),
        "aria-haspopup": "dialog",
        children: (0, r.jsx)(c.EO4, {
          size: "xs",
          className: m.icon
        })
      })
    }), (0, r.jsx)(l.u, {
      asContainer: true,
      text: h.intl.string(h.t.RmDYKK),
      shouldShow: a,
      delay: 0,
      "aria-label": false,
      children: (0, r.jsx)(u.zx, {
        onClick: w,
        className: m.button,
        "aria-label": T[n](),
        "aria-haspopup": "dialog",
        children: (0, r.jsx)(c.n$P, {
          size: "xs",
          className: m.icon
        })
      })
    }), null == S ? true : S(e => {
      let t = () => {
        var t;
        P(A), null == (t = e.onClick) || t.call(e)
      };
      return (0, r.jsx)(l.u, {
        asContainer: true,
        text: h.intl.string(h.t["UKOtz+"]),
        shouldShow: a,
        delay: 0,
        "aria-label": false,
        children: (0, r.jsx)(u.zx, y(E({
          ref: A
        }, e), {
          onClick: t,
          className: m.button,
          "aria-label": h.intl.string(h.t["UKOtz+"]),
          children: (0, r.jsx)(c.xhG, {
            size: "xs",
            className: m.icon
          })
        }))
      })
    })]
  })
}