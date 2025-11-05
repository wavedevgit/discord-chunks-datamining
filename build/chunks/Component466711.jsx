/** Chunk was on web.js **/
/** chunk id: 466711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk996146 = require("./996146.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk644916 = require("./644916.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk963249 = require("./963249.jsx"),
  Chunk802408 = require("./802408.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk594174 = require("./594174.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk51144 = require("./51144.js"),
  Chunk897291 = require("./897291.jsx"),
  Chunk443603 = require("./443603.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk30989 = require("./30989.js"),
  Chunk564355 = require("./564355.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function w(e) {
  return (0, r.jsx)(O.Z, {
    className: A.button,
    "aria-label": T.intl.string(T.t.Z1RnTk),
    isActive: false,
    noHover: true,
    onClick: e.onClick,
    children: (0, r.jsx)("div", {
      className: S.iconContainer,
      children: e.hovered ? (0, r.jsx)(l.Fmz, {
        className: S.giftBoxIcon,
        importData: e.config.getAnimationData
      }) : (0, r.jsx)(l.OgN, {})
    })
  })
}

function D(e) {
  let {
    Component: t,
    events: n,
    play: i
  } = (0, s.$)(), a = () => {
    var t;
    i(), null == (t = e.onClick) || t.call(e)
  };
  return (0, r.jsx)(O.Z, P(N({
    className: A.button,
    "aria-label": T.intl.string(T.t.Z1RnTk),
    isActive: false,
    noHover: true,
    onClick: a
  }, n), {
    children: (0, r.jsxs)("div", {
      className: S.iconContainer,
      children: [(0, r.jsx)(t, {
        className: S.trinketsIcon,
        color: "currentColor"
      }), e.hovered && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Fmz, {
          className: S.trinketsDecoration,
          importData: e.config.getAnimationData
        }), (0, r.jsx)(l.Fmz, {
          className: S.trinketsGlow,
          importData: e.config.getGlowAnimationData
        })]
      })]
    })
  }))
}
let x = Chunk70956.Z.Millis.DAYS_30;

function L(e) {
  var t;
  let {
    giftingPromotionConfig: n,
    disabled: s,
    channel: l
  } = e, {
    analyticsLocations: g
  } = (0, u.ZP)(c.Z.GIFT_BUTTON), [O, T] = i.useState(false), A = (0, a.e7)([h.Z], () => !(null === h.Z || true === h.Z ? true : h.Z.hasLayers())), C = (0, a.e7)([m.default], () => m.default.getCurrentUser()), N = null != C ? E.default.age(C.id) : 0, {
    giftBoxAnimation: R,
    trinketsAnimation: P
  } = null != (t = null == n ? true : n.chatGiftIcon) ? t : {}, L = null != n.firstTimeNotice && !s && A && N >= x, [M, j] = (0, f.XR)(L ? o.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, (0, d.t)(o.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK)), k = null != M, U = O || k, G = (0, b.Ft)(l);
  if (s) return null;
  let B = () => {
      (0, _.Z)({
        isGift: true,
        giftRecipient: null == G ? true : G,
        initialPlanId: null,
        analyticsLocations: g,
        analyticsObject: {
          page: l.isPrivate() ? v.ZY5.DM_CHANNEL : v.ZY5.GUILD_CHANNEL,
          section: v.jXE.CHANNEL_TEXT_AREA,
          object: v.qAy.GIFTING_PROMOTION_BUTTON,
          objectType: v.AnalyticsObjectTypes.GIFT
        }
      })
    },
    Z = () => {
      T(false), j(I.L.TAKE_ACTION), B()
    },
    F = true !== R ? (0, r.jsx)(w, {
      config: R,
      hovered: U,
      onClick: Z
    }) : true !== P ? (0, r.jsx)(D, {
      config: P,
      hovered: U,
      onClick: Z
    }) : (0, r.jsx)(y.Z, {
      disabled: s,
      channel: l
    });
  return (0, r.jsx)("div", {
    className: S.container,
    onMouseEnter: () => {
      O || T(true)
    },
    onMouseLeave: () => {
      T(false)
    },
    children: true !== n.firstTimeNotice && k ? (0, r.jsx)(p.Z, {
      onComplete: () => T(false),
      onCheckItOutClick: B,
      markAsDismissed: j,
      config: n.firstTimeNotice,
      children: F
    }) : F
  })
}
let M = Chunk647438.memo(L)