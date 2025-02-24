/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Z: () => k
}), r(653041);
var n = r(200651),
  i = r(192379),
  l = r(120356),
  o = r.n(l),
  a = r(685816),
  s = r(442837),
  c = r(481060),
  d = r(594174),
  u = r(960048),
  p = r(744112),
  f = r(223143),
  h = r(364111),
  b = r(752053),
  C = r(81136),
  m = r(953655),
  g = r(548685),
  v = r(580914),
  x = r(384067),
  j = r(215023),
  _ = r(388032),
  y = r(974492);
let O = e => {
    let {
      handleTransition: t,
      numVisibleItems: r,
      isFetchingCategories: l,
      tab: o
    } = e, {
      noCache: s,
      includeUnpublished: c
    } = (0, C.Z)(), {
      isFetchingShopHome: d,
      fetchShopHomeError: u,
      shopBlocks: p,
      refreshShopHome: f
    } = (0, h.E)(o, {
      noCache: s,
      includeUnpublished: c,
      includeBundles: !0
    }), j = i.useCallback(() => {
      f()
    }, [f]);
    return null != u ? (0, n.jsx)(b.Z, {
      onRetry: j,
      errorOrigin: b.i.SHOP_PAGE,
      errorMessage: u.message
    }) : d || 0 === p.length ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(v.Z, {
        isLoading: d,
        handleTransition: t,
        tab: o
      }), (0, n.jsx)(m.Z, {
        isLoading: d,
        handleTransition: t,
        categories: []
      }), (0, n.jsx)(g.Z, {
        isLoading: d,
        handleTransition: t,
        numVisibleItems: r,
        rankedSkuIds: [],
        tab: o
      })]
    }) : (0, n.jsx)(n.Fragment, {
      children: p.map((e, i) => {
        if (null == e) return null;
        switch (e.type) {
          case a.z.HERO:
            return (0, n.jsx)(v.Z, {
              isLoading: d,
              handleTransition: t,
              heroBlock: e,
              tab: o
            }, i);
          case a.z.FEATURED:
            return (0, n.jsx)(m.Z, {
              isLoading: d,
              handleTransition: t,
              featuredBlockRecord: e
            }, i);
          case a.z.FEED:
            return (0, n.jsx)(g.Z, {
              isLoading: d || l,
              handleTransition: t,
              numVisibleItems: r,
              rankedSkuIds: e.rankedSkuIds,
              tab: o
            }, i);
          case a.z.WIDE_BANNER:
            return (0, n.jsx)(x.Z, {
              handleTransition: t,
              wideBannerBlock: e,
              tab: o
            }, i);
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
      handleTransition: l,
      numVisibleItems: a,
      tab: h
    } = e, {
      isFetchingCategories: m,
      fetchCategoriesError: g,
      fetchPurchasesError: v,
      claimError: x,
      refreshCategories: k
    } = (0, f.ZP)({
      location: "CollectiblesFeedShop"
    }), P = null !== (t = null != g ? g : v) && void 0 !== t ? t : x, S = (0, s.e7)([d.default], () => d.default.getCurrentUser()), w = (0, p.b)("Collectibles Shop Button"), {
      noCache: E,
      includeUnpublished: L
    } = (0, C.Z)(), I = i.useCallback(() => {
      k()
    }, [k]);
    if (null == S) return null;
    if (null != P) {
      let e = [];
      null != g ? e.push("shop load fetch categories error: ".concat(P.message)) : null != v ? e.push("shop load fetch purchase error: ".concat(P.message)) : e.push("shop load claim error: ".concat(P.message)), u.Z.captureMessage(e.join("\n"), {
        tags: {
          isStaff: S.isStaff().toString(),
          preloadEnabled: w.toString(),
          disableCache: E.toString(),
          includeUnpublished: L.toString()
        }
      })
    }
    return null != g ? (0, n.jsx)(b.Z, {
      onRetry: I,
      errorOrigin: b.i.SHOP_PAGE,
      errorMessage: g.message
    }) : (0, n.jsx)("div", {
      className: o()(y.shop, {
        [y.shopFullscreen]: r
      }),
      children: (0, n.jsxs)("div", {
        className: o()(y.content, y.mainContent),
        children: [(0, n.jsx)(O, {
          handleTransition: l,
          numVisibleItems: a,
          isFetchingCategories: m,
          tab: h
        }), h === j.AW.HOME && a >= j.iA && (0, n.jsxs)("div", {
          className: y.endOfFeed,
          children: [(0, n.jsx)(c.X6q, {
            variant: "heading-md/semibold",
            children: _.NW.string(_.t.Yr70c3)
          }), (0, n.jsx)(c.zxk, {
            className: y.endOfFeedButton,
            onClick: () => {
              l("shop all bottom", void 0, !0)
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