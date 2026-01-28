/** Chunk was on web.js **/
/** chunk id: 336618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => H
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk877624 = require("./877624.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk533781 = require("./533781.jsx"),
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
  Chunk743477 = require("./743477.jsx"),
  Chunk545428 = require("./545428.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk455424 = require("./455424.js"),
  Chunk111314 = require("./111314.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}

function k(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : k(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G(e) {
  let t = i.useCallback(() => Promise.resolve({
    default: e.boxAnimationUrl
  }), [e.boxAnimationUrl]);
  return (0, r.jsx)(w.A, {
    className: x.x6,
    "aria-label": D.intl.string(D.t.Z1RnTk),
    isActive: false,
    noHover: true,
    onClick: e.onClick,
    children: (0, r.jsx)("div", {
      className: L.zc,
      children: e.hovered ? (0, r.jsx)(d.akl, {
        className: L.Hl,
        importData: t
      }) : (0, r.jsx)(d.okO, {})
    })
  })
}

function F(e) {
  let {
    Component: t,
    events: n,
    play: a
  } = (0, u.T)(), o = i.useCallback(() => Promise.resolve({
    default: e.trinketAnimationUrl
  }), [e.trinketAnimationUrl]), s = i.useCallback(() => Promise.resolve({
    default: e.trinketGlowAnimationUrl
  }), [e.trinketGlowAnimationUrl]), l = () => {
    var t;
    a(), null == (t = e.onClick) || t.call(e)
  };
  return (0, r.jsx)(w.A, U(j({
    className: x.x6,
    "aria-label": D.intl.string(D.t.Z1RnTk),
    isActive: false,
    noHover: true,
    onClick: l
  }, n), {
    children: (0, r.jsxs)("div", {
      className: L.zc,
      children: [(0, r.jsx)(t, {
        className: L.is,
        color: "currentColor"
      }), e.hovered && (0, r.jsxs)(r.Fragment, {
        children: [null != e.trinketAnimationUrl && (0, r.jsx)(d.akl, {
          className: L.rY,
          importData: o
        }), null != e.trinketGlowAnimationUrl && (0, r.jsx)(d.akl, {
          className: L.c5,
          importData: s
        })]
      })]
    })
  }))
}
let V = Chunk927813.A.Millis.DAYS_30;

function B(e) {
  var t, n, a;
  let {
    disabled: u,
    channel: d
  } = e, {
    analyticsLocations: I
  } = (0, p.Ay)(f.A.GIFT_BUTTON), [w, D] = i.useState(false), x = (0, l.bG)([v.A], () => !(null === v.A || true === v.A ? true : v.A.hasLayers())), M = (0, l.bG)([A.default], () => A.default.getCurrentUser()), j = null != M ? S.default.age(M.id) : 0, k = (0, l.bG)([y.A], () => {
    let e = y.A.getMarketingComponentByType(s.C.GIFT_ICON);
    return null == e || "giftIcon" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftIcon
  }), U = (0, l.bG)([y.A], () => {
    let e = y.A.getMarketingComponentByType(s.C.GIFT_ICON_COACHMARK);
    return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftIconCoachmark
  }), B = null == k ? true : k.gradient, H = null != B && null != B.colors && B.colors.length >= 2 ? (0, g.K5)({
    gradient: B.colors,
    angle: null != (t = B.angle) ? t : true
  }, {
    defaultAngle: 180
  }) : true, Y = i.useMemo(() => {
    if ((null == H ? true : H.background) != null) return {
      "--custom-promotion-gradient": H.background
    }
  }, [H]), W = !(0, T.uJ)(null == k ? true : k.boxAnimationUrl), K = (!(0, T.uJ)(null == k ? true : k.trinketAnimationUrl) || !(0, T.uJ)(null == k ? true : k.trinketGlowAnimationUrl)) && !W, z = null != U && !u && x && j >= V, [q, Z] = (0, h.RF)(z ? c.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, (0, _.c)(c.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK)), Q = null != q, X = w || Q, J = (0, C.R1)(d), $ = d.type === R.rbe.DM, ee = (0, O.tA)({
    location: "gift-promotion-button",
    isGift: true,
    giftRecipient: J
  });
  if (u) return null;
  let et = () => {
      ee && $ && null != J ? (0, b.A)({
        giftRecipient: J,
        analyticsLocations: I,
        analyticsObject: {
          page: d.isPrivate() ? R.liQ.DM_CHANNEL : R.liQ.GUILD_CHANNEL,
          section: R.JJy.CHANNEL_TEXT_AREA,
          object: R.ZSU.BUTTON_ICON,
          objectType: R.AnalyticsObjectTypes.GIFT
        }
      }) : (0, m.A)({
        isGift: true,
        giftRecipient: null == J ? true : J,
        initialPlanId: null,
        analyticsLocations: I,
        analyticsObject: {
          page: d.isPrivate() ? R.liQ.DM_CHANNEL : R.liQ.GUILD_CHANNEL,
          section: R.JJy.CHANNEL_TEXT_AREA,
          object: R.ZSU.GIFTING_PROMOTION_BUTTON,
          objectType: R.AnalyticsObjectTypes.GIFT
        }
      })
    },
    en = () => {
      D(false), Z(P.i.TAKE_ACTION), et()
    },
    er = W && (null == k ? true : k.boxAnimationUrl) != null ? (0, r.jsx)(G, {
      boxAnimationUrl: k.boxAnimationUrl,
      hovered: X,
      onClick: en
    }) : K ? (0, r.jsx)(F, {
      trinketAnimationUrl: null != (n = null == k ? true : k.trinketAnimationUrl) ? n : null,
      trinketGlowAnimationUrl: null != (a = null == k ? true : k.trinketGlowAnimationUrl) ? a : null,
      hovered: X,
      onClick: en
    }) : (0, r.jsx)(N.A, {
      disabled: u,
      channel: d
    });
  return (0, r.jsx)("div", {
    className: o()(L.kL, {
      [L.DM]: X
    }),
    style: Y,
    onMouseEnter: () => {
      w || D(true)
    },
    onMouseLeave: () => {
      D(false)
    },
    children: Q ? (0, r.jsx)(E.A, {
      onComplete: () => D(false),
      onCheckItOutClick: et,
      markAsDismissed: Z,
      coachmarkConfig: U,
      children: er
    }) : er
  })
}
let H = Chunk64700.memo(B)