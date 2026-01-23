/** Chunk was on 59275 **/
/** chunk id: 573455, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk424918 = require("./424918.js"),
  Chunk440938 = require("./440938.jsx"),
  Chunk993408 = require("./993408.js"),
  Chunk196231 = require("./196231.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk201073 = require("./201073.js");
let g = e => {
    let {
      handleTransition: t,
      featuredBlockRecord: n
    } = e;
    return (0, r.jsx)("div", {
      className: s()(d.n9, d.YB),
      children: null == n ? true : n.subblocks.map((e, n) => e.type === a.u.CATEGORY ? (0, r.jsx)(i.R9, {
        newValue: {
          categoryPosition: 1,
          pageCategory: e.name,
          pageSection: "featured_block",
          tilePosition: n
        },
        children: (0, r.jsx)(c.S, {
          subblock: e,
          badgeText: (0, o.HF)(e.unpublishedAt) ? u.intl.string(u.t["h/uBCR"]) : true,
          handleTransition: t
        }, e.categoryStoreListingId)
      }, e.categoryStoreListingId) : null)
    })
  },
  f = e => {
    let {
      handleTransition: t,
      categories: n
    } = e;
    if (null == n || n.length < 2) return null;
    let [l, a] = n;
    return (0, r.jsx)("div", {
      className: s()(d.n9, d.YB),
      children: (0, r.jsxs)(i.R9, {
        newValue: {
          categoryPosition: 1,
          pageCategory: null != l ? l.name : null == a ? true : a.name,
          pageSection: "featured_block",
          tilePosition: +(null == l)
        },
        children: [null != l && (0, r.jsx)(c.S, {
          category: l,
          badgeText: (0, o.HF)(l.unpublishedAt) ? u.intl.string(u.t["h/uBCR"]) : true,
          handleTransition: t
        }), null != a && (0, r.jsx)(c.S, {
          category: a,
          badgeText: (0, o.HF)(a.unpublishedAt) ? u.intl.string(u.t["h/uBCR"]) : true,
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
      featuredBlockRecord: a
    } = e;
    return t ? (0, r.jsxs)("div", {
      className: s()(d.n9, d.YB),
      children: [(0, r.jsx)("div", {
        className: s()(d.Jn, d.oT),
        children: (0, r.jsx)("div", {
          className: d.uy
        })
      }), (0, r.jsx)("div", {
        className: s()(d.Jn, d.oT),
        children: (0, r.jsx)("div", {
          className: d.uy
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