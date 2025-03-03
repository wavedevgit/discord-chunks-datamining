/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Z: () => k
}), r(653041);
var n = r(200651),
  l = r(192379),
  i = r(120356),
  o = r.n(i),
  a = r(685816),
  s = r(442837),
  c = r(481060),
  u = r(594174),
  d = r(960048),
  p = r(744112),
  f = r(223143),
  b = r(364111),
  h = r(752053),
  m = r(81136),
  C = r(953655),
  g = r(548685),
  v = r(580914),
  x = r(384067),
  j = r(215023),
  _ = r(388032),
  y = r(39532);
let O = e => {
    let {
      handleTransition: t,
      numVisibleItems: r,
      isFetchingCategories: i,
      tab: o
    } = e, {
      noCache: s,
      includeUnpublished: c
    } = (0, m.Z)(), {
      isFetchingShopHome: u,
      fetchShopHomeError: d,
      shopBlocks: p,
      refreshShopHome: f
    } = (0, b.E)(o, {
      noCache: s,
      includeUnpublished: c,
      includeBundles: !0
    }), j = l.useCallback(() => {
      f()
    }, [f]);
    return null != d ? (0, n.jsx)(h.Z, {
      onRetry: j,
      errorOrigin: h.i.SHOP_PAGE,
      errorMessage: d.message
    }) : u || 0 === p.length ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(v.Z, {
        isLoading: u,
        handleTransition: t,
        tab: o
      }), (0, n.jsx)(C.Z, {
        isLoading: u,
        handleTransition: t,
        categories: []
      }), (0, n.jsx)(g.Z, {
        isLoading: u,
        handleTransition: t,
        numVisibleItems: r,
        rankedSkuIds: [],
        tab: o
      })]
    }) : (0, n.jsx)(n.Fragment, {
      children: p.map((e, l) => {
        if (null == e) return null;
        switch (e.type) {
          case a.z.HERO:
            return (0, n.jsx)(v.Z, {
              isLoading: u,
              handleTransition: t,
              heroBlock: e,
              tab: o
            }, l);
          case a.z.FEATURED:
            return (0, n.jsx)(C.Z, {
              isLoading: u,
              handleTransition: t,
              featuredBlockRecord: e
            }, l);
          case a.z.FEED:
            return (0, n.jsx)(g.Z, {
              isLoading: u || i,
              handleTransition: t,
              numVisibleItems: r,
              rankedSkuIds: e.rankedSkuIds,
              tab: o
            }, l);
          case a.z.WIDE_BANNER:
            return (0, n.jsx)(x.Z, {
              handleTransition: t,
              wideBannerBlock: e,
              tab: o
            }, l);
          default:
            return null
        }
      })
    })
  },
  k = e => {
    var t;
    let {
      isFullScreen: r,
      handleTransition: i,
      numVisibleItems: a,
      tab: b
    } = e, {
      isFetchingCategories: C,
      fetchCategoriesError: g,
      fetchPurchasesError: v,
      claimError: x,
      refreshCategories: k
    } = (0, f.ZP)({
      location: "CollectiblesFeedShop"
    }), P = null !== (t = null != g ? g : v) && void 0 !== t ? t : x, S = (0, s.e7)([u.default], () => u.default.getCurrentUser()), E = (0, p.b)("Collectibles Shop Button"), {
      noCache: w,
      includeUnpublished: L
    } = (0, m.Z)(), I = l.useCallback(() => {
      k()
    }, [k]);
    if (null == S) return null;
    if (null != P) {
      let e = [];
      null != g ? e.push("shop load fetch categories error: ".concat(P.message)) : null != v ? e.push("shop load fetch purchase error: ".concat(P.message)) : e.push("shop load claim error: ".concat(P.message)), d.Z.captureMessage(e.join("\n"), {
        tags: {
          isStaff: S.isStaff().toString(),
          preloadEnabled: E.toString(),
          disableCache: w.toString(),
          includeUnpublished: L.toString()
        }
      })
    }
    return null != g ? (0, n.jsx)(h.Z, {
      onRetry: I,
      errorOrigin: h.i.SHOP_PAGE,
      errorMessage: g.message
    }) : (0, n.jsx)("div", {
      className: o()(y.shop, {
        [y.shopFullscreen]: r
      }),
      children: (0, n.jsxs)("div", {
        className: o()(y.content, y.mainContent),
        children: [(0, n.jsx)(O, {
          handleTransition: i,
          numVisibleItems: a,
          isFetchingCategories: C,
          tab: b
        }), b === j.AW.HOME && a >= j.iA && (0, n.jsxs)("div", {
          className: y.endOfFeed,
          children: [(0, n.jsx)(c.X6q, {
            variant: "heading-md/semibold",
            children: _.NW.string(_.t.Yr70c3)
          }), (0, n.jsx)(c.zxk, {
            className: y.endOfFeedButton,
            onClick: () => {
              i("shop all bottom", void 0, !0)
            },
            children: (0, n.jsx)(c.Text, {
              variant: "text-md/medium",
              color: "always-white",
              children: _.NW.string(_.t.AfrvRE)
            })
          })]
        })]
      })
    })
  }