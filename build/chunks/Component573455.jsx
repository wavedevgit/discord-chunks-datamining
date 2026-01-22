/** Chunk was on 59275 **/
/** chunk id: 573455, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
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
let f = e => {
    let {
      handleTransition: t,
      featuredBlockRecord: l
    } = e;
    return (0, n.jsx)("div", {
      className: s()(d.n9, d.YB),
      children: null == l ? true : l.subblocks.map((e, l) => e.type === a.u.CATEGORY ? (0, n.jsx)(i.R9, {
        newValue: {
          categoryPosition: 1,
          pageCategory: e.name,
          pageSection: "featured_block",
          tilePosition: l
        },
        children: (0, n.jsx)(c.S, {
          subblock: e,
          badgeText: (0, o.HF)(e.unpublishedAt) ? u.intl.string(u.t["h/uBCR"]) : true,
          handleTransition: t
        }, e.categoryStoreListingId)
      }, e.categoryStoreListingId) : null)
    })
  },
  b = e => {
    let {
      handleTransition: t,
      categories: l
    } = e;
    if (null == l || l.length < 2) return null;
    let [r, a] = l;
    return (0, n.jsx)("div", {
      className: s()(d.n9, d.YB),
      children: (0, n.jsxs)(i.R9, {
        newValue: {
          categoryPosition: 1,
          pageCategory: null != r ? r.name : null == a ? true : a.name,
          pageSection: "featured_block",
          tilePosition: +(null == r)
        },
        children: [null != r && (0, n.jsx)(c.S, {
          category: r,
          badgeText: (0, o.HF)(r.unpublishedAt) ? u.intl.string(u.t["h/uBCR"]) : true,
          handleTransition: t
        }), null != a && (0, n.jsx)(c.S, {
          category: a,
          badgeText: (0, o.HF)(a.unpublishedAt) ? u.intl.string(u.t["h/uBCR"]) : true,
          handleTransition: t
        })]
      })
    })
  },
  g = e => {
    let {
      isLoading: t,
      handleTransition: l,
      categories: r,
      featuredBlockRecord: a
    } = e;
    return t ? (0, n.jsxs)("div", {
      className: s()(d.n9, d.YB),
      children: [(0, n.jsx)("div", {
        className: s()(d.Jn, d.oT),
        children: (0, n.jsx)("div", {
          className: d.uy
        })
      }), (0, n.jsx)("div", {
        className: s()(d.Jn, d.oT),
        children: (0, n.jsx)("div", {
          className: d.uy
        })
      })]
    }) : null != a ? (0, n.jsx)(f, {
      featuredBlockRecord: a,
      handleTransition: l,
      isLoading: false
    }) : (0, n.jsx)(b, {
      categories: r,
      handleTransition: l,
      isLoading: false
    })
  }