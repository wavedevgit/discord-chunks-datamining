/** Chunk was on web.js **/
/** chunk id: 466711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk443603 = require("./443603.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk30989 = require("./30989.js"),
  Chunk564355 = require("./564355.js");

function A(e, t, n) {
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
      A(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function P(e) {
  return (0, r.jsx)(y.Z, {
    className: S.button,
    "aria-label": I.intl.string(I.t.Z1RnTk),
    isActive: false,
    noHover: true,
    onClick: e.onClick,
    children: (0, r.jsx)("div", {
      className: T.iconContainer,
      children: e.hovered ? (0, r.jsx)(l.Fmz, {
        className: T.giftBoxIcon,
        importData: e.config.getAnimationData
      }) : (0, r.jsx)(l.OgN, {})
    })
  })
}

function w(e) {
  let {
    Component: t,
    events: n,
    play: i
  } = (0, s.$)(), o = () => {
    var t;
    i(), null == (t = e.onClick) || t.call(e)
  };
  return (0, r.jsx)(y.Z, R(N({
    className: S.button,
    "aria-label": I.intl.string(I.t.Z1RnTk),
    isActive: false,
    noHover: true,
    onClick: o
  }, n), {
    children: (0, r.jsxs)("div", {
      className: T.iconContainer,
      children: [(0, r.jsx)(t, {
        className: T.trinketsIcon,
        color: "currentColor"
      }), e.hovered && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Fmz, {
          className: T.trinketsDecoration,
          importData: e.config.getAnimationData
        }), (0, r.jsx)("div", {
          className: T.trinketsGlowMask
        }), (0, r.jsx)(l.Fmz, {
          className: T.trinketsGlow,
          importData: e.config.getGlowAnimationData
        })]
      })]
    })
  }))
}
let D = Chunk70956.Z.Millis.DAYS_30;

function L(e) {
  var t;
  let {
    giftingPromotionConfig: n,
    disabled: s,
    channel: g
  } = e, {
    analyticsLocations: y
  } = (0, u.ZP)(c.Z.GIFT_BUTTON), [I, S] = i.useState(false), A = (0, o.e7)([h.Z], () => !(null === h.Z || true === h.Z ? true : h.Z.hasLayers())), N = (0, o.e7)([m.default], () => m.default.getCurrentUser()), C = null != N ? E.default.age(N.id) : 0, {
    giftBoxAnimation: R,
    trinketsAnimation: L
  } = null != (t = null == n ? true : n.chatGiftIcon) ? t : {}, x = null != n.firstTimeNotice && !s && A && C >= D, [M, j] = (0, f.XR)(x ? a.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, (0, d.t)(a.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK)), k = null != M, U = I || k, G = (0, b.Ft)(g);
  if (s) return null;
  let B = () => {
      (0, _.Z)({
        isGift: true,
        giftRecipient: null == G ? true : G,
        initialPlanId: null,
        analyticsLocations: y,
        analyticsObject: {
          page: g.isPrivate() ? O.ZY5.DM_CHANNEL : O.ZY5.GUILD_CHANNEL,
          section: O.jXE.CHANNEL_TEXT_AREA,
          object: O.qAy.GIFTING_PROMOTION_BUTTON,
          objectType: O.Qqv.GIFT
        }
      })
    },
    Z = () => {
      S(false), j(v.L.TAKE_ACTION), B()
    },
    F = true !== R ? (0, r.jsx)(P, {
      config: R,
      hovered: U,
      onClick: Z
    }) : true !== L ? (0, r.jsx)(w, {
      config: L,
      hovered: U,
      onClick: Z
    }) : (0, r.jsx)(l.OgN, {});
  return (0, r.jsx)("div", {
    className: T.container,
    onMouseEnter: () => {
      I || S(true)
    },
    onMouseLeave: () => {
      S(false)
    },
    children: true !== n.firstTimeNotice && k ? (0, r.jsx)(p.Z, {
      onComplete: () => S(false),
      onCheckItOutClick: B,
      markAsDismissed: j,
      config: n.firstTimeNotice,
      children: F
    }) : F
  })
}
let x = Chunk73800.memo(L)