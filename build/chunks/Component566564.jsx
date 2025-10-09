/** Chunk was on 45620 **/
/** chunk id: 566564, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
      numVisibleItems: s,
      isFetchingCategories: o,
      tab: c,
      isFullScreen: u
    } = e, {
      noCache: h,
      includeUnpublished: O
    } = (0, _.Z)(), [j, I] = l.useState(false), P = (0, d.sp)(), N = null != (t = null == P ? true : P.sessionId) ? t : "";
    l.useEffect(() => {
      (0, p.n)({
        sessionId: N,
        checkpoint: p.a.SHOP_MOUNTED,
        tab: c,
        isFullScreen: u,
        unpublishedCategoriesShown: O,
        cacheDisabled: h
      })
    }, [c]);
    let {
      isFetchingShopHome: B,
      fetchShopHomeError: A,
      shopBlocks: R,
      refreshShopHome: Z
    } = (0, f.E)(c, {
      noCache: h,
      includeUnpublished: O,
      includeBundles: true,
      logPerf: true
    }, {
      sessionId: N,
      tab: c,
      isFullScreen: u
    }), w = l.useCallback(() => {
      Z()
    }, [Z]);
    return (l.useEffect(() => {
      null != A || B || 0 === R.length || (0, p.n)({
        sessionId: N,
        checkpoint: p.a.SHOP_RENDERED,
        tab: c,
        isFullScreen: u,
        unpublishedCategoriesShown: O,
        cacheDisabled: h
      })
    }, [A, B, R.length, O, h, N, c, u]), null != A) ? (0, r.jsx)(C.Z, {
      onRetry: w,
      errorOrigin: C.i.SHOP_PAGE,
      errorMessage: A.message
    }) : B || 0 === R.length ? (0, r.jsxs)("div", {
      className: i()(L.loadingContainer, L.feedContent),
      children: [(0, r.jsx)(v.Z, {
        isLoading: B,
        handleTransition: n,
        tab: c
      }), (0, r.jsx)(b.Z, {
        isLoading: B,
        handleTransition: n,
        categories: []
      }), (0, r.jsx)(E.Z, {
        isLoading: B,
        title: c === T.AW.ORBS ? k.intl.string(k.t.dFgeub) : k.intl.string(k.t.NSv5KS),
        numVisibleItems: s,
        hasSorting: c === T.AW.HOME,
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
              isLoading: B,
              handleTransition: n,
              heroBlock: e,
              tab: c
            }, l);
            break;
          case a.z.FEATURED:
            d = (0, r.jsx)(b.Z, {
              isLoading: B,
              handleTransition: n,
              featuredBlockRecord: e
            }, l);
            break;
          case a.z.FEED:
            let p = e.sortedSkuIds;
            d = (0, r.jsx)(E.Z, {
              title: c === T.AW.ORBS ? k.intl.string(k.t.dFgeub) : k.intl.string(k.t.NSv5KS),
              isLoading: B || o,
              numVisibleItems: s,
              sortedSkuIds: p,
              buttonContainerClassName: (null == t ? true : t.type) === a.z.IMMERSIVE_BANNER ? L.feedblockInteractiveBackground : true,
              hasSorting: c === T.AW.HOME,
              prioritizeUserDiscounts: c === T.AW.HOME,
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
            d = (0, r.jsx)(x.Z, {
              handleTransition: n,
              shelf: e,
              tab: c
            }, l);
            break;
          case a.z.COUNTDOWN_TIMER:
            d = (0, r.jsx)(m.J, {
              countdownTimerBlock: e,
              isVisible: j,
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
            className: i()(L.blockContainer, L.feedContent, {
              [L.skipPadding]: 0 === l || f
            }),
            children: d
          }, l)
        })
      })(e, t > 0 ? R[t - 1] : null, t))
    })
  },
  P = e => {
    let {
      isFullScreen: t,
      handleTransition: n,
      tab: s,
      transitionState: i
    } = e, a = l.useRef(null), {
      handleScroll: g
    } = (0, c.z)(a, s), f = (0, h.R)(), p = (0, d.sp)(), [C, _] = l.useState(T.IV), [m, b] = l.useState(false);
    return l.useEffect(() => {
      if (null != a.current) {
        let e = () => {
            if (null == a.current) return;
            let e = a.current.getDistanceFromBottom();
            C >= 36 ? b(e < 20) : e <= 200 && _(e => e + T.IV)
          },
          t = a.current.getScrollerNode();
        return null == t || t.addEventListener("scroll", e), () => {
          null == t || t.removeEventListener("scroll", e)
        }
      }
    }, [a, C, _, b]), (0, r.jsx)(o.Den, {
      className: L.shopScroll,
      ref: a,
      onScroll: g,
      children: (0, r.jsxs)("div", {
        className: L.shop,
        children: [(0, r.jsxs)("div", {
          className: L.mainContent,
          children: [(0, r.jsx)(I, {
            handleTransition: n,
            numVisibleItems: C,
            isFetchingCategories: f,
            tab: s,
            isFullScreen: t
          }), s !== T.AW.CATALOG && C >= 36 && (0, r.jsxs)("div", {
            className: L.endOfFeed,
            children: [(0, r.jsx)(o.X6q, {
              variant: "heading-md/semibold",
              children: k.intl.string(k.t.Yr70c3)
            }), (0, r.jsx)(o.zxk, {
              variant: "primary",
              text: k.intl.string(k.t.AfrvRE),
              onClick: () => {
                n("shop all button", true, true), u.default.track(j.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == p ? true : p.sessionId,
                  page_type: s,
                  page_category: s === T.AW.HOME || null == p ? true : p.pageCategory,
                  cta_name: "browse the shop button"
                })
              },
              fullWidth: true
            })]
          })]
        }), !t && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(O.Z, {
            peaking: m,
            transitioning: i === T.f7.OUT
          }), (0, r.jsx)(O.Z, {
            style: {
              left: 1850
            },
            peaking: m,
            transitioning: i === T.f7.OUT
          })]
        })]
      })
    })
  }