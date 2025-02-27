/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Z: () => v
}), r(47120);
var n = r(200651),
  l = r(192379),
  i = r(120356),
  a = r.n(i),
  o = r(180650),
  s = r(87290),
  c = r(960048),
  d = r(381585),
  u = r(597688),
  p = r(506800),
  f = r(788822),
  h = r(215023),
  b = r(388032),
  m = r(974492);
let C = e => {
    let {
      handleTransition: t,
      featuredBlockRecord: r
    } = e, i = u.Z.getCategory(o.T.ROBERT), c = (0, p.c)("CollectiblesFeedShop") && null != i, d = u.Z.getCategory(o.T.ANIME_V2), C = l.useMemo(() => b.NW.string(new Date > h.gJ ? b.t.l0CjbW : b.t.uPewb2), []);
    return (0, n.jsx)("div", {
      className: a()(m.section, m.col2, m.featuredBlocksContainer),
      children: null == r ? void 0 : r.subblocks.map((e, r) => {
        if (e.type === s.O.CATEGORY) {
          let l = null != e.unpublishedAt ? b.NW.string(b.t["h/uBCQ"]) : "1341506445245415424" === e.categoryStoreListingId ? b.NW.string(b.t.PsL3bW) : e.categoryStoreListingId === (null == d ? void 0 : d.storeListingId) ? b.NW.string(b.t["o/oRJC"]) : void 0,
            a = c && e.categoryStoreListingId === (null == i ? void 0 : i.storeListingId) ? C : l;
          return (0, n.jsx)(f.q, {
            subblock: e,
            badgeText: 0 === r ? l : a,
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
    } = e, l = (0, p.c)("CollectiblesFeedShop") && null != u.Z.getCategory(o.T.ROBERT);
    if (null == r || r.length < 2) return c.Z.captureMessage("Collectible Featured Block requires at least 2 categories"), null;
    let [i, s] = r, C = (null == i ? void 0 : i.unpublishedAt) != null ? b.NW.string(b.t["h/uBCQ"]) : void 0, g = b.NW.string(new Date > h.gJ ? b.t.l0CjbW : b.t.uPewb2), v = l ? g : b.NW.string(b.t["o/oRJC"]);
    return (0, n.jsx)("div", {
      className: a()(m.section, m.col2, m.featuredBlocksContainer),
      children: (0, n.jsxs)(d.k0, {
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
      className: a()(m.section, m.col2, m.featuredBlocksContainer),
      children: [(0, n.jsx)("div", {
        className: a()(m.skeleton, m.featuredBlock),
        children: (0, n.jsx)("div", {
          className: m.skeletonBody
        })
      }), (0, n.jsx)("div", {
        className: a()(m.skeleton, m.featuredBlock),
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