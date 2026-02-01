/** Chunk was on 9207 **/
/** chunk id: 180022, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk110259 = require("./110259.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk139286 = require("./139286.js"),
  Chunk160761 = require("./160761.js"),
  Chunk954571 = require("./954571.js"),
  Chunk543233 = require("./543233.js"),
  Chunk29570 = require("./29570.js"),
  Chunk975662 = require("./975662.jsx"),
  Chunk322631 = require("./322631.js"),
  Chunk784356 = require("./784356.jsx"),
  Chunk452910 = require("./452910.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk296388 = require("./296388.js");

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = Chunk64700.memo(e => {
  let {
    name: t,
    canReveal: n = true,
    dismissibleContentType: l,
    forceShadow: g,
    cardType: h
  } = e, E = null == e ? true : e.onCtaClick, j = (0, c.bG)([u.A], () => u.A.useReducedMotion), [v, P] = i.useState(false), [R, D] = i.useState(false), L = h === b.cJ.CARD_CAROUSEL_FIRST_ROW || h === b.cJ.CARD_CAROUSEL_SECOND_ROW || h === b.cJ.CARD_CAROUSEL_THIRD_ROW, w = (0, f.A)(), [M, G] = (0, p.DP)(null != l && n ? [l] : []), {
    easterEggLevel: U,
    isEasterEggTriggered: k,
    onHover: B,
    onUnhover: H
  } = (0, A.A)(5), V = i.useMemo(() => (0, a.debounce)(() => {
    m.default.track(O.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
      card_type: (0, a.snakeCase)(t)
    })
  }, 800), [t]), F = i.useMemo(() => (0, a.debounce)(() => {
    null != E && m.default.track(O.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
      card_type: (0, a.snakeCase)(t),
      function_name: (0, a.snakeCase)(E.name)
    })
  }, 800), [t, E]);
  e = I(T({
    onMouseEnter: V
  }, e), {
    onCtaClick: null != E ? () => {
      null == E || E(), F()
    } : true
  });
  let Y = M !== l || null == l || R;
  return (i.useEffect(() => {
    j && v && (D(true), m.default.track(O.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
      card_type: t
    }), null != l && G(x.i.TAKE_ACTION))
  }, [j, v, l, t, G]), (0, _.A)({
    type: o.ImpressionTypes.VIEW,
    name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
    properties: {
      name: t
    }
  }), n) ? t === f.U.UPCOMING_DROP_UNTIMED ? (0, r.jsx)("div", {
    className: S.iQ,
    onMouseEnter: B,
    onFocus: B,
    onMouseLeave: H,
    onBlur: H,
    children: (0, r.jsx)("div", {
      className: s()(S.Rz, {
        [S.sT]: g
      }),
      children: (0, r.jsxs)("div", {
        className: s()(S.Ci, {
          [S.BX]: !k,
          [S.yg]: k,
          [S.Ud]: k && 3 === U,
          [S.VN]: j
        }),
        children: [(0, r.jsx)("div", {
          className: S.He,
          children: (0, r.jsx)(y, I(T({}, e), {
            className: S.Du
          }))
        }), (0, r.jsx)("div", {
          className: S.ll,
          children: (0, r.jsx)(y, I(T({}, e), {
            className: S.Du
          }))
        })]
      })
    })
  }) : Y ? (0, r.jsx)("div", {
    className: S.iQ,
    children: (0, r.jsx)("div", {
      className: s()({
        [S.u9]: !L,
        [S.E$]: L,
        [S.sT]: g,
        [S.VN]: j
      }),
      children: (0, r.jsx)(y, T({}, e))
    })
  }) : (0, r.jsx)("div", {
    className: S.iQ,
    children: (0, r.jsx)("div", {
      className: s()(S.Rz, {
        [S.sT]: g
      }),
      children: (0, r.jsxs)(d.DUT, {
        onClick: () => P(true),
        className: s()(S.Ci, S.vk, {
          [S.zq]: v,
          [S.BX]: !R && !v,
          [S.VN]: j
        }),
        onTransitionEnd: e => {
          v && "transform" === e.propertyName && e.target.classList.contains(S.Ci) && (D(true), m.default.track(O.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
          }), null != l && G(x.i.TAKE_ACTION))
        },
        children: [(0, r.jsx)("div", {
          className: S.UF,
          "aria-hidden": true,
          children: (0, r.jsx)(y, T({}, e))
        }), (0, r.jsx)("div", {
          className: S.He,
          children: (0, r.jsx)(y, I(T({}, w.upcomingDropUntimed), {
            pillText: ""
          }))
        }), (0, r.jsx)("div", {
          className: S.ll,
          children: (0, r.jsx)(y, I(T({}, e), {
            description: null
          }))
        }), (0, r.jsx)("div", {
          className: S.Z7,
          children: (0, r.jsx)(d.Button, {
            variant: "primary",
            text: C.intl.string(C.t.dcztdU),
            onClick: () => P(true)
          })
        })]
      })
    })
  }) : (0, r.jsx)(N, I(T({}, w.upcomingDropUntimed), {
    forceShadow: g
  }))
});
N.displayName = "PremiumPerkCard";
let y = Chunk64700.forwardRef((e, t) => {
  var n;
  let {
    title: i,
    titleClassName: l,
    subtitle: a,
    description: o,
    descriptionCta: c,
    customContent: u,
    isPremiumGetCta: _,
    onCtaClick: p,
    onMouseEnter: m,
    className: A,
    perkComponent: f,
    cardVariant: O,
    cardType: x,
    onClick: C,
    backgroundImage: T,
    pillText: I,
    perkImage: N,
    imageOverlayText: y,
    hasNitroGradientBackground: j
  } = e, v = x === b.cJ.CARD_CAROUSEL_FIRST_ROW || x === b.cJ.CARD_CAROUSEL_SECOND_ROW || x === b.cJ.CARD_CAROUSEL_THIRD_ROW, P = null != o || null != c, R = (0, g.Q)(O);
  return (0, r.jsxs)(d.DUT, {
    className: s()(S.Nr, A, null == (n = R.cardContainer) ? true : n.className, {
      [S.vk]: null != C,
      [S.JP]: v,
      [S.NT]: j
    }),
    onMouseEnter: m,
    style: {
      backgroundImage: null != T ? "url(".concat(T, ")") : true,
      backgroundPosition: null != T ? "bottom right" : true,
      backgroundRepeat: null != T ? "no-repeat" : true
    },
    onClick: C,
    children: [null != I && (0, r.jsx)(d.Text, {
      variant: "text-xs/semibold",
      className: S.Io,
      children: I
    }), (0, r.jsx)("div", {
      ref: t
    }), (0, r.jsx)(h.A, {
      title: i,
      titleClassName: l,
      subtitle: a,
      perkImage: N,
      isCarousel: v,
      descriptionCta: c,
      customContent: u,
      onCtaClick: p,
      perkComponent: f,
      subtitleClassName: S.Dc,
      cardVariant: O,
      imageOverlayText: y
    }), P && (0, r.jsx)(E.A, {
      title: i,
      titleClassName: l,
      subtitle: a,
      description: o,
      descriptionCta: c,
      isPremiumGetCta: _,
      onCtaClick: p,
      cardVariant: O,
      perkComponent: f
    }), (0, r.jsx)("div", {
      className: s()(S.Iv, S.G1),
      ref: t
    })]
  })
});
y.displayName = "PerkCardContent";
let j = N