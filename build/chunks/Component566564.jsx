/** Chunk was on 45620 **/
/** chunk id: 566564, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => N
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
      noCache: g,
      includeUnpublished: _
    } = (0, h.Z)(), [x, L] = l.useState(false), I = (0, d.sp)(), N = null != (t = null == I ? true : I.sessionId) ? t : "";
    l.useEffect(() => {
      (0, f.n)({
        sessionId: N,
        checkpoint: f.a.SHOP_MOUNTED,
        tab: c,
        isFullScreen: u,
        unpublishedCategoriesShown: _,
        cacheDisabled: g
      })
    }, [c]);
    let {
      isFetchingShopHome: B,
      fetchShopHomeError: P,
      shopBlocks: A,
      refreshShopHome: R
    } = (0, p.E)(c, {
      noCache: g,
      includeUnpublished: _,
      includeBundles: true,
      logPerf: true
    }, {
      sessionId: N,
      tab: c,
      isFullScreen: u
    }), Z = l.useCallback(() => {
      R()
    }, [R]);
    return (l.useEffect(() => {
      null != P || B || 0 === A.length || (0, f.n)({
        sessionId: N,
        checkpoint: f.a.SHOP_RENDERED,
        tab: c,
        isFullScreen: u,
        unpublishedCategoriesShown: _,
        cacheDisabled: g
      })
    }, [P, B, A.length, _, g, N, c, u]), null != P) ? (0, r.jsx)(m.Z, {
      onRetry: Z,
      errorOrigin: m.i.SHOP_PAGE,
      errorMessage: P.message
    }) : B || 0 === A.length ? (0, r.jsxs)("div", {
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
        title: c === T.AW.ORBS ? j.intl.string(j.t.dFgeub) : j.intl.string(j.t.NSv5KS),
        numVisibleItems: a,
        hasSorting: c === T.AW.HOME,
        tab: c
      })]
    }) : (0, r.jsx)(r.Fragment, {
      children: A.map((e, t) => ((e, t, l) => {
        if (null == e) return null;
        let d = null,
          g = false;
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
            let p = e.sortedSkuIds;
            d = (0, r.jsx)(E.Z, {
              title: c === T.AW.ORBS ? j.intl.string(j.t.dFgeub) : j.intl.string(j.t.NSv5KS),
              isLoading: B || o,
              numVisibleItems: a,
              sortedSkuIds: p,
              buttonContainerClassName: (null == t ? true : t.type) === i.z.IMMERSIVE_BANNER ? k.feedblockInteractiveBackground : true,
              hasSorting: c === T.AW.HOME,
              prioritizeUserDiscounts: c === T.AW.HOME,
              tab: c
            }, l);
            break;
          case i.z.WIDE_BANNER:
            d = (0, r.jsx)(y.Z, {
              handleTransition: n,
              wideBannerBlock: e,
              tab: c
            }, l);
            break;
          case i.z.SHELF:
            d = (0, r.jsx)(v.Z, {
              handleTransition: n,
              shelf: e,
              tab: c
            }, l);
            break;
          case i.z.COUNTDOWN_TIMER:
            d = (0, r.jsx)(C.J, {
              countdownTimerBlock: e,
              isVisible: x,
              isFullScreen: u
            }, l), g = true;
            break;
          case i.z.IMMERSIVE_BANNER:
            d = (0, r.jsx)(O.Z, {
              immersiveBannerBlock: e,
              onVisibilityChange: e => L(!e)
            }, l);
            break;
          default:
            return null
        }
        return (0, r.jsx)("div", {
          className: s()(k.blockContainer, k.feedContent, {
            [k.skipPadding]: 0 === l || g
          }),
          children: d
        }, l)
      })(e, t > 0 ? A[t - 1] : null, t))
    })
  },
  N = e => {
    let {
      isFullScreen: t,
      handleTransition: n,
      tab: a,
      transitionState: s
    } = e, i = l.useRef(null), {
      handleScroll: p
    } = (0, c.z)(i, a), f = (0, g.R)("CollectiblesFeedShop"), m = (0, _.R)(), h = (0, d.sp)(), [C, b] = l.useState(T.IV), [E, S] = l.useState(false);
    return l.useEffect(() => {
      if (null != i.current) {
        let e = () => {
            if (null == i.current) return;
            let e = i.current.getDistanceFromBottom();
            C >= f ? S(e < 20) : e <= 200 && b(e => e + T.IV)
          },
          t = i.current.getScrollerNode();
        return null == t || t.addEventListener("scroll", e), () => {
          null == t || t.removeEventListener("scroll", e)
        }
      }
    }, [i, C, f, b, S]), (0, r.jsx)(o.Den, {
      className: k.shopScroll,
      ref: i,
      onScroll: p,
      children: (0, r.jsxs)("div", {
        className: k.shop,
        children: [(0, r.jsxs)("div", {
          className: k.mainContent,
          children: [(0, r.jsx)(I, {
            handleTransition: n,
            numVisibleItems: C,
            isFetchingCategories: m,
            tab: a,
            isFullScreen: t
          }), a !== T.AW.CATALOG && C >= f && (0, r.jsxs)("div", {
            className: k.endOfFeed,
            children: [(0, r.jsx)(o.X6q, {
              variant: "heading-md/semibold",
              children: j.intl.string(j.t.Yr70c3)
            }), (0, r.jsx)(o.zxk, {
              variant: "primary",
              text: j.intl.string(j.t.AfrvRE),
              onClick: () => {
                n("shop all button", true, true), u.default.track(L.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == h ? true : h.sessionId,
                  page_type: a,
                  page_category: a === T.AW.HOME || null == h ? true : h.pageCategory,
                  cta_name: "browse the shop button"
                })
              },
              fullWidth: true
            })]
          })]
        }), !t && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(x.Z, {
            peaking: E,
            transitioning: s === T.f7.OUT
          }), (0, r.jsx)(x.Z, {
            style: {
              left: 1850
            },
            peaking: E,
            transitioning: s === T.f7.OUT
          })]
        })]
      })
    })
  }