/** Chunk was on 45620 **/
/** chunk id: 548257, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
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
  Chunk687983 = require("./687983.js");
(0, Chunk884697.IC)(90);
let h = {
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
  C = e => {
    var t;
    let {
      isLoading: n = false,
      heroBlock: l,
      tab: s,
      onVisibilityChange: d
    } = e, C = (0, a.O)(e => {
      null == d || d(e)
    }, .1, null != d), _ = (0, o.e7)([u.default], () => u.default.getCurrentUser()), {
      bannerStyleOverrides: b,
      logoStyleOverrides: v,
      heroLogo: x,
      heroBannerStatic: E,
      heroBannerAnimated: O
    } = (0, f.hr)(l), S = null != (t = null == b ? true : b.responsive) && t, y = null == b ? true : b.backgroundStyle;
    return null != _ && (n || l !== h) ? (0, r.jsxs)("div", {
      ref: C,
      className: m.heroBlock,
      children: [(0, r.jsx)("div", {
        className: i()(m.banner, {
          [m.responsive]: S
        }),
        style: null != y ? {
          background: y
        } : true,
        children: null != E && (0, r.jsx)(g.Z, {
          bannerStatic: E,
          bannerAnimated: O,
          isResponsive: S
        })
      }), (0, r.jsxs)("div", {
        className: m.heroBlockContent,
        children: [(0, r.jsx)("div", {
          className: i()(m.heroHeaderContainer, {
            [m.responsive]: S
          }),
          children: n ? (0, r.jsx)("div", {
            className: m.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsx)("div", {
            className: m.heroHeaderBadgeLogoSummaryContainer,
            children: (0, r.jsxs)("div", {
              className: m.heroLogoNameContainer,
              children: [null != x && (0, r.jsx)("img", {
                className: m.heroHeaderLogo,
                src: x,
                alt: l.name,
                style: null == v ? true : v.toDesktopStyles()
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
          tab: s
        })]
      })]
    }) : null
  }