/** Chunk was on 20501 **/
/** chunk id: 51636, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk990547 = require("./990547.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk213609 = require("./213609.js"),
  Chunk706140 = require("./706140.js"),
  Chunk626135 = require("./626135.js"),
  Chunk404615 = require("./404615.js"),
  Chunk238108 = require("./238108.js"),
  Chunk22189 = require("./22189.jsx"),
  Chunk391110 = require("./391110.js"),
  Chunk484239 = require("./484239.jsx"),
  Chunk658370 = require("./658370.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk915237 = require("./915237.js");

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = Chunk73800.memo(e => {
  let {
    name: t,
    canReveal: n = true,
    dismissibleContentType: s,
    forceShadow: h,
    cardType: _
  } = e, j = null == e ? true : e.onCtaClick, y = (0, c.e7)([u.Z], () => u.Z.useReducedMotion), [A, P] = r.useState(false), [R, D] = r.useState(false), Z = _ === x.gM.CARD_CAROUSEL_FIRST_ROW || _ === x.gM.CARD_CAROUSEL_SECOND_ROW || _ === x.gM.CARD_CAROUSEL_THIRD_ROW, w = (0, b.Z)(), [k, L] = (0, p.cv)(null != s && n ? [s] : []), {
    easterEggLevel: B,
    isEasterEggTriggered: M,
    onHover: U,
    onUnhover: V
  } = (0, f.Z)(5), G = (0, l.debounce)(() => {
    g.default.track(E.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
      card_type: (0, l.snakeCase)(t)
    })
  }, 800), F = (0, l.debounce)(() => {
    null != j && g.default.track(E.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
      card_type: (0, l.snakeCase)(t),
      function_name: (0, l.snakeCase)(j.name)
    })
  }, 800);
  e = T(S({
    onMouseEnter: G
  }, e), {
    onCtaClick: null != j ? () => {
      null == j || j(), F()
    } : true
  });
  let H = k !== s || null == s || R;
  return (r.useEffect(() => {
    y && A && (D(true), g.default.track(E.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
      card_type: t
    }), null != s && L(C.L.TAKE_ACTION))
  }, [y, A, s, t, L]), (0, m.Z)({
    type: o.ImpressionTypes.VIEW,
    name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
    properties: {
      name: t
    }
  }), n) ? t === b.I.UPCOMING_DROP_UNTIMED ? (0, i.jsx)("div", {
    className: v.hoverWrapper,
    onMouseEnter: U,
    onFocus: U,
    onMouseLeave: V,
    onBlur: V,
    children: (0, i.jsx)("div", {
      className: a()(v.flipCardContainer, {
        [v.forceShadow]: h
      }),
      children: (0, i.jsxs)("div", {
        className: a()(v.flipCard, {
          [v.partialFlipCard]: !M,
          [v.ultraFlipCard]: M,
          [v.rotateCard]: M && 3 === B,
          [v.reducedMotion]: y
        }),
        children: [(0, i.jsx)("div", {
          className: v.flipCardFront,
          children: (0, i.jsx)(N, T(S({}, e), {
            className: v.topCover
          }))
        }), (0, i.jsx)("div", {
          className: v.flipCardBack,
          children: (0, i.jsx)(N, T(S({}, e), {
            className: v.topCover
          }))
        })]
      })
    })
  }) : H ? (0, i.jsx)("div", {
    className: v.hoverWrapper,
    children: (0, i.jsx)("div", {
      className: a()({
        [v.noFlipCardContainer]: !Z,
        [v.noFlipCardContainerCarousel]: Z,
        [v.forceShadow]: h,
        [v.reducedMotion]: y
      }),
      children: (0, i.jsx)(N, S({}, e))
    })
  }) : (0, i.jsx)("div", {
    className: v.hoverWrapper,
    children: (0, i.jsx)("div", {
      className: a()(v.flipCardContainer, {
        [v.forceShadow]: h
      }),
      children: (0, i.jsxs)(d.P3F, {
        onClick: () => P(true),
        className: a()(v.flipCard, v.clickable, {
          [v.flipped]: A,
          [v.partialFlipCard]: !R && !A,
          [v.reducedMotion]: y
        }),
        onTransitionEnd: e => {
          A && "transform" === e.propertyName && e.target.classList.contains(v.flipCard) && (D(true), g.default.track(E.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
          }), null != s && L(C.L.TAKE_ACTION))
        },
        children: [(0, i.jsx)("div", {
          className: v.flipCardHidden,
          "aria-hidden": true,
          children: (0, i.jsx)(N, S({}, e))
        }), (0, i.jsx)("div", {
          className: v.flipCardFront,
          children: (0, i.jsx)(N, T(S({}, w.upcomingDropUntimed), {
            pillText: ""
          }))
        }), (0, i.jsx)("div", {
          className: v.flipCardBack,
          children: (0, i.jsx)(N, T(S({}, e), {
            description: ""
          }))
        }), (0, i.jsx)("div", {
          className: v.flipCardButtonContainer,
          children: (0, i.jsx)(d.zxk, {
            variant: "primary",
            text: O.intl.string(O.t.dcztdX),
            onClick: () => P(true)
          })
        })]
      })
    })
  }) : (0, i.jsx)(I, T(S({}, w.upcomingDropUntimed), {
    forceShadow: h
  }))
});
I.displayName = "PremiumPerkCard";
let N = Chunk73800.forwardRef((e, t) => {
  var n;
  let {
    title: r,
    titleClassName: s = "",
    subtitle: l = "",
    description: o = "",
    descriptionCta: c = "",
    isPremiumGetCta: u,
    onCtaClick: m,
    onMouseEnter: p,
    className: g,
    perkComponent: f,
    cardVariant: b,
    cardType: E,
    onClick: C,
    backgroundImage: O,
    pillText: S,
    perkImage: T,
    imageOverlayText: I,
    hasNitroGradientBackground: N
  } = e, y = E === x.gM.CARD_CAROUSEL_FIRST_ROW || E === x.gM.CARD_CAROUSEL_SECOND_ROW || E === x.gM.CARD_CAROUSEL_THIRD_ROW, A = "" !== o || "" !== c || "" !== l && b === x.zW.REWARD, P = (0, h._)(b);
  return (0, i.jsxs)(d.P3F, {
    className: a()(v.card, g, null == (n = P.cardContainer) ? true : n.className, {
      [v.clickable]: null != C,
      [v.hideOverflow]: y,
      [v.nitroGradientBackground]: N
    }),
    onMouseEnter: p,
    style: {
      backgroundImage: null != O ? "url(".concat(O, ")") : true
    },
    onClick: C,
    children: [null != S && (0, i.jsx)(d.Text, {
      variant: "text-xs/semibold",
      className: v.pill,
      children: S
    }), (0, i.jsx)("div", {
      ref: t
    }), (0, i.jsx)(_.Z, {
      title: r,
      titleClassName: s,
      subtitle: l,
      perkImage: T,
      isCarousel: y,
      descriptionCta: c,
      onCtaClick: m,
      perkComponent: f,
      subtitleClassName: v.cardSubtitle,
      cardVariant: b,
      imageOverlayText: I
    }), A && (0, i.jsx)(j.Z, {
      title: r,
      titleClassName: s,
      subtitle: l,
      description: o,
      descriptionCta: c,
      isPremiumGetCta: u,
      onCtaClick: m,
      cardVariant: b,
      perkComponent: f
    }), (0, i.jsx)("div", {
      className: a()(v.cover, v.above),
      ref: t
    })]
  })
});
N.displayName = "PerkCardContent";
let y = I