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
  Chunk884697 = require("./884697.js"),
  Chunk788822 = require("./788822.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk222194 = require("./222194.js");
let f = e => {
    let {
      handleTransition: t,
      featuredBlockRecord: n
    } = e;
    return (0, r.jsx)("div", {
      className: a()(d.col2, d.centeredSection),
      children: null == n ? true : n.subblocks.map((e, n) => e.type === s.O.CATEGORY ? (0, r.jsx)(i.k0, {
        newValue: {
          categoryPosition: 1,
          pageCategory: e.name,
          pageSection: "featured_block",
          tilePosition: n
        },
        children: (0, r.jsx)(c.q, {
          subblock: e,
          badgeText: (0, o.L9)(e.unpublishedAt) ? u.intl.string(u.t["h/uBCR"]) : true,
          handleTransition: t
        }, e.categoryStoreListingId)
      }, e.categoryStoreListingId) : null)
    })
  },
  g = e => {
    let {
      handleTransition: t,
      categories: n
    } = e;
    if (null == n || n.length < 2) return null;
    let [l, s] = n;
    return (0, r.jsx)("div", {
      className: a()(d.col2, d.centeredSection),
      children: (0, r.jsxs)(i.k0, {
        newValue: {
          categoryPosition: 1,
          pageCategory: null != l ? l.name : null == s ? true : s.name,
          pageSection: "featured_block",
          tilePosition: +(null == l)
        },
        children: [null != l && (0, r.jsx)(c.q, {
          category: l,
          badgeText: (0, o.L9)(l.unpublishedAt) ? u.intl.string(u.t["h/uBCR"]) : true,
          handleTransition: t
        }), null != s && (0, r.jsx)(c.q, {
          category: s,
          badgeText: (0, o.L9)(s.unpublishedAt) ? u.intl.string(u.t["h/uBCR"]) : true,
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