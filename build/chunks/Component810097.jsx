/** Chunk was on web.js **/
/** chunk id: 810097, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => T,
  _1: () => O,
  jd: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk46833 = require("./46833.js");

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
  S = {
    [Chunk228168.n_.AVATAR]: () => m.intl.string(m.t["fEUP/i"]),
    [Chunk228168.n_.STATUS]: () => m.intl.string(m.t.TKdBC8),
    [Chunk228168.n_.ACTIVITY]: () => m.intl.string(m.t.bSe71F)
  },
  I = {
    [Chunk228168.n_.AVATAR]: () => m.intl.string(m.t.xvN0fV),
    [Chunk228168.n_.STATUS]: () => m.intl.string(m.t["C/vzS7"]),
    [Chunk228168.n_.ACTIVITY]: () => m.intl.string(m.t.ObfsSj)
  };

function T(e) {
  let {
    user: t,
    sourceType: n,
    isVisible: a,
    isExpandable: g,
    interactionSourceId: b,
    targetRef: O,
    onAction: v,
    renderMoreButtonPopout: T
  } = e, C = i.useRef(null), A = (0, s.e7)([d.default], () => d.default.getId() === t.id), N = (0, f.Z)(t.id), {
    onInteraction: P,
    onInteractionPopoutTargetRefChange: R
  } = (0, p.Xo)();
  if (t.bot || A || !N) return null;
  let w = () => {
      R(O), n === _.n_.AVATAR ? v({
        action: "PRESS_REACT_AVATAR"
      }) : n === _.n_.STATUS ? v({
        action: "PRESS_REACT_CUSTOM_STATUS"
      }) : v({
        action: "PRESS_REACT_ACTIVITY"
      }), null == P || P({
        interactionType: _.P.REACT,
        interactionSource: n,
        interactionSourceId: b
      })
    },
    D = () => {
      R(O), n === _.n_.AVATAR ? v({
        action: "PRESS_REPLY_AVATAR"
      }) : n === _.n_.STATUS ? v({
        action: "PRESS_REPLY_CUSTOM_STATUS"
      }) : v({
        action: "PRESS_REPLY_ACTIVITY"
      }), null == P || P({
        interactionType: _.P.REPLY,
        interactionSource: n,
        interactionSourceId: b
      })
    };
  return (0, r.jsxs)(u.ZP, {
    className: o()(h.popover, {
      [h.visible]: a,
      [h.expandable]: g,
      [h.statusPopover]: n === _.n_.STATUS,
      [h.avatarPopover]: n === _.n_.AVATAR,
      [h.activityPopover]: n === _.n_.ACTIVITY
    }),
    children: [(0, r.jsx)(l.u, {
      asContainer: true,
      text: m.intl.string(m.t.nhaI4b),
      shouldShow: a,
      delay: 0,
      ariaHidden: true,
      children: (0, r.jsx)(u.zx, {
        onClick: w,
        className: h.button,
        "aria-label": S[n](),
        "aria-haspopup": "dialog",
        children: (0, r.jsx)(c.EO4, {
          size: "xs",
          className: h.icon
        })
      })
    }), (0, r.jsx)(l.u, {
      asContainer: true,
      text: m.intl.string(m.t.RmDYKK),
      shouldShow: a,
      delay: 0,
      ariaHidden: true,
      children: (0, r.jsx)(u.zx, {
        onClick: D,
        className: h.button,
        "aria-label": I[n](),
        "aria-haspopup": "dialog",
        children: (0, r.jsx)(c.n$P, {
          size: "xs",
          className: h.icon
        })
      })
    }), null == T ? true : T(e => {
      let t = () => {
        var t;
        R(C), null == (t = e.onClick) || t.call(e)
      };
      return (0, r.jsx)(l.u, {
        asContainer: true,
        text: m.intl.string(m.t["UKOtz+"]),
        shouldShow: a,
        delay: 0,
        ariaHidden: true,
        children: (0, r.jsx)(u.zx, y(E({
          ref: C
        }, e), {
          onClick: t,
          className: h.button,
          "aria-label": m.intl.string(m.t["UKOtz+"]),
          children: (0, r.jsx)(c.xhG, {
            size: "xs",
            className: h.icon
          })
        }))
      })
    })]
  })
}