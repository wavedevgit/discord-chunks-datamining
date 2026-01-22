/** Chunk was on 59275 **/
/** chunk id: 633026, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk172218 = require("./172218.js"),
  Chunk651162 = require("./651162.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk993408 = require("./993408.js"),
  Chunk212407 = require("./212407.js"),
  Chunk815280 = require("./815280.jsx"),
  Chunk695413 = require("./695413.jsx"),
  Chunk201073 = require("./201073.js");
(0, Chunk993408.$b)(90);
let m = {
    rankedSkuIds: [],
    name: "",
    unpublishedAt: true,
    categorySkuId: true,
    summary: "",
    type: Chunk651162.g.REWARD_HERO,
    categoryStoreListingId: "",
    rewardSkuId: true
  },
  h = e => {
    var t;
    let {
      isLoading: l = false,
      heroBlock: r,
      tab: i,
      onVisibilityChange: d
    } = e, h = (0, a.K)(e => {
      null == d || d(e)
    }, .1, null != d), E = (0, o.bG)([u.default], () => u.default.getCurrentUser()), {
      bannerDisplayConfig: v,
      logoDisplayConfig: A,
      heroLogo: x,
      heroBannerStatic: S,
      heroBannerAnimated: C
    } = (0, f.Kk)(r), O = null != (t = null == v ? true : v.responsive) && t, _ = null == v ? true : v.backgroundStyle;
    return null != E && (l || r !== m) ? (0, n.jsxs)("div", {
      ref: h,
      className: p.os,
      children: [(0, n.jsx)("div", {
        className: s()(p.vK, {
          [p.no]: O
        }),
        style: null != _ ? {
          background: _
        } : true,
        children: null != S && (0, n.jsx)(b.A, {
          bannerStatic: S,
          bannerAnimated: C,
          isResponsive: O
        })
      }), (0, n.jsxs)("div", {
        className: p.xX,
        children: [(0, n.jsx)("div", {
          className: s()(p.bC, {
            [p.no]: O
          }),
          children: l ? (0, n.jsx)("div", {
            className: p.Hw
          }) : (0, n.jsx)("div", {
            className: p.Hw,
            children: (0, n.jsxs)("div", {
              className: p.Wq,
              children: [null != x && (0, n.jsx)("img", {
                className: p.rm,
                src: x,
                alt: r.name,
                style: null == A ? true : A.toDesktopStyles()
              }), null != r.title && (0, n.jsx)(c.Heading, {
                variant: "heading-xxl/bold",
                className: p.DD,
                color: "text-strong",
                children: r.title
              }), "" !== r.summary && (0, n.jsx)(c.Text, {
                variant: "text-md/normal",
                className: p.Tm,
                style: null != r.bannerTextColor ? {
                  color: r.bannerTextColor
                } : true,
                children: r.summary
              })]
            })
          })
        }), (0, n.jsx)(g.A, {
          isBlockLoading: l,
          heroBlock: r,
          tab: i
        })]
      })]
    }) : null
  }