/** Chunk was on 45620 **/
/** chunk id: 953655, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk87290 = require("./87290.js"),
  Chunk960048 = require("./960048.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk953528 = require("./953528.js"),
  Chunk788822 = require("./788822.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
let f = e => {
    let {
      handleTransition: t,
      featuredBlockRecord: n
    } = e, l = (0, c.QH)("collectibles_featured_block");
    return (0, r.jsx)("div", {
      className: s()(g.col2, g.centeredSection),
      children: null == n ? true : n.subblocks.map((e, n) => {
        if (e.type === a.O.CATEGORY) {
          let s = null != e.unpublishedAt ? d.intl.string(d.t["h/uBCQ"]) : (e => {
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
              badgeText: s,
              handleTransition: t
            }, e.categoryStoreListingId)
          }, e.categoryStoreListingId)
        }
        return null
      })
    })
  },
  p = e => {
    let {
      handleTransition: t,
      categories: n
    } = e, l = (0, c.QH)("collectibles_featured_block");
    if (null == n || n.length < 2) return i.Z.captureMessage("Collectible Featured Block requires at least 2 categories"), null;
    let [a, f] = n, p = (null == a ? true : a.unpublishedAt) != null ? d.intl.string(d.t["h/uBCQ"]) : (() => {
      switch (l) {
        case c.pj.FIRST_BLOCK_ONLY:
        case c.pj.BOTH_BLOCKS:
          returntrue;
        default:
          returnfalse
      }
    })() && (null == a ? true : a.storeListingId) != null && "" !== a.storeListingId ? d.intl.string(d.t["soka7+"]) : true, C = (null == f ? true : f.unpublishedAt) != null ? d.intl.string(d.t["h/uBCQ"]) : (() => {
      switch (l) {
        case c.pj.RIGHT_BLOCK_ONLY:
        case c.pj.BOTH_BLOCKS:
          returntrue;
        default:
          returnfalse
      }
    })() && (null == f ? true : f.storeListingId) != null && "" !== f.storeListingId ? d.intl.string(d.t["soka7+"]) : d.intl.string(d.t["o/oRJC"]);
    return (0, r.jsx)("div", {
      className: s()(g.col2, g.centeredSection),
      children: (0, r.jsxs)(o.k0, {
        newValue: {
          categoryPosition: 1,
          pageCategory: null != a ? a.name : null == f ? true : f.name,
          pageSection: "featured_block",
          tilePosition: +(null == a)
        },
        children: [null != a && (0, r.jsx)(u.q, {
          category: a,
          badgeText: p,
          handleTransition: t
        }), null != f && (0, r.jsx)(u.q, {
          category: f,
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
      featuredBlockRecord: a
    } = e;
    return t ? (0, r.jsxs)("div", {
      className: s()(g.col2, g.centeredSection),
      children: [(0, r.jsx)("div", {
        className: s()(g.skeleton, g.featuredBlock),
        children: (0, r.jsx)("div", {
          className: g.skeletonBody
        })
      }), (0, r.jsx)("div", {
        className: s()(g.skeleton, g.featuredBlock),
        children: (0, r.jsx)("div", {
          className: g.skeletonBody
        })
      })]
    }) : null != a ? (0, r.jsx)(f, {
      featuredBlockRecord: a,
      handleTransition: n,
      isLoading: false
    }) : (0, r.jsx)(p, {
      categories: l,
      handleTransition: n,
      isLoading: false
    })
  }