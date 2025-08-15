/** Chunk was on web.js **/
/** chunk id: 810097, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => C,
  _1: () => T,
  jd: () => S
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk734623 = require("./734623.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = 2700,
  S = "> -# *",
  A = {
    [Chunk228168.n_.AVATAR]: () => Chunk388032.intl.string(Chunk388032.t["fEUP/v"]),
    [Chunk228168.n_.STATUS]: () => Chunk388032.intl.string(Chunk388032.t.TKdBCw),
    [Chunk228168.n_.ACTIVITY]: () => Chunk388032.intl.string(Chunk388032.t.bSe71N)
  },
  N = {
    [Chunk228168.n_.AVATAR]: () => Chunk388032.intl.string(Chunk388032.t.xvN0fX),
    [Chunk228168.n_.STATUS]: () => Chunk388032.intl.string(Chunk388032.t["C/vzS0"]),
    [Chunk228168.n_.ACTIVITY]: () => Chunk388032.intl.string(Chunk388032.t.ObfsSk)
  };

function C(e) {
  let {
    user: t,
    sourceType: n,
    isVisible: a,
    isExpandable: y,
    interactionSourceId: v,
    targetRef: T,
    onAction: S,
    renderMoreButtonPopout: C
  } = e, R = i.useRef(null), P = (0, s.e7)([f.default], () => f.default.getId() === t.id), w = (0, _.Z)(t.id), {
    themeType: D
  } = (0, h.z)(), {
    onInteraction: L,
    onInteractionPopoutTargetRefChange: x
  } = (0, p.Xo)();
  if (t.bot || P || !w) return null;
  let M = () => {
      x(T), n === m.n_.AVATAR ? S({
        action: "PRESS_REACT_AVATAR"
      }) : n === m.n_.STATUS ? S({
        action: "PRESS_REACT_CUSTOM_STATUS"
      }) : S({
        action: "PRESS_REACT_ACTIVITY"
      }), null == L || L({
        interactionType: m.P.REACT,
        interactionSource: n,
        interactionSourceId: v
      }), D === g.l.POPOUT && (0, d.Q3)(l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK)
    },
    k = () => {
      x(T), n === m.n_.AVATAR ? S({
        action: "PRESS_REPLY_AVATAR"
      }) : n === m.n_.STATUS ? S({
        action: "PRESS_REPLY_CUSTOM_STATUS"
      }) : S({
        action: "PRESS_REPLY_ACTIVITY"
      }), null == L || L({
        interactionType: m.P.REPLY,
        interactionSource: n,
        interactionSourceId: v
      }), D === g.l.POPOUT && (0, d.Q3)(l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK)
    };
  return (0, r.jsxs)(u.ZP, {
    className: o()(b.popover, {
      [b.visible]: a,
      [b.expandable]: y,
      [b.statusPopover]: n === m.n_.STATUS,
      [b.avatarPopover]: n === m.n_.AVATAR,
      [b.activityPopover]: n === m.n_.ACTIVITY
    }),
    children: [(0, r.jsx)(c.DY3, {
      text: E.intl.string(E.t.nhaI4e),
      shouldShow: a,
      className: b.tooltipContainer,
      delay: 0,
      "aria-label": false,
      children: (0, r.jsx)(u.zx, {
        onClick: M,
        className: b.button,
        "aria-label": A[n](),
        "aria-haspopup": "dialog",
        children: (0, r.jsx)(c.EO4, {
          size: "xs",
          className: b.icon
        })
      })
    }), (0, r.jsx)(c.DY3, {
      text: E.intl.string(E.t.RmDYKC),
      shouldShow: a,
      className: b.tooltipContainer,
      delay: 0,
      "aria-label": false,
      children: (0, r.jsx)(u.zx, {
        onClick: k,
        className: b.button,
        "aria-label": N[n](),
        "aria-haspopup": "dialog",
        children: (0, r.jsx)(c.n$P, {
          size: "xs",
          className: b.icon
        })
      })
    }), null == C ? true : C(e => {
      let t = () => {
        var t;
        x(R), null == (t = e.onClick) || t.call(e)
      };
      return (0, r.jsx)(c.DY3, {
        text: E.intl.string(E.t.UKOtz8),
        shouldShow: a,
        className: b.tooltipContainer,
        delay: 0,
        "aria-label": false,
        children: (0, r.jsx)(u.zx, I(O({
          ref: R
        }, e), {
          onClick: t,
          className: b.button,
          "aria-label": E.intl.string(E.t.UKOtz8),
          children: (0, r.jsx)(c.xhG, {
            size: "xs",
            className: b.icon
          })
        }))
      })
    })]
  })
}