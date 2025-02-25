/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Z: () => v
}), r(47120);
var n = r(200651),
  i = r(192379),
  l = r(120356),
  o = r.n(l),
  a = r(180650),
  s = r(87290),
  c = r(960048),
  d = r(381585),
  u = r(597688),
  p = r(506800),
  f = r(788822),
  h = r(215023),
  b = r(388032),
  C = r(974492);
let m = e => {
    let {
      handleTransition: t,
      featuredBlockRecord: r
    } = e, l = u.Z.getCategory(a.T.ROBERT), c = (0, p.c)("CollectiblesFeedShop") && null != l, d = u.Z.getCategory(a.T.ANIME_V2), m = i.useMemo(() => b.NW.string(new Date > h.gJ ? b.t.l0CjbW : b.t.uPewb2), []);
    return (0, n.jsx)("div", {
      className: o()(C.section, C.col2, C.featuredBlocksContainer),
      children: null == r ? void 0 : r.subblocks.map((e, r) => {
        if (e.type === s.O.CATEGORY) {
          let i = null != e.unpublishedAt ? b.NW.string(b.t["h/uBCQ"]) : "1341506445245415424" === e.categoryStoreListingId ? b.NW.string(b.t.PsL3bW) : e.categoryStoreListingId === (null == d ? void 0 : d.storeListingId) ? b.NW.string(b.t["o/oRJC"]) : void 0,
            o = c && e.categoryStoreListingId === (null == l ? void 0 : l.storeListingId) ? m : i;
          return (0, n.jsx)(f.q, {
            subblock: e,
            badgeText: 0 === r ? i : o,
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
    } = e, i = (0, p.c)("CollectiblesFeedShop") && null != u.Z.getCategory(a.T.ROBERT);
    if (null == r || r.length < 2) return c.Z.captureMessage("Collectible Featured Block requires at least 2 categories"), null;
    let [l, s] = r, m = (null == l ? void 0 : l.unpublishedAt) != null ? b.NW.string(b.t["h/uBCQ"]) : void 0, g = b.NW.string(new Date > h.gJ ? b.t.l0CjbW : b.t.uPewb2), v = i ? g : b.NW.string(b.t["o/oRJC"]);
    return (0, n.jsx)("div", {
      className: o()(C.section, C.col2, C.featuredBlocksContainer),
      children: (0, n.jsxs)(d.k0, {
        newValue: {
          categoryPosition: 1,
          pageSection: "featured_block"
        },
        children: [null != l && (0, n.jsx)(f.q, {
          category: l,
          badgeText: m,
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
      categories: i,
      featuredBlockRecord: l
    } = e;
    return t ? (0, n.jsxs)("div", {
      className: o()(C.section, C.col2, C.featuredBlocksContainer),
      children: [(0, n.jsx)("div", {
        className: o()(C.skeleton, C.featuredBlock),
        children: (0, n.jsx)("div", {
          className: C.skeletonBody
        })
      }), (0, n.jsx)("div", {
        className: o()(C.skeleton, C.featuredBlock),
        children: (0, n.jsx)("div", {
          className: C.skeletonBody
        })
      })]
    }) : null != l ? (0, n.jsx)(m, {
      featuredBlockRecord: l,
      handleTransition: r,
      isLoading: !1
    }) : (0, n.jsx)(g, {
      categories: i,
      handleTransition: r,
      isLoading: !1
    })
  }