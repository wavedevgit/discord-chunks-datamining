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
    categorySkuId: true,
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
      tab: i,
      onVisibilityChange: d
    } = e, h = (0, s.O)(e => {
      null == d || d(e)
    }, .1, null != d), C = (0, o.e7)([u.default], () => u.default.getCurrentUser()), {
      bannerDisplayConfig: E,
      logoDisplayConfig: v,
      heroLogo: S,
      heroBannerStatic: x,
      heroBannerAnimated: O
    } = (0, f.hr)(l), _ = null != (t = null == E ? true : E.responsive) && t, y = null == E ? true : E.backgroundStyle;
    return null != C && (n || l !== m) ? (0, r.jsxs)("div", {
      ref: h,
      className: p.heroBlock,
      children: [(0, r.jsx)("div", {
        className: a()(p.banner, {
          [p.responsive]: _
        }),
        style: null != y ? {
          background: y
        } : true,
        children: null != x && (0, r.jsx)(g.Z, {
          bannerStatic: x,
          bannerAnimated: O,
          isResponsive: _
        })
      }), (0, r.jsxs)("div", {
        className: p.heroBlockContent,
        children: [(0, r.jsx)("div", {
          className: a()(p.heroHeaderContainer, {
            [p.responsive]: _
          }),
          children: n ? (0, r.jsx)("div", {
            className: p.heroHeaderBadgeLogoSummaryContainer
          }) : (0, r.jsx)("div", {
            className: p.heroHeaderBadgeLogoSummaryContainer,
            children: (0, r.jsxs)("div", {
              className: p.heroLogoNameContainer,
              children: [null != S && (0, r.jsx)("img", {
                className: p.heroHeaderLogo,
                src: S,
                alt: l.name,
                style: null == v ? true : v.toDesktopStyles()
              }), null != l.title && (0, r.jsx)(c.Heading, {
                variant: "heading-xxl/bold",
                className: p.title,
                color: "text-strong",
                children: l.title
              }), "" !== l.summary && (0, r.jsx)(c.Text, {
                variant: "text-md/normal",
                className: p.subHeaderText,
                style: null != l.bannerTextColor ? {
                  color: l.bannerTextColor
                } : true,
                children: l.summary
              })]
            })
          })
        }), (0, r.jsx)(b.Z, {
          isBlockLoading: n,
          heroBlock: l,
          tab: i
        })]
      })]
    }) : null
  }