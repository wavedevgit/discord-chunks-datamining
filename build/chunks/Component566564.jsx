/** Chunk was on 45620 **/
/** chunk id: 566564, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => B
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk685816 = require("./685816.js"),
  Chunk481060 = require("./481060.js"),
  Chunk702486 = require("./702486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
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
  Chunk963278 = require("./963278.jsx"),
  Chunk531864 = require("./531864.jsx"),
  Chunk384067 = require("./384067.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
let k = e => {
    var t;
    let {
      handleTransition: n,
      numVisibleItems: a,
      isFetchingCategories: i,
      tab: c,
      isFullScreen: u
    } = e, {
      noCache: m,
      includeUnpublished: v
    } = (0, h.Z)(), [T, k] = l.useState(false), B = (0, d.sp)(), I = null != (t = null == B ? true : B.sessionId) ? t : "";
    l.useEffect(() => {
      (0, f.n)({
        sessionId: I,
        checkpoint: f.a.SHOP_MOUNTED,
        tab: c,
        isFullScreen: u,
        unpublishedCategoriesShown: v,
        cacheDisabled: m
      })
    }, [c]);
    let {
      isFetchingShopHome: N,
      fetchShopHomeError: A,
      shopBlocks: P,
      refreshShopHome: R
    } = (0, g.E)(c, {
      noCache: m,
      includeUnpublished: v,
      includeBundles: true,
      logPerf: true
    }, {
      sessionId: I,
      tab: c,
      isFullScreen: u
    }), Z = l.useCallback(() => {
      R()
    }, [R]);
    return (l.useEffect(() => {
      null != A || N || 0 === P.length || (0, f.n)({
        sessionId: I,
        checkpoint: f.a.SHOP_RENDERED,
        tab: c,
        isFullScreen: u,
        unpublishedCategoriesShown: v,
        cacheDisabled: m
      })
    }, [A, N, P.length, v, m, I, c, u]), null != A) ? (0, r.jsx)(p.Z, {
      onRetry: Z,
      errorOrigin: p.i.SHOP_PAGE,
      errorMessage: A.message
    }) : N || 0 === P.length ? (0, r.jsxs)("div", {
      className: s()(j.loadingContainer, j.feedContent),
      children: [(0, r.jsx)(E.Z, {
        isLoading: N,
        handleTransition: n,
        tab: c
      }), (0, r.jsx)(b.Z, {
        isLoading: N,
        handleTransition: n,
        categories: []
      }), (0, r.jsx)(C.Z, {
        isLoading: N,
        title: c === y.AW.ORBS ? L.intl.string(L.t.dFgeub) : L.intl.string(L.t.NSv5KS),
        numVisibleItems: a,
        hasSorting: c === y.AW.HOME,
        tab: c
      })]
    }) : (0, r.jsx)(r.Fragment, {
      children: P.map((e, t) => ((e, t, l) => {
        if (null == e) return null;
        let d = null,
          g = false;
        switch (e.type) {
          case o.z.HERO:
            d = (0, r.jsx)(E.Z, {
              isLoading: N,
              handleTransition: n,
              heroBlock: e,
              tab: c
            }, l);
            break;
          case o.z.FEATURED:
            d = (0, r.jsx)(b.Z, {
              isLoading: N,
              handleTransition: n,
              featuredBlockRecord: e
            }, l);
            break;
          case o.z.FEED:
            let f = e.sortedSkuIds;
            d = (0, r.jsx)(C.Z, {
              title: c === y.AW.ORBS ? L.intl.string(L.t.dFgeub) : L.intl.string(L.t.NSv5KS),
              isLoading: N || i,
              numVisibleItems: a,
              sortedSkuIds: f,
              buttonContainerClassName: (null == t ? true : t.type) === o.z.IMMERSIVE_BANNER ? j.feedblockInteractiveBackground : true,
              hasSorting: c === y.AW.HOME,
              prioritizeUserDiscounts: c === y.AW.HOME,
              tab: c
            }, l);
            break;
          case o.z.WIDE_BANNER:
            d = (0, r.jsx)(x.Z, {
              handleTransition: n,
              wideBannerBlock: e,
              tab: c
            }, l);
            break;
          case o.z.SHELF:
            d = (0, r.jsx)(O.Z, {
              handleTransition: n,
              shelf: e,
              tab: c
            }, l);
            break;
          case o.z.COUNTDOWN_TIMER:
            d = (0, r.jsx)(_.J, {
              countdownTimerBlock: e,
              isVisible: T,
              isFullScreen: u
            }, l), g = true;
            break;
          case o.z.IMMERSIVE_BANNER:
            d = (0, r.jsx)(S.Z, {
              immersiveBannerBlock: e,
              onVisibilityChange: e => k(!e)
            }, l);
            break;
          default:
            return null
        }
        return (0, r.jsx)("div", {
          className: s()(j.blockContainer, j.feedContent, {
            [j.skipPadding]: 0 === l || g
          }),
          children: d
        }, l)
      })(e, t > 0 ? P[t - 1] : null, t))
    })
  },
  B = e => {
    let {
      isFullScreen: t,
      handleTransition: n,
      tab: a,
      transitionState: s
    } = e, o = l.useRef(null), {
      handleScroll: g
    } = (0, c.z)(o, a), f = (0, m.R)(), p = (0, d.sp)(), [h, _] = l.useState(y.IV), [b, C] = l.useState(false);
    return l.useEffect(() => {
      if (null != o.current) {
        let e = () => {
            if (null == o.current) return;
            let e = o.current.getDistanceFromBottom();
            h >= 36 ? C(e < 20) : e <= 200 && _(e => e + y.IV)
          },
          t = o.current.getScrollerNode();
        return null == t || t.addEventListener("scroll", e), () => {
          null == t || t.removeEventListener("scroll", e)
        }
      }
    }, [o, h, _, C]), (0, r.jsx)(i.Den, {
      className: j.shopScroll,
      ref: o,
      onScroll: g,
      children: (0, r.jsxs)("div", {
        className: j.shop,
        children: [(0, r.jsxs)("div", {
          className: j.mainContent,
          children: [(0, r.jsx)(k, {
            handleTransition: n,
            numVisibleItems: h,
            isFetchingCategories: f,
            tab: a,
            isFullScreen: t
          }), a !== y.AW.CATALOG && h >= 36 && (0, r.jsxs)("div", {
            className: j.endOfFeed,
            children: [(0, r.jsx)(i.X6q, {
              variant: "heading-md/semibold",
              children: L.intl.string(L.t.Yr70c3)
            }), (0, r.jsx)(i.zxk, {
              variant: "primary",
              text: L.intl.string(L.t.AfrvRE),
              onClick: () => {
                n("shop all button", true, true), u.default.track(T.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == p ? true : p.sessionId,
                  page_type: a,
                  page_category: a === y.AW.HOME || null == p ? true : p.pageCategory,
                  cta_name: "browse the shop button"
                })
              },
              fullWidth: true
            })]
          })]
        }), !t && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(v.Z, {
            peaking: b,
            transitioning: s === y.f7.OUT
          }), (0, r.jsx)(v.Z, {
            style: {
              left: 1850
            },
            peaking: b,
            transitioning: s === y.f7.OUT
          })]
        })]
      })
    })
  }