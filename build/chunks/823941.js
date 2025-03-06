/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Z: () => L,
  n: () => B
}), n(301563);
var r = n(200651),
  l = n(192379),
  a = n(120356),
  s = n.n(a),
  o = n(180650),
  i = n(399606),
  c = n(481060),
  d = n(607070),
  u = n(906732),
  m = n(70097),
  g = n(963249),
  f = n(594174),
  h = n(451478),
  p = n(754347),
  b = n(74538),
  C = n(884697),
  _ = n(624377),
  v = n(141011),
  x = n(813083),
  j = n(372654),
  k = n(794324),
  y = n(215023),
  S = n(474936),
  O = n(388032),
  E = n(134442);
let B = (0, C.IC)(90),
  T = e => {
    let {
      category: t
    } = e, {
      analyticsLocations: n
    } = (0, u.ZP)(), a = l.useRef(null), s = (0, i.e7)([f.default], () => f.default.getCurrentUser());
    return b.ZP.canUseCollectibles(s) ? t.summary : O.NW.format(O.t["9hafRk"], {
      getPremium: e => (0, r.jsx)(c.P3F, {
        innerRef: a,
        className: E.getPremiumHook,
        onClick: () => {
          (0, g.Z)({
            subscriptionTier: S.Si.TIER_2,
            analyticsLocations: n,
            returnRef: a
          })
        },
        tag: "span",
        children: (0, r.jsx)(c.Text, {
          variant: "text-md/normal",
          color: "always-white",
          tag: "span",
          children: e
        })
      })
    })
  },
  I = e => {
    let {
      src: t
    } = e;
    return /.*\.png/i.test(t) ? (0, r.jsx)("img", {
      src: t,
      alt: "",
      className: E.animationAsset
    }) : (0, r.jsx)(m.Z, {
      src: t,
      className: E.animationAsset,
      autoPlay: !0,
      loop: !0
    })
  };

function L(e) {
  var t, n, l;
  let {
    category: a,
    className: u,
    hideLimitedTimeBadge: m = !1
  } = e, {
    backgroundColors: g
  } = (0, _.Z)(a.styles), f = (0, y.ZS)(a.skuId), b = (0, i.e7)([d.Z], () => d.Z.useReducedMotion), S = (0, i.e7)([h.Z], () => h.Z.isFocused()), {
    categoryBannerStatic: O,
    categoryBannerAnimated: L
  } = (0, k.tK)(a), w = !!(null == f ? void 0 : f.showDarkBannerText);
  return (0, r.jsxs)(v.Z, {
    asset: O,
    className: s()(E.shopBanner, u),
    style: null != g ? {
      background: "".concat((0, j.nH)(g), " border-box border-box"),
      outlineColor: g.border.toHslString()
    } : void 0,
    children: [!b && null != L && S && (0, r.jsx)(I, {
      src: L
    }), (null === (t = y.Ve[a.skuId]) || void 0 === t ? void 0 : t.addAttributionLogo) ? (0, r.jsxs)("div", {
      className: E.discordLogo,
      children: [(0, r.jsx)(c.gw7, {
        size: "custom",
        width: 28,
        height: 28,
        color: "currentColor",
        className: E.discordIcon
      }), (0, r.jsx)(p.Z, {
        className: E.discordWordmark
      })]
    }) : (0, r.jsx)(c.LZC, {
      size: 28
    }), (null === (n = y.Ve[a.skuId]) || void 0 === n ? void 0 : n.addLogo) ? (0, r.jsx)("img", {
      className: E.categoryLogo,
      src: (0, C.uV)(a.logo, {
        size: B
      }),
      alt: a.name,
      style: {
        maxWidth: null === (l = y.Ve[a.skuId]) || void 0 === l ? void 0 : l.logoMaxWidth
      }
    }) : (0, r.jsx)(c.LZC, {
      size: 90
    }), (0, r.jsx)(c.Text, {
      className: s()(E.summary, {
        [E.blackSummary]: w
      }),
      variant: "text-md/normal",
      children: a.skuId === o.T.DISXCORE ? (0, r.jsx)(T, {
        category: a
      }) : a.summary
    }), !m && (0, r.jsx)(x.Z, {
      category: a,
      className: E.limitedTimeBadge,
      display: "banner"
    })]
  })
}