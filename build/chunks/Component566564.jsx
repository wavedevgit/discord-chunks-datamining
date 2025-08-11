/** Chunk was on 45620 **/
/** chunk id: 566564, original params: e,t,n (module,exports,require) **/
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
      handleTransition: n,
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
      fetchShopHomeError: w,
      shopBlocks: A,
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
        null != w || N || 0 === A.length || (0, f.n)({
          sessionId: I,
          checkpoint: f.a.SHOP_RENDERED,
          tab: c,
          isFullScreen: u,
          unpublishedCategoriesShown: h,
          cacheDisabled: p
        })
      }, [w, N, A.length, h, p, I, c, u]), null != w) return (0, r.jsx)(b.Z, {
      onRetry: R,
      errorOrigin: b.i.SHOP_PAGE,
      errorMessage: w.message
    });
    if (N || 0 === A.length) return (0, r.jsxs)("div", {
      className: i()(L.loadingContainer, L.feedContent),
      children: [(0, r.jsx)(C.Z, {
        isLoading: N,
        handleTransition: n,
        tab: c
      }), (0, r.jsx)(v.Z, {
        isLoading: N,
        handleTransition: n,
        categories: []
      }), (0, r.jsx)(O.Z, {
        isLoading: N,
        title: c === j.AW.ORBS ? P.intl.string(P.t.dFgeub) : P.intl.string(P.t.NSv5KS),
        numVisibleItems: a,
        hasSorting: c === j.AW.HOME,
        tab: c
      })]
    });
    let Z = (e, t) => {
      if (null == e) return null;
      let l = null,
        d = false;
      switch (e.type) {
        case o.z.HERO:
          l = (0, r.jsx)(C.Z, {
            isLoading: N,
            handleTransition: n,
            heroBlock: e,
            tab: c
          }, t);
          break;
        case o.z.FEATURED:
          l = (0, r.jsx)(v.Z, {
            isLoading: N,
            handleTransition: n,
            featuredBlockRecord: e
          }, t);
          break;
        case o.z.FEED:
          let p = e.sortedSkuIds;
          l = (0, r.jsx)(O.Z, {
            title: c === j.AW.ORBS ? P.intl.string(P.t.dFgeub) : P.intl.string(P.t.NSv5KS),
            isLoading: N || s,
            numVisibleItems: a,
            sortedSkuIds: p,
            hasSorting: c === j.AW.HOME,
            tab: c
          }, t);
          break;
        case o.z.WIDE_BANNER:
          l = (0, r.jsx)(x.Z, {
            handleTransition: n,
            wideBannerBlock: e,
            tab: c
          }, t);
          break;
        case o.z.SHELF:
          l = (0, r.jsx)(S.Z, {
            handleTransition: n,
            shelf: e,
            tab: c
          }, t);
          break;
        case o.z.COUNTDOWN_TIMER:
          l = (0, r.jsx)(_.J, {
            countdownTimerBlock: e,
            isVisible: y,
            isFullScreen: u
          }, t), d = true;
          break;
        case o.z.IMMERSIVE_BANNER:
          l = (0, r.jsx)(E.Z, {
            immersiveBannerBlock: e,
            onVisibilityChange: e => T(!e)
          }, t);
          break;
        default:
          return null
      }
      return (0, r.jsx)("div", {
        className: i()(L.blockContainer, L.feedContent, {
          [L.skipPadding]: 0 === t || d
        }),
        children: l
      }, t)
    };
    return (0, r.jsx)(r.Fragment, {
      children: A.map((e, t) => Z(e, t))
    })
  },
  I = e => {
    let {
      isFullScreen: t,
      handleTransition: n,
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
    }, [o, _, f, v, C]), (0, r.jsx)(s.Den, {
      className: L.shopScroll,
      ref: o,
      onScroll: g,
      children: (0, r.jsxs)("div", {
        className: L.shop,
        children: [(0, r.jsxs)("div", {
          className: L.mainContent,
          children: [(0, r.jsx)(k, {
            handleTransition: n,
            numVisibleItems: _,
            isFetchingCategories: b,
            tab: a,
            isFullScreen: t
          }), a !== j.AW.CATALOG && _ >= f && (0, r.jsxs)("div", {
            className: L.endOfFeed,
            children: [(0, r.jsx)(s.X6q, {
              variant: "heading-md/semibold",
              children: P.intl.string(P.t.Yr70c3)
            }), (0, r.jsx)(s.zxk, {
              variant: "primary",
              text: P.intl.string(P.t.AfrvRE),
              onClick: () => {
                n("shop all button", true, true), u.default.track(T.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == m ? true : m.sessionId,
                  page_type: a,
                  page_category: a === j.AW.HOME || null == m ? true : m.pageCategory,
                  cta_name: "browse the shop button"
                })
              },
              fullWidth: true
            })]
          })]
        }), !t && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(y.Z, {
            peaking: O,
            transitioning: i === j.f7.OUT
          }), (0, r.jsx)(y.Z, {
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