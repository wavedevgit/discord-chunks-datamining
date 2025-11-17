/** Chunk was on 45620 **/
/** chunk id: 953655, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk87290 = require("./87290.js"),
  Chunk960048 = require("./960048.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk953528 = require("./953528.js"),
  Chunk788822 = require("./788822.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
let g = e => {
    let {
      handleTransition: t,
      featuredBlockRecord: n
    } = e, l = (0, c.QH)("collectibles_featured_block");
    return (0, r.jsx)("div", {
      className: i()(p.col2, p.centeredSection),
      children: null == n ? true : n.subblocks.map((e, n) => {
        if (e.type === a.O.CATEGORY) {
          let i = null != e.unpublishedAt ? d.intl.string(d.t["h/uBCR"]) : (e => {
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
          })(n) ? d.intl.string(d.t.soka7y) : true;
          return (0, r.jsx)(s.k0, {
            newValue: {
              categoryPosition: 1,
              pageCategory: e.name,
              pageSection: "featured_block",
              tilePosition: n
            },
            children: (0, r.jsx)(u.q, {
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
  f = e => {
    let {
      handleTransition: t,
      categories: n
    } = e, l = (0, c.QH)("collectibles_featured_block");
    if (null == n || n.length < 2) return o.Z.captureMessage("Collectible Featured Block requires at least 2 categories"), null;
    let [a, g] = n, f = (null == a ? true : a.unpublishedAt) != null ? d.intl.string(d.t["h/uBCR"]) : (() => {
      switch (l) {
        case c.pj.FIRST_BLOCK_ONLY:
        case c.pj.BOTH_BLOCKS:
          returntrue;
        default:
          returnfalse
      }
    })() && (null == a ? true : a.storeListingId) != null && "" !== a.storeListingId ? d.intl.string(d.t.soka7y) : true, h = (null == g ? true : g.unpublishedAt) != null ? d.intl.string(d.t["h/uBCR"]) : (() => {
      switch (l) {
        case c.pj.RIGHT_BLOCK_ONLY:
        case c.pj.BOTH_BLOCKS:
          returntrue;
        default:
          returnfalse
      }
    })() && (null == g ? true : g.storeListingId) != null && "" !== g.storeListingId ? d.intl.string(d.t.soka7y) : d.intl.string(d.t["o/oRJB"]);
    return (0, r.jsx)("div", {
      className: i()(p.col2, p.centeredSection),
      children: (0, r.jsxs)(s.k0, {
        newValue: {
          categoryPosition: 1,
          pageCategory: null != a ? a.name : null == g ? true : g.name,
          pageSection: "featured_block",
          tilePosition: +(null == a)
        },
        children: [null != a && (0, r.jsx)(u.q, {
          category: a,
          badgeText: f,
          handleTransition: t
        }), null != g && (0, r.jsx)(u.q, {
          category: g,
          badgeText: h,
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
      className: i()(p.col2, p.centeredSection),
      children: [(0, r.jsx)("div", {
        className: i()(p.skeleton, p.featuredBlock),
        children: (0, r.jsx)("div", {
          className: p.skeletonBody
        })
      }), (0, r.jsx)("div", {
        className: i()(p.skeleton, p.featuredBlock),
        children: (0, r.jsx)("div", {
          className: p.skeletonBody
        })
      })]
    }) : null != a ? (0, r.jsx)(g, {
      featuredBlockRecord: a,
      handleTransition: n,
      isLoading: false
    }) : (0, r.jsx)(f, {
      categories: l,
      handleTransition: n,
      isLoading: false
    })
  }