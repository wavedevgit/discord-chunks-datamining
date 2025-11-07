/** Chunk was on web.js **/
/** chunk id: 466711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
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
  Chunk998030 = require("./998030.js"),
  Chunk802408 = require("./802408.jsx"),
  Chunk909917 = require("./909917.jsx"),
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

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x(e) {
  return (0, r.jsx)(I.Z, {
    className: N.button,
    "aria-label": A.intl.string(A.t.Z1RnTk),
    isActive: false,
    noHover: true,
    onClick: e.onClick,
    children: (0, r.jsx)("div", {
      className: C.iconContainer,
      children: e.hovered ? (0, r.jsx)(l.Fmz, {
        className: C.giftBoxIcon,
        importData: e.config.getAnimationData
      }) : (0, r.jsx)(l.OgN, {})
    })
  })
}

function L(e) {
  let {
    Component: t,
    events: n,
    play: i
  } = (0, s.$)(), a = () => {
    var t;
    i(), null == (t = e.onClick) || t.call(e)
  };
  return (0, r.jsx)(I.Z, D(P({
    className: N.button,
    "aria-label": A.intl.string(A.t.Z1RnTk),
    isActive: false,
    noHover: true,
    onClick: a
  }, n), {
    children: (0, r.jsxs)("div", {
      className: C.iconContainer,
      children: [(0, r.jsx)(t, {
        className: C.trinketsIcon,
        color: "currentColor"
      }), e.hovered && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Fmz, {
          className: C.trinketsDecoration,
          importData: e.config.getAnimationData
        }), (0, r.jsx)(l.Fmz, {
          className: C.trinketsGlow,
          importData: e.config.getGlowAnimationData
        })]
      })]
    })
  }))
}
let M = Chunk70956.Z.Millis.DAYS_30;

function j(e) {
  var t;
  let {
    giftingPromotionConfig: n,
    disabled: s,
    channel: l
  } = e, {
    analyticsLocations: b
  } = (0, u.ZP)(c.Z.GIFT_BUTTON), [I, A] = i.useState(false), N = (0, a.e7)([g.Z], () => !(null === g.Z || true === g.Z ? true : g.Z.hasLayers())), R = (0, a.e7)([E.default], () => E.default.getCurrentUser()), P = null != R ? y.default.age(R.id) : 0, {
    giftBoxAnimation: w,
    trinketsAnimation: D
  } = null != (t = null == n ? true : n.chatGiftIcon) ? t : {}, j = null != n.firstTimeNotice && !s && N && P >= M, [k, U] = (0, f.XR)(j ? o.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, (0, d.t)(o.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK)), G = null != k, B = I || G, Z = (0, O.Ft)(l), F = (0, p.yc)({
    location: "gift-button"
  }), V = l.type === S.d4z.DM;
  if (s) return null;
  let H = () => {
      F && V && null != Z ? (0, m.Z)({
        giftRecipient: Z,
        analyticsLocations: b,
        analyticsObject: {
          page: l.isPrivate() ? S.ZY5.DM_CHANNEL : S.ZY5.GUILD_CHANNEL,
          section: S.jXE.CHANNEL_TEXT_AREA,
          object: S.qAy.BUTTON_ICON,
          objectType: S.AnalyticsObjectTypes.GIFT
        }
      }) : (0, _.Z)({
        isGift: true,
        giftRecipient: null == Z ? true : Z,
        initialPlanId: null,
        analyticsLocations: b,
        analyticsObject: {
          page: l.isPrivate() ? S.ZY5.DM_CHANNEL : S.ZY5.GUILD_CHANNEL,
          section: S.jXE.CHANNEL_TEXT_AREA,
          object: S.qAy.GIFTING_PROMOTION_BUTTON,
          objectType: S.AnalyticsObjectTypes.GIFT
        }
      })
    },
    Y = () => {
      A(false), U(T.L.TAKE_ACTION), H()
    },
    W = true !== w ? (0, r.jsx)(x, {
      config: w,
      hovered: B,
      onClick: Y
    }) : true !== D ? (0, r.jsx)(L, {
      config: D,
      hovered: B,
      onClick: Y
    }) : (0, r.jsx)(v.Z, {
      disabled: s,
      channel: l
    });
  return (0, r.jsx)("div", {
    className: C.container,
    onMouseEnter: () => {
      I || A(true)
    },
    onMouseLeave: () => {
      A(false)
    },
    children: true !== n.firstTimeNotice && G ? (0, r.jsx)(h.Z, {
      onComplete: () => A(false),
      onCheckItOutClick: H,
      markAsDismissed: U,
      config: n.firstTimeNotice,
      children: W
    }) : W
  })
}
let k = Chunk647438.memo(j)