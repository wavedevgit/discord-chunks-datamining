/** Chunk was on 60667 **/
/** chunk id: 180022, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
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

function I(e) {
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

function S(e, t) {
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
let j = Chunk64700.memo(e => {
  let {
    name: t,
    canReveal: n = true,
    dismissibleContentType: l,
    forceShadow: g,
    cardType: b
  } = e, E = null == e ? true : e.onCtaClick, N = (0, c.bG)([u.A], () => u.A.useReducedMotion), [y, P] = i.useState(false), [R, D] = i.useState(false), w = b === h.cJ.CARD_CAROUSEL_FIRST_ROW || b === h.cJ.CARD_CAROUSEL_SECOND_ROW || b === h.cJ.CARD_CAROUSEL_THIRD_ROW, L = (0, f.A)(), [M, U] = (0, p.DP)(null != l && n ? [l] : []), {
    easterEggLevel: G,
    isEasterEggTriggered: k,
    onHover: V,
    onUnhover: H
  } = (0, A.A)(5), B = i.useMemo(() => (0, a.debounce)(() => {
    m.default.track(x.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
      card_type: (0, a.snakeCase)(t)
    })
  }, 800), [t]), F = i.useMemo(() => (0, a.debounce)(() => {
    null != E && m.default.track(x.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
      card_type: (0, a.snakeCase)(t),
      function_name: (0, a.snakeCase)(E.name)
    })
  }, 800), [t, E]);
  e = S(I({
    onMouseEnter: B
  }, e), {
    onCtaClick: null != E ? () => {
      null == E || E(), F()
    } : true
  });
  let Y = M !== l || null == l || R;
  return (i.useEffect(() => {
    N && y && (D(true), m.default.track(x.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
      card_type: t
    }), null != l && U(O.i.TAKE_ACTION))
  }, [N, y, l, t, U]), (0, _.A)({
    type: o.ImpressionTypes.VIEW,
    name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
    properties: {
      name: t
    }
  }), n) ? t === f.U.UPCOMING_DROP_UNTIMED ? (0, r.jsx)("div", {
    className: T.iQ,
    onMouseEnter: V,
    onFocus: V,
    onMouseLeave: H,
    onBlur: H,
    children: (0, r.jsx)("div", {
      className: s()(T.Rz, {
        [T.sT]: g
      }),
      children: (0, r.jsxs)("div", {
        className: s()(T.Ci, {
          [T.BX]: !k,
          [T.yg]: k,
          [T.Ud]: k && 3 === G,
          [T.VN]: N
        }),
        children: [(0, r.jsx)("div", {
          className: T.He,
          children: (0, r.jsx)(v, S(I({}, e), {
            className: T.Du
          }))
        }), (0, r.jsx)("div", {
          className: T.ll,
          children: (0, r.jsx)(v, S(I({}, e), {
            className: T.Du
          }))
        })]
      })
    })
  }) : Y ? (0, r.jsx)("div", {
    className: T.iQ,
    children: (0, r.jsx)("div", {
      className: s()({
        [T.u9]: !w,
        [T.E$]: w,
        [T.sT]: g,
        [T.VN]: N
      }),
      children: (0, r.jsx)(v, I({}, e))
    })
  }) : (0, r.jsx)("div", {
    className: T.iQ,
    children: (0, r.jsx)("div", {
      className: s()(T.Rz, {
        [T.sT]: g
      }),
      children: (0, r.jsxs)(d.DUT, {
        onClick: () => P(true),
        className: s()(T.Ci, T.vk, {
          [T.zq]: y,
          [T.BX]: !R && !y,
          [T.VN]: N
        }),
        onTransitionEnd: e => {
          y && "transform" === e.propertyName && e.target.classList.contains(T.Ci) && (D(true), m.default.track(x.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
          }), null != l && U(O.i.TAKE_ACTION))
        },
        children: [(0, r.jsx)("div", {
          className: T.UF,
          "aria-hidden": true,
          children: (0, r.jsx)(v, I({}, e))
        }), (0, r.jsx)("div", {
          className: T.He,
          children: (0, r.jsx)(v, S(I({}, L.upcomingDropUntimed), {
            pillText: ""
          }))
        }), (0, r.jsx)("div", {
          className: T.ll,
          children: (0, r.jsx)(v, S(I({}, e), {
            description: ""
          }))
        }), (0, r.jsx)("div", {
          className: T.Z7,
          children: (0, r.jsx)(d.Button, {
            variant: "primary",
            text: C.intl.string(C.t.dcztdU),
            onClick: () => P(true)
          })
        })]
      })
    })
  }) : (0, r.jsx)(j, S(I({}, L.upcomingDropUntimed), {
    forceShadow: g
  }))
});
j.displayName = "PremiumPerkCard";
let v = Chunk64700.forwardRef((e, t) => {
  var n;
  let {
    title: i,
    titleClassName: l = "",
    subtitle: a = "",
    description: o = "",
    descriptionCta: c = "",
    customContent: u,
    isPremiumGetCta: _,
    onCtaClick: p,
    onMouseEnter: m,
    className: A,
    perkComponent: f,
    cardVariant: x,
    cardType: O,
    onClick: C,
    backgroundImage: I,
    pillText: S,
    perkImage: j,
    imageOverlayText: v,
    hasNitroGradientBackground: N
  } = e, y = O === h.cJ.CARD_CAROUSEL_FIRST_ROW || O === h.cJ.CARD_CAROUSEL_SECOND_ROW || O === h.cJ.CARD_CAROUSEL_THIRD_ROW, P = "" !== o || "" !== c || "" !== a && x === h.PJ.REWARD, R = (0, g.Q)(x);
  return (0, r.jsxs)(d.DUT, {
    className: s()(T.Nr, A, null == (n = R.cardContainer) ? true : n.className, {
      [T.vk]: null != C,
      [T.JP]: y,
      [T.NT]: N
    }),
    onMouseEnter: m,
    style: {
      backgroundImage: null != I ? "url(".concat(I, ")") : true,
      backgroundPosition: null != I ? "bottom right" : true,
      backgroundRepeat: null != I ? "no-repeat" : true
    },
    onClick: C,
    children: [null != S && (0, r.jsx)(d.Text, {
      variant: "text-xs/semibold",
      className: T.Io,
      children: S
    }), (0, r.jsx)("div", {
      ref: t
    }), (0, r.jsx)(b.A, {
      title: i,
      titleClassName: l,
      subtitle: a,
      perkImage: j,
      isCarousel: y,
      descriptionCta: c,
      customContent: u,
      onCtaClick: p,
      perkComponent: f,
      subtitleClassName: T.Dc,
      cardVariant: x,
      imageOverlayText: v
    }), P && (0, r.jsx)(E.A, {
      title: i,
      titleClassName: l,
      subtitle: a,
      description: o,
      descriptionCta: c,
      isPremiumGetCta: _,
      onCtaClick: p,
      cardVariant: x,
      perkComponent: f
    }), (0, r.jsx)("div", {
      className: s()(T.Iv, T.G1),
      ref: t
    })]
  })
});
v.displayName = "PerkCardContent";
let N = j