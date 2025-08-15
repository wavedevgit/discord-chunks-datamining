/** Chunk was on 45620 **/
/** chunk id: 823941, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => k,
  n: () => P
}), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
let P = (0, Chunk884697.IC)(90),
  T = e => {
    let {
      category: t
    } = e, {
      analyticsLocations: r
    } = (0, d.ZP)(), a = l.useRef(null), i = (0, s.e7)([f.default], () => f.default.getCurrentUser());
    return h.ZP.canUseCollectibles(i) ? t.summary : x.intl.format(x.t["9hafRk"], {
      getPremium: e => (0, n.jsx)(c.P3F, {
        innerRef: a,
        className: j.getPremiumHook,
        onClick: () => {
          (0, g.Z)({
            subscriptionTier: S.Si.TIER_2,
            analyticsLocations: r,
            returnRef: a
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
  L = e => {
    let {
      src: t
    } = e;
    return /.*\.png/i.test(t) ? (0, n.jsx)("img", {
      src: t,
      alt: "",
      className: j.animationAsset
    }) : (0, n.jsx)(p.Z, {
      src: t,
      className: j.animationAsset,
      autoPlay: true,
      loop: true
    })
  };

function k(e) {
  let {
    category: t,
    className: r,
    hideLimitedTimeBadge: l = false
  } = e, {
    backgroundColors: a
  } = (0, v.Z)(t.styles), d = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), p = (0, s.e7)([b.Z], () => b.Z.isFocused()), {
    bannerOverrides: g,
    shopAllBannerStatic: f,
    shopAllBannerAnimated: h
  } = (0, y.t0)(t), S = !!(null == g ? true : g.showDarkBannerText);
  return (0, n.jsxs)(O.Z, {
    asset: f,
    className: i()(j.shopBanner, r),
    style: null != a ? {
      background: "".concat((0, E.nH)(a), " border-box border-box"),
      outlineColor: a.border.toHslString()
    } : true,
    children: [!d && null != h && p && (0, n.jsx)(L, {
      src: h
    }), (null == g ? true : g.addAttributionLogo) ? (0, n.jsxs)("div", {
      className: j.discordLogo,
      children: [(0, n.jsx)(c.gw7, {
        size: "custom",
        width: 28,
        height: 28,
        color: "currentColor",
        className: j.discordIcon
      }), (0, n.jsx)(m.Z, {
        className: j.discordWordmark
      })]
    }) : (0, n.jsx)(c.LZC, {
      size: 28
    }), (null == g ? true : g.addLogo) ? (0, n.jsx)("img", {
      className: j.categoryLogo,
      src: (0, _.uV)(t.logo, {
        size: P
      }),
      alt: t.name,
      style: {
        maxWidth: null == g ? true : g.logoMaxWidth
      }
    }) : (0, n.jsx)(c.LZC, {
      size: 90
    }), "" !== t.summary && (0, n.jsx)(c.Text, {
      className: i()(j.summary, {
        [j.blackSummary]: S
      }),
      style: null != t.bannerTextColor ? {
        color: t.bannerTextColor
      } : true,
      variant: "text-md/normal",
      children: t.skuId === o.T.DISXCORE ? (0, n.jsx)(T, {
        category: t
      }) : t.summary
    }), !l && (0, n.jsx)(C.Z, {
      category: t,
      className: j.limitedTimeBadge,
      display: "banner"
    })]
  })
}