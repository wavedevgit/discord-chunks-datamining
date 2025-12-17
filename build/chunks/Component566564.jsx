/** Chunk was on 45620 **/
/** chunk id: 566564, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk685816 = require("./685816.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk702486 = require("./702486.js"),
  Chunk605236 = require("./605236.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk501678 = require("./501678.jsx"),
  Chunk763941 = require("./763941.js"),
  Chunk364111 = require("./364111.js"),
  Chunk303952 = require("./303952.js"),
  Chunk752053 = require("./752053.jsx"),
  Chunk258939 = require("./258939.js"),
  Chunk81136 = require("./81136.js"),
  Chunk302933 = require("./302933.jsx"),
  Chunk953655 = require("./953655.jsx"),
  Chunk548685 = require("./548685.jsx"),
  Chunk580914 = require("./580914.jsx"),
  Chunk92589 = require("./92589.jsx"),
  Chunk548257 = require("./548257.jsx"),
  Chunk963278 = require("./963278.jsx"),
  Chunk531864 = require("./531864.jsx"),
  Chunk384067 = require("./384067.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk222194 = require("./222194.js");
let P = e => {
    var t, n, a;
    let {
      handleTransition: c,
      numVisibleItems: u,
      isFetchingCategories: f,
      tab: v
    } = e, {
      noCache: T,
      includeUnpublished: B
    } = (0, E.Z)(), P = (0, b.Pc)("CollectiblesFeedShop") && v === I.AW.ORBS, R = (n = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, I.fH), a = a = {
      name: A.intl.string(A.t.bfXHLB)
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(a)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
    }), n), [Z, w] = l.useState(false), H = (0, g.sp)(), D = null != (t = null == H ? true : H.sessionId) ? t : "";
    l.useEffect(() => {
      (0, C.n)({
        sessionId: D,
        checkpoint: C.a.SHOP_MOUNTED,
        tab: v,
        unpublishedCategoriesShown: B,
        cacheDisabled: T
      })
    }, [v]);
    let {
      isFetchingShopHome: M,
      fetchShopHomeError: F,
      shopBlocks: W,
      refreshShopHome: U
    } = (0, m.E)(v, {
      noCache: T,
      includeUnpublished: B,
      includeBundles: true,
      logPerf: true
    }, {
      sessionId: D,
      tab: v
    }), V = l.useCallback(() => {
      U()
    }, [U]);
    return (l.useEffect(() => {
      null != F || M || 0 === W.length || (0, C.n)({
        sessionId: D,
        checkpoint: C.a.SHOP_RENDERED,
        tab: v,
        unpublishedCategoriesShown: B,
        cacheDisabled: T
      })
    }, [F, M, W.length, B, T, D, v]), null != F) ? (0, r.jsx)(h.Z, {
      onRetry: V,
      errorOrigin: h.i.SHOP_PAGE,
      errorMessage: F.message
    }) : M || 0 === W.length ? (0, r.jsxs)("div", {
      className: o()(N.loadingContainer, N.feedContent),
      children: [(0, r.jsx)(x.Z, {
        isLoading: M,
        handleTransition: c,
        tab: v
      }), (0, r.jsx)(_.Z, {
        isLoading: M,
        handleTransition: c,
        categories: []
      }), (0, r.jsx)(O.Z, {
        isLoading: M,
        title: v === I.AW.ORBS ? A.intl.string(A.t.dFgeuZ) : A.intl.string(A.t.NSv5KV),
        numVisibleItems: u,
        tab: v
      })]
    }) : (0, r.jsx)(r.Fragment, {
      children: W.map((e, t) => ((e, t, n) => {
        if (null == e) return null;
        let l = null,
          a = false;
        switch (e.type) {
          case s.z.HERO:
            l = (0, r.jsx)(x.Z, {
              isLoading: M,
              handleTransition: c,
              heroBlock: P ? R : e,
              tab: v
            }, n);
            break;
          case s.z.FEATURED:
            l = (0, r.jsx)(_.Z, {
              isLoading: M,
              handleTransition: c,
              featuredBlockRecord: e
            }, n);
            break;
          case s.z.FEED:
            let g = e.sortedSkuIds;
            l = (0, r.jsx)(O.Z, {
              title: v === I.AW.ORBS ? A.intl.string(A.t.dFgeuZ) : A.intl.string(A.t.NSv5KV),
              isLoading: M || f,
              numVisibleItems: u,
              sortedSkuIds: g,
              buttonContainerClassName: (null == t ? true : t.type) === s.z.IMMERSIVE_BANNER ? N.feedblockInteractiveBackground : true,
              prioritizeUserDiscounts: v === I.AW.HOME,
              tab: v,
              orbsSupportedOnly: v === I.AW.ORBS
            }, n);
            break;
          case s.z.WIDE_BANNER:
            if (e.isDismissible) {
              var b;
              let t = null != (b = e.dismissibleContentVersion) ? b : 0,
                {
                  isDismissed: n
                } = (0, d.H4)(i.z.COLLECTIBLES_SHOP_WIDE_BANNER, t);
              if (n) return null
            }
            l = (0, r.jsx)(L.Z, {
              wideBannerBlock: e,
              tab: v
            }, n);
            break;
          case s.z.SHELF:
            l = (0, r.jsx)(k.Z, {
              handleTransition: c,
              shelf: e,
              tab: v
            }, n);
            break;
          case s.z.COUNTDOWN_TIMER:
            l = (0, r.jsx)(S.J, {
              countdownTimerBlock: e,
              isVisible: Z
            }, n), a = true;
            break;
          case s.z.IMMERSIVE_BANNER:
            l = (0, r.jsx)(y.Z, {
              immersiveBannerBlock: e,
              onVisibilityChange: e => w(!e)
            }, n);
            break;
          case s.z.REWARD_HERO:
            l = (0, r.jsx)(j.Z, {
              isLoading: M,
              handleTransition: c,
              heroBlock: e,
              tab: v
            }, n);
            break;
          default:
            return null
        }
        return (0, r.jsx)(p.g6, {
          blockType: e.type,
          children: (0, r.jsx)("div", {
            className: o()(N.blockContainer, N.feedContent, {
              [N.skipPadding]: 0 === n || a
            }),
            children: l
          }, n)
        })
      })(e, t > 0 ? W[t - 1] : null, t))
    })
  },
  R = e => {
    let {
      handleTransition: t,
      tab: n,
      transitionState: a
    } = e, o = l.useRef(null), {
      handleScroll: s
    } = (0, u.z)(o, n), i = (0, v.R)(), d = (0, g.sp)(), [p, b] = l.useState(I.IV), [m, C] = l.useState(false);
    return l.useEffect(() => {
      if (null != o.current) {
        let e = () => {
            if (null == o.current) return;
            let e = o.current.getDistanceFromBottom();
            p >= 36 ? C(e < 20) : e <= 200 && b(e => e + I.IV)
          },
          t = o.current.getScrollerNode();
        return null == t || t.addEventListener("scroll", e), () => {
          null == t || t.removeEventListener("scroll", e)
        }
      }
    }, [o, p, b, C]), (0, r.jsx)(c.Den, {
      className: N.shopScroll,
      ref: o,
      onScroll: s,
      children: (0, r.jsxs)("div", {
        className: N.shop,
        children: [(0, r.jsxs)("div", {
          className: N.mainContent,
          children: [(0, r.jsx)(P, {
            handleTransition: t,
            numVisibleItems: p,
            isFetchingCategories: i,
            tab: n
          }), n !== I.AW.CATALOG && p >= 36 && (0, r.jsxs)("div", {
            className: N.endOfFeed,
            children: [(0, r.jsx)(c.Heading, {
              variant: "heading-md/semibold",
              children: A.intl.string(A.t.Yr70c4)
            }), (0, r.jsx)(c.Button, {
              variant: "primary",
              text: A.intl.string(A.t.AfrvRD),
              onClick: () => {
                t({
                  sourceButton: "shop all button",
                  shouldAnimate: true
                }), f.default.track(B.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == d ? true : d.sessionId,
                  page_type: n,
                  page_category: n === I.AW.HOME || null == d ? true : d.pageCategory,
                  cta_name: "browse the shop button"
                })
              },
              fullWidth: true
            })]
          })]
        }), (0, r.jsx)(T.Z, {
          peaking: m,
          transitioning: a === I.f7.OUT
        }), (0, r.jsx)(T.Z, {
          style: {
            left: 1850
          },
          peaking: m,
          transitioning: a === I.f7.OUT
        })]
      })
    })
  }