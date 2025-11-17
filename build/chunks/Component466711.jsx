/** Chunk was on web.js **/
/** chunk id: 466711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk996146 = require("./996146.jsx"),
  Chunk681715 = require("./681715.js"),
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
  Chunk713913 = require("./713913.js"),
  Chunk897291 = require("./897291.jsx"),
  Chunk443603 = require("./443603.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk30989 = require("./30989.js"),
  Chunk564355 = require("./564355.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function L(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e) {
  let {
    tooltipsWithKeybinds: t
  } = I.n.useConfig({
    location: "TrinketsAnimationButton"
  });
  return (0, r.jsx)(l.u, {
    shouldShow: t,
    text: N.intl.string(N.t.Ve9Ge6),
    children: (0, r.jsx)(S.Z, {
      className: P.button,
      "aria-label": N.intl.string(N.t.Z1RnTk),
      isActive: false,
      noHover: true,
      onClick: e.onClick,
      children: (0, r.jsx)("div", {
        className: R.iconContainer,
        children: e.hovered ? (0, r.jsx)(c.Fmz, {
          className: R.giftBoxIcon,
          importData: e.config.getAnimationData
        }) : (0, r.jsx)(c.OgN, {})
      })
    })
  })
}

function k(e) {
  let {
    Component: t,
    events: n,
    play: i
  } = (0, s.$)(), {
    tooltipsWithKeybinds: a
  } = I.n.useConfig({
    location: "TrinketsAnimationButton"
  }), o = () => {
    var t;
    i(), null == (t = e.onClick) || t.call(e)
  };
  return (0, r.jsx)(l.u, {
    shouldShow: a,
    text: N.intl.string(N.t.Ve9Ge6),
    children: (0, r.jsx)(S.Z, x(w({
      className: P.button,
      "aria-label": N.intl.string(N.t.Z1RnTk),
      isActive: false,
      noHover: true,
      onClick: o
    }, n), {
      children: (0, r.jsxs)("div", {
        className: R.iconContainer,
        children: [(0, r.jsx)(t, {
          className: R.trinketsIcon,
          color: "currentColor"
        }), e.hovered && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(c.Fmz, {
            className: R.trinketsDecoration,
            importData: e.config.getAnimationData
          }), (0, r.jsx)(c.Fmz, {
            className: R.trinketsGlow,
            importData: e.config.getGlowAnimationData
          })]
        })]
      })
    }))
  })
}
let j = Chunk70956.Z.Millis.DAYS_30;

function U(e) {
  var t;
  let {
    giftingPromotionConfig: n,
    disabled: s,
    channel: l
  } = e, {
    analyticsLocations: c
  } = (0, d.ZP)(u.Z.GIFT_BUTTON), [y, I] = i.useState(false), S = (0, a.e7)([E.Z], () => !(null === E.Z || true === E.Z ? true : E.Z.hasLayers())), N = (0, a.e7)([b.default], () => b.default.getCurrentUser()), P = null != N ? O.default.age(N.id) : 0, {
    giftBoxAnimation: D,
    trinketsAnimation: w
  } = null != (t = null == n ? true : n.chatGiftIcon) ? t : {}, L = null != n.firstTimeNotice && !s && S && P >= j, [x, U] = (0, _.XR)(L ? o.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, (0, f.t)(o.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK)), G = null != x, B = y || G, Z = (0, v.Ft)(l), F = (0, h.yc)({
    location: "gift-button"
  }), V = l.type === A.d4z.DM;
  if (s) return null;
  let H = () => {
      F && V && null != Z ? (0, g.Z)({
        giftRecipient: Z,
        analyticsLocations: c,
        analyticsObject: {
          page: l.isPrivate() ? A.ZY5.DM_CHANNEL : A.ZY5.GUILD_CHANNEL,
          section: A.jXE.CHANNEL_TEXT_AREA,
          object: A.qAy.BUTTON_ICON,
          objectType: A.AnalyticsObjectTypes.GIFT
        }
      }) : (0, p.Z)({
        isGift: true,
        giftRecipient: null == Z ? true : Z,
        initialPlanId: null,
        analyticsLocations: c,
        analyticsObject: {
          page: l.isPrivate() ? A.ZY5.DM_CHANNEL : A.ZY5.GUILD_CHANNEL,
          section: A.jXE.CHANNEL_TEXT_AREA,
          object: A.qAy.GIFTING_PROMOTION_BUTTON,
          objectType: A.AnalyticsObjectTypes.GIFT
        }
      })
    },
    Y = () => {
      I(false), U(C.L.TAKE_ACTION), H()
    },
    W = true !== D ? (0, r.jsx)(M, {
      config: D,
      hovered: B,
      onClick: Y
    }) : true !== w ? (0, r.jsx)(k, {
      config: w,
      hovered: B,
      onClick: Y
    }) : (0, r.jsx)(T.Z, {
      disabled: s,
      channel: l
    });
  return (0, r.jsx)("div", {
    className: R.container,
    onMouseEnter: () => {
      y || I(true)
    },
    onMouseLeave: () => {
      I(false)
    },
    children: true !== n.firstTimeNotice && G ? (0, r.jsx)(m.Z, {
      onComplete: () => I(false),
      onCheckItOutClick: H,
      markAsDismissed: U,
      config: n.firstTimeNotice,
      children: W
    }) : W
  })
}
let G = Chunk473749.memo(U)