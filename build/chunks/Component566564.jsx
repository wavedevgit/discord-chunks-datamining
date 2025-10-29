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
let L = e => {
    var t;
    let {
      handleTransition: n,
      numVisibleItems: i,
      isFetchingCategories: o,
      tab: c
    } = e, {
      noCache: u,
      includeUnpublished: C
    } = (0, _.Z)(), [S, k] = l.useState(false), L = (0, d.sp)(), B = null != (t = null == L ? true : L.sessionId) ? t : "";
    l.useEffect(() => {
      (0, f.n)({
        sessionId: B,
        checkpoint: f.a.SHOP_MOUNTED,
        tab: c,
        unpublishedCategoriesShown: C,
        cacheDisabled: u
      })
    }, [c]);
    let {
      isFetchingShopHome: P,
      fetchShopHomeError: A,
      shopBlocks: N,
      refreshShopHome: R
    } = (0, p.E)(c, {
      noCache: u,
      includeUnpublished: C,
      includeBundles: true,
      logPerf: true
    }, {
      sessionId: B,
      tab: c
    }), Z = l.useCallback(() => {
      R()
    }, [R]);
    return (l.useEffect(() => {
      null != A || P || 0 === N.length || (0, f.n)({
        sessionId: B,
        checkpoint: f.a.SHOP_RENDERED,
        tab: c,
        unpublishedCategoriesShown: C,
        cacheDisabled: u
      })
    }, [A, P, N.length, C, u, B, c]), null != A) ? (0, r.jsx)(h.Z, {
      onRetry: Z,
      errorOrigin: h.i.SHOP_PAGE,
      errorMessage: A.message
    }) : P || 0 === N.length ? (0, r.jsxs)("div", {
      className: s()(I.loadingContainer, I.feedContent),
      children: [(0, r.jsx)(E.Z, {
        isLoading: P,
        handleTransition: n,
        tab: c
      }), (0, r.jsx)(b.Z, {
        isLoading: P,
        handleTransition: n,
        categories: []
      }), (0, r.jsx)(v.Z, {
        isLoading: P,
        title: c === j.AW.ORBS ? T.intl.string(T.t.dFgeuZ) : T.intl.string(T.t.NSv5KV),
        numVisibleItems: i,
        tab: c
      })]
    }) : (0, r.jsx)(r.Fragment, {
      children: N.map((e, t) => ((e, t, l) => {
        if (null == e) return null;
        let u = null,
          d = false;
        switch (e.type) {
          case a.z.HERO:
            u = (0, r.jsx)(E.Z, {
              isLoading: P,
              handleTransition: n,
              heroBlock: e,
              tab: c
            }, l);
            break;
          case a.z.FEATURED:
            u = (0, r.jsx)(b.Z, {
              isLoading: P,
              handleTransition: n,
              featuredBlockRecord: e
            }, l);
            break;
          case a.z.FEED:
            let p = e.sortedSkuIds;
            u = (0, r.jsx)(v.Z, {
              title: c === j.AW.ORBS ? T.intl.string(T.t.dFgeuZ) : T.intl.string(T.t.NSv5KV),
              isLoading: P || o,
              numVisibleItems: i,
              sortedSkuIds: p,
              buttonContainerClassName: (null == t ? true : t.type) === a.z.IMMERSIVE_BANNER ? I.feedblockInteractiveBackground : true,
              prioritizeUserDiscounts: c === j.AW.HOME,
              tab: c,
              orbsSupportedOnly: c === j.AW.ORBS
            }, l);
            break;
          case a.z.WIDE_BANNER:
            u = (0, r.jsx)(y.Z, {
              handleTransition: n,
              wideBannerBlock: e,
              tab: c
            }, l);
            break;
          case a.z.SHELF:
            u = (0, r.jsx)(O.Z, {
              handleTransition: n,
              shelf: e,
              tab: c
            }, l);
            break;
          case a.z.COUNTDOWN_TIMER:
            u = (0, r.jsx)(m.J, {
              countdownTimerBlock: e,
              isVisible: S
            }, l), d = true;
            break;
          case a.z.IMMERSIVE_BANNER:
            u = (0, r.jsx)(x.Z, {
              immersiveBannerBlock: e,
              onVisibilityChange: e => k(!e)
            }, l);
            break;
          default:
            return null
        }
        return (0, r.jsx)(g.g6, {
          blockType: e.type,
          children: (0, r.jsx)("div", {
            className: s()(I.blockContainer, I.feedContent, {
              [I.skipPadding]: 0 === l || d
            }),
            children: u
          }, l)
        })
      })(e, t > 0 ? N[t - 1] : null, t))
    })
  },
  B = e => {
    let {
      handleTransition: t,
      tab: n,
      transitionState: i
    } = e, s = l.useRef(null), {
      handleScroll: a
    } = (0, c.z)(s, n), g = (0, C.R)(), p = (0, d.sp)(), [f, h] = l.useState(j.IV), [_, m] = l.useState(false);
    return l.useEffect(() => {
      if (null != s.current) {
        let e = () => {
            if (null == s.current) return;
            let e = s.current.getDistanceFromBottom();
            f >= 36 ? m(e < 20) : e <= 200 && h(e => e + j.IV)
          },
          t = s.current.getScrollerNode();
        return null == t || t.addEventListener("scroll", e), () => {
          null == t || t.removeEventListener("scroll", e)
        }
      }
    }, [s, f, h, m]), (0, r.jsx)(o.Den, {
      className: I.shopScroll,
      ref: s,
      onScroll: a,
      children: (0, r.jsxs)("div", {
        className: I.shop,
        children: [(0, r.jsxs)("div", {
          className: I.mainContent,
          children: [(0, r.jsx)(L, {
            handleTransition: t,
            numVisibleItems: f,
            isFetchingCategories: g,
            tab: n
          }), n !== j.AW.CATALOG && f >= 36 && (0, r.jsxs)("div", {
            className: I.endOfFeed,
            children: [(0, r.jsx)(o.Heading, {
              variant: "heading-md/semibold",
              children: T.intl.string(T.t.Yr70c4)
            }), (0, r.jsx)(o.Button, {
              variant: "primary",
              text: T.intl.string(T.t.AfrvRD),
              onClick: () => {
                t({
                  sourceButton: "shop all button",
                  shouldAnimate: true
                }), u.default.track(k.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == p ? true : p.sessionId,
                  page_type: n,
                  page_category: n === j.AW.HOME || null == p ? true : p.pageCategory,
                  cta_name: "browse the shop button"
                })
              },
              fullWidth: true
            })]
          })]
        }), (0, r.jsx)(S.Z, {
          peaking: _,
          transitioning: i === j.f7.OUT
        }), (0, r.jsx)(S.Z, {
          style: {
            left: 1850
          },
          peaking: _,
          transitioning: i === j.f7.OUT
        })]
      })
    })
  }