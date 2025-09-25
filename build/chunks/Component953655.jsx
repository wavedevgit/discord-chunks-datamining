/** Chunk was on 45620 **/
/** chunk id: 953655, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk87290 = require("./87290.js"),
  Chunk960048 = require("./960048.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk788822 = require("./788822.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
let g = ["1366494385738354769", "1385035256125591633"],
  p = e => {
    let {
      handleTransition: t,
      featuredBlockRecord: n
    } = e;
    return (0, r.jsx)("div", {
      className: i()(d.col2, d.centeredSection),
      children: null == n ? true : n.subblocks.map((e, n) => {
        if (e.type === a.O.CATEGORY) {
          let l = null != e.unpublishedAt ? u.intl.string(u.t["h/uBCQ"]) : g.includes(e.categoryStoreListingId) ? u.intl.string(u.t["soka7+"]) : true;
          return (0, r.jsx)(o.k0, {
            newValue: {
              categoryPosition: 1,
              pageCategory: e.name,
              pageSection: "featured_block",
              tilePosition: n
            },
            children: (0, r.jsx)(c.q, {
              subblock: e,
              badgeText: l,
              handleTransition: t
            }, e.categoryStoreListingId)
          }, e.categoryStoreListingId)
        }
        return null
      })
    })
  },
  f = e => {
    let {
      handleTransition: t,
      categories: n
    } = e;
    if (null == n || n.length < 2) return s.Z.captureMessage("Collectible Featured Block requires at least 2 categories"), null;
    let [l, a] = n, g = (null == l ? true : l.unpublishedAt) != null ? u.intl.string(u.t["h/uBCQ"]) : true;
    return (0, r.jsx)("div", {
      className: i()(d.col2, d.centeredSection),
      children: (0, r.jsxs)(o.k0, {
        newValue: {
          categoryPosition: 1,
          pageCategory: null != l ? l.name : null == a ? true : a.name,
          pageSection: "featured_block",
          tilePosition: +(null == l)
        },
        children: [null != l && (0, r.jsx)(c.q, {
          category: l,
          badgeText: g,
          handleTransition: t
        }), null != a && (0, r.jsx)(c.q, {
          category: a,
          badgeText: u.intl.string(u.t["o/oRJC"]),
          handleTransition: t
        })]
      })
    })
  },
  h = e => {
    let {
      isLoading: t,
      handleTransition: n,
      categories: l,
      featuredBlockRecord: a
    } = e;
    return t ? (0, r.jsxs)("div", {
      className: i()(d.col2, d.centeredSection),
      children: [(0, r.jsx)("div", {
        className: i()(d.skeleton, d.featuredBlock),
        children: (0, r.jsx)("div", {
          className: d.skeletonBody
        })
      }), (0, r.jsx)("div", {
        className: i()(d.skeleton, d.featuredBlock),
        children: (0, r.jsx)("div", {
          className: d.skeletonBody
        })
      })]
    }) : null != a ? (0, r.jsx)(p, {
      featuredBlockRecord: a,
      handleTransition: n,
      isLoading: false
    }) : (0, r.jsx)(f, {
      categories: l,
      handleTransition: n,
      isLoading: false
    })
  }