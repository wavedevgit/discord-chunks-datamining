/** Chunk was on 45620 **/
/** chunk id: 566564, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
let R = e => {
    var t, n, a;
    let {
      handleTransition: c,
      numVisibleItems: u,
      isFetchingCategories: f,
      tab: E
    } = e, {
      noCache: T,
      includeUnpublished: A
    } = (0, v.Z)(), R = (0, p.Pc)("CollectiblesFeedShop") && E === L.AW.ORBS, P = (n = function(e) {
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
    }({}, L.fH), a = a = {
      name: B.intl.string(B.t.bfXHLB)
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(a)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
    }), n), [w, Z] = l.useState(false), D = (0, g.sp)(), M = null != (t = null == D ? true : D.sessionId) ? t : "";
    l.useEffect(() => {
      (0, h.n)({
        sessionId: M,
        checkpoint: h.a.SHOP_MOUNTED,
        tab: E,
        unpublishedCategoriesShown: A,
        cacheDisabled: T
      })
    }, [E]);
    let {
      isFetchingShopHome: H,
      fetchShopHomeError: F,
      shopBlocks: W,
      refreshShopHome: U
    } = (0, m.E)(E, {
      noCache: T,
      includeUnpublished: A,
      includeBundles: true,
      logPerf: true
    }, {
      sessionId: M,
      tab: E
    }), z = l.useCallback(() => {
      U()
    }, [U]);
    return (l.useEffect(() => {
      null != F || H || 0 === W.length || (0, h.n)({
        sessionId: M,
        checkpoint: h.a.SHOP_RENDERED,
        tab: E,
        unpublishedCategoriesShown: A,
        cacheDisabled: T
      })
    }, [F, H, W.length, A, T, M, E]), null != F) ? (0, r.jsx)(C.Z, {
      onRetry: z,
      errorOrigin: C.i.SHOP_PAGE,
      errorMessage: F.message
    }) : H || 0 === W.length ? (0, r.jsxs)("div", {
      className: s()(N.loadingContainer, N.feedContent),
      children: [(0, r.jsx)(_.Z, {
        isLoading: H,
        handleTransition: c,
        tab: E
      }), (0, r.jsx)(x.Z, {
        isLoading: H,
        handleTransition: c,
        categories: []
      }), (0, r.jsx)(O.Z, {
        isLoading: H,
        title: E === L.AW.ORBS ? B.intl.string(B.t.dFgeuZ) : B.intl.string(B.t.NSv5KV),
        numVisibleItems: u,
        tab: E
      })]
    }) : (0, r.jsx)(r.Fragment, {
      children: W.map((e, t) => ((e, t, n) => {
        if (null == e) return null;
        let l = null,
          a = false;
        switch (e.type) {
          case i.z.HERO:
            l = (0, r.jsx)(_.Z, {
              isLoading: H,
              handleTransition: c,
              heroBlock: R ? P : e,
              tab: E
            }, n);
            break;
          case i.z.FEATURED:
            l = (0, r.jsx)(x.Z, {
              isLoading: H,
              handleTransition: c,
              featuredBlockRecord: e
            }, n);
            break;
          case i.z.FEED:
            let g = e.sortedSkuIds;
            l = (0, r.jsx)(O.Z, {
              title: E === L.AW.ORBS ? B.intl.string(B.t.dFgeuZ) : B.intl.string(B.t.NSv5KV),
              isLoading: H || f,
              numVisibleItems: u,
              sortedSkuIds: g,
              buttonContainerClassName: (null == t ? true : t.type) === i.z.IMMERSIVE_BANNER ? N.feedblockInteractiveBackground : true,
              prioritizeUserDiscounts: E === L.AW.HOME,
              tab: E,
              orbsSupportedOnly: E === L.AW.ORBS
            }, n);
            break;
          case i.z.WIDE_BANNER:
            if (e.isDismissible) {
              var p;
              let t = null != (p = e.dismissibleContentVersion) ? p : 0,
                {
                  isDismissed: n
                } = (0, d.H4)(o.z.COLLECTIBLES_SHOP_WIDE_BANNER, t);
              if (n) return null
            }
            l = (0, r.jsx)(I.Z, {
              wideBannerBlock: e,
              tab: E
            }, n);
            break;
          case i.z.SHELF:
            l = (0, r.jsx)(k.Z, {
              handleTransition: c,
              shelf: e,
              tab: E
            }, n);
            break;
          case i.z.COUNTDOWN_TIMER:
            l = (0, r.jsx)(S.J, {
              countdownTimerBlock: e,
              isVisible: w
            }, n), a = true;
            break;
          case i.z.IMMERSIVE_BANNER:
            l = (0, r.jsx)(y.Z, {
              immersiveBannerBlock: e,
              onVisibilityChange: e => Z(!e)
            }, n);
            break;
          case i.z.REWARD_HERO:
            l = (0, r.jsx)(j.Z, {
              isLoading: H,
              handleTransition: c,
              heroBlock: e,
              tab: E
            }, n);
            break;
          default:
            return null
        }
        return (0, r.jsx)(b.g6, {
          blockType: e.type,
          children: (0, r.jsx)("div", {
            className: s()(N.blockContainer, N.feedContent, {
              [N.skipPadding]: 0 === n || a
            }),
            children: l
          }, n)
        })
      })(e, t > 0 ? W[t - 1] : null, t))
    })
  },
  P = e => {
    let {
      handleTransition: t,
      tab: n,
      transitionState: a
    } = e, s = l.useRef(null), {
      handleScroll: i
    } = (0, u.z)(s, n), o = (0, E.R)(), d = (0, g.sp)(), [b, p] = l.useState(L.IV), [m, h] = l.useState(false);
    return l.useEffect(() => {
      if (null != s.current) {
        let e = () => {
            if (null == s.current) return;
            let e = s.current.getDistanceFromBottom();
            b >= 36 ? h(e < 20) : e <= 200 && p(e => e + L.IV)
          },
          t = s.current.getScrollerNode();
        return null == t || t.addEventListener("scroll", e), () => {
          null == t || t.removeEventListener("scroll", e)
        }
      }
    }, [s, b, p, h]), (0, r.jsx)(c.Den, {
      className: N.shopScroll,
      ref: s,
      onScroll: i,
      children: (0, r.jsxs)("div", {
        className: N.shop,
        children: [(0, r.jsxs)("div", {
          className: N.mainContent,
          children: [(0, r.jsx)(R, {
            handleTransition: t,
            numVisibleItems: b,
            isFetchingCategories: o,
            tab: n
          }), n !== L.AW.CATALOG && b >= 36 && (0, r.jsxs)("div", {
            className: N.endOfFeed,
            children: [(0, r.jsx)(c.Heading, {
              variant: "heading-md/semibold",
              children: B.intl.string(B.t.Yr70c4)
            }), (0, r.jsx)(c.Button, {
              variant: "primary",
              text: B.intl.string(B.t.AfrvRD),
              onClick: () => {
                t({
                  sourceButton: "shop all button",
                  shouldAnimate: true
                }), f.default.track(A.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == d ? true : d.sessionId,
                  page_type: n,
                  page_category: n === L.AW.HOME || null == d ? true : d.pageCategory,
                  cta_name: "browse the shop button"
                })
              },
              fullWidth: true
            })]
          })]
        }), (0, r.jsx)(T.Z, {
          peaking: m,
          transitioning: a === L.f7.OUT
        }), (0, r.jsx)(T.Z, {
          style: {
            left: 1850
          },
          peaking: m,
          transitioning: a === L.f7.OUT
        })]
      })
    })
  }