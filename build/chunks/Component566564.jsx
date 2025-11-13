/** Chunk was on 45620 **/
/** chunk id: 566564, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => P
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
let B = e => {
    var t;
    let {
      handleTransition: n,
      numVisibleItems: i,
      isFetchingCategories: s,
      tab: c
    } = e, {
      noCache: u,
      includeUnpublished: C
    } = (0, m.Z)(), [y, I] = l.useState(false), B = (0, d.sp)(), P = null != (t = null == B ? true : B.sessionId) ? t : "";
    l.useEffect(() => {
      (0, f.n)({
        sessionId: P,
        checkpoint: f.a.SHOP_MOUNTED,
        tab: c,
        unpublishedCategoriesShown: C,
        cacheDisabled: u
      })
    }, [c]);
    let {
      isFetchingShopHome: A,
      fetchShopHomeError: N,
      shopBlocks: R,
      refreshShopHome: Z
    } = (0, g.E)(c, {
      noCache: u,
      includeUnpublished: C,
      includeBundles: true,
      logPerf: true
    }, {
      sessionId: P,
      tab: c
    }), w = l.useCallback(() => {
      Z()
    }, [Z]);
    return (l.useEffect(() => {
      null != N || A || 0 === R.length || (0, f.n)({
        sessionId: P,
        checkpoint: f.a.SHOP_RENDERED,
        tab: c,
        unpublishedCategoriesShown: C,
        cacheDisabled: u
      })
    }, [N, A, R.length, C, u, P, c]), null != N) ? (0, r.jsx)(h.Z, {
      onRetry: w,
      errorOrigin: h.i.SHOP_PAGE,
      errorMessage: N.message
    }) : A || 0 === R.length ? (0, r.jsxs)("div", {
      className: a()(L.loadingContainer, L.feedContent),
      children: [(0, r.jsx)(x.Z, {
        isLoading: A,
        handleTransition: n,
        tab: c
      }), (0, r.jsx)(b.Z, {
        isLoading: A,
        handleTransition: n,
        categories: []
      }), (0, r.jsx)(v.Z, {
        isLoading: A,
        title: c === k.AW.ORBS ? T.intl.string(T.t.dFgeuZ) : T.intl.string(T.t.NSv5KV),
        numVisibleItems: i,
        tab: c
      })]
    }) : (0, r.jsx)(r.Fragment, {
      children: R.map((e, t) => ((e, t, l) => {
        if (null == e) return null;
        let u = null,
          d = false;
        switch (e.type) {
          case o.z.HERO:
            u = (0, r.jsx)(x.Z, {
              isLoading: A,
              handleTransition: n,
              heroBlock: e,
              tab: c
            }, l);
            break;
          case o.z.FEATURED:
            u = (0, r.jsx)(b.Z, {
              isLoading: A,
              handleTransition: n,
              featuredBlockRecord: e
            }, l);
            break;
          case o.z.FEED:
            let g = e.sortedSkuIds;
            u = (0, r.jsx)(v.Z, {
              title: c === k.AW.ORBS ? T.intl.string(T.t.dFgeuZ) : T.intl.string(T.t.NSv5KV),
              isLoading: A || s,
              numVisibleItems: i,
              sortedSkuIds: g,
              buttonContainerClassName: (null == t ? true : t.type) === o.z.IMMERSIVE_BANNER ? L.feedblockInteractiveBackground : true,
              prioritizeUserDiscounts: c === k.AW.HOME,
              tab: c,
              orbsSupportedOnly: c === k.AW.ORBS
            }, l);
            break;
          case o.z.WIDE_BANNER:
            u = (0, r.jsx)(j.Z, {
              handleTransition: n,
              wideBannerBlock: e,
              tab: c
            }, l);
            break;
          case o.z.SHELF:
            u = (0, r.jsx)(O.Z, {
              handleTransition: n,
              shelf: e,
              tab: c
            }, l);
            break;
          case o.z.COUNTDOWN_TIMER:
            u = (0, r.jsx)(_.J, {
              countdownTimerBlock: e,
              isVisible: y
            }, l), d = true;
            break;
          case o.z.IMMERSIVE_BANNER:
            u = (0, r.jsx)(E.Z, {
              immersiveBannerBlock: e,
              onVisibilityChange: e => I(!e)
            }, l);
            break;
          case o.z.REWARD_HERO:
            u = (0, r.jsx)(S.Z, {
              isLoading: A,
              handleTransition: n,
              heroBlock: e,
              tab: c
            }, l);
            break;
          default:
            return null
        }
        return (0, r.jsx)(p.g6, {
          blockType: e.type,
          children: (0, r.jsx)("div", {
            className: a()(L.blockContainer, L.feedContent, {
              [L.skipPadding]: 0 === l || d
            }),
            children: u
          }, l)
        })
      })(e, t > 0 ? R[t - 1] : null, t))
    })
  },
  P = e => {
    let {
      handleTransition: t,
      tab: n,
      transitionState: i
    } = e, a = l.useRef(null), {
      handleScroll: o
    } = (0, c.z)(a, n), p = (0, C.R)(), g = (0, d.sp)(), [f, h] = l.useState(k.IV), [m, _] = l.useState(false);
    return l.useEffect(() => {
      if (null != a.current) {
        let e = () => {
            if (null == a.current) return;
            let e = a.current.getDistanceFromBottom();
            f >= 36 ? _(e < 20) : e <= 200 && h(e => e + k.IV)
          },
          t = a.current.getScrollerNode();
        return null == t || t.addEventListener("scroll", e), () => {
          null == t || t.removeEventListener("scroll", e)
        }
      }
    }, [a, f, h, _]), (0, r.jsx)(s.Den, {
      className: L.shopScroll,
      ref: a,
      onScroll: o,
      children: (0, r.jsxs)("div", {
        className: L.shop,
        children: [(0, r.jsxs)("div", {
          className: L.mainContent,
          children: [(0, r.jsx)(B, {
            handleTransition: t,
            numVisibleItems: f,
            isFetchingCategories: p,
            tab: n
          }), n !== k.AW.CATALOG && f >= 36 && (0, r.jsxs)("div", {
            className: L.endOfFeed,
            children: [(0, r.jsx)(s.Heading, {
              variant: "heading-md/semibold",
              children: T.intl.string(T.t.Yr70c4)
            }), (0, r.jsx)(s.Button, {
              variant: "primary",
              text: T.intl.string(T.t.AfrvRD),
              onClick: () => {
                t({
                  sourceButton: "shop all button",
                  shouldAnimate: true
                }), u.default.track(I.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == g ? true : g.sessionId,
                  page_type: n,
                  page_category: n === k.AW.HOME || null == g ? true : g.pageCategory,
                  cta_name: "browse the shop button"
                })
              },
              fullWidth: true
            })]
          })]
        }), (0, r.jsx)(y.Z, {
          peaking: m,
          transitioning: i === k.f7.OUT
        }), (0, r.jsx)(y.Z, {
          style: {
            left: 1850
          },
          peaking: m,
          transitioning: i === k.f7.OUT
        })]
      })
    })
  }