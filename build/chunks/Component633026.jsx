/** Chunk was on 59275 **/
/** chunk id: 633026, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => b
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
let _ = {
    rankedSkuIds: [],
    name: "",
    unpublishedAt: true,
    categorySkuId: true,
    summary: "",
    type: Chunk651162.g.REWARD_HERO,
    categoryStoreListingId: "",
    rewardSkuId: true
  },
  b = e => {
    var t;
    let {
      isLoading: n = false,
      heroBlock: l,
      tab: i,
      onVisibilityChange: d
    } = e, b = (0, a.K)(e => {
      null == d || d(e)
    }, .1, null != d), h = (0, o.bG)([u.default], () => u.default.getCurrentUser()), {
      bannerDisplayConfig: E,
      logoDisplayConfig: v,
      heroLogo: C,
      heroBannerStatic: A,
      heroBannerAnimated: S
    } = (0, g.Kk)(l), x = null != (t = null == E ? true : E.responsive) && t, O = null == E ? true : E.backgroundStyle;
    return null != h && (n || l !== _) ? (0, r.jsxs)("div", {
      ref: b,
      className: p.os,
      children: [(0, r.jsx)("div", {
        className: s()(p.vK, {
          [p.no]: x
        }),
        style: null != O ? {
          background: O
        } : true,
        children: null != A && (0, r.jsx)(f.A, {
          bannerStatic: A,
          bannerAnimated: S,
          isResponsive: x
        })
      }), (0, r.jsxs)("div", {
        className: p.xX,
        children: [(0, r.jsx)("div", {
          className: s()(p.bC, {
            [p.no]: x
          }),
          children: n ? (0, r.jsx)("div", {
            className: p.Hw
          }) : (0, r.jsx)("div", {
            className: p.Hw,
            children: (0, r.jsxs)("div", {
              className: p.Wq,
              children: [null != C && (0, r.jsx)("img", {
                className: p.rm,
                src: C,
                alt: l.name,
                style: null == v ? true : v.toDesktopStyles()
              }), null != l.title && (0, r.jsx)(c.Heading, {
                variant: "heading-xxl/bold",
                className: p.DD,
                color: "text-strong",
                children: l.title
              }), "" !== l.summary && (0, r.jsx)(c.Text, {
                variant: "text-md/normal",
                className: p.Tm,
                style: null != l.bannerTextColor ? {
                  color: l.bannerTextColor
                } : true,
                children: l.summary
              })]
            })
          })
        }), (0, r.jsx)(m.A, {
          isBlockLoading: n,
          heroBlock: l,
          tab: i
        })]
      })]
    }) : null
  }