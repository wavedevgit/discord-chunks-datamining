/** Chunk was on 45620 **/
/** chunk id: 953655, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk87290 = require("./87290.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk884697 = require("./884697.js"),
  Chunk953528 = require("./953528.js"),
  Chunk788822 = require("./788822.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk222194 = require("./222194.js");
let g = (e, t, n) => (0, i.L9)(e) ? d.intl.string(d.t["h/uBCR"]) : n() && null != t && "" !== t ? d.intl.string(d.t.soka7y) : true,
  b = e => {
    let {
      handleTransition: t,
      featuredBlockRecord: n
    } = e, l = (0, c.QH)("collectibles_featured_block");
    return (0, r.jsx)("div", {
      className: a()(f.col2, f.centeredSection),
      children: null == n ? true : n.subblocks.map((e, n) => {
        if (e.type === s.O.CATEGORY) {
          let a = g(e.unpublishedAt, e.categoryStoreListingId, () => (e => {
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
          })(n));
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
  p = e => {
    let {
      handleTransition: t,
      categories: n
    } = e, l = (0, c.QH)("collectibles_featured_block");
    if (null == n || n.length < 2) return null;
    let [s, i] = n, d = g(null == s ? true : s.unpublishedAt, null == s ? true : s.storeListingId, () => {
      switch (l) {
        case c.pj.FIRST_BLOCK_ONLY:
        case c.pj.BOTH_BLOCKS:
          returntrue;
        default:
          returnfalse
      }
    }), b = g(null == i ? true : i.unpublishedAt, null == i ? true : i.storeListingId, () => {
      switch (l) {
        case c.pj.RIGHT_BLOCK_ONLY:
        case c.pj.BOTH_BLOCKS:
          returntrue;
        default:
          returnfalse
      }
    });
    return (0, r.jsx)("div", {
      className: a()(f.col2, f.centeredSection),
      children: (0, r.jsxs)(o.k0, {
        newValue: {
          categoryPosition: 1,
          pageCategory: null != s ? s.name : null == i ? true : i.name,
          pageSection: "featured_block",
          tilePosition: +(null == s)
        },
        children: [null != s && (0, r.jsx)(u.q, {
          category: s,
          badgeText: d,
          handleTransition: t
        }), null != i && (0, r.jsx)(u.q, {
          category: i,
          badgeText: b,
          handleTransition: t
        })]
      })
    })
  },
  m = e => {
    let {
      isLoading: t,
      handleTransition: n,
      categories: l,
      featuredBlockRecord: s
    } = e;
    return t ? (0, r.jsxs)("div", {
      className: a()(f.col2, f.centeredSection),
      children: [(0, r.jsx)("div", {
        className: a()(f.featuredBlockSkeleton, f.featuredBlock),
        children: (0, r.jsx)("div", {
          className: f.featuredBlockSkeletonLogo
        })
      }), (0, r.jsx)("div", {
        className: a()(f.featuredBlockSkeleton, f.featuredBlock),
        children: (0, r.jsx)("div", {
          className: f.featuredBlockSkeletonLogo
        })
      })]
    }) : null != s ? (0, r.jsx)(b, {
      featuredBlockRecord: s,
      handleTransition: n,
      isLoading: false
    }) : (0, r.jsx)(p, {
      categories: l,
      handleTransition: n,
      isLoading: false
    })
  }