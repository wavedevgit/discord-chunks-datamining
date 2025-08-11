/** Chunk was on web.js **/
/** chunk id: 810097, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => N,
  _1: () => I,
  jd: () => T
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk951394 = require("./951394.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk314897 = require("./314897.js"),
  Chunk837411 = require("./837411.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk341969 = require("./341969.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = 2700,
  T = "> -# *",
  S = {
    [Chunk228168.n_.AVATAR]: () => Chunk388032.intl.string(Chunk388032.t["fEUP/v"]),
    [Chunk228168.n_.STATUS]: () => Chunk388032.intl.string(Chunk388032.t.TKdBCw),
    [Chunk228168.n_.ACTIVITY]: () => Chunk388032.intl.string(Chunk388032.t.bSe71N)
  },
  A = {
    [Chunk228168.n_.AVATAR]: () => Chunk388032.intl.string(Chunk388032.t.xvN0fX),
    [Chunk228168.n_.STATUS]: () => Chunk388032.intl.string(Chunk388032.t["C/vzS0"]),
    [Chunk228168.n_.ACTIVITY]: () => Chunk388032.intl.string(Chunk388032.t.ObfsSk)
  };

function N(e) {
  let {
    user: t,
    sourceType: n,
    isVisible: o,
    isExpandable: b,
    interactionSourceId: O,
    targetRef: I,
    onAction: T,
    renderMoreButtonPopout: N
  } = e, C = i.useRef(null), R = (0, s.e7)([f.default], () => f.default.getId() === t.id), P = (0, _.Z)(t.id), {
    themeType: w
  } = (0, h.z)(), {
    onInteraction: D,
    onInteractionPopoutTargetRefChange: L
  } = (0, p.Xo)();
  if (t.bot || R || !P) return null;
  let x = () => {
      L(I), n === m.n_.AVATAR ? T({
        action: "PRESS_REACT_AVATAR"
      }) : n === m.n_.STATUS ? T({
        action: "PRESS_REACT_CUSTOM_STATUS"
      }) : T({
        action: "PRESS_REACT_ACTIVITY"
      }), null == D || D({
        interactionType: m.P.REACT,
        interactionSource: n,
        interactionSourceId: O
      }), w === m.lY.POPOUT && (0, d.Q3)(l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK)
    },
    M = () => {
      L(I), n === m.n_.AVATAR ? T({
        action: "PRESS_REPLY_AVATAR"
      }) : n === m.n_.STATUS ? T({
        action: "PRESS_REPLY_CUSTOM_STATUS"
      }) : T({
        action: "PRESS_REPLY_ACTIVITY"
      }), null == D || D({
        interactionType: m.P.REPLY,
        interactionSource: n,
        interactionSourceId: O
      }), w === m.lY.POPOUT && (0, d.Q3)(l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK)
    };
  return (0, r.jsxs)(u.ZP, {
    className: a()(E.popover, {
      [E.visible]: o,
      [E.expandable]: b,
      [E.statusPopover]: n === m.n_.STATUS,
      [E.avatarPopover]: n === m.n_.AVATAR,
      [E.activityPopover]: n === m.n_.ACTIVITY
    }),
    children: [(0, r.jsx)(c.DY3, {
      text: g.intl.string(g.t.nhaI4e),
      shouldShow: o,
      className: E.tooltipContainer,
      delay: 0,
      "aria-label": false,
      children: (0, r.jsx)(u.zx, {
        onClick: x,
        className: E.button,
        "aria-label": S[n](),
        "aria-haspopup": "dialog",
        children: (0, r.jsx)(c.EO4, {
          size: "xs",
          className: E.icon
        })
      })
    }), (0, r.jsx)(c.DY3, {
      text: g.intl.string(g.t.RmDYKC),
      shouldShow: o,
      className: E.tooltipContainer,
      delay: 0,
      "aria-label": false,
      children: (0, r.jsx)(u.zx, {
        onClick: M,
        className: E.button,
        "aria-label": A[n](),
        "aria-haspopup": "dialog",
        children: (0, r.jsx)(c.n$P, {
          size: "xs",
          className: E.icon
        })
      })
    }), null == N ? true : N(e => {
      let t = () => {
        var t;
        L(C), null == (t = e.onClick) || t.call(e)
      };
      return (0, r.jsx)(c.DY3, {
        text: g.intl.string(g.t.UKOtz8),
        shouldShow: o,
        className: E.tooltipContainer,
        delay: 0,
        "aria-label": false,
        children: (0, r.jsx)(u.zx, v(y({
          ref: C
        }, e), {
          onClick: t,
          className: E.button,
          "aria-label": g.intl.string(g.t.UKOtz8),
          children: (0, r.jsx)(c.xhG, {
            size: "xs",
            className: E.icon
          })
        }))
      })
    })]
  })
}