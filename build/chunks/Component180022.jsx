/** Chunk was on 5606 **/
/** chunk id: 180022, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
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

function j(e) {
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

function T(e, t) {
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
let v = Chunk64700.memo(e => {
  let {
    name: t,
    canReveal: n = true,
    dismissibleContentType: l,
    forceShadow: g,
    cardType: A
  } = e, E = null == e ? true : e.onCtaClick, I = (0, c.bG)([u.A], () => u.A.useReducedMotion), [N, P] = i.useState(false), [R, D] = i.useState(false), w = A === h.cJ.CARD_CAROUSEL_FIRST_ROW || A === h.cJ.CARD_CAROUSEL_SECOND_ROW || A === h.cJ.CARD_CAROUSEL_THIRD_ROW, L = (0, b.A)(), [M, G] = (0, _.DP)(null != l && n ? [l] : []), {
    easterEggLevel: U,
    isEasterEggTriggered: k,
    onHover: H,
    onUnhover: B
  } = (0, f.A)(5), V = i.useMemo(() => (0, a.debounce)(() => {
    m.default.track(x.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
      card_type: (0, a.snakeCase)(t)
    })
  }, 800), [t]), F = i.useMemo(() => (0, a.debounce)(() => {
    null != E && m.default.track(x.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
      card_type: (0, a.snakeCase)(t),
      function_name: (0, a.snakeCase)(E.name)
    })
  }, 800), [t, E]);
  e = T(j({
    onMouseEnter: V
  }, e), {
    onCtaClick: null != E ? () => {
      null == E || E(), F()
    } : true
  });
  let Y = M !== l || null == l || R;
  return (i.useEffect(() => {
    I && N && (D(true), m.default.track(x.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
      card_type: t
    }), null != l && G(O.i.TAKE_ACTION))
  }, [I, N, l, t, G]), (0, p.A)({
    type: o.ImpressionTypes.VIEW,
    name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
    properties: {
      name: t
    }
  }), n) ? t === b.U.UPCOMING_DROP_UNTIMED ? (0, r.jsx)("div", {
    className: y.iQ,
    onMouseEnter: H,
    onFocus: H,
    onMouseLeave: B,
    onBlur: B,
    children: (0, r.jsx)("div", {
      className: s()(y.Rz, {
        [y.sT]: g
      }),
      children: (0, r.jsxs)("div", {
        className: s()(y.Ci, {
          [y.BX]: !k,
          [y.yg]: k,
          [y.Ud]: k && 3 === U,
          [y.VN]: I
        }),
        children: [(0, r.jsx)("div", {
          className: y.He,
          children: (0, r.jsx)(S, T(j({}, e), {
            className: y.Du
          }))
        }), (0, r.jsx)("div", {
          className: y.ll,
          children: (0, r.jsx)(S, T(j({}, e), {
            className: y.Du
          }))
        })]
      })
    })
  }) : Y ? (0, r.jsx)("div", {
    className: y.iQ,
    children: (0, r.jsx)("div", {
      className: s()({
        [y.u9]: !w,
        [y.E$]: w,
        [y.sT]: g,
        [y.VN]: I
      }),
      children: (0, r.jsx)(S, j({}, e))
    })
  }) : (0, r.jsx)("div", {
    className: y.iQ,
    children: (0, r.jsx)("div", {
      className: s()(y.Rz, {
        [y.sT]: g
      }),
      children: (0, r.jsxs)(d.DUT, {
        onClick: () => P(true),
        className: s()(y.Ci, y.vk, {
          [y.zq]: N,
          [y.BX]: !R && !N,
          [y.VN]: I
        }),
        onTransitionEnd: e => {
          N && "transform" === e.propertyName && e.target.classList.contains(y.Ci) && (D(true), m.default.track(x.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
          }), null != l && G(O.i.TAKE_ACTION))
        },
        children: [(0, r.jsx)("div", {
          className: y.UF,
          "aria-hidden": true,
          children: (0, r.jsx)(S, j({}, e))
        }), (0, r.jsx)("div", {
          className: y.He,
          children: (0, r.jsx)(S, T(j({}, L.upcomingDropUntimed), {
            pillText: ""
          }))
        }), (0, r.jsx)("div", {
          className: y.ll,
          children: (0, r.jsx)(S, T(j({}, e), {
            description: ""
          }))
        }), (0, r.jsx)("div", {
          className: y.Z7,
          children: (0, r.jsx)(d.Button, {
            variant: "primary",
            text: C.intl.string(C.t.dcztdU),
            onClick: () => P(true)
          })
        })]
      })
    })
  }) : (0, r.jsx)(v, T(j({}, L.upcomingDropUntimed), {
    forceShadow: g
  }))
});
v.displayName = "PremiumPerkCard";
let S = Chunk64700.forwardRef((e, t) => {
  var n;
  let {
    title: i,
    titleClassName: l = "",
    subtitle: a = "",
    description: o = "",
    descriptionCta: c = "",
    customContent: u,
    isPremiumGetCta: p,
    onCtaClick: _,
    onMouseEnter: m,
    className: f,
    perkComponent: b,
    cardVariant: x,
    cardType: O,
    onClick: C,
    backgroundImage: j,
    pillText: T,
    perkImage: v,
    imageOverlayText: S,
    hasNitroGradientBackground: I
  } = e, N = O === h.cJ.CARD_CAROUSEL_FIRST_ROW || O === h.cJ.CARD_CAROUSEL_SECOND_ROW || O === h.cJ.CARD_CAROUSEL_THIRD_ROW, P = "" !== o || "" !== c || "" !== a && x === h.PJ.REWARD, R = (0, g.Q)(x);
  return (0, r.jsxs)(d.DUT, {
    className: s()(y.Nr, f, null == (n = R.cardContainer) ? true : n.className, {
      [y.vk]: null != C,
      [y.JP]: N,
      [y.NT]: I
    }),
    onMouseEnter: m,
    style: {
      backgroundImage: null != j ? "url(".concat(j, ")") : true,
      backgroundPosition: null != j ? "bottom right" : true,
      backgroundRepeat: null != j ? "no-repeat" : true
    },
    onClick: C,
    children: [null != T && (0, r.jsx)(d.Text, {
      variant: "text-xs/semibold",
      className: y.Io,
      children: T
    }), (0, r.jsx)("div", {
      ref: t
    }), (0, r.jsx)(A.A, {
      title: i,
      titleClassName: l,
      subtitle: a,
      perkImage: v,
      isCarousel: N,
      descriptionCta: c,
      customContent: u,
      onCtaClick: _,
      perkComponent: b,
      subtitleClassName: y.Dc,
      cardVariant: x,
      imageOverlayText: S
    }), P && (0, r.jsx)(E.A, {
      title: i,
      titleClassName: l,
      subtitle: a,
      description: o,
      descriptionCta: c,
      isPremiumGetCta: p,
      onCtaClick: _,
      cardVariant: x,
      perkComponent: b
    }), (0, r.jsx)("div", {
      className: s()(y.Iv, y.G1),
      ref: t
    })]
  })
});
S.displayName = "PerkCardContent";
let I = v