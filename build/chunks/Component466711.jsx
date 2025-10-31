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
  Chunk107756 = require("./107756.js"),
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

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function D(e) {
  return (0, r.jsx)(v.Z, {
    className: C.button,
    "aria-label": S.intl.string(S.t.Z1RnTk),
    isActive: false,
    noHover: true,
    onClick: e.onClick,
    children: (0, r.jsx)("div", {
      className: A.iconContainer,
      children: e.hovered ? (0, r.jsx)(l.Fmz, {
        className: A.giftBoxIcon,
        importData: e.config.getAnimationData
      }) : (0, r.jsx)(l.OgN, {})
    })
  })
}

function x(e) {
  let {
    Component: t,
    events: n,
    play: i
  } = (0, s.$)(), a = () => {
    var t;
    i(), null == (t = e.onClick) || t.call(e)
  };
  return (0, r.jsx)(v.Z, w(R({
    className: C.button,
    "aria-label": S.intl.string(S.t.Z1RnTk),
    isActive: false,
    noHover: true,
    onClick: a
  }, n), {
    children: (0, r.jsxs)("div", {
      className: A.iconContainer,
      children: [(0, r.jsx)(t, {
        className: A.trinketsIcon,
        color: "currentColor"
      }), e.hovered && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Fmz, {
          className: A.trinketsDecoration,
          importData: e.config.getAnimationData
        }), (0, r.jsx)(l.Fmz, {
          className: A.trinketsGlow,
          importData: e.config.getGlowAnimationData
        })]
      })]
    })
  }))
}
let L = Chunk70956.Z.Millis.DAYS_30;

function M(e) {
  var t;
  let {
    giftingPromotionConfig: n,
    disabled: s,
    channel: l
  } = e, {
    analyticsLocations: E
  } = (0, u.ZP)(c.Z.GIFT_BUTTON), [v, S] = i.useState(false), C = (0, a.e7)([m.Z], () => !(null === m.Z || true === m.Z ? true : m.Z.hasLayers())), N = (0, a.e7)([g.default], () => g.default.getCurrentUser()), R = null != N ? b.default.age(N.id) : 0, {
    giftBoxAnimation: P,
    trinketsAnimation: w
  } = null != (t = null == n ? true : n.chatGiftIcon) ? t : {}, M = null != n.firstTimeNotice && !s && C && R >= L, [k, j] = (0, f.XR)(M ? o.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, (0, d.t)(o.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK)), U = null != k, G = v || U, B = (0, y.Ft)(l), Z = (0, p.IH)();
  if (s) return null;
  let F = () => {
      (0, _.Z)({
        isGift: true,
        giftRecipient: null == B ? true : B,
        initialPlanId: null,
        analyticsLocations: E,
        analyticsObject: {
          page: l.isPrivate() ? I.ZY5.DM_CHANNEL : I.ZY5.GUILD_CHANNEL,
          section: I.jXE.CHANNEL_TEXT_AREA,
          object: I.qAy.GIFTING_PROMOTION_BUTTON,
          objectType: I.AnalyticsObjectTypes.GIFT
        }
      })
    },
    V = () => {
      S(false), j(T.L.TAKE_ACTION), F()
    },
    H = true !== P ? (0, r.jsx)(D, {
      config: P,
      hovered: G,
      onClick: V
    }) : true !== w && Z ? (0, r.jsx)(x, {
      config: w,
      hovered: G,
      onClick: V
    }) : (0, r.jsx)(O.Z, {
      disabled: s,
      channel: l
    });
  return (0, r.jsx)("div", {
    className: A.container,
    onMouseEnter: () => {
      v || S(true)
    },
    onMouseLeave: () => {
      S(false)
    },
    children: true !== n.firstTimeNotice && U ? (0, r.jsx)(h.Z, {
      onComplete: () => S(false),
      onCheckItOutClick: F,
      markAsDismissed: j,
      config: n.firstTimeNotice,
      children: H
    }) : H
  })
}
let k = Chunk647438.memo(M)