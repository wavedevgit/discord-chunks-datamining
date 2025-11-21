/** Chunk was on 45620 **/
/** chunk id: 953655, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk87290 = require("./87290.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk953528 = require("./953528.js"),
  Chunk788822 = require("./788822.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
let f = e => {
    let {
      handleTransition: t,
      featuredBlockRecord: n
    } = e, l = (0, s.QH)("collectibles_featured_block");
    return (0, r.jsx)("div", {
      className: i()(d.col2, d.centeredSection),
      children: null == n ? true : n.subblocks.map((e, n) => {
        if (e.type === a.O.CATEGORY) {
          let i = null != e.unpublishedAt ? u.intl.string(u.t["h/uBCR"]) : (e => {
            switch (l) {
              case s.pj.NO_BADGE:
                returnfalse;
              case s.pj.FIRST_BLOCK_ONLY:
                return 0 === e;
              case s.pj.RIGHT_BLOCK_ONLY:
                return 1 === e;
              case s.pj.BOTH_BLOCKS:
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
              badgeText: i,
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
    } = e, l = (0, s.QH)("collectibles_featured_block");
    if (null == n || n.length < 2) return null;
    let [a, f] = n, g = (null == a ? true : a.unpublishedAt) != null ? u.intl.string(u.t["h/uBCR"]) : (() => {
      switch (l) {
        case s.pj.FIRST_BLOCK_ONLY:
        case s.pj.BOTH_BLOCKS:
          returntrue;
        default:
          returnfalse
      }
    })() && (null == a ? true : a.storeListingId) != null && "" !== a.storeListingId ? u.intl.string(u.t.soka7y) : true, p = (null == f ? true : f.unpublishedAt) != null ? u.intl.string(u.t["h/uBCR"]) : (() => {
      switch (l) {
        case s.pj.RIGHT_BLOCK_ONLY:
        case s.pj.BOTH_BLOCKS:
          returntrue;
        default:
          returnfalse
      }
    })() && (null == f ? true : f.storeListingId) != null && "" !== f.storeListingId ? u.intl.string(u.t.soka7y) : u.intl.string(u.t["o/oRJB"]);
    return (0, r.jsx)("div", {
      className: i()(d.col2, d.centeredSection),
      children: (0, r.jsxs)(o.k0, {
        newValue: {
          categoryPosition: 1,
          pageCategory: null != a ? a.name : null == f ? true : f.name,
          pageSection: "featured_block",
          tilePosition: +(null == a)
        },
        children: [null != a && (0, r.jsx)(c.q, {
          category: a,
          badgeText: g,
          handleTransition: t
        }), null != f && (0, r.jsx)(c.q, {
          category: f,
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
    }) : null != a ? (0, r.jsx)(f, {
      featuredBlockRecord: a,
      handleTransition: n,
      isLoading: false
    }) : (0, r.jsx)(g, {
      categories: l,
      handleTransition: n,
      isLoading: false
    })
  }