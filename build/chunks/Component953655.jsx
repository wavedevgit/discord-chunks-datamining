/** Chunk was on 45620 **/
/** chunk id: 953655, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk87290 = require("./87290.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk953528 = require("./953528.js"),
  Chunk788822 = require("./788822.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
let g = e => {
    let {
      handleTransition: t,
      featuredBlockRecord: n
    } = e, l = (0, a.QH)("collectibles_featured_block");
    return (0, r.jsx)("div", {
      className: o()(d.col2, d.centeredSection),
      children: null == n ? true : n.subblocks.map((e, n) => {
        if (e.type === i.O.CATEGORY) {
          let o = null != e.unpublishedAt ? u.intl.string(u.t["h/uBCR"]) : (e => {
            switch (l) {
              case a.pj.NO_BADGE:
                returnfalse;
              case a.pj.FIRST_BLOCK_ONLY:
                return 0 === e;
              case a.pj.RIGHT_BLOCK_ONLY:
                return 1 === e;
              case a.pj.BOTH_BLOCKS:
                returntrue;
              default:
                returnfalse
            }
          })(n) ? u.intl.string(u.t.soka7y) : true;
          return (0, r.jsx)(s.k0, {
            newValue: {
              categoryPosition: 1,
              pageCategory: e.name,
              pageSection: "featured_block",
              tilePosition: n
            },
            children: (0, r.jsx)(c.q, {
              subblock: e,
              badgeText: o,
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
    } = e, l = (0, a.QH)("collectibles_featured_block");
    if (null == n || n.length < 2) return null;
    let [i, g] = n, f = (null == i ? true : i.unpublishedAt) != null ? u.intl.string(u.t["h/uBCR"]) : (() => {
      switch (l) {
        case a.pj.FIRST_BLOCK_ONLY:
        case a.pj.BOTH_BLOCKS:
          returntrue;
        default:
          returnfalse
      }
    })() && (null == i ? true : i.storeListingId) != null && "" !== i.storeListingId ? u.intl.string(u.t.soka7y) : true, p = (null == g ? true : g.unpublishedAt) != null ? u.intl.string(u.t["h/uBCR"]) : (() => {
      switch (l) {
        case a.pj.RIGHT_BLOCK_ONLY:
        case a.pj.BOTH_BLOCKS:
          returntrue;
        default:
          returnfalse
      }
    })() && (null == g ? true : g.storeListingId) != null && "" !== g.storeListingId ? u.intl.string(u.t.soka7y) : u.intl.string(u.t["o/oRJB"]);
    return (0, r.jsx)("div", {
      className: o()(d.col2, d.centeredSection),
      children: (0, r.jsxs)(s.k0, {
        newValue: {
          categoryPosition: 1,
          pageCategory: null != i ? i.name : null == g ? true : g.name,
          pageSection: "featured_block",
          tilePosition: +(null == i)
        },
        children: [null != i && (0, r.jsx)(c.q, {
          category: i,
          badgeText: f,
          handleTransition: t
        }), null != g && (0, r.jsx)(c.q, {
          category: g,
          badgeText: p,
          handleTransition: t
        })]
      })
    })
  },
  p = e => {
    let {
      isLoading: t,
      handleTransition: n,
      categories: l,
      featuredBlockRecord: i
    } = e;
    return t ? (0, r.jsxs)("div", {
      className: o()(d.col2, d.centeredSection),
      children: [(0, r.jsx)("div", {
        className: o()(d.featuredBlockSkeleton, d.featuredBlock),
        children: (0, r.jsx)("div", {
          className: d.featuredBlockSkeletonLogo
        })
      }), (0, r.jsx)("div", {
        className: o()(d.featuredBlockSkeleton, d.featuredBlock),
        children: (0, r.jsx)("div", {
          className: d.featuredBlockSkeletonLogo
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