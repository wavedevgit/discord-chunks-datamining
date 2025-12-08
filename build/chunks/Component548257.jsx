/** Chunk was on 45620 **/
/** chunk id: 548257, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk907331 = require("./907331.js"),
  Chunk685816 = require("./685816.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk884697 = require("./884697.js"),
  Chunk794324 = require("./794324.js"),
  Chunk859788 = require("./859788.jsx"),
  Chunk497788 = require("./497788.jsx"),
  Chunk310582 = require("./310582.js");
(0, Chunk884697.IC)(90);
let C = {
    rankedSkuIds: [],
    name: "",
    unpublishedAt: true,
    logoUrl: "",
    categorySkuId: true,
    bannerAsset: true,
    summary: "",
    type: Chunk685816.z.REWARD_HERO,
    categoryStoreListingId: "",
    rewardSkuId: true
  },
  h = e => {
    var t;
    let {
      isLoading: n = false,
      heroBlock: l,
      tab: o,
      onVisibilityChange: d
    } = e, h = (0, s.O)(e => {
      null == d || d(e)
    }, .1, null != d), _ = (0, a.e7)([u.default], () => u.default.getCurrentUser()), {
      bannerStyleOverrides: b,
      logoStyleOverrides: E,
      heroLogo: v,
      heroBannerStatic: S,
      heroBannerAnimated: x
    } = (0, g.hr)(l), O = null != (t = null == b ? true : b.responsive) && t, y = null == b ? true : b.backgroundStyle;
    return null != _ && (n || l !== C) ? (0, r.jsxs)("div", {
      ref: h,
      className: m.heroBlock,
      children: [(0, r.jsx)("div", {
        className: i()(m.banner, {
          [m.responsive]: O
        }),
        style: null != y ? {
          background: y
        } : true,
        children: null != S && (0, r.jsx)(f.Z, {
          bannerStatic: S,
          bannerAnimated: x,
          isResponsive: O
        })
      }), (0, r.jsxs)("div", {
        className: m.heroBlockContent,
        children: [(0, r.jsx)("div", {
          className: i()(m.heroHeaderContainer, {
            [m.responsive]: O
          }),
          children: n ? (0, r.jsx)("div", {
            className: m.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsx)("div", {
            className: m.heroHeaderBadgeLogoSummaryContainer,
            children: (0, r.jsxs)("div", {
              className: m.heroLogoNameContainer,
              children: [null != v && (0, r.jsx)("img", {
                className: m.heroHeaderLogo,
                src: v,
                alt: l.name,
                style: null == E ? true : E.toDesktopStyles()
              }), null != l.title && (0, r.jsx)(c.Heading, {
                variant: "heading-xxl/bold",
                className: m.title,
                color: "header-primary",
                children: l.title
              }), "" !== l.summary && (0, r.jsx)(c.Text, {
                variant: "text-md/normal",
                className: m.subHeaderText,
                style: null != l.bannerTextColor ? {
                  color: l.bannerTextColor
                } : true,
                children: l.summary
              })]
            })
          })
        }), (0, r.jsx)(p.Z, {
          isBlockLoading: n,
          heroBlock: l,
          tab: o
        })]
      })]
    }) : null
  }