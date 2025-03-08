/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Z: () => _
}), n(47120);
var r = n(200651),
  l = n(192379),
  a = n(120356),
  s = n.n(a),
  o = n(180650),
  i = n(87290),
  d = n(960048),
  c = n(381585),
  u = n(597688),
  g = n(506800),
  h = n(788822),
  f = n(215023),
  m = n(388032),
  p = n(39532);
let b = e => {
    let {
      handleTransition: t,
      featuredBlockRecord: n
    } = e, a = u.Z.getCategory(o.T.ROBERT), d = (0, g.c)("CollectiblesFeedShop") && null != a, c = u.Z.getCategory(o.T.ANIME_V2), b = l.useMemo(() => m.NW.string(new Date > f.gJ ? m.t.l0CjbW : m.t.uPewb2), []);
    return (0, r.jsx)("div", {
      className: s()(p.section, p.col2, p.featuredBlocksContainer),
      children: null == n ? void 0 : n.subblocks.map((e, n) => {
        if (e.type === i.O.CATEGORY) {
          let l = null != e.unpublishedAt ? m.NW.string(m.t["h/uBCQ"]) : "1341506445245415424" === e.categoryStoreListingId ? m.NW.string(m.t.PsL3bW) : e.categoryStoreListingId === (null == c ? void 0 : c.storeListingId) ? m.NW.string(m.t["o/oRJC"]) : void 0,
            s = d && e.categoryStoreListingId === (null == a ? void 0 : a.storeListingId) ? b : l;
          return (0, r.jsx)(h.q, {
            subblock: e,
            badgeText: 0 === n ? l : s,
            handleTransition: t
          }, e.categoryStoreListingId)
        }
        return null
      })
    })
  },
  C = e => {
    let {
      handleTransition: t,
      categories: n
    } = e, l = (0, g.c)("CollectiblesFeedShop") && null != u.Z.getCategory(o.T.ROBERT);
    if (null == n || n.length < 2) return d.Z.captureMessage("Collectible Featured Block requires at least 2 categories"), null;
    let [a, i] = n, b = (null == a ? void 0 : a.unpublishedAt) != null ? m.NW.string(m.t["h/uBCQ"]) : void 0, C = m.NW.string(new Date > f.gJ ? m.t.l0CjbW : m.t.uPewb2), _ = l ? C : m.NW.string(m.t["o/oRJC"]);
    return (0, r.jsx)("div", {
      className: s()(p.section, p.col2, p.featuredBlocksContainer),
      children: (0, r.jsxs)(c.k0, {
        newValue: {
          categoryPosition: 1,
          pageSection: "featured_block"
        },
        children: [null != a && (0, r.jsx)(h.q, {
          category: a,
          badgeText: b,
          handleTransition: t
        }), null != i && (0, r.jsx)(h.q, {
          category: i,
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
      featuredBlockRecord: a
    } = e;
    return t ? (0, r.jsxs)("div", {
      className: s()(p.section, p.col2, p.featuredBlocksContainer),
      children: [(0, r.jsx)("div", {
        className: s()(p.skeleton, p.featuredBlock),
        children: (0, r.jsx)("div", {
          className: p.skeletonBody
        })
      }), (0, r.jsx)("div", {
        className: s()(p.skeleton, p.featuredBlock),
        children: (0, r.jsx)("div", {
          className: p.skeletonBody
        })
      })]
    }) : null != a ? (0, r.jsx)(b, {
      featuredBlockRecord: a,
      handleTransition: n,
      isLoading: !1
    }) : (0, r.jsx)(C, {
      categories: l,
      handleTransition: n,
      isLoading: !1
    })
  }