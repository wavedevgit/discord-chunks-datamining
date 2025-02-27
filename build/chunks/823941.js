/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Z: () => L,
  n: () => w
}), r(301563);
var n = r(200651),
  l = r(192379),
  i = r(120356),
  a = r.n(i),
  o = r(180650),
  s = r(399606),
  c = r(481060),
  d = r(607070),
  u = r(906732),
  p = r(70097),
  f = r(963249),
  h = r(594174),
  b = r(451478),
  m = r(754347),
  C = r(74538),
  g = r(884697),
  v = r(624377),
  x = r(141011),
  j = r(813083),
  _ = r(67938),
  y = r(372654),
  O = r(215023),
  k = r(474936),
  P = r(388032),
  S = r(697604);
let w = (0, g.IC)(90),
  E = e => {
    let {
      category: t
    } = e, {
      analyticsLocations: r
    } = (0, u.ZP)(), i = l.useRef(null), a = (0, s.e7)([h.default], () => h.default.getCurrentUser());
    return C.ZP.canUseCollectibles(a) ? t.summary : P.NW.format(P.t["9hafRk"], {
      getPremium: e => (0, n.jsx)(c.P3F, {
        innerRef: i,
        className: S.getPremiumHook,
        onClick: () => {
          (0, f.Z)({
            subscriptionTier: k.Si.TIER_2,
            analyticsLocations: r,
            returnRef: i
          })
        },
        tag: "span",
        children: (0, n.jsx)(c.Text, {
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
    return /.*\.png/i.test(t) ? (0, n.jsx)("img", {
      src: t,
      alt: "",
      className: S.animationAsset
    }) : (0, n.jsx)(p.Z, {
      src: t,
      className: S.animationAsset,
      autoPlay: !0,
      loop: !0
    })
  };

function L(e) {
  var t, r, l, i, u, p, f;
  let {
    category: h,
    className: C,
    hideLimitedTimeBadge: k = !1
  } = e, {
    backgroundColors: P
  } = (0, v.Z)(h.styles), L = (0, O.ZS)(h.skuId), N = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), T = (0, s.e7)([b.Z], () => b.Z.isFocused());
  if (h.skuId === o.T.CHANCE) return (0, n.jsx)(_.O, {
    category: h
  });
  let B = !!(null == L ? void 0 : L.showDarkBannerText),
    Z = null !== (p = null == L ? void 0 : L.animatedBanner) && void 0 !== p ? p : null === (t = h.bannerAsset) || void 0 === t ? void 0 : t.animated;
  return (0, n.jsxs)(x.Z, {
    asset: null !== (f = null === (r = h.bannerAsset) || void 0 === r ? void 0 : r.static) && void 0 !== f ? f : h.banner,
    className: a()(S.shopBanner, C),
    style: null != P ? {
      background: "".concat((0, y.nH)(P), " border-box border-box"),
      outlineColor: P.border.toHslString()
    } : void 0,
    children: [!N && void 0 !== Z && T && (0, n.jsx)(I, {
      src: Z
    }), (null === (l = O.Ve[h.skuId]) || void 0 === l ? void 0 : l.addAttributionLogo) ? (0, n.jsxs)("div", {
      className: S.discordLogo,
      children: [(0, n.jsx)(c.gw7, {
        size: "custom",
        width: 28,
        height: 28,
        color: "currentColor",
        className: S.discordIcon
      }), (0, n.jsx)(m.Z, {
        className: S.discordWordmark
      })]
    }) : (0, n.jsx)(c.LZC, {
      size: 28
    }), (null === (i = O.Ve[h.skuId]) || void 0 === i ? void 0 : i.addLogo) ? (0, n.jsx)("img", {
      className: S.categoryLogo,
      src: (0, g.uV)(h.logo, {
        size: w
      }),
      alt: h.name,
      style: {
        maxWidth: null === (u = O.Ve[h.skuId]) || void 0 === u ? void 0 : u.logoMaxWidth
      }
    }) : (0, n.jsx)(c.LZC, {
      size: 90
    }), (0, n.jsx)(c.Text, {
      className: a()(S.summary, {
        [S.blackSummary]: B
      }),
      variant: "text-md/normal",
      children: h.skuId === o.T.DISXCORE ? (0, n.jsx)(E, {
        category: h
      }) : h.summary
    }), !k && (0, n.jsx)(j.Z, {
      category: h,
      className: S.limitedTimeBadge,
      display: "banner"
    })]
  })
}