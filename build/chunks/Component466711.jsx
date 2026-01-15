/** Chunk was on web.js **/
/** chunk id: 466711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk79766 = require("./79766.js"),
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
  Chunk717401 = require("./717401.js"),
  Chunk802408 = require("./802408.jsx"),
  Chunk1844 = require("./1844.js"),
  Chunk909917 = require("./909917.jsx"),
  Chunk602733 = require("./602733.js"),
  Chunk819640 = require("./819640.js"),
  Chunk594174 = require("./594174.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk624138 = require("./624138.js"),
  Chunk51144 = require("./51144.js"),
  Chunk713913 = require("./713913.js"),
  Chunk897291 = require("./897291.jsx"),
  Chunk443603 = require("./443603.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk124907 = require("./124907.js"),
  Chunk72775 = require("./72775.js");

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      k(e, t, n[t])
    })
  }
  return e
}

function G(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function F(e) {
  let {
    tooltipsWithKeybinds: t
  } = P.n.useConfig({
    location: "GiftBoxAnimationButton"
  }), n = i.useCallback(() => Promise.resolve({
    default: e.boxAnimationUrl
  }), [e.boxAnimationUrl]);
  return (0, r.jsx)(d.u, {
    shouldShow: t,
    text: L.intl.string(L.t.Ve9Ge6),
    children: (0, r.jsx)(R.Z, {
      className: M.button,
      "aria-label": L.intl.string(L.t.Z1RnTk),
      isActive: false,
      noHover: true,
      onClick: e.onClick,
      children: (0, r.jsx)("div", {
        className: j.iconContainer,
        children: e.hovered ? (0, r.jsx)(f.Fmz, {
          className: j.giftBoxIcon,
          importData: n
        }) : (0, r.jsx)(f.OgN, {})
      })
    })
  })
}

function B(e) {
  let {
    Component: t,
    events: n,
    play: a
  } = (0, u.$)(), {
    tooltipsWithKeybinds: o
  } = P.n.useConfig({
    location: "TrinketsAnimationButton"
  }), s = i.useCallback(() => Promise.resolve({
    default: e.trinketAnimationUrl
  }), [e.trinketAnimationUrl]), l = i.useCallback(() => Promise.resolve({
    default: e.trinketGlowAnimationUrl
  }), [e.trinketGlowAnimationUrl]), c = () => {
    var t;
    a(), null == (t = e.onClick) || t.call(e)
  };
  return (0, r.jsx)(d.u, {
    shouldShow: o,
    text: L.intl.string(L.t.Ve9Ge6),
    children: (0, r.jsx)(R.Z, Z(U({
      className: M.button,
      "aria-label": L.intl.string(L.t.Z1RnTk),
      isActive: false,
      noHover: true,
      onClick: c
    }, n), {
      children: (0, r.jsxs)("div", {
        className: j.iconContainer,
        children: [(0, r.jsx)(t, {
          className: j.trinketsIcon,
          color: "currentColor"
        }), e.hovered && (0, r.jsxs)(r.Fragment, {
          children: [null != e.trinketAnimationUrl && (0, r.jsx)(f.Fmz, {
            className: j.trinketsDecoration,
            importData: s
          }), null != e.trinketGlowAnimationUrl && (0, r.jsx)(f.Fmz, {
            className: j.trinketsGlow,
            importData: l
          })]
        })]
      })
    }))
  })
}
let V = Chunk70956.Z.Millis.DAYS_30;

function H(e) {
  var t, n;
  let {
    giftingPromotionConfig: a,
    disabled: u,
    channel: d
  } = e, {
    analyticsLocations: f
  } = (0, _.ZP)(p.Z.GIFT_BUTTON), [T, P] = i.useState(false), R = (0, l.e7)([S.Z], () => !(null === S.Z || true === S.Z ? true : S.Z.hasLayers())), L = (0, l.e7)([I.default], () => I.default.getCurrentUser()), M = null != L ? C.default.age(L.id) : 0, k = (0, l.e7)([y.Z], () => {
    let e = y.Z.getMarketingComponentByType(s.I.GIFT_ICON);
    return null == e || "giftIcon" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftIcon
  }), U = i.useMemo(() => {
    let e = null == k ? true : k.gradient;
    if (null == e || null == e.colors || e.colors.length < 2) return;
    let t = (0, E.Tl)({
      gradient: e.colors,
      angle: e.angle
    }, {
      defaultAngle: 180
    });
    if ((null == t ? true : t.background) != null) return {
      "--custom-promotion-gradient": t.background
    }
  }, [null == k ? true : k.gradient]), G = !(0, A.Ew)(null == k ? true : k.boxAnimationUrl), Z = (!(0, A.Ew)(null == k ? true : k.trinketAnimationUrl) || !(0, A.Ew)(null == k ? true : k.trinketGlowAnimationUrl)) && !G, H = null != a.firstTimeNotice && !u && R && M >= V, [Y, W] = (0, m.XR)(H ? c.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, (0, h.t)(c.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK)), K = null != Y, z = T || K, q = (0, N.Ft)(d), Q = d.type === D.d4z.DM, X = (0, v.ao)({
    location: "gift-promotion-button",
    isGift: true,
    giftRecipient: q
  });
  if (u) return null;
  let J = () => {
      X && Q && null != q ? (0, O.Z)({
        giftRecipient: q,
        analyticsLocations: f,
        analyticsObject: {
          page: d.isPrivate() ? D.ZY5.DM_CHANNEL : D.ZY5.GUILD_CHANNEL,
          section: D.jXE.CHANNEL_TEXT_AREA,
          object: D.qAy.BUTTON_ICON,
          objectType: D.AnalyticsObjectTypes.GIFT
        }
      }) : (0, g.Z)({
        isGift: true,
        giftRecipient: null == q ? true : q,
        initialPlanId: null,
        analyticsLocations: f,
        analyticsObject: {
          page: d.isPrivate() ? D.ZY5.DM_CHANNEL : D.ZY5.GUILD_CHANNEL,
          section: D.jXE.CHANNEL_TEXT_AREA,
          object: D.qAy.GIFTING_PROMOTION_BUTTON,
          objectType: D.AnalyticsObjectTypes.GIFT
        }
      })
    },
    $ = () => {
      P(false), W(x.L.TAKE_ACTION), J()
    },
    ee = G && (null == k ? true : k.boxAnimationUrl) != null ? (0, r.jsx)(F, {
      boxAnimationUrl: k.boxAnimationUrl,
      hovered: z,
      onClick: $
    }) : Z ? (0, r.jsx)(B, {
      trinketAnimationUrl: null != (t = null == k ? true : k.trinketAnimationUrl) ? t : null,
      trinketGlowAnimationUrl: null != (n = null == k ? true : k.trinketGlowAnimationUrl) ? n : null,
      hovered: z,
      onClick: $
    }) : (0, r.jsx)(w.Z, {
      disabled: u,
      channel: d
    });
  return (0, r.jsx)("div", {
    className: o()(j.container, {
      [j.containerHovered]: z
    }),
    style: U,
    onMouseEnter: () => {
      T || P(true)
    },
    onMouseLeave: () => {
      P(false)
    },
    children: true !== a.firstTimeNotice && K ? (0, r.jsx)(b.Z, {
      onComplete: () => P(false),
      onCheckItOutClick: J,
      markAsDismissed: W,
      config: a.firstTimeNotice,
      children: ee
    }) : ee
  })
}
let Y = Chunk473749.memo(H)