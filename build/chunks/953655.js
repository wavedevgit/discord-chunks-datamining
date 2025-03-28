/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Z: () => _
}), n(47120);
var r = n(200651),
  l = n(192379),
  o = n(120356),
  a = n.n(o),
  i = n(180650),
  s = n(87290),
  c = n(960048),
  u = n(381585),
  d = n(597688),
  b = n(506800),
  p = n(788822),
  f = n(215023),
  g = n(388032),
  h = n(39532);
let m = e => {
    let {
      handleTransition: t,
      featuredBlockRecord: n
    } = e, o = d.Z.getCategory(i.T.ROBERT), c = (0, b.c)("CollectiblesFeedShop") && null != o, u = d.Z.getCategory(i.T.ANIME_V2), m = l.useMemo(() => g.NW.string(new Date > f.gJ ? g.t.l0CjbW : g.t.uPewb2), []);
    return (0, r.jsx)("div", {
      className: a()(h.col2, h.centeredSection),
      children: null == n ? void 0 : n.subblocks.map((e, n) => {
        if (e.type === s.O.CATEGORY) {
          let l = null != e.unpublishedAt ? g.NW.string(g.t["h/uBCQ"]) : "1341506445245415424" === e.categoryStoreListingId ? g.NW.string(g.t.PsL3bW) : e.categoryStoreListingId === (null == u ? void 0 : u.storeListingId) ? g.NW.string(g.t["o/oRJC"]) : void 0,
            a = c && e.categoryStoreListingId === (null == o ? void 0 : o.storeListingId) ? m : l;
          return (0, r.jsx)(p.q, {
            subblock: e,
            badgeText: 0 === n ? l : a,
            handleTransition: t
          }, e.categoryStoreListingId)
        }
        return null
      })
    })
  },
  v = e => {
    let {
      handleTransition: t,
      categories: n
    } = e, l = (0, b.c)("CollectiblesFeedShop") && null != d.Z.getCategory(i.T.ROBERT);
    if (null == n || n.length < 2) return c.Z.captureMessage("Collectible Featured Block requires at least 2 categories"), null;
    let [o, s] = n, m = (null == o ? void 0 : o.unpublishedAt) != null ? g.NW.string(g.t["h/uBCQ"]) : void 0, v = g.NW.string(new Date > f.gJ ? g.t.l0CjbW : g.t.uPewb2), _ = l ? v : g.NW.string(g.t["o/oRJC"]);
    return (0, r.jsx)("div", {
      className: a()(h.col2, h.centeredSection),
      children: (0, r.jsxs)(u.k0, {
        newValue: {
          categoryPosition: 1,
          pageSection: "featured_block"
        },
        children: [null != o && (0, r.jsx)(p.q, {
          category: o,
          badgeText: m,
          handleTransition: t
        }), null != s && (0, r.jsx)(p.q, {
          category: s,
          badgeText: _,
          handleTransition: t
        })]
      })
    })
  },
  _ = e => {
    let {
      isLoading: t,
      handleTransition: n,
      categories: l,
      featuredBlockRecord: o
    } = e;
    return t ? (0, r.jsxs)("div", {
      className: a()(h.col2, h.centeredSection),
      children: [(0, r.jsx)("div", {
        className: a()(h.skeleton, h.featuredBlock),
        children: (0, r.jsx)("div", {
          className: h.skeletonBody
        })
      }), (0, r.jsx)("div", {
        className: a()(h.skeleton, h.featuredBlock),
        children: (0, r.jsx)("div", {
          className: h.skeletonBody
        })
      })]
    }) : null != o ? (0, r.jsx)(m, {
      featuredBlockRecord: o,
      handleTransition: n,
      isLoading: !1
    }) : (0, r.jsx)(v, {
      categories: l,
      handleTransition: n,
      isLoading: !1
    })
  }