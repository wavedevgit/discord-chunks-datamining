/** Chunk was on 45620 **/
/** chunk id: 953655, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk87290 = require("./87290.js"),
  Chunk960048 = require("./960048.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk788822 = require("./788822.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk806734 = require("./806734.js");
let p = ["1366494385738354769", "1385035256125591633"],
  g = e => {
    let {
      handleTransition: t,
      featuredBlockRecord: n
    } = e;
    return (0, r.jsx)("div", {
      className: a()(d.col2, d.centeredSection),
      children: null == n ? true : n.subblocks.map((e, n) => {
        if (e.type === i.O.CATEGORY) {
          let l = null != e.unpublishedAt ? u.intl.string(u.t["h/uBCQ"]) : p.includes(e.categoryStoreListingId) ? u.intl.string(u.t["soka7+"]) : true;
          return (0, r.jsx)(s.k0, {
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
    if (null == n || n.length < 2) return o.Z.captureMessage("Collectible Featured Block requires at least 2 categories"), null;
    let [l, i] = n, p = (null == l ? true : l.unpublishedAt) != null ? u.intl.string(u.t["h/uBCQ"]) : true;
    return (0, r.jsx)("div", {
      className: a()(d.col2, d.centeredSection),
      children: (0, r.jsxs)(s.k0, {
        newValue: {
          categoryPosition: 1,
          pageCategory: null != l ? l.name : null == i ? true : i.name,
          pageSection: "featured_block",
          tilePosition: +(null == l)
        },
        children: [null != l && (0, r.jsx)(c.q, {
          category: l,
          badgeText: p,
          handleTransition: t
        }), null != i && (0, r.jsx)(c.q, {
          category: i,
          badgeText: u.intl.string(u.t["o/oRJC"]),
          handleTransition: t
        })]
      })
    })
  },
  b = e => {
    let {
      isLoading: t,
      handleTransition: n,
      categories: l,
      featuredBlockRecord: i
    } = e;
    return t ? (0, r.jsxs)("div", {
      className: a()(d.col2, d.centeredSection),
      children: [(0, r.jsx)("div", {
        className: a()(d.skeleton, d.featuredBlock),
        children: (0, r.jsx)("div", {
          className: d.skeletonBody
        })
      }), (0, r.jsx)("div", {
        className: a()(d.skeleton, d.featuredBlock),
        children: (0, r.jsx)("div", {
          className: d.skeletonBody
        })
      })]
    }) : null != i ? (0, r.jsx)(g, {
      featuredBlockRecord: i,
      handleTransition: n,
      isLoading: false
    }) : (0, r.jsx)(f, {
      categories: l,
      handleTransition: n,
      isLoading: false
    })
  }