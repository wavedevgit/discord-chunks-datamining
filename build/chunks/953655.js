/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Z: () => v
}), r(47120);
var n = r(200651),
  l = r(192379),
  i = r(120356),
  o = r.n(i),
  a = r(180650),
  s = r(87290),
  c = r(960048),
  u = r(381585),
  d = r(597688),
  p = r(506800),
  f = r(788822),
  b = r(215023),
  h = r(388032),
  m = r(39532);
let C = e => {
    let {
      handleTransition: t,
      featuredBlockRecord: r
    } = e, i = d.Z.getCategory(a.T.ROBERT), c = (0, p.c)("CollectiblesFeedShop") && null != i, u = d.Z.getCategory(a.T.ANIME_V2), C = l.useMemo(() => h.NW.string(new Date > b.gJ ? h.t.l0CjbW : h.t.uPewb2), []);
    return (0, n.jsx)("div", {
      className: o()(m.section, m.col2, m.featuredBlocksContainer),
      children: null == r ? void 0 : r.subblocks.map((e, r) => {
        if (e.type === s.O.CATEGORY) {
          let l = null != e.unpublishedAt ? h.NW.string(h.t["h/uBCQ"]) : "1341506445245415424" === e.categoryStoreListingId ? h.NW.string(h.t.PsL3bW) : e.categoryStoreListingId === (null == u ? void 0 : u.storeListingId) ? h.NW.string(h.t["o/oRJC"]) : void 0,
            o = c && e.categoryStoreListingId === (null == i ? void 0 : i.storeListingId) ? C : l;
          return (0, n.jsx)(f.q, {
            subblock: e,
            badgeText: 0 === r ? l : o,
            handleTransition: t
          }, e.categoryStoreListingId)
        }
        return null
      })
    })
  },
  g = e => {
    let {
      handleTransition: t,
      categories: r
    } = e, l = (0, p.c)("CollectiblesFeedShop") && null != d.Z.getCategory(a.T.ROBERT);
    if (null == r || r.length < 2) return c.Z.captureMessage("Collectible Featured Block requires at least 2 categories"), null;
    let [i, s] = r, C = (null == i ? void 0 : i.unpublishedAt) != null ? h.NW.string(h.t["h/uBCQ"]) : void 0, g = h.NW.string(new Date > b.gJ ? h.t.l0CjbW : h.t.uPewb2), v = l ? g : h.NW.string(h.t["o/oRJC"]);
    return (0, n.jsx)("div", {
      className: o()(m.section, m.col2, m.featuredBlocksContainer),
      children: (0, n.jsxs)(u.k0, {
        newValue: {
          categoryPosition: 1,
          pageSection: "featured_block"
        },
        children: [null != i && (0, n.jsx)(f.q, {
          category: i,
          badgeText: C,
          handleTransition: t
        }), null != s && (0, n.jsx)(f.q, {
          category: s,
          badgeText: v,
          handleTransition: t
        })]
      })
    })
  },
  v = e => {
    let {
      isLoading: t,
      handleTransition: r,
      categories: l,
      featuredBlockRecord: i
    } = e;
    return t ? (0, n.jsxs)("div", {
      className: o()(m.section, m.col2, m.featuredBlocksContainer),
      children: [(0, n.jsx)("div", {
        className: o()(m.skeleton, m.featuredBlock),
        children: (0, n.jsx)("div", {
          className: m.skeletonBody
        })
      }), (0, n.jsx)("div", {
        className: o()(m.skeleton, m.featuredBlock),
        children: (0, n.jsx)("div", {
          className: m.skeletonBody
        })
      })]
    }) : null != i ? (0, n.jsx)(C, {
      featuredBlockRecord: i,
      handleTransition: r,
      isLoading: !1
    }) : (0, n.jsx)(g, {
      categories: l,
      handleTransition: r,
      isLoading: !1
    })
  }