/** Chunk was on web.js **/
/** chunk id: 336618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => W
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk877624 = require("./877624.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk533781 = require("./533781.jsx"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk357186 = require("./357186.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk532794 = require("./532794.jsx"),
  Chunk810498 = require("./810498.js"),
  Chunk40493 = require("./40493.jsx"),
  Chunk412260 = require("./412260.js"),
  Chunk404036 = require("./404036.jsx"),
  Chunk594832 = require("./594832.js"),
  Chunk186111 = require("./186111.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk240248 = require("./240248.js"),
  Chunk427262 = require("./427262.js"),
  Chunk184761 = require("./184761.js"),
  Chunk743477 = require("./743477.jsx"),
  Chunk545428 = require("./545428.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk455424 = require("./455424.js"),
  Chunk111314 = require("./111314.js");

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

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function F(e) {
  let {
    tooltipsWithKeybinds: t
  } = R.C.useConfig({
    location: "GiftBoxAnimationButton"
  }), n = i.useCallback(() => Promise.resolve({
    default: e.boxAnimationUrl
  }), [e.boxAnimationUrl]);
  return (0, r.jsx)(d.m_, {
    shouldShow: t,
    text: L.intl.string(L.t.Ve9Ge6),
    children: (0, r.jsx)(P.A, {
      className: M.x6,
      "aria-label": L.intl.string(L.t.Z1RnTk),
      isActive: false,
      noHover: true,
      onClick: e.onClick,
      children: (0, r.jsx)("div", {
        className: j.zc,
        children: e.hovered ? (0, r.jsx)(f.akl, {
          className: j.Hl,
          importData: n
        }) : (0, r.jsx)(f.okO, {})
      })
    })
  })
}

function B(e) {
  let {
    Component: t,
    events: n,
    play: a
  } = (0, u.T)(), {
    tooltipsWithKeybinds: s
  } = R.C.useConfig({
    location: "TrinketsAnimationButton"
  }), o = i.useCallback(() => Promise.resolve({
    default: e.trinketAnimationUrl
  }), [e.trinketAnimationUrl]), l = i.useCallback(() => Promise.resolve({
    default: e.trinketGlowAnimationUrl
  }), [e.trinketGlowAnimationUrl]), c = () => {
    var t;
    a(), null == (t = e.onClick) || t.call(e)
  };
  return (0, r.jsx)(d.m_, {
    shouldShow: s,
    text: L.intl.string(L.t.Ve9Ge6),
    children: (0, r.jsx)(P.A, V(U({
      className: M.x6,
      "aria-label": L.intl.string(L.t.Z1RnTk),
      isActive: false,
      noHover: true,
      onClick: c
    }, n), {
      children: (0, r.jsxs)("div", {
        className: j.zc,
        children: [(0, r.jsx)(t, {
          className: j.is,
          color: "currentColor"
        }), e.hovered && (0, r.jsxs)(r.Fragment, {
          children: [null != e.trinketAnimationUrl && (0, r.jsx)(f.akl, {
            className: j.rY,
            importData: o
          }), null != e.trinketGlowAnimationUrl && (0, r.jsx)(f.akl, {
            className: j.c5,
            importData: l
          })]
        })]
      })
    }))
  })
}
let H = Chunk927813.A.Millis.DAYS_30;

function Y(e) {
  var t, n;
  let {
    disabled: a,
    channel: u
  } = e, {
    analyticsLocations: d
  } = (0, _.Ay)(p.A.GIFT_BUTTON), [f, I] = i.useState(false), R = (0, l.bG)([v.A], () => !(null === v.A || true === v.A ? true : v.A.hasLayers())), P = (0, l.bG)([S.default], () => S.default.getCurrentUser()), L = null != P ? T.default.age(P.id) : 0, M = (0, l.bG)([y.A], () => {
    let e = y.A.getMarketingComponentByType(o.C.GIFT_ICON);
    return null == e || "giftIcon" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftIcon
  }), k = (0, l.bG)([y.A], () => {
    let e = y.A.getMarketingComponentByType(o.C.GIFT_ICON_COACHMARK);
    return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftIconCoachmark
  }), U = i.useMemo(() => {
    let e = null == M ? true : M.gradient;
    if (null == e || null == e.colors || e.colors.length < 2) return;
    let t = (0, E.K5)({
      gradient: e.colors,
      angle: e.angle
    }, {
      defaultAngle: 180
    });
    if ((null == t ? true : t.background) != null) return {
      "--custom-promotion-gradient": t.background
    }
  }, [null == M ? true : M.gradient]), G = !(0, C.uJ)(null == M ? true : M.boxAnimationUrl), V = (!(0, C.uJ)(null == M ? true : M.trinketAnimationUrl) || !(0, C.uJ)(null == M ? true : M.trinketGlowAnimationUrl)) && !G, Y = null != k && !a && R && L >= H, [W, K] = (0, m.RF)(Y ? c.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, (0, h.c)(c.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK)), z = null != W, q = f || z, X = (0, N.R1)(u), Z = u.type === D.rbe.DM, Q = (0, A.tA)({
    location: "gift-promotion-button",
    isGift: true,
    giftRecipient: X
  });
  if (a) return null;
  let $ = () => {
      Q && Z && null != X ? (0, O.A)({
        giftRecipient: X,
        analyticsLocations: d,
        analyticsObject: {
          page: u.isPrivate() ? D.liQ.DM_CHANNEL : D.liQ.GUILD_CHANNEL,
          section: D.JJy.CHANNEL_TEXT_AREA,
          object: D.ZSU.BUTTON_ICON,
          objectType: D.AnalyticsObjectTypes.GIFT
        }
      }) : (0, g.A)({
        isGift: true,
        giftRecipient: null == X ? true : X,
        initialPlanId: null,
        analyticsLocations: d,
        analyticsObject: {
          page: u.isPrivate() ? D.liQ.DM_CHANNEL : D.liQ.GUILD_CHANNEL,
          section: D.JJy.CHANNEL_TEXT_AREA,
          object: D.ZSU.GIFTING_PROMOTION_BUTTON,
          objectType: D.AnalyticsObjectTypes.GIFT
        }
      })
    },
    J = () => {
      I(false), K(x.i.TAKE_ACTION), $()
    },
    ee = G && (null == M ? true : M.boxAnimationUrl) != null ? (0, r.jsx)(F, {
      boxAnimationUrl: M.boxAnimationUrl,
      hovered: q,
      onClick: J
    }) : V ? (0, r.jsx)(B, {
      trinketAnimationUrl: null != (t = null == M ? true : M.trinketAnimationUrl) ? t : null,
      trinketGlowAnimationUrl: null != (n = null == M ? true : M.trinketGlowAnimationUrl) ? n : null,
      hovered: q,
      onClick: J
    }) : (0, r.jsx)(w.A, {
      disabled: a,
      channel: u
    });
  return (0, r.jsx)("div", {
    className: s()(j.kL, {
      [j.DM]: q
    }),
    style: U,
    onMouseEnter: () => {
      f || I(true)
    },
    onMouseLeave: () => {
      I(false)
    },
    children: z ? (0, r.jsx)(b.A, {
      onComplete: () => I(false),
      onCheckItOutClick: $,
      markAsDismissed: K,
      coachmarkConfig: k,
      children: ee
    }) : ee
  })
}
let W = Chunk64700.memo(Y)