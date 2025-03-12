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
  c = n(481060),
  d = n(594174),
  u = n(960048),
  g = n(744112),
  f = n(223143),
  h = n(364111),
  p = n(752053),
  m = n(81136),
  b = n(953655),
  C = n(548685),
  _ = n(580914),
  v = n(384067),
  x = n(215023),
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
      includeUnpublished: c
    } = (0, m.Z)(), {
      isFetchingShopHome: d,
      fetchShopHomeError: u,
      shopBlocks: g,
      refreshShopHome: f
    } = (0, h.E)(s, {
      noCache: i,
      includeUnpublished: c,
      includeBundles: !0
    }), x = l.useCallback(() => {
      f()
    }, [f]);
    return null != u ? (0, r.jsx)(p.Z, {
      onRetry: x,
      errorOrigin: p.i.SHOP_PAGE,
      errorMessage: u.message
    }) : d || 0 === g.length ? (0, r.jsxs)(r.Fragment, {
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
      children: g.map((e, l) => {
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
  y = e => {
    var t;
    let {
      isFullScreen: n,
      handleTransition: a,
      numVisibleItems: o,
      tab: h
    } = e, {
      isFetchingCategories: b,
      fetchCategoriesError: C,
      fetchPurchasesError: _,
      claimError: v,
      refreshCategories: y
    } = (0, f.ZP)({
      location: "CollectiblesFeedShop"
    }), O = null !== (t = null != C ? C : _) && void 0 !== t ? t : v, E = (0, i.e7)([d.default], () => d.default.getCurrentUser()), T = (0, g.b)("Collectibles Shop Button"), {
      noCache: B,
      includeUnpublished: I
    } = (0, m.Z)(), w = l.useCallback(() => {
      y()
    }, [y]);
    if (null == E) return null;
    if (null != O) {
      let e = [];
      null != C ? e.push("shop load fetch categories error: ".concat(O.message)) : null != _ ? e.push("shop load fetch purchase error: ".concat(O.message)) : e.push("shop load claim error: ".concat(O.message)), u.Z.captureMessage(e.join("\n"), {
        tags: {
          isStaff: E.isStaff().toString(),
          preloadEnabled: T.toString(),
          disableCache: B.toString(),
          includeUnpublished: I.toString()
        }
      })
    }
    return null != C ? (0, r.jsx)(p.Z, {
      onRetry: w,
      errorOrigin: p.i.SHOP_PAGE,
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
          tab: h
        }), h === x.AW.HOME && o >= x.iA && (0, r.jsxs)("div", {
          className: j.endOfFeed,
          children: [(0, r.jsx)(c.X6q, {
            variant: "heading-md/semibold",
            children: k.NW.string(k.t.Yr70c3)
          }), (0, r.jsx)(c.zxk, {
            className: j.endOfFeedButton,
            onClick: () => {
              a("shop all bottom", void 0, !0)
            },
            children: (0, r.jsx)(c.Text, {
              variant: "text-md/medium",
              color: "always-white",
              children: k.NW.string(k.t.AfrvRE)
            })
          })]
        })]
      })
    })
  }