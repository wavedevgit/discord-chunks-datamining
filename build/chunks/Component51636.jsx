/** Chunk was on web.js **/
/** chunk id: 51636, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk505754 = require("./505754.js");

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
let P = Chunk473749.memo(e => {
  let {
    name: t,
    canReveal: n = true,
    dismissibleContentType: a,
    forceShadow: m,
    cardType: b
  } = e, y = null == e ? true : e.onCtaClick, T = (0, c.e7)([d.Z], () => d.Z.useReducedMotion), [C, w] = i.useState(false), [D, x] = i.useState(false), L = b === E.gM.CARD_CAROUSEL_FIRST_ROW || b === E.gM.CARD_CAROUSEL_SECOND_ROW || b === E.gM.CARD_CAROUSEL_THIRD_ROW, j = (0, g.Z)(), [M, k] = (0, p.cv)(null != a && n ? [a] : []), {
    easterEggLevel: U,
    isEasterEggTriggered: G,
    onHover: Z,
    onUnhover: B
  } = (0, h.Z)(5), F = i.useMemo(() => (0, s.debounce)(() => {
    _.default.track(O.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
      card_type: (0, s.snakeCase)(t)
    })
  }, 800), [t]), V = i.useMemo(() => (0, s.debounce)(() => {
    null != y && _.default.track(O.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
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
  let Y = M !== a || null == a || D,
    W = e => {
      C && "transform" === e.propertyName && e.target.classList.contains(I.flipCard) && (x(true), _.default.track(O.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: t
      }), null != a && k(v.L.TAKE_ACTION))
    };
  return (i.useEffect(() => {
    T && C && (x(true), _.default.track(O.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
      card_type: t
    }), null != a && k(v.L.TAKE_ACTION))
  }, [T, C, a, t, k]), (0, f.Z)({
    type: l.ImpressionTypes.VIEW,
    name: l.ImpressionNames.PERK_DISCOVERABILITY_CARD,
    properties: {
      name: t
    }
  }), n) ? t === g.I.UPCOMING_DROP_UNTIMED ? (0, r.jsx)("div", {
    className: I.hoverWrapper,
    onMouseEnter: Z,
    onFocus: Z,
    onMouseLeave: B,
    onBlur: B,
    children: (0, r.jsx)("div", {
      className: o()(I.flipCardContainer, {
        [I.forceShadow]: m
      }),
      children: (0, r.jsxs)("div", {
        className: o()(I.flipCard, {
          [I.partialFlipCard]: !G,
          [I.ultraFlipCard]: G,
          [I.rotateCard]: G && 3 === U,
          [I.reducedMotion]: T
        }),
        children: [(0, r.jsx)("div", {
          className: I.flipCardFront,
          children: (0, r.jsx)(R, N(A({}, e), {
            className: I.topCover
          }))
        }), (0, r.jsx)("div", {
          className: I.flipCardBack,
          children: (0, r.jsx)(R, N(A({}, e), {
            className: I.topCover
          }))
        })]
      })
    })
  }) : Y ? (0, r.jsx)("div", {
    className: I.hoverWrapper,
    children: (0, r.jsx)("div", {
      className: o()({
        [I.noFlipCardContainer]: !L,
        [I.noFlipCardContainerCarousel]: L,
        [I.forceShadow]: m,
        [I.reducedMotion]: T
      }),
      children: (0, r.jsx)(R, A({}, e))
    })
  }) : (0, r.jsx)("div", {
    className: I.hoverWrapper,
    children: (0, r.jsx)("div", {
      className: o()(I.flipCardContainer, {
        [I.forceShadow]: m
      }),
      children: (0, r.jsxs)(u.P3F, {
        onClick: () => w(true),
        className: o()(I.flipCard, I.clickable, {
          [I.flipped]: C,
          [I.partialFlipCard]: !D && !C,
          [I.reducedMotion]: T
        }),
        onTransitionEnd: W,
        children: [(0, r.jsx)("div", {
          className: I.flipCardHidden,
          "aria-hidden": true,
          children: (0, r.jsx)(R, A({}, e))
        }), (0, r.jsx)("div", {
          className: I.flipCardFront,
          children: (0, r.jsx)(R, N(A({}, j.upcomingDropUntimed), {
            pillText: ""
          }))
        }), (0, r.jsx)("div", {
          className: I.flipCardBack,
          children: (0, r.jsx)(R, N(A({}, e), {
            description: ""
          }))
        }), (0, r.jsx)("div", {
          className: I.flipCardButtonContainer,
          children: (0, r.jsx)(u.Button, {
            variant: "primary",
            text: S.intl.string(S.t.dcztdU),
            onClick: () => w(true)
          })
        })]
      })
    })
  }) : (0, r.jsx)(P, N(A({}, j.upcomingDropUntimed), {
    forceShadow: m
  }))
});
P.displayName = "PremiumPerkCard";
let R = Chunk473749.forwardRef((e, t) => {
  var n;
  let {
    title: i,
    titleClassName: a = "",
    subtitle: s = "",
    description: l = "",
    descriptionCta: c = "",
    customContent: d,
    isPremiumGetCta: f,
    onCtaClick: p,
    onMouseEnter: _,
    className: h,
    perkComponent: g,
    cardVariant: O,
    cardType: v,
    onClick: S,
    backgroundImage: T,
    pillText: A,
    perkImage: C,
    imageOverlayText: N,
    hasNitroGradientBackground: P
  } = e, R = v === E.gM.CARD_CAROUSEL_FIRST_ROW || v === E.gM.CARD_CAROUSEL_SECOND_ROW || v === E.gM.CARD_CAROUSEL_THIRD_ROW, w = "" !== l || "" !== c || "" !== s && O === E.zW.REWARD, D = (0, m._)(O);
  return (0, r.jsxs)(u.P3F, {
    className: o()(I.card, h, null == (n = D.cardContainer) ? true : n.className, {
      [I.clickable]: null != S,
      [I.hideOverflow]: R,
      [I.nitroGradientBackground]: P
    }),
    onMouseEnter: _,
    style: {
      backgroundImage: null != T ? "url(".concat(T, ")") : true,
      backgroundPosition: null != T ? "bottom right" : true,
      backgroundRepeat: null != T ? "no-repeat" : true
    },
    onClick: S,
    children: [null != A && (0, r.jsx)(u.Text, {
      variant: "text-xs/semibold",
      className: I.pill,
      children: A
    }), (0, r.jsx)("div", {
      ref: t
    }), (0, r.jsx)(b.Z, {
      title: i,
      titleClassName: a,
      subtitle: s,
      perkImage: C,
      isCarousel: R,
      descriptionCta: c,
      customContent: d,
      onCtaClick: p,
      perkComponent: g,
      subtitleClassName: I.cardSubtitle,
      cardVariant: O,
      imageOverlayText: N
    }), w && (0, r.jsx)(y.Z, {
      title: i,
      titleClassName: a,
      subtitle: s,
      description: l,
      descriptionCta: c,
      isPremiumGetCta: f,
      onCtaClick: p,
      cardVariant: O,
      perkComponent: g
    }), (0, r.jsx)("div", {
      className: o()(I.cover, I.above),
      ref: t
    })]
  })
});
R.displayName = "PerkCardContent";
let w = P