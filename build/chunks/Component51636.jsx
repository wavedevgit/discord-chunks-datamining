/** Chunk was on web.js **/
/** chunk id: 51636, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk990547 = require("./990547.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk213609 = require("./213609.js"),
  Chunk706140 = require("./706140.js"),
  Chunk626135 = require("./626135.js"),
  Chunk176782 = require("./176782.js"),
  Chunk238108 = require("./238108.js"),
  Chunk22189 = require("./22189.jsx"),
  Chunk391110 = require("./391110.js"),
  Chunk484239 = require("./484239.jsx"),
  Chunk658370 = require("./658370.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk759291 = require("./759291.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
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

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let R = Chunk647438.memo(e => {
  let {
    name: t,
    canReveal: n = true,
    dismissibleContentType: a,
    forceShadow: h,
    cardType: b
  } = e, y = null == e ? true : e.onCtaClick, T = (0, c.e7)([d.Z], () => d.Z.useReducedMotion), [C, w] = i.useState(false), [D, x] = i.useState(false), L = b === E.gM.CARD_CAROUSEL_FIRST_ROW || b === E.gM.CARD_CAROUSEL_SECOND_ROW || b === E.gM.CARD_CAROUSEL_THIRD_ROW, M = (0, g.Z)(), [j, k] = (0, _.cv)(null != a && n ? [a] : []), {
    easterEggLevel: U,
    isEasterEggTriggered: G,
    onHover: B,
    onUnhover: Z
  } = (0, m.Z)(5), F = i.useMemo(() => (0, s.debounce)(() => {
    p.default.track(O.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
      card_type: (0, s.snakeCase)(t)
    })
  }, 800), [t]), V = i.useMemo(() => (0, s.debounce)(() => {
    null != y && p.default.track(O.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
      card_type: (0, s.snakeCase)(t),
      function_name: (0, s.snakeCase)(y.name)
    })
  }, 800), [t, y]), H = () => {
    null == y || y(), V()
  };
  e = N(A({
    onMouseEnter: F
  }, e), {
    onCtaClick: null != y ? H : true
  });
  let Y = j !== a || null == a || D,
    W = e => {
      C && "transform" === e.propertyName && e.target.classList.contains(S.flipCard) && (x(true), p.default.track(O.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: t
      }), null != a && k(v.L.TAKE_ACTION))
    };
  return (i.useEffect(() => {
    T && C && (x(true), p.default.track(O.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
      card_type: t
    }), null != a && k(v.L.TAKE_ACTION))
  }, [T, C, a, t, k]), (0, f.Z)({
    type: l.ImpressionTypes.VIEW,
    name: l.ImpressionNames.PERK_DISCOVERABILITY_CARD,
    properties: {
      name: t
    }
  }), n) ? t === g.I.UPCOMING_DROP_UNTIMED ? (0, r.jsx)("div", {
    className: S.hoverWrapper,
    onMouseEnter: B,
    onFocus: B,
    onMouseLeave: Z,
    onBlur: Z,
    children: (0, r.jsx)("div", {
      className: o()(S.flipCardContainer, {
        [S.forceShadow]: h
      }),
      children: (0, r.jsxs)("div", {
        className: o()(S.flipCard, {
          [S.partialFlipCard]: !G,
          [S.ultraFlipCard]: G,
          [S.rotateCard]: G && 3 === U,
          [S.reducedMotion]: T
        }),
        children: [(0, r.jsx)("div", {
          className: S.flipCardFront,
          children: (0, r.jsx)(P, N(A({}, e), {
            className: S.topCover
          }))
        }), (0, r.jsx)("div", {
          className: S.flipCardBack,
          children: (0, r.jsx)(P, N(A({}, e), {
            className: S.topCover
          }))
        })]
      })
    })
  }) : Y ? (0, r.jsx)("div", {
    className: S.hoverWrapper,
    children: (0, r.jsx)("div", {
      className: o()({
        [S.noFlipCardContainer]: !L,
        [S.noFlipCardContainerCarousel]: L,
        [S.forceShadow]: h,
        [S.reducedMotion]: T
      }),
      children: (0, r.jsx)(P, A({}, e))
    })
  }) : (0, r.jsx)("div", {
    className: S.hoverWrapper,
    children: (0, r.jsx)("div", {
      className: o()(S.flipCardContainer, {
        [S.forceShadow]: h
      }),
      children: (0, r.jsxs)(u.P3F, {
        onClick: () => w(true),
        className: o()(S.flipCard, S.clickable, {
          [S.flipped]: C,
          [S.partialFlipCard]: !D && !C,
          [S.reducedMotion]: T
        }),
        onTransitionEnd: W,
        children: [(0, r.jsx)("div", {
          className: S.flipCardHidden,
          "aria-hidden": true,
          children: (0, r.jsx)(P, A({}, e))
        }), (0, r.jsx)("div", {
          className: S.flipCardFront,
          children: (0, r.jsx)(P, N(A({}, M.upcomingDropUntimed), {
            pillText: ""
          }))
        }), (0, r.jsx)("div", {
          className: S.flipCardBack,
          children: (0, r.jsx)(P, N(A({}, e), {
            description: ""
          }))
        }), (0, r.jsx)("div", {
          className: S.flipCardButtonContainer,
          children: (0, r.jsx)(u.Button, {
            variant: "primary",
            text: I.intl.string(I.t.dcztdU),
            onClick: () => w(true)
          })
        })]
      })
    })
  }) : (0, r.jsx)(R, N(A({}, M.upcomingDropUntimed), {
    forceShadow: h
  }))
});
R.displayName = "PremiumPerkCard";
let P = Chunk647438.forwardRef((e, t) => {
  var n;
  let {
    title: i,
    titleClassName: a = "",
    subtitle: s = "",
    description: l = "",
    descriptionCta: c = "",
    customContent: d,
    isPremiumGetCta: f,
    onCtaClick: _,
    onMouseEnter: p,
    className: m,
    perkComponent: g,
    cardVariant: O,
    cardType: v,
    onClick: I,
    backgroundImage: T,
    pillText: A,
    perkImage: C,
    imageOverlayText: N,
    hasNitroGradientBackground: R
  } = e, P = v === E.gM.CARD_CAROUSEL_FIRST_ROW || v === E.gM.CARD_CAROUSEL_SECOND_ROW || v === E.gM.CARD_CAROUSEL_THIRD_ROW, w = "" !== l || "" !== c || "" !== s && O === E.zW.REWARD, D = (0, h._)(O);
  return (0, r.jsxs)(u.P3F, {
    className: o()(S.card, m, null == (n = D.cardContainer) ? true : n.className, {
      [S.clickable]: null != I,
      [S.hideOverflow]: P,
      [S.nitroGradientBackground]: R
    }),
    onMouseEnter: p,
    style: {
      backgroundImage: null != T ? "url(".concat(T, ")") : true,
      backgroundPosition: null != T ? "bottom right" : true,
      backgroundRepeat: null != T ? "no-repeat" : true
    },
    onClick: I,
    children: [null != A && (0, r.jsx)(u.Text, {
      variant: "text-xs/semibold",
      className: S.pill,
      children: A
    }), (0, r.jsx)("div", {
      ref: t
    }), (0, r.jsx)(b.Z, {
      title: i,
      titleClassName: a,
      subtitle: s,
      perkImage: C,
      isCarousel: P,
      descriptionCta: c,
      customContent: d,
      onCtaClick: _,
      perkComponent: g,
      subtitleClassName: S.cardSubtitle,
      cardVariant: O,
      imageOverlayText: N
    }), w && (0, r.jsx)(y.Z, {
      title: i,
      titleClassName: a,
      subtitle: s,
      description: l,
      descriptionCta: c,
      isPremiumGetCta: f,
      onCtaClick: _,
      cardVariant: O,
      perkComponent: g
    }), (0, r.jsx)("div", {
      className: o()(S.cover, S.above),
      ref: t
    })]
  })
});
P.displayName = "PerkCardContent";
let w = R