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
  Chunk501678 = require("./501678.jsx"),
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
let I = e => {
    var t;
    let {
      handleTransition: n,
      numVisibleItems: i,
      isFetchingCategories: o,
      tab: c,
      isFullScreen: u
    } = e, {
      noCache: h,
      includeUnpublished: x
    } = (0, _.Z)(), [T, I] = l.useState(false), B = (0, d.sp)(), P = null != (t = null == B ? true : B.sessionId) ? t : "";
    l.useEffect(() => {
      (0, p.n)({
        sessionId: P,
        checkpoint: p.a.SHOP_MOUNTED,
        tab: c,
        isFullScreen: u,
        unpublishedCategoriesShown: x,
        cacheDisabled: h
      })
    }, [c]);
    let {
      isFetchingShopHome: N,
      fetchShopHomeError: A,
      shopBlocks: R,
      refreshShopHome: Z
    } = (0, f.E)(c, {
      noCache: h,
      includeUnpublished: x,
      includeBundles: true,
      logPerf: true
    }, {
      sessionId: P,
      tab: c,
      isFullScreen: u
    }), w = l.useCallback(() => {
      Z()
    }, [Z]);
    return (l.useEffect(() => {
      null != A || N || 0 === R.length || (0, p.n)({
        sessionId: P,
        checkpoint: p.a.SHOP_RENDERED,
        tab: c,
        isFullScreen: u,
        unpublishedCategoriesShown: x,
        cacheDisabled: h
      })
    }, [A, N, R.length, x, h, P, c, u]), null != A) ? (0, r.jsx)(C.Z, {
      onRetry: w,
      errorOrigin: C.i.SHOP_PAGE,
      errorMessage: A.message
    }) : N || 0 === R.length ? (0, r.jsxs)("div", {
      className: s()(k.loadingContainer, k.feedContent),
      children: [(0, r.jsx)(v.Z, {
        isLoading: N,
        handleTransition: n,
        tab: c
      }), (0, r.jsx)(b.Z, {
        isLoading: N,
        handleTransition: n,
        categories: []
      }), (0, r.jsx)(E.Z, {
        isLoading: N,
        title: c === j.AW.ORBS ? L.intl.string(L.t.dFgeub) : L.intl.string(L.t.NSv5KS),
        numVisibleItems: i,
        hasSorting: c === j.AW.HOME,
        tab: c
      })]
    }) : (0, r.jsx)(r.Fragment, {
      children: R.map((e, t) => ((e, t, l) => {
        if (null == e) return null;
        let d = null,
          f = false;
        switch (e.type) {
          case a.z.HERO:
            d = (0, r.jsx)(v.Z, {
              isLoading: N,
              handleTransition: n,
              heroBlock: e,
              tab: c
            }, l);
            break;
          case a.z.FEATURED:
            d = (0, r.jsx)(b.Z, {
              isLoading: N,
              handleTransition: n,
              featuredBlockRecord: e
            }, l);
            break;
          case a.z.FEED:
            let p = e.sortedSkuIds;
            d = (0, r.jsx)(E.Z, {
              title: c === j.AW.ORBS ? L.intl.string(L.t.dFgeub) : L.intl.string(L.t.NSv5KS),
              isLoading: N || o,
              numVisibleItems: i,
              sortedSkuIds: p,
              buttonContainerClassName: (null == t ? true : t.type) === a.z.IMMERSIVE_BANNER ? k.feedblockInteractiveBackground : true,
              hasSorting: c === j.AW.HOME,
              prioritizeUserDiscounts: c === j.AW.HOME,
              tab: c
            }, l);
            break;
          case a.z.WIDE_BANNER:
            d = (0, r.jsx)(y.Z, {
              handleTransition: n,
              wideBannerBlock: e,
              tab: c
            }, l);
            break;
          case a.z.SHELF:
            d = (0, r.jsx)(O.Z, {
              handleTransition: n,
              shelf: e,
              tab: c
            }, l);
            break;
          case a.z.COUNTDOWN_TIMER:
            d = (0, r.jsx)(m.J, {
              countdownTimerBlock: e,
              isVisible: T,
              isFullScreen: u
            }, l), f = true;
            break;
          case a.z.IMMERSIVE_BANNER:
            d = (0, r.jsx)(S.Z, {
              immersiveBannerBlock: e,
              onVisibilityChange: e => I(!e)
            }, l);
            break;
          default:
            return null
        }
        return (0, r.jsx)(g.g6, {
          blockType: e.type,
          children: (0, r.jsx)("div", {
            className: s()(k.blockContainer, k.feedContent, {
              [k.skipPadding]: 0 === l || f
            }),
            children: d
          }, l)
        })
      })(e, t > 0 ? R[t - 1] : null, t))
    })
  },
  B = e => {
    let {
      isFullScreen: t,
      handleTransition: n,
      tab: i,
      transitionState: s
    } = e, a = l.useRef(null), {
      handleScroll: g
    } = (0, c.z)(a, i), f = (0, h.R)(), p = (0, d.sp)(), [C, _] = l.useState(j.IV), [m, b] = l.useState(false);
    return l.useEffect(() => {
      if (null != a.current) {
        let e = () => {
            if (null == a.current) return;
            let e = a.current.getDistanceFromBottom();
            C >= 36 ? b(e < 20) : e <= 200 && _(e => e + j.IV)
          },
          t = a.current.getScrollerNode();
        return null == t || t.addEventListener("scroll", e), () => {
          null == t || t.removeEventListener("scroll", e)
        }
      }
    }, [a, C, _, b]), (0, r.jsx)(o.Den, {
      className: k.shopScroll,
      ref: a,
      onScroll: g,
      children: (0, r.jsxs)("div", {
        className: k.shop,
        children: [(0, r.jsxs)("div", {
          className: k.mainContent,
          children: [(0, r.jsx)(I, {
            handleTransition: n,
            numVisibleItems: C,
            isFetchingCategories: f,
            tab: i,
            isFullScreen: t
          }), i !== j.AW.CATALOG && C >= 36 && (0, r.jsxs)("div", {
            className: k.endOfFeed,
            children: [(0, r.jsx)(o.Heading, {
              variant: "heading-md/semibold",
              children: L.intl.string(L.t.Yr70c3)
            }), (0, r.jsx)(o.Button, {
              variant: "primary",
              text: L.intl.string(L.t.AfrvRE),
              onClick: () => {
                n("shop all button", true, true), u.default.track(T.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == p ? true : p.sessionId,
                  page_type: i,
                  page_category: i === j.AW.HOME || null == p ? true : p.pageCategory,
                  cta_name: "browse the shop button"
                })
              },
              fullWidth: true
            })]
          })]
        }), !t && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(x.Z, {
            peaking: m,
            transitioning: s === j.f7.OUT
          }), (0, r.jsx)(x.Z, {
            style: {
              left: 1850
            },
            peaking: m,
            transitioning: s === j.f7.OUT
          })]
        })]
      })
    })
  }