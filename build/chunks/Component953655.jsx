/** Chunk was on 45620 **/
/** chunk id: 953655, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk87290 = require("./87290.js"),
  Chunk960048 = require("./960048.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk953528 = require("./953528.js"),
  Chunk788822 = require("./788822.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
let p = e => {
    let {
      handleTransition: t,
      featuredBlockRecord: n
    } = e, l = (0, c.QH)("collectibles_featured_block");
    return (0, r.jsx)("div", {
      className: a()(g.col2, g.centeredSection),
      children: null == n ? true : n.subblocks.map((e, n) => {
        if (e.type === i.O.CATEGORY) {
          let a = null != e.unpublishedAt ? d.intl.string(d.t["h/uBCQ"]) : (e => {
            switch (l) {
              case c.pj.NO_BADGE:
                returnfalse;
              case c.pj.FIRST_BLOCK_ONLY:
                return 0 === e;
              case c.pj.RIGHT_BLOCK_ONLY:
                return 1 === e;
              case c.pj.BOTH_BLOCKS:
                returntrue;
              default:
                returnfalse
            }
          })(n) ? d.intl.string(d.t["soka7+"]) : true;
          return (0, r.jsx)(o.k0, {
            newValue: {
              categoryPosition: 1,
              pageCategory: e.name,
              pageSection: "featured_block",
              tilePosition: n
            },
            children: (0, r.jsx)(u.q, {
              subblock: e,
              badgeText: a,
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
    } = e, l = (0, c.QH)("collectibles_featured_block");
    if (null == n || n.length < 2) return s.Z.captureMessage("Collectible Featured Block requires at least 2 categories"), null;
    let [i, p] = n, f = (null == i ? true : i.unpublishedAt) != null ? d.intl.string(d.t["h/uBCQ"]) : (() => {
      switch (l) {
        case c.pj.FIRST_BLOCK_ONLY:
        case c.pj.BOTH_BLOCKS:
          returntrue;
        default:
          returnfalse
      }
    })() && (null == i ? true : i.storeListingId) != null && "" !== i.storeListingId ? d.intl.string(d.t["soka7+"]) : true, C = (null == p ? true : p.unpublishedAt) != null ? d.intl.string(d.t["h/uBCQ"]) : (() => {
      switch (l) {
        case c.pj.RIGHT_BLOCK_ONLY:
        case c.pj.BOTH_BLOCKS:
          returntrue;
        default:
          returnfalse
      }
    })() && (null == p ? true : p.storeListingId) != null && "" !== p.storeListingId ? d.intl.string(d.t["soka7+"]) : d.intl.string(d.t["o/oRJC"]);
    return (0, r.jsx)("div", {
      className: a()(g.col2, g.centeredSection),
      children: (0, r.jsxs)(o.k0, {
        newValue: {
          categoryPosition: 1,
          pageCategory: null != i ? i.name : null == p ? true : p.name,
          pageSection: "featured_block",
          tilePosition: +(null == i)
        },
        children: [null != i && (0, r.jsx)(u.q, {
          category: i,
          badgeText: f,
          handleTransition: t
        }), null != p && (0, r.jsx)(u.q, {
          category: p,
          badgeText: C,
          handleTransition: t
        })]
      })
    })
  },
  C = e => {
    let {
      isLoading: t,
      handleTransition: n,
      categories: l,
      featuredBlockRecord: i
    } = e;
    return t ? (0, r.jsxs)("div", {
      className: a()(g.col2, g.centeredSection),
      children: [(0, r.jsx)("div", {
        className: a()(g.skeleton, g.featuredBlock),
        children: (0, r.jsx)("div", {
          className: g.skeletonBody
        })
      }), (0, r.jsx)("div", {
        className: a()(g.skeleton, g.featuredBlock),
        children: (0, r.jsx)("div", {
          className: g.skeletonBody
        })
      })]
    }) : null != i ? (0, r.jsx)(p, {
      featuredBlockRecord: i,
      handleTransition: n,
      isLoading: false
    }) : (0, r.jsx)(f, {
      categories: l,
      handleTransition: n,
      isLoading: false
    })
  }