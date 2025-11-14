/** Chunk was on 45620 **/
/** chunk id: 566564, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk685816 = require("./685816.js"),
  Chunk481060 = require("./481060.js"),
  Chunk702486 = require("./702486.js"),
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
  Chunk310582 = require("./310582.js");
let P = e => {
    var t, n, i;
    let {
      handleTransition: s,
      numVisibleItems: c,
      isFetchingCategories: u,
      tab: m
    } = e, {
      noCache: j,
      includeUnpublished: T
    } = (0, _.Z)(), P = g.Z.useConfig({
      location: "CollectiblesFeedShop"
    }).enabled && m === I.AW.ORBS, N = (n = function(e) {
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
    }({}, I.fH), i = i = {
      name: L.intl.string(L.t.bfXHLB),
      summary: L.intl.string(L.t.MWDrou)
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(i)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
    }), n), [A, R] = l.useState(false), Z = (0, d.sp)(), w = null != (t = null == Z ? true : Z.sessionId) ? t : "";
    l.useEffect(() => {
      (0, h.n)({
        sessionId: w,
        checkpoint: h.a.SHOP_MOUNTED,
        tab: m,
        unpublishedCategoriesShown: T,
        cacheDisabled: j
      })
    }, [m]);
    let {
      isFetchingShopHome: H,
      fetchShopHomeError: D,
      shopBlocks: M,
      refreshShopHome: F
    } = (0, f.E)(m, {
      noCache: j,
      includeUnpublished: T,
      includeBundles: true,
      logPerf: true
    }, {
      sessionId: w,
      tab: m
    }), W = l.useCallback(() => {
      F()
    }, [F]);
    return (l.useEffect(() => {
      null != D || H || 0 === M.length || (0, h.n)({
        sessionId: w,
        checkpoint: h.a.SHOP_RENDERED,
        tab: m,
        unpublishedCategoriesShown: T,
        cacheDisabled: j
      })
    }, [D, H, M.length, T, j, w, m]), null != D) ? (0, r.jsx)(C.Z, {
      onRetry: W,
      errorOrigin: C.i.SHOP_PAGE,
      errorMessage: D.message
    }) : H || 0 === M.length ? (0, r.jsxs)("div", {
      className: a()(B.loadingContainer, B.feedContent),
      children: [(0, r.jsx)(E.Z, {
        isLoading: H,
        handleTransition: s,
        tab: m
      }), (0, r.jsx)(v.Z, {
        isLoading: H,
        handleTransition: s,
        categories: []
      }), (0, r.jsx)(x.Z, {
        isLoading: H,
        title: m === I.AW.ORBS ? L.intl.string(L.t.dFgeuZ) : L.intl.string(L.t.NSv5KV),
        numVisibleItems: c,
        tab: m
      })]
    }) : (0, r.jsx)(r.Fragment, {
      children: M.map((e, t) => ((e, t, n) => {
        if (null == e) return null;
        let l = null,
          i = false;
        switch (e.type) {
          case o.z.HERO:
            l = (0, r.jsx)(E.Z, {
              isLoading: H,
              handleTransition: s,
              heroBlock: P ? N : e,
              tab: m
            }, n);
            break;
          case o.z.FEATURED:
            l = (0, r.jsx)(v.Z, {
              isLoading: H,
              handleTransition: s,
              featuredBlockRecord: e
            }, n);
            break;
          case o.z.FEED:
            let d = e.sortedSkuIds;
            l = (0, r.jsx)(x.Z, {
              title: m === I.AW.ORBS ? L.intl.string(L.t.dFgeuZ) : L.intl.string(L.t.NSv5KV),
              isLoading: H || u,
              numVisibleItems: c,
              sortedSkuIds: d,
              buttonContainerClassName: (null == t ? true : t.type) === o.z.IMMERSIVE_BANNER ? B.feedblockInteractiveBackground : true,
              prioritizeUserDiscounts: m === I.AW.HOME,
              tab: m,
              orbsSupportedOnly: m === I.AW.ORBS
            }, n);
            break;
          case o.z.WIDE_BANNER:
            l = (0, r.jsx)(k.Z, {
              handleTransition: s,
              wideBannerBlock: e,
              tab: m
            }, n);
            break;
          case o.z.SHELF:
            l = (0, r.jsx)(y.Z, {
              handleTransition: s,
              shelf: e,
              tab: m
            }, n);
            break;
          case o.z.COUNTDOWN_TIMER:
            l = (0, r.jsx)(b.J, {
              countdownTimerBlock: e,
              isVisible: A
            }, n), i = true;
            break;
          case o.z.IMMERSIVE_BANNER:
            l = (0, r.jsx)(O.Z, {
              immersiveBannerBlock: e,
              onVisibilityChange: e => R(!e)
            }, n);
            break;
          case o.z.REWARD_HERO:
            l = (0, r.jsx)(S.Z, {
              isLoading: H,
              handleTransition: s,
              heroBlock: e,
              tab: m
            }, n);
            break;
          default:
            return null
        }
        return (0, r.jsx)(p.g6, {
          blockType: e.type,
          children: (0, r.jsx)("div", {
            className: a()(B.blockContainer, B.feedContent, {
              [B.skipPadding]: 0 === n || i
            }),
            children: l
          }, n)
        })
      })(e, t > 0 ? M[t - 1] : null, t))
    })
  },
  N = e => {
    let {
      handleTransition: t,
      tab: n,
      transitionState: i
    } = e, a = l.useRef(null), {
      handleScroll: o
    } = (0, c.z)(a, n), p = (0, m.R)(), g = (0, d.sp)(), [f, h] = l.useState(I.IV), [C, _] = l.useState(false);
    return l.useEffect(() => {
      if (null != a.current) {
        let e = () => {
            if (null == a.current) return;
            let e = a.current.getDistanceFromBottom();
            f >= 36 ? _(e < 20) : e <= 200 && h(e => e + I.IV)
          },
          t = a.current.getScrollerNode();
        return null == t || t.addEventListener("scroll", e), () => {
          null == t || t.removeEventListener("scroll", e)
        }
      }
    }, [a, f, h, _]), (0, r.jsx)(s.Den, {
      className: B.shopScroll,
      ref: a,
      onScroll: o,
      children: (0, r.jsxs)("div", {
        className: B.shop,
        children: [(0, r.jsxs)("div", {
          className: B.mainContent,
          children: [(0, r.jsx)(P, {
            handleTransition: t,
            numVisibleItems: f,
            isFetchingCategories: p,
            tab: n
          }), n !== I.AW.CATALOG && f >= 36 && (0, r.jsxs)("div", {
            className: B.endOfFeed,
            children: [(0, r.jsx)(s.Heading, {
              variant: "heading-md/semibold",
              children: L.intl.string(L.t.Yr70c4)
            }), (0, r.jsx)(s.Button, {
              variant: "primary",
              text: L.intl.string(L.t.AfrvRD),
              onClick: () => {
                t({
                  sourceButton: "shop all button",
                  shouldAnimate: true
                }), u.default.track(T.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == g ? true : g.sessionId,
                  page_type: n,
                  page_category: n === I.AW.HOME || null == g ? true : g.pageCategory,
                  cta_name: "browse the shop button"
                })
              },
              fullWidth: true
            })]
          })]
        }), (0, r.jsx)(j.Z, {
          peaking: C,
          transitioning: i === I.f7.OUT
        }), (0, r.jsx)(j.Z, {
          style: {
            left: 1850
          },
          peaking: C,
          transitioning: i === I.f7.OUT
        })]
      })
    })
  }