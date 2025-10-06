/** Chunk was on 45620 **/
/** chunk id: 566564, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => P
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
      numVisibleItems: a,
      isFetchingCategories: o,
      tab: c,
      isFullScreen: u
    } = e, {
      noCache: h,
      includeUnpublished: O
    } = (0, _.Z)(), [j, I] = l.useState(false), P = (0, d.sp)(), N = null != (t = null == P ? true : P.sessionId) ? t : "";
    l.useEffect(() => {
      (0, f.n)({
        sessionId: N,
        checkpoint: f.a.SHOP_MOUNTED,
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
    } = (0, p.E)(c, {
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
      null != A || B || 0 === R.length || (0, f.n)({
        sessionId: N,
        checkpoint: f.a.SHOP_RENDERED,
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
      className: s()(k.loadingContainer, k.feedContent),
      children: [(0, r.jsx)(S.Z, {
        isLoading: B,
        handleTransition: n,
        tab: c
      }), (0, r.jsx)(b.Z, {
        isLoading: B,
        handleTransition: n,
        categories: []
      }), (0, r.jsx)(E.Z, {
        isLoading: B,
        title: c === y.AW.ORBS ? L.intl.string(L.t.dFgeub) : L.intl.string(L.t.NSv5KS),
        numVisibleItems: a,
        hasSorting: c === y.AW.HOME,
        tab: c
      })]
    }) : (0, r.jsx)(r.Fragment, {
      children: R.map((e, t) => ((e, t, l) => {
        if (null == e) return null;
        let d = null,
          p = false;
        switch (e.type) {
          case i.z.HERO:
            d = (0, r.jsx)(S.Z, {
              isLoading: B,
              handleTransition: n,
              heroBlock: e,
              tab: c
            }, l);
            break;
          case i.z.FEATURED:
            d = (0, r.jsx)(b.Z, {
              isLoading: B,
              handleTransition: n,
              featuredBlockRecord: e
            }, l);
            break;
          case i.z.FEED:
            let f = e.sortedSkuIds;
            d = (0, r.jsx)(E.Z, {
              title: c === y.AW.ORBS ? L.intl.string(L.t.dFgeub) : L.intl.string(L.t.NSv5KS),
              isLoading: B || o,
              numVisibleItems: a,
              sortedSkuIds: f,
              buttonContainerClassName: (null == t ? true : t.type) === i.z.IMMERSIVE_BANNER ? k.feedblockInteractiveBackground : true,
              hasSorting: c === y.AW.HOME,
              prioritizeUserDiscounts: c === y.AW.HOME,
              tab: c
            }, l);
            break;
          case i.z.WIDE_BANNER:
            d = (0, r.jsx)(T.Z, {
              handleTransition: n,
              wideBannerBlock: e,
              tab: c
            }, l);
            break;
          case i.z.SHELF:
            d = (0, r.jsx)(x.Z, {
              handleTransition: n,
              shelf: e,
              tab: c
            }, l);
            break;
          case i.z.COUNTDOWN_TIMER:
            d = (0, r.jsx)(m.J, {
              countdownTimerBlock: e,
              isVisible: j,
              isFullScreen: u
            }, l), p = true;
            break;
          case i.z.IMMERSIVE_BANNER:
            d = (0, r.jsx)(v.Z, {
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
              [k.skipPadding]: 0 === l || p
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
      tab: a,
      transitionState: s
    } = e, i = l.useRef(null), {
      handleScroll: g
    } = (0, c.z)(i, a), p = (0, h.R)(), f = (0, d.sp)(), [C, _] = l.useState(y.IV), [m, b] = l.useState(false);
    return l.useEffect(() => {
      if (null != i.current) {
        let e = () => {
            if (null == i.current) return;
            let e = i.current.getDistanceFromBottom();
            C >= 36 ? b(e < 20) : e <= 200 && _(e => e + y.IV)
          },
          t = i.current.getScrollerNode();
        return null == t || t.addEventListener("scroll", e), () => {
          null == t || t.removeEventListener("scroll", e)
        }
      }
    }, [i, C, _, b]), (0, r.jsx)(o.Den, {
      className: k.shopScroll,
      ref: i,
      onScroll: g,
      children: (0, r.jsxs)("div", {
        className: k.shop,
        children: [(0, r.jsxs)("div", {
          className: k.mainContent,
          children: [(0, r.jsx)(I, {
            handleTransition: n,
            numVisibleItems: C,
            isFetchingCategories: p,
            tab: a,
            isFullScreen: t
          }), a !== y.AW.CATALOG && C >= 36 && (0, r.jsxs)("div", {
            className: k.endOfFeed,
            children: [(0, r.jsx)(o.X6q, {
              variant: "heading-md/semibold",
              children: L.intl.string(L.t.Yr70c3)
            }), (0, r.jsx)(o.zxk, {
              variant: "primary",
              text: L.intl.string(L.t.AfrvRE),
              onClick: () => {
                n("shop all button", true, true), u.default.track(j.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == f ? true : f.sessionId,
                  page_type: a,
                  page_category: a === y.AW.HOME || null == f ? true : f.pageCategory,
                  cta_name: "browse the shop button"
                })
              },
              fullWidth: true
            })]
          })]
        }), !t && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(O.Z, {
            peaking: m,
            transitioning: s === y.f7.OUT
          }), (0, r.jsx)(O.Z, {
            style: {
              left: 1850
            },
            peaking: m,
            transitioning: s === y.f7.OUT
          })]
        })]
      })
    })
  }