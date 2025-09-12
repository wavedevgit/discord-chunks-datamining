/** Chunk was on 45620 **/
/** chunk id: 823941, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => B,
  n: () => L
}), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk180650 = require("./180650.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk963249 = require("./963249.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk451478 = require("./451478.js"),
  Chunk754347 = require("./754347.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk884697 = require("./884697.js"),
  Chunk624377 = require("./624377.js"),
  Chunk141011 = require("./141011.jsx"),
  Chunk813083 = require("./813083.jsx"),
  Chunk372654 = require("./372654.js"),
  Chunk794324 = require("./794324.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk923732 = require("./923732.js");
let L = (0, Chunk884697.IC)(90),
  j = e => {
    let {
      category: t
    } = e, {
      analyticsLocations: n
    } = (0, d.ZP)(), a = l.useRef(null), s = (0, o.e7)([p.default], () => p.default.getCurrentUser());
    return m.ZP.canUseCollectibles(s) ? t.summary : y.intl.format(y.t["9hafRk"], {
      getPremium: e => (0, r.jsx)(c.P3F, {
        innerRef: a,
        className: T.getPremiumHook,
        onClick: () => {
          (0, f.Z)({
            subscriptionTier: x.Si.TIER_2,
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
  k = e => {
    let {
      src: t
    } = e;
    return /.*\.png/i.test(t) ? (0, r.jsx)("img", {
      src: t,
      alt: "",
      className: T.animationAsset
    }) : (0, r.jsx)(g.Z, {
      src: t,
      className: T.animationAsset,
      autoPlay: true,
      loop: true
    })
  };

function B(e) {
  let {
    category: t,
    className: n,
    hideLimitedTimeBadge: l = false
  } = e, {
    backgroundColors: a
  } = (0, b.Z)(t.styles), d = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), g = (0, o.e7)([h.Z], () => h.Z.isFocused()), {
    bannerOverrides: f,
    shopAllBannerStatic: p,
    shopAllBannerAnimated: m
  } = (0, O.t0)(t), x = !!(null == f ? true : f.showDarkBannerText);
  return (0, r.jsxs)(E.Z, {
    asset: p,
    className: s()(T.shopBanner, n),
    style: null != a ? {
      background: "".concat((0, v.nH)(a), " border-box border-box"),
      outlineColor: a.border.toHslString()
    } : true,
    children: [!d && null != m && g && (0, r.jsx)(k, {
      src: m
    }), (null == f ? true : f.addAttributionLogo) ? (0, r.jsxs)("div", {
      className: T.discordLogo,
      children: [(0, r.jsx)(c.gw7, {
        size: "custom",
        width: 28,
        height: 28,
        color: "currentColor",
        className: T.discordIcon
      }), (0, r.jsx)(_.Z, {
        className: T.discordWordmark
      })]
    }) : (0, r.jsx)(c.LZC, {
      size: 28
    }), (null == f ? true : f.addLogo) ? (0, r.jsx)("img", {
      className: T.categoryLogo,
      src: (0, C.uV)(t.logo, {
        size: L
      }),
      alt: t.name,
      style: {
        maxWidth: null == f ? true : f.logoMaxWidth
      }
    }) : (0, r.jsx)(c.LZC, {
      size: 90
    }), "" !== t.summary && (0, r.jsx)(c.Text, {
      className: s()(T.summary, {
        [T.blackSummary]: x
      }),
      style: null != t.bannerTextColor ? {
        color: t.bannerTextColor
      } : true,
      variant: "text-md/normal",
      children: t.skuId === i.T.DISXCORE ? (0, r.jsx)(j, {
        category: t
      }) : t.summary
    }), !l && (0, r.jsx)(S.Z, {
      category: t,
      className: T.limitedTimeBadge,
      display: S.k.BANNER
    })]
  })
}