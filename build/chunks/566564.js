/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Z: () => P
}), n(653041);
var r = n(200651),
  l = n(192379),
  o = n(120356),
  a = n.n(o),
  i = n(685816),
  s = n(442837),
  c = n(481060),
  u = n(594174),
  d = n(960048),
  b = n(744112),
  p = n(139668),
  f = n(223143),
  g = n(364111),
  h = n(752053),
  m = n(81136),
  v = n(953655),
  _ = n(548685),
  C = n(580914),
  x = n(963278),
  O = n(384067),
  y = n(215023),
  j = n(388032),
  k = n(39532);
let S = e => {
    let {
      handleTransition: t,
      numVisibleItems: n,
      isFetchingCategories: o,
      tab: s
    } = e, {
      noCache: c,
      includeUnpublished: u
    } = (0, m.Z)(), {
      isFetchingShopHome: d,
      fetchShopHomeError: b,
      shopBlocks: p,
      refreshShopHome: f
    } = (0, g.E)(s, {
      noCache: c,
      includeUnpublished: u,
      includeBundles: !0
    }), y = l.useCallback(() => {
      f()
    }, [f]);
    if (null != b) return (0, r.jsx)(h.Z, {
      onRetry: y,
      errorOrigin: h.i.SHOP_PAGE,
      errorMessage: b.message
    });
    if (d || 0 === p.length) return (0, r.jsxs)("div", {
      className: k.loadingContainer,
      children: [(0, r.jsx)(C.Z, {
        isLoading: d,
        handleTransition: t,
        tab: s
      }), (0, r.jsx)(v.Z, {
        isLoading: d,
        handleTransition: t,
        categories: []
      }), (0, r.jsx)(_.Z, {
        isLoading: d,
        handleTransition: t,
        numVisibleItems: n,
        rankedSkuIds: [],
        tab: s
      })]
    });
    let j = (e, l) => {
      if (null == e) return null;
      let c = null;
      switch (e.type) {
        case i.z.HERO:
          c = (0, r.jsx)(C.Z, {
            isLoading: d,
            handleTransition: t,
            heroBlock: e,
            tab: s
          }, l);
          break;
        case i.z.FEATURED:
          c = (0, r.jsx)(v.Z, {
            isLoading: d,
            handleTransition: t,
            featuredBlockRecord: e
          }, l);
          break;
        case i.z.FEED:
          c = (0, r.jsx)(_.Z, {
            isLoading: d || o,
            handleTransition: t,
            numVisibleItems: n,
            rankedSkuIds: e.rankedSkuIds,
            tab: s
          }, l);
          break;
        case i.z.WIDE_BANNER:
          c = (0, r.jsx)(O.Z, {
            handleTransition: t,
            wideBannerBlock: e,
            tab: s
          }, l);
          break;
        case i.z.SHELF:
          c = (0, r.jsx)(x.Z, {
            handleTransition: t,
            shelf: e,
            tab: s
          }, l);
          break;
        default:
          return null
      }
      return (0, r.jsx)("div", {
        className: a()(k.blockContainer, {
          [k.topBlockContainer]: 0 === l
        }),
        children: c
      }, l)
    };
    return (0, r.jsx)(r.Fragment, {
      children: p.map((e, t) => j(e, t))
    })
  },
  P = e => {
    var t;
    let {
      isFullScreen: n,
      handleTransition: o,
      numVisibleItems: i,
      tab: g
    } = e, {
      isFetchingCategories: v,
      fetchCategoriesError: _,
      fetchPurchasesError: C,
      claimError: x,
      refreshCategories: O
    } = (0, f.ZP)({
      location: "CollectiblesFeedShop"
    }), P = null !== (t = null != _ ? _ : C) && void 0 !== t ? t : x, E = (0, s.e7)([u.default], () => u.default.getCurrentUser()), I = (0, b.b)("Collectibles Shop Button"), w = (0, p.R)("CollectiblesFeedShop"), {
      noCache: B,
      includeUnpublished: T
    } = (0, m.Z)(), N = l.useCallback(() => {
      O()
    }, [O]);
    if (null == E) return null;
    if (null != P) {
      let e = [];
      null != _ ? e.push("shop load fetch categories error: ".concat(P.message)) : null != C ? e.push("shop load fetch purchase error: ".concat(P.message)) : e.push("shop load claim error: ".concat(P.message)), d.Z.captureMessage(e.join("\n"), {
        tags: {
          isStaff: E.isStaff().toString(),
          preloadEnabled: I.toString(),
          disableCache: B.toString(),
          includeUnpublished: T.toString()
        }
      })
    }
    return null != _ ? (0, r.jsx)(h.Z, {
      onRetry: N,
      errorOrigin: h.i.SHOP_PAGE,
      errorMessage: _.message
    }) : (0, r.jsx)("div", {
      className: a()(k.shop, {
        [k.shopFullscreen]: n
      }),
      children: (0, r.jsxs)("div", {
        className: a()(k.content, k.mainContent),
        children: [(0, r.jsx)(S, {
          handleTransition: o,
          numVisibleItems: i,
          isFetchingCategories: v,
          tab: g
        }), g === y.AW.HOME && i >= w && (0, r.jsxs)("div", {
          className: k.endOfFeed,
          children: [(0, r.jsx)(c.X6q, {
            variant: "heading-md/semibold",
            children: j.NW.string(j.t.Yr70c3)
          }), (0, r.jsx)(c.zxk, {
            className: k.endOfFeedButton,
            onClick: () => {
              o("shop all bottom", void 0, !0)
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