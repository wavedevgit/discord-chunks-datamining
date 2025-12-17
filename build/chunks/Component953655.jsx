/** Chunk was on 45620 **/
/** chunk id: 953655, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk87290 = require("./87290.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk953528 = require("./953528.js"),
  Chunk788822 = require("./788822.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk222194 = require("./222194.js");
let f = e => {
    let {
      handleTransition: t,
      featuredBlockRecord: n
    } = e, l = (0, i.QH)("collectibles_featured_block");
    return (0, r.jsx)("div", {
      className: a()(d.col2, d.centeredSection),
      children: null == n ? true : n.subblocks.map((e, n) => {
        if (e.type === s.O.CATEGORY) {
          let a = null != e.unpublishedAt ? u.intl.string(u.t["h/uBCR"]) : (e => {
            switch (l) {
              case i.pj.NO_BADGE:
                returnfalse;
              case i.pj.FIRST_BLOCK_ONLY:
                return 0 === e;
              case i.pj.RIGHT_BLOCK_ONLY:
                return 1 === e;
              case i.pj.BOTH_BLOCKS:
                returntrue;
              default:
                returnfalse
            }
          })(n) ? u.intl.string(u.t.soka7y) : true;
          return (0, r.jsx)(o.k0, {
            newValue: {
              categoryPosition: 1,
              pageCategory: e.name,
              pageSection: "featured_block",
              tilePosition: n
            },
            children: (0, r.jsx)(c.q, {
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
  g = e => {
    let {
      handleTransition: t,
      categories: n
    } = e, l = (0, i.QH)("collectibles_featured_block");
    if (null == n || n.length < 2) return null;
    let [s, f] = n, g = (null == s ? true : s.unpublishedAt) != null ? u.intl.string(u.t["h/uBCR"]) : (() => {
      switch (l) {
        case i.pj.FIRST_BLOCK_ONLY:
        case i.pj.BOTH_BLOCKS:
          returntrue;
        default:
          returnfalse
      }
    })() && (null == s ? true : s.storeListingId) != null && "" !== s.storeListingId ? u.intl.string(u.t.soka7y) : true, b = (null == f ? true : f.unpublishedAt) != null ? u.intl.string(u.t["h/uBCR"]) : (() => {
      switch (l) {
        case i.pj.RIGHT_BLOCK_ONLY:
        case i.pj.BOTH_BLOCKS:
          returntrue;
        default:
          returnfalse
      }
    })() && (null == f ? true : f.storeListingId) != null && "" !== f.storeListingId ? u.intl.string(u.t.soka7y) : u.intl.string(u.t["o/oRJB"]);
    return (0, r.jsx)("div", {
      className: a()(d.col2, d.centeredSection),
      children: (0, r.jsxs)(o.k0, {
        newValue: {
          categoryPosition: 1,
          pageCategory: null != s ? s.name : null == f ? true : f.name,
          pageSection: "featured_block",
          tilePosition: +(null == s)
        },
        children: [null != s && (0, r.jsx)(c.q, {
          category: s,
          badgeText: g,
          handleTransition: t
        }), null != f && (0, r.jsx)(c.q, {
          category: f,
          badgeText: b,
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
      featuredBlockRecord: s
    } = e;
    return t ? (0, r.jsxs)("div", {
      className: a()(d.col2, d.centeredSection),
      children: [(0, r.jsx)("div", {
        className: a()(d.featuredBlockSkeleton, d.featuredBlock),
        children: (0, r.jsx)("div", {
          className: d.featuredBlockSkeletonLogo
        })
      }), (0, r.jsx)("div", {
        className: a()(d.featuredBlockSkeleton, d.featuredBlock),
        children: (0, r.jsx)("div", {
          className: d.featuredBlockSkeletonLogo
        })
      })]
    }) : null != s ? (0, r.jsx)(f, {
      featuredBlockRecord: s,
      handleTransition: n,
      isLoading: false
    }) : (0, r.jsx)(g, {
      categories: l,
      handleTransition: n,
      isLoading: false
    })
  }