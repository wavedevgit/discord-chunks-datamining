/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Z: () => y
}), n(653041);
var r = n(200651),
  l = n(192379),
  a = n(120356),
  s = n.n(a),
  o = n(685816),
  i = n(442837),
  d = n(481060),
  c = n(594174),
  u = n(960048),
  g = n(744112),
  h = n(223143),
  f = n(364111),
  m = n(752053),
  p = n(81136),
  b = n(953655),
  C = n(548685),
  _ = n(580914),
  x = n(384067),
  v = n(215023),
  k = n(388032),
  j = n(39532);
let S = e => {
    let {
      handleTransition: t,
      numVisibleItems: n,
      isFetchingCategories: a,
      tab: s
    } = e, {
      noCache: i,
      includeUnpublished: d
    } = (0, p.Z)(), {
      isFetchingShopHome: c,
      fetchShopHomeError: u,
      shopBlocks: g,
      refreshShopHome: h
    } = (0, f.E)(s, {
      noCache: i,
      includeUnpublished: d,
      includeBundles: !0
    }), v = l.useCallback(() => {
      h()
    }, [h]);
    return null != u ? (0, r.jsx)(m.Z, {
      onRetry: v,
      errorOrigin: m.i.SHOP_PAGE,
      errorMessage: u.message
    }) : c || 0 === g.length ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(_.Z, {
        isLoading: c,
        handleTransition: t,
        tab: s
      }), (0, r.jsx)(b.Z, {
        isLoading: c,
        handleTransition: t,
        categories: []
      }), (0, r.jsx)(C.Z, {
        isLoading: c,
        handleTransition: t,
        numVisibleItems: n,
        rankedSkuIds: [],
        tab: s
      })]
    }) : (0, r.jsx)(r.Fragment, {
      children: g.map((e, l) => {
        if (null == e) return null;
        switch (e.type) {
          case o.z.HERO:
            return (0, r.jsx)(_.Z, {
              isLoading: c,
              handleTransition: t,
              heroBlock: e,
              tab: s
            }, l);
          case o.z.FEATURED:
            return (0, r.jsx)(b.Z, {
              isLoading: c,
              handleTransition: t,
              featuredBlockRecord: e
            }, l);
          case o.z.FEED:
            return (0, r.jsx)(C.Z, {
              isLoading: c || a,
              handleTransition: t,
              numVisibleItems: n,
              rankedSkuIds: e.rankedSkuIds,
              tab: s
            }, l);
          case o.z.WIDE_BANNER:
            return (0, r.jsx)(x.Z, {
              handleTransition: t,
              wideBannerBlock: e,
              tab: s
            }, l);
          default:
            return null
        }
      })
    })
  },
  y = e => {
    var t;
    let {
      isFullScreen: n,
      handleTransition: a,
      numVisibleItems: o,
      tab: f
    } = e, {
      isFetchingCategories: b,
      fetchCategoriesError: C,
      fetchPurchasesError: _,
      claimError: x,
      refreshCategories: y
    } = (0, h.ZP)({
      location: "CollectiblesFeedShop"
    }), O = null !== (t = null != C ? C : _) && void 0 !== t ? t : x, E = (0, i.e7)([c.default], () => c.default.getCurrentUser()), B = (0, g.b)("Collectibles Shop Button"), {
      noCache: T,
      includeUnpublished: I
    } = (0, p.Z)(), L = l.useCallback(() => {
      y()
    }, [y]);
    if (null == E) return null;
    if (null != O) {
      let e = [];
      null != C ? e.push("shop load fetch categories error: ".concat(O.message)) : null != _ ? e.push("shop load fetch purchase error: ".concat(O.message)) : e.push("shop load claim error: ".concat(O.message)), u.Z.captureMessage(e.join("\n"), {
        tags: {
          isStaff: E.isStaff().toString(),
          preloadEnabled: B.toString(),
          disableCache: T.toString(),
          includeUnpublished: I.toString()
        }
      })
    }
    return null != C ? (0, r.jsx)(m.Z, {
      onRetry: L,
      errorOrigin: m.i.SHOP_PAGE,
      errorMessage: C.message
    }) : (0, r.jsx)("div", {
      className: s()(j.shop, {
        [j.shopFullscreen]: n
      }),
      children: (0, r.jsxs)("div", {
        className: s()(j.content, j.mainContent),
        children: [(0, r.jsx)(S, {
          handleTransition: a,
          numVisibleItems: o,
          isFetchingCategories: b,
          tab: f
        }), f === v.AW.HOME && o >= v.iA && (0, r.jsxs)("div", {
          className: j.endOfFeed,
          children: [(0, r.jsx)(d.X6q, {
            variant: "heading-md/semibold",
            children: k.NW.string(k.t.Yr70c3)
          }), (0, r.jsx)(d.zxk, {
            className: j.endOfFeedButton,
            onClick: () => {
              a("shop all bottom", void 0, !0)
            },
            children: (0, r.jsx)(d.Text, {
              variant: "text-md/medium",
              color: "always-white",
              children: k.NW.string(k.t.AfrvRE)
            })
          })]
        })]
      })
    })
  }