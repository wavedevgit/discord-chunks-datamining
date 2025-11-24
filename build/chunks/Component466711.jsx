/** Chunk was on web.js **/
/** chunk id: 466711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk802408 = require("./802408.jsx"),
  Chunk909917 = require("./909917.jsx"),
  Chunk602733 = require("./602733.js"),
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

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      L(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e) {
  let {
    tooltipsWithKeybinds: t
  } = S.n.useConfig({
    location: "TrinketsAnimationButton"
  });
  return (0, r.jsx)(u.u, {
    shouldShow: t,
    text: P.intl.string(P.t.Ve9Ge6),
    children: (0, r.jsx)(C.Z, {
      className: w.button,
      "aria-label": P.intl.string(P.t.Z1RnTk),
      isActive: false,
      noHover: true,
      onClick: e.onClick,
      children: (0, r.jsx)("div", {
        className: D.iconContainer,
        children: e.hovered ? (0, r.jsx)(d.Fmz, {
          className: D.giftBoxIcon,
          importData: e.config.getAnimationData
        }) : (0, r.jsx)(d.OgN, {})
      })
    })
  })
}

function U(e) {
  let {
    Component: t,
    events: n,
    play: i
  } = (0, c.$)(), {
    tooltipsWithKeybinds: a
  } = S.n.useConfig({
    location: "TrinketsAnimationButton"
  }), o = () => {
    var t;
    i(), null == (t = e.onClick) || t.call(e)
  };
  return (0, r.jsx)(u.u, {
    shouldShow: a,
    text: P.intl.string(P.t.Ve9Ge6),
    children: (0, r.jsx)(C.Z, k(x({
      className: w.button,
      "aria-label": P.intl.string(P.t.Z1RnTk),
      isActive: false,
      noHover: true,
      onClick: o
    }, n), {
      children: (0, r.jsxs)("div", {
        className: D.iconContainer,
        children: [(0, r.jsx)(t, {
          className: D.trinketsIcon,
          color: "currentColor"
        }), e.hovered && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(d.Fmz, {
            className: D.trinketsDecoration,
            importData: e.config.getAnimationData
          }), (0, r.jsx)(d.Fmz, {
            className: D.trinketsGlow,
            importData: e.config.getGlowAnimationData
          })]
        })]
      })
    }))
  })
}
let G = Chunk70956.Z.Millis.DAYS_30;

function B(e) {
  var t;
  let {
    giftingPromotionConfig: n,
    disabled: a,
    channel: c
  } = e, {
    analyticsLocations: u
  } = (0, _.ZP)(f.Z.GIFT_BUTTON), [d, v] = i.useState(false), S = (0, s.e7)([y.Z], () => !(null === y.Z || true === y.Z ? true : y.Z.hasLayers())), C = (0, s.e7)([O.default], () => O.default.getCurrentUser()), P = null != C ? I.default.age(C.id) : 0, {
    giftBoxAnimation: w,
    trinketsAnimation: L
  } = null != (t = null == n ? true : n.chatGiftIcon) ? t : {}, x = null != n.firstTimeNotice && !a && S && P >= G, [M, k] = (0, h.XR)(x ? l.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, (0, p.t)(l.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK)), B = null != M, Z = d || B, F = (0, T.Ft)(c), V = c.type === N.d4z.DM, H = (0, b.ao)({
    location: "gift-promotion-button",
    isGift: true,
    giftRecipient: F
  });
  if (a) return null;
  let Y = () => {
      H && V && null != F ? (0, E.Z)({
        giftRecipient: F,
        analyticsLocations: u,
        analyticsObject: {
          page: c.isPrivate() ? N.ZY5.DM_CHANNEL : N.ZY5.GUILD_CHANNEL,
          section: N.jXE.CHANNEL_TEXT_AREA,
          object: N.qAy.BUTTON_ICON,
          objectType: N.AnalyticsObjectTypes.GIFT
        }
      }) : (0, m.Z)({
        isGift: true,
        giftRecipient: null == F ? true : F,
        initialPlanId: null,
        analyticsLocations: u,
        analyticsObject: {
          page: c.isPrivate() ? N.ZY5.DM_CHANNEL : N.ZY5.GUILD_CHANNEL,
          section: N.jXE.CHANNEL_TEXT_AREA,
          object: N.qAy.GIFTING_PROMOTION_BUTTON,
          objectType: N.AnalyticsObjectTypes.GIFT
        }
      })
    },
    W = () => {
      v(false), k(R.L.TAKE_ACTION), Y()
    },
    K = true !== w ? (0, r.jsx)(j, {
      config: w,
      hovered: Z,
      onClick: W
    }) : true !== L ? (0, r.jsx)(U, {
      config: L,
      hovered: Z,
      onClick: W
    }) : (0, r.jsx)(A.Z, {
      disabled: a,
      channel: c
    });
  return (0, r.jsx)("div", {
    className: o()(D.container, {
      [D.containerHovered]: Z
    }),
    onMouseEnter: () => {
      d || v(true)
    },
    onMouseLeave: () => {
      v(false)
    },
    children: true !== n.firstTimeNotice && B ? (0, r.jsx)(g.Z, {
      onComplete: () => v(false),
      onCheckItOutClick: Y,
      markAsDismissed: k,
      config: n.firstTimeNotice,
      children: K
    }) : K
  })
}
let Z = Chunk473749.memo(B)