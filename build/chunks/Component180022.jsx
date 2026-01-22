/** Chunk was on web.js **/
/** chunk id: 180022, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => P
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

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
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
let R = Chunk64700.memo(e => {
  let {
    name: t,
    canReveal: n = true,
    dismissibleContentType: a,
    forceShadow: h,
    cardType: b
  } = e, y = null == e ? true : e.onCtaClick, I = (0, c.bG)([d.A], () => d.A.useReducedMotion), [C, P] = i.useState(false), [D, x] = i.useState(false), L = b === E.cJ.CARD_CAROUSEL_FIRST_ROW || b === E.cJ.CARD_CAROUSEL_SECOND_ROW || b === E.cJ.CARD_CAROUSEL_THIRD_ROW, j = (0, g.A)(), [M, k] = (0, p.DP)(null != a && n ? [a] : []), {
    easterEggLevel: U,
    isEasterEggTriggered: G,
    onHover: V,
    onUnhover: F
  } = (0, m.A)(5), B = i.useMemo(() => (0, o.debounce)(() => {
    _.default.track(O.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
      card_type: (0, o.snakeCase)(t)
    })
  }, 800), [t]), H = i.useMemo(() => (0, o.debounce)(() => {
    null != y && _.default.track(O.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
      card_type: (0, o.snakeCase)(t),
      function_name: (0, o.snakeCase)(y.name)
    })
  }, 800), [t, y]), Y = () => {
    null == y || y(), H()
  };
  e = N(T({
    onMouseEnter: B
  }, e), {
    onCtaClick: null != y ? Y : true
  });
  let W = M !== a || null == a || D,
    K = e => {
      C && "transform" === e.propertyName && e.target.classList.contains(S.Ci) && (x(true), _.default.track(O.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: t
      }), null != a && k(A.i.TAKE_ACTION))
    };
  return (i.useEffect(() => {
    I && C && (x(true), _.default.track(O.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
      card_type: t
    }), null != a && k(A.i.TAKE_ACTION))
  }, [I, C, a, t, k]), (0, f.A)({
    type: l.ImpressionTypes.VIEW,
    name: l.ImpressionNames.PERK_DISCOVERABILITY_CARD,
    properties: {
      name: t
    }
  }), n) ? t === g.U.UPCOMING_DROP_UNTIMED ? (0, r.jsx)("div", {
    className: S.iQ,
    onMouseEnter: V,
    onFocus: V,
    onMouseLeave: F,
    onBlur: F,
    children: (0, r.jsx)("div", {
      className: s()(S.Rz, {
        [S.sT]: h
      }),
      children: (0, r.jsxs)("div", {
        className: s()(S.Ci, {
          [S.BX]: !G,
          [S.yg]: G,
          [S.Ud]: G && 3 === U,
          [S.VN]: I
        }),
        children: [(0, r.jsx)("div", {
          className: S.He,
          children: (0, r.jsx)(w, N(T({}, e), {
            className: S.Du
          }))
        }), (0, r.jsx)("div", {
          className: S.ll,
          children: (0, r.jsx)(w, N(T({}, e), {
            className: S.Du
          }))
        })]
      })
    })
  }) : W ? (0, r.jsx)("div", {
    className: S.iQ,
    children: (0, r.jsx)("div", {
      className: s()({
        [S.u9]: !L,
        [S.E$]: L,
        [S.sT]: h,
        [S.VN]: I
      }),
      children: (0, r.jsx)(w, T({}, e))
    })
  }) : (0, r.jsx)("div", {
    className: S.iQ,
    children: (0, r.jsx)("div", {
      className: s()(S.Rz, {
        [S.sT]: h
      }),
      children: (0, r.jsxs)(u.DUT, {
        onClick: () => P(true),
        className: s()(S.Ci, S.vk, {
          [S.zq]: C,
          [S.BX]: !D && !C,
          [S.VN]: I
        }),
        onTransitionEnd: K,
        children: [(0, r.jsx)("div", {
          className: S.UF,
          "aria-hidden": true,
          children: (0, r.jsx)(w, T({}, e))
        }), (0, r.jsx)("div", {
          className: S.He,
          children: (0, r.jsx)(w, N(T({}, j.upcomingDropUntimed), {
            pillText: ""
          }))
        }), (0, r.jsx)("div", {
          className: S.ll,
          children: (0, r.jsx)(w, N(T({}, e), {
            description: ""
          }))
        }), (0, r.jsx)("div", {
          className: S.Z7,
          children: (0, r.jsx)(u.Button, {
            variant: "primary",
            text: v.intl.string(v.t.dcztdU),
            onClick: () => P(true)
          })
        })]
      })
    })
  }) : (0, r.jsx)(R, N(T({}, j.upcomingDropUntimed), {
    forceShadow: h
  }))
});
R.displayName = "PremiumPerkCard";
let w = Chunk64700.forwardRef((e, t) => {
  var n;
  let {
    title: i,
    titleClassName: a = "",
    subtitle: o = "",
    description: l = "",
    descriptionCta: c = "",
    customContent: d,
    isPremiumGetCta: f,
    onCtaClick: p,
    onMouseEnter: _,
    className: m,
    perkComponent: g,
    cardVariant: O,
    cardType: A,
    onClick: v,
    backgroundImage: I,
    pillText: T,
    perkImage: C,
    imageOverlayText: N,
    hasNitroGradientBackground: R
  } = e, w = A === E.cJ.CARD_CAROUSEL_FIRST_ROW || A === E.cJ.CARD_CAROUSEL_SECOND_ROW || A === E.cJ.CARD_CAROUSEL_THIRD_ROW, P = "" !== l || "" !== c || "" !== o && O === E.PJ.REWARD, D = (0, h.Q)(O);
  return (0, r.jsxs)(u.DUT, {
    className: s()(S.Nr, m, null == (n = D.cardContainer) ? true : n.className, {
      [S.vk]: null != v,
      [S.JP]: w,
      [S.NT]: R
    }),
    onMouseEnter: _,
    style: {
      backgroundImage: null != I ? "url(".concat(I, ")") : true,
      backgroundPosition: null != I ? "bottom right" : true,
      backgroundRepeat: null != I ? "no-repeat" : true
    },
    onClick: v,
    children: [null != T && (0, r.jsx)(u.Text, {
      variant: "text-xs/semibold",
      className: S.Io,
      children: T
    }), (0, r.jsx)("div", {
      ref: t
    }), (0, r.jsx)(b.A, {
      title: i,
      titleClassName: a,
      subtitle: o,
      perkImage: C,
      isCarousel: w,
      descriptionCta: c,
      customContent: d,
      onCtaClick: p,
      perkComponent: g,
      subtitleClassName: S.Dc,
      cardVariant: O,
      imageOverlayText: N
    }), P && (0, r.jsx)(y.A, {
      title: i,
      titleClassName: a,
      subtitle: o,
      description: l,
      descriptionCta: c,
      isPremiumGetCta: f,
      onCtaClick: p,
      cardVariant: O,
      perkComponent: g
    }), (0, r.jsx)("div", {
      className: s()(S.Iv, S.G1),
      ref: t
    })]
  })
});
w.displayName = "PerkCardContent";
let P = R