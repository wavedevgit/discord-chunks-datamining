/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Z: () => S
}), n(653041);
var r = n(200651),
  l = n(192379),
  a = n(120356),
  s = n.n(a),
  o = n(685816),
  i = n(442837),
  c = n(481060),
  d = n(594174),
  u = n(960048),
  m = n(744112),
  g = n(223143),
  f = n(364111),
  h = n(752053),
  p = n(81136),
  b = n(953655),
  C = n(548685),
  _ = n(580914),
  v = n(384067),
  x = n(215023),
  j = n(388032),
  k = n(39532);
let y = e => {
    let {
      handleTransition: t,
      numVisibleItems: n,
      isFetchingCategories: a,
      tab: s
    } = e, {
      noCache: i,
      includeUnpublished: c
    } = (0, p.Z)(), {
      isFetchingShopHome: d,
      fetchShopHomeError: u,
      shopBlocks: m,
      refreshShopHome: g
    } = (0, f.E)(s, {
      noCache: i,
      includeUnpublished: c,
      includeBundles: !0
    }), x = l.useCallback(() => {
      g()
    }, [g]);
    return null != u ? (0, r.jsx)(h.Z, {
      onRetry: x,
      errorOrigin: h.i.SHOP_PAGE,
      errorMessage: u.message
    }) : d || 0 === m.length ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(_.Z, {
        isLoading: d,
        handleTransition: t,
        tab: s
      }), (0, r.jsx)(b.Z, {
        isLoading: d,
        handleTransition: t,
        categories: []
      }), (0, r.jsx)(C.Z, {
        isLoading: d,
        handleTransition: t,
        numVisibleItems: n,
        rankedSkuIds: [],
        tab: s
      })]
    }) : (0, r.jsx)(r.Fragment, {
      children: m.map((e, l) => {
        if (null == e) return null;
        switch (e.type) {
          case o.z.HERO:
            return (0, r.jsx)(_.Z, {
              isLoading: d,
              handleTransition: t,
              heroBlock: e,
              tab: s
            }, l);
          case o.z.FEATURED:
            return (0, r.jsx)(b.Z, {
              isLoading: d,
              handleTransition: t,
              featuredBlockRecord: e
            }, l);
          case o.z.FEED:
            return (0, r.jsx)(C.Z, {
              isLoading: d || a,
              handleTransition: t,
              numVisibleItems: n,
              rankedSkuIds: e.rankedSkuIds,
              tab: s
            }, l);
          case o.z.WIDE_BANNER:
            return (0, r.jsx)(v.Z, {
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
  S = e => {
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
      claimError: v,
      refreshCategories: S
    } = (0, g.ZP)({
      location: "CollectiblesFeedShop"
    }), O = null !== (t = null != C ? C : _) && void 0 !== t ? t : v, E = (0, i.e7)([d.default], () => d.default.getCurrentUser()), B = (0, m.b)("Collectibles Shop Button"), {
      noCache: T,
      includeUnpublished: I
    } = (0, p.Z)(), L = l.useCallback(() => {
      S()
    }, [S]);
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
    return null != C ? (0, r.jsx)(h.Z, {
      onRetry: L,
      errorOrigin: h.i.SHOP_PAGE,
      errorMessage: C.message
    }) : (0, r.jsx)("div", {
      className: s()(k.shop, {
        [k.shopFullscreen]: n
      }),
      children: (0, r.jsxs)("div", {
        className: s()(k.content, k.mainContent),
        children: [(0, r.jsx)(y, {
          handleTransition: a,
          numVisibleItems: o,
          isFetchingCategories: b,
          tab: f
        }), f === x.AW.HOME && o >= x.iA && (0, r.jsxs)("div", {
          className: k.endOfFeed,
          children: [(0, r.jsx)(c.X6q, {
            variant: "heading-md/semibold",
            children: j.NW.string(j.t.Yr70c3)
          }), (0, r.jsx)(c.zxk, {
            className: k.endOfFeedButton,
            onClick: () => {
              a("shop all bottom", void 0, !0)
            },
            children: (0, r.jsx)(c.Text, {
              variant: "text-md/medium",
              color: "always-white",
              children: j.NW.string(j.t.AfrvRE)
            })
          })]
        })]
      })
    })
  }