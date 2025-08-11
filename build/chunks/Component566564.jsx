/** Chunk was on 45620 **/
/** chunk id: 566564, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk685816 = require("./685816.js"),
  Chunk481060 = require("./481060.js"),
  Chunk702486 = require("./702486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk139668 = require("./139668.js"),
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
  Chunk921120 = require("./921120.jsx"),
  Chunk384067 = require("./384067.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk806734 = require("./806734.js");
let k = e => {
    var t;
    let {
      handleTransition: r,
      numVisibleItems: a,
      isFetchingCategories: s,
      tab: c,
      isFullScreen: u
    } = e, {
      noCache: p,
      includeUnpublished: h
    } = (0, m.Z)(), [y, T] = l.useState(false), k = (0, d.sp)(), I = null != (t = null == k ? true : k.sessionId) ? t : "";
    l.useEffect(() => {
      (0, f.n)({
        sessionId: I,
        checkpoint: f.a.SHOP_MOUNTED,
        tab: c,
        isFullScreen: u,
        unpublishedCategoriesShown: h,
        cacheDisabled: p
      })
    }, [c]);
    let {
      isFetchingShopHome: N,
      fetchShopHomeError: A,
      shopBlocks: w,
      refreshShopHome: B
    } = (0, g.E)(c, {
      noCache: p,
      includeUnpublished: h,
      includeBundles: true,
      logPerf: true
    }, {
      sessionId: I,
      tab: c,
      isFullScreen: u
    }), R = l.useCallback(() => {
      B()
    }, [B]);
    if (l.useEffect(() => {
        null != A || N || 0 === w.length || (0, f.n)({
          sessionId: I,
          checkpoint: f.a.SHOP_RENDERED,
          tab: c,
          isFullScreen: u,
          unpublishedCategoriesShown: h,
          cacheDisabled: p
        })
      }, [A, N, w.length, h, p, I, c, u]), null != A) return (0, n.jsx)(b.Z, {
      onRetry: R,
      errorOrigin: b.i.SHOP_PAGE,
      errorMessage: A.message
    });
    if (N || 0 === w.length) return (0, n.jsxs)("div", {
      className: i()(L.loadingContainer, L.feedContent),
      children: [(0, n.jsx)(C.Z, {
        isLoading: N,
        handleTransition: r,
        tab: c
      }), (0, n.jsx)(v.Z, {
        isLoading: N,
        handleTransition: r,
        categories: []
      }), (0, n.jsx)(O.Z, {
        isLoading: N,
        title: c === j.AW.ORBS ? P.intl.string(P.t.dFgeub) : P.intl.string(P.t.NSv5KS),
        numVisibleItems: a,
        hasSorting: c === j.AW.HOME,
        tab: c
      })]
    });
    let Z = (e, t, l) => {
      if (null == e) return null;
      let d = null,
        p = false;
      switch (e.type) {
        case o.z.HERO:
          d = (0, n.jsx)(C.Z, {
            isLoading: N,
            handleTransition: r,
            heroBlock: e,
            tab: c
          }, l);
          break;
        case o.z.FEATURED:
          d = (0, n.jsx)(v.Z, {
            isLoading: N,
            handleTransition: r,
            featuredBlockRecord: e
          }, l);
          break;
        case o.z.FEED:
          let g = e.sortedSkuIds;
          d = (0, n.jsx)(O.Z, {
            title: c === j.AW.ORBS ? P.intl.string(P.t.dFgeub) : P.intl.string(P.t.NSv5KS),
            isLoading: N || s,
            numVisibleItems: a,
            sortedSkuIds: g,
            buttonContainerClassName: (null == t ? true : t.type) === o.z.IMMERSIVE_BANNER ? L.feedblockInteractiveBackground : true,
            hasSorting: c === j.AW.HOME,
            tab: c
          }, l);
          break;
        case o.z.WIDE_BANNER:
          d = (0, n.jsx)(x.Z, {
            handleTransition: r,
            wideBannerBlock: e,
            tab: c
          }, l);
          break;
        case o.z.SHELF:
          d = (0, n.jsx)(S.Z, {
            handleTransition: r,
            shelf: e,
            tab: c
          }, l);
          break;
        case o.z.COUNTDOWN_TIMER:
          d = (0, n.jsx)(_.J, {
            countdownTimerBlock: e,
            isVisible: y,
            isFullScreen: u
          }, l), p = true;
          break;
        case o.z.IMMERSIVE_BANNER:
          d = (0, n.jsx)(E.Z, {
            immersiveBannerBlock: e,
            onVisibilityChange: e => T(!e)
          }, l);
          break;
        default:
          return null
      }
      return (0, n.jsx)("div", {
        className: i()(L.blockContainer, L.feedContent, {
          [L.skipPadding]: 0 === l || p
        }),
        children: d
      }, l)
    };
    return (0, n.jsx)(n.Fragment, {
      children: w.map((e, t) => Z(e, t > 0 ? w[t - 1] : null, t))
    })
  },
  I = e => {
    let {
      isFullScreen: t,
      handleTransition: r,
      tab: a,
      transitionState: i
    } = e, o = l.useRef(null), {
      handleScroll: g
    } = (0, c.z)(o, a), f = (0, p.R)("CollectiblesFeedShop"), b = (0, h.R)(), m = (0, d.sp)(), [_, v] = l.useState(j.IV), [O, C] = l.useState(false);
    return l.useEffect(() => {
      if (null != o.current) {
        let e = () => {
            if (null == o.current) return;
            let e = o.current.getDistanceFromBottom();
            _ >= f ? C(e < 20) : e <= 200 && v(e => e + j.IV)
          },
          t = o.current.getScrollerNode();
        return null == t || t.addEventListener("scroll", e), () => {
          null == t || t.removeEventListener("scroll", e)
        }
      }
    }, [o, _, f, v, C]), (0, n.jsx)(s.Den, {
      className: L.shopScroll,
      ref: o,
      onScroll: g,
      children: (0, n.jsxs)("div", {
        className: L.shop,
        children: [(0, n.jsxs)("div", {
          className: L.mainContent,
          children: [(0, n.jsx)(k, {
            handleTransition: r,
            numVisibleItems: _,
            isFetchingCategories: b,
            tab: a,
            isFullScreen: t
          }), a !== j.AW.CATALOG && _ >= f && (0, n.jsxs)("div", {
            className: L.endOfFeed,
            children: [(0, n.jsx)(s.X6q, {
              variant: "heading-md/semibold",
              children: P.intl.string(P.t.Yr70c3)
            }), (0, n.jsx)(s.zxk, {
              variant: "primary",
              text: P.intl.string(P.t.AfrvRE),
              onClick: () => {
                r("shop all button", true, true), u.default.track(T.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == m ? true : m.sessionId,
                  page_type: a,
                  page_category: a === j.AW.HOME || null == m ? true : m.pageCategory,
                  cta_name: "browse the shop button"
                })
              },
              fullWidth: true
            })]
          })]
        }), !t && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(y.Z, {
            peaking: O,
            transitioning: i === j.f7.OUT
          }), (0, n.jsx)(y.Z, {
            style: {
              left: 1850
            },
            peaking: O,
            transitioning: i === j.f7.OUT
          })]
        })]
      })
    })
  }