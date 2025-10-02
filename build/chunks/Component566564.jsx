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
  Chunk687983 = require("./687983.js");
let I = e => {
    var t;
    let {
      handleTransition: n,
      numVisibleItems: a,
      isFetchingCategories: o,
      tab: c,
      isFullScreen: u
    } = e, {
      noCache: _,
      includeUnpublished: O
    } = (0, h.Z)(), [L, I] = l.useState(false), P = (0, d.sp)(), N = null != (t = null == P ? true : P.sessionId) ? t : "";
    l.useEffect(() => {
      (0, f.n)({
        sessionId: N,
        checkpoint: f.a.SHOP_MOUNTED,
        tab: c,
        isFullScreen: u,
        unpublishedCategoriesShown: O,
        cacheDisabled: _
      })
    }, [c]);
    let {
      isFetchingShopHome: A,
      fetchShopHomeError: B,
      shopBlocks: R,
      refreshShopHome: Z
    } = (0, p.E)(c, {
      noCache: _,
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
      null != B || A || 0 === R.length || (0, f.n)({
        sessionId: N,
        checkpoint: f.a.SHOP_RENDERED,
        tab: c,
        isFullScreen: u,
        unpublishedCategoriesShown: O,
        cacheDisabled: _
      })
    }, [B, A, R.length, O, _, N, c, u]), null != B) ? (0, r.jsx)(C.Z, {
      onRetry: w,
      errorOrigin: C.i.SHOP_PAGE,
      errorMessage: B.message
    }) : A || 0 === R.length ? (0, r.jsxs)("div", {
      className: i()(k.loadingContainer, k.feedContent),
      children: [(0, r.jsx)(v.Z, {
        isLoading: A,
        handleTransition: n,
        tab: c
      }), (0, r.jsx)(b.Z, {
        isLoading: A,
        handleTransition: n,
        categories: []
      }), (0, r.jsx)(E.Z, {
        isLoading: A,
        title: c === y.AW.ORBS ? j.intl.string(j.t.dFgeub) : j.intl.string(j.t.NSv5KS),
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
          case s.z.HERO:
            d = (0, r.jsx)(v.Z, {
              isLoading: A,
              handleTransition: n,
              heroBlock: e,
              tab: c
            }, l);
            break;
          case s.z.FEATURED:
            d = (0, r.jsx)(b.Z, {
              isLoading: A,
              handleTransition: n,
              featuredBlockRecord: e
            }, l);
            break;
          case s.z.FEED:
            let f = e.sortedSkuIds;
            d = (0, r.jsx)(E.Z, {
              title: c === y.AW.ORBS ? j.intl.string(j.t.dFgeub) : j.intl.string(j.t.NSv5KS),
              isLoading: A || o,
              numVisibleItems: a,
              sortedSkuIds: f,
              buttonContainerClassName: (null == t ? true : t.type) === s.z.IMMERSIVE_BANNER ? k.feedblockInteractiveBackground : true,
              hasSorting: c === y.AW.HOME,
              prioritizeUserDiscounts: c === y.AW.HOME,
              tab: c
            }, l);
            break;
          case s.z.WIDE_BANNER:
            d = (0, r.jsx)(T.Z, {
              handleTransition: n,
              wideBannerBlock: e,
              tab: c
            }, l);
            break;
          case s.z.SHELF:
            d = (0, r.jsx)(x.Z, {
              handleTransition: n,
              shelf: e,
              tab: c
            }, l);
            break;
          case s.z.COUNTDOWN_TIMER:
            d = (0, r.jsx)(m.J, {
              countdownTimerBlock: e,
              isVisible: L,
              isFullScreen: u
            }, l), p = true;
            break;
          case s.z.IMMERSIVE_BANNER:
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
            className: i()(k.blockContainer, k.feedContent, {
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
      transitionState: i
    } = e, s = l.useRef(null), {
      handleScroll: g
    } = (0, c.z)(s, a), p = (0, _.R)(), f = (0, d.sp)(), [C, h] = l.useState(y.IV), [m, b] = l.useState(false);
    return l.useEffect(() => {
      if (null != s.current) {
        let e = () => {
            if (null == s.current) return;
            let e = s.current.getDistanceFromBottom();
            C >= 36 ? b(e < 20) : e <= 200 && h(e => e + y.IV)
          },
          t = s.current.getScrollerNode();
        return null == t || t.addEventListener("scroll", e), () => {
          null == t || t.removeEventListener("scroll", e)
        }
      }
    }, [s, C, h, b]), (0, r.jsx)(o.Den, {
      className: k.shopScroll,
      ref: s,
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
              children: j.intl.string(j.t.Yr70c3)
            }), (0, r.jsx)(o.zxk, {
              variant: "primary",
              text: j.intl.string(j.t.AfrvRE),
              onClick: () => {
                n("shop all button", true, true), u.default.track(L.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            transitioning: i === y.f7.OUT
          }), (0, r.jsx)(O.Z, {
            style: {
              left: 1850
            },
            peaking: m,
            transitioning: i === y.f7.OUT
          })]
        })]
      })
    })
  }