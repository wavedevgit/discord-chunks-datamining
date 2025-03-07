/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Z: () => N,
  n: () => E
}), n(301563);
var r = n(200651),
  l = n(192379),
  a = n(120356),
  s = n.n(a),
  o = n(180650),
  i = n(399606),
  d = n(481060),
  c = n(607070),
  u = n(906732),
  m = n(70097),
  g = n(963249),
  h = n(594174),
  f = n(451478),
  p = n(754347),
  b = n(74538),
  C = n(884697),
  _ = n(624377),
  v = n(141011),
  x = n(813083),
  k = n(372654),
  j = n(794324),
  S = n(215023),
  y = n(474936),
  O = n(388032),
  B = n(134442);
let E = (0, C.IC)(90),
  T = e => {
    let {
      category: t
    } = e, {
      analyticsLocations: n
    } = (0, u.ZP)(), a = l.useRef(null), s = (0, i.e7)([h.default], () => h.default.getCurrentUser());
    return b.ZP.canUseCollectibles(s) ? t.summary : O.NW.format(O.t["9hafRk"], {
      getPremium: e => (0, r.jsx)(d.P3F, {
        innerRef: a,
        className: B.getPremiumHook,
        onClick: () => {
          (0, g.Z)({
            subscriptionTier: y.Si.TIER_2,
            analyticsLocations: n,
            returnRef: a
          })
        },
        tag: "span",
        children: (0, r.jsx)(d.Text, {
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
      className: B.animationAsset
    }) : (0, r.jsx)(m.Z, {
      src: t,
      className: B.animationAsset,
      autoPlay: !0,
      loop: !0
    })
  };

function N(e) {
  var t, n, l;
  let {
    category: a,
    className: u,
    hideLimitedTimeBadge: m = !1
  } = e, {
    backgroundColors: g
  } = (0, _.Z)(a.styles), h = (0, S.ZS)(a.skuId), b = (0, i.e7)([c.Z], () => c.Z.useReducedMotion), y = (0, i.e7)([f.Z], () => f.Z.isFocused()), {
    categoryBannerStatic: O,
    categoryBannerAnimated: N
  } = (0, j.tK)(a), L = !!(null == h ? void 0 : h.showDarkBannerText);
  return (0, r.jsxs)(v.Z, {
    asset: O,
    className: s()(B.shopBanner, u),
    style: null != g ? {
      background: "".concat((0, k.nH)(g), " border-box border-box"),
      outlineColor: g.border.toHslString()
    } : void 0,
    children: [!b && null != N && y && (0, r.jsx)(I, {
      src: N
    }), (null === (t = S.Ve[a.skuId]) || void 0 === t ? void 0 : t.addAttributionLogo) ? (0, r.jsxs)("div", {
      className: B.discordLogo,
      children: [(0, r.jsx)(d.gw7, {
        size: "custom",
        width: 28,
        height: 28,
        color: "currentColor",
        className: B.discordIcon
      }), (0, r.jsx)(p.Z, {
        className: B.discordWordmark
      })]
    }) : (0, r.jsx)(d.LZC, {
      size: 28
    }), (null === (n = S.Ve[a.skuId]) || void 0 === n ? void 0 : n.addLogo) ? (0, r.jsx)("img", {
      className: B.categoryLogo,
      src: (0, C.uV)(a.logo, {
        size: E
      }),
      alt: a.name,
      style: {
        maxWidth: null === (l = S.Ve[a.skuId]) || void 0 === l ? void 0 : l.logoMaxWidth
      }
    }) : (0, r.jsx)(d.LZC, {
      size: 90
    }), (0, r.jsx)(d.Text, {
      className: s()(B.summary, {
        [B.blackSummary]: L
      }),
      variant: "text-md/normal",
      children: a.skuId === o.T.DISXCORE ? (0, r.jsx)(T, {
        category: a
      }) : a.summary
    }), !m && (0, r.jsx)(x.Z, {
      category: a,
      className: B.limitedTimeBadge,
      display: "banner"
    })]
  })
}