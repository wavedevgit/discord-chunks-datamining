/** Chunk was on 45620 **/
/** chunk id: 548257, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk907331 = require("./907331.js"),
  Chunk685816 = require("./685816.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk884697 = require("./884697.js"),
  Chunk794324 = require("./794324.js"),
  Chunk859788 = require("./859788.jsx"),
  Chunk497788 = require("./497788.jsx"),
  Chunk222194 = require("./222194.js");
(0, Chunk884697.IC)(90);
let m = {
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
    } = e, h = (0, i.O)(e => {
      null == d || d(e)
    }, .1, null != d), C = (0, s.e7)([u.default], () => u.default.getCurrentUser()), {
      bannerStyleOverrides: v,
      logoStyleOverrides: E,
      heroLogo: S,
      heroBannerStatic: _,
      heroBannerAnimated: O
    } = (0, f.hr)(l), x = null != (t = null == v ? true : v.responsive) && t, y = null == v ? true : v.backgroundStyle;
    return null != C && (n || l !== m) ? (0, r.jsxs)("div", {
      ref: h,
      className: b.heroBlock,
      children: [(0, r.jsx)("div", {
        className: a()(b.banner, {
          [b.responsive]: x
        }),
        style: null != y ? {
          background: y
        } : true,
        children: null != _ && (0, r.jsx)(g.Z, {
          bannerStatic: _,
          bannerAnimated: O,
          isResponsive: x
        })
      }), (0, r.jsxs)("div", {
        className: b.heroBlockContent,
        children: [(0, r.jsx)("div", {
          className: a()(b.heroHeaderContainer, {
            [b.responsive]: x
          }),
          children: n ? (0, r.jsx)("div", {
            className: b.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsx)("div", {
            className: b.heroHeaderBadgeLogoSummaryContainer,
            children: (0, r.jsxs)("div", {
              className: b.heroLogoNameContainer,
              children: [null != S && (0, r.jsx)("img", {
                className: b.heroHeaderLogo,
                src: S,
                alt: l.name,
                style: null == E ? true : E.toDesktopStyles()
              }), null != l.title && (0, r.jsx)(c.Heading, {
                variant: "heading-xxl/bold",
                className: b.title,
                color: "header-primary",
                children: l.title
              }), "" !== l.summary && (0, r.jsx)(c.Text, {
                variant: "text-md/normal",
                className: b.subHeaderText,
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