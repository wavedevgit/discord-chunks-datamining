/** Chunk was on 59275 **/
/** chunk id: 231209, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => B
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk651162 = require("./651162.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk564322 = require("./564322.js"),
  Chunk367727 = require("./367727.js"),
  Chunk954571 = require("./954571.js"),
  Chunk440938 = require("./440938.jsx"),
  Chunk344011 = require("./344011.jsx"),
  Chunk379177 = require("./379177.js"),
  Chunk335657 = require("./335657.js"),
  Chunk100057 = require("./100057.js"),
  Chunk599062 = require("./599062.jsx"),
  Chunk159439 = require("./159439.js"),
  Chunk998694 = require("./998694.js"),
  Chunk666413 = require("./666413.jsx"),
  Chunk573455 = require("./573455.jsx"),
  Chunk565057 = require("./565057.jsx"),
  Chunk227205 = require("./227205.jsx"),
  Chunk457414 = require("./457414.jsx"),
  Chunk633026 = require("./633026.jsx"),
  Chunk251191 = require("./251191.jsx"),
  Chunk613258 = require("./613258.jsx"),
  Chunk152568 = require("./152568.jsx"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk201073 = require("./201073.js");
let P = e => {
    var t, n, s;
    let {
      handleTransition: c,
      numVisibleItems: u,
      isFetchingCategories: g,
      tab: E
    } = e, {
      noCache: T,
      includeUnpublished: k
    } = (0, v.A)(), P = (0, m.rR)("CollectiblesFeedShop") && E === I.G2.ORBS, B = (n = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, I.ue), s = s = {
      name: N.intl.string(N.t.bfXHLB)
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(s)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e))
    }), n), [w, D] = l.useState(false), M = (0, f.uM)(), H = null != (t = null == M ? true : M.sessionId) ? t : "";
    l.useEffect(() => {
      (0, b.z)({
        sessionId: H,
        checkpoint: b.t.SHOP_MOUNTED,
        tab: E,
        unpublishedCategoriesShown: k,
        cacheDisabled: T
      })
    }, [E]);
    let {
      isFetchingShopHome: G,
      fetchShopHomeError: U,
      shopBlocks: F,
      refreshShopHome: z
    } = (0, _.y)(E, {
      noCache: T,
      includeUnpublished: k,
      includeBundles: true,
      logPerf: true
    }, {
      sessionId: H,
      tab: E
    }), V = l.useCallback(() => {
      z()
    }, [z]);
    return (l.useEffect(() => {
      null != U || G || 0 === F.length || (0, b.z)({
        sessionId: H,
        checkpoint: b.t.SHOP_RENDERED,
        tab: E,
        unpublishedCategoriesShown: k,
        cacheDisabled: T
      })
    }, [U, G, F.length, k, T, H, E]), null != U) ? (0, r.jsx)(h.h, {
      onRetry: V,
      errorOrigin: h.A.SHOP_PAGE,
      errorMessage: U.message
    }) : G || 0 === F.length ? (0, r.jsxs)("div", {
      className: a()(R.g4, R.Of),
      children: [(0, r.jsx)(S.A, {
        isLoading: G,
        handleTransition: c,
        tab: E
      }), (0, r.jsx)(A.A, {
        isLoading: G,
        handleTransition: c,
        categories: []
      }), (0, r.jsx)(x.A, {
        isLoading: G,
        title: E === I.G2.ORBS ? N.intl.string(N.t.dFgeuZ) : N.intl.string(N.t.NSv5KV),
        numVisibleItems: u,
        tab: E
      })]
    }) : (0, r.jsx)(r.Fragment, {
      children: F.map((e, t) => ((e, t, n) => {
        if (null == e) return null;
        let l = null,
          s = false;
        switch (e.type) {
          case i.g.HERO:
            l = (0, r.jsx)(S.A, {
              isLoading: G,
              handleTransition: c,
              heroBlock: P ? B : e,
              tab: E
            }, n);
            break;
          case i.g.FEATURED:
            l = (0, r.jsx)(A.A, {
              isLoading: G,
              handleTransition: c,
              featuredBlockRecord: e
            }, n);
            break;
          case i.g.FEED:
            let f = e.sortedSkuIds;
            l = (0, r.jsx)(x.A, {
              title: E === I.G2.ORBS ? N.intl.string(N.t.dFgeuZ) : N.intl.string(N.t.NSv5KV),
              isLoading: G || g,
              numVisibleItems: u,
              sortedSkuIds: f,
              buttonContainerClassName: (null == t ? true : t.type) === i.g.IMMERSIVE_BANNER ? R.w : true,
              prioritizeUserDiscounts: E === I.G2.HOME,
              tab: E,
              orbsSupportedOnly: E === I.G2.ORBS
            }, n);
            break;
          case i.g.WIDE_BANNER:
            if (e.isDismissible) {
              var m;
              let t = null != (m = e.dismissibleContentVersion) ? m : 0,
                {
                  isDismissed: n
                } = (0, d.En)(o.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
              if (n) return null
            }
            l = (0, r.jsx)(L.A, {
              wideBannerBlock: e,
              tab: E
            }, n);
            break;
          case i.g.SHELF:
            l = (0, r.jsx)(j.A, {
              handleTransition: c,
              shelf: e,
              tab: E
            }, n);
            break;
          case i.g.COUNTDOWN_TIMER:
            l = (0, r.jsx)(C.S, {
              countdownTimerBlock: e,
              isVisible: w
            }, n), s = true;
            break;
          case i.g.IMMERSIVE_BANNER:
            l = (0, r.jsx)(O.A, {
              immersiveBannerBlock: e,
              onVisibilityChange: e => D(!e)
            }, n);
            break;
          case i.g.REWARD_HERO:
            l = (0, r.jsx)(y.A, {
              isLoading: G,
              handleTransition: c,
              heroBlock: e,
              tab: E
            }, n);
            break;
          default:
            return null
        }
        return (0, r.jsx)(p.rW, {
          blockType: e.type,
          children: (0, r.jsx)("div", {
            className: a()(R.v1, R.Of, {
              [R.J1]: 0 === n || s
            }),
            children: l
          }, n)
        })
      })(e, t > 0 ? F[t - 1] : null, t))
    })
  },
  B = e => {
    let {
      handleTransition: t,
      tab: n,
      transitionState: s
    } = e, a = l.useRef(null), {
      handleScroll: i
    } = (0, u.X)(a, n), o = (0, E.U)(), d = (0, f.uM)(), [p, m] = l.useState(I.md), [_, b] = l.useState(false);
    return l.useEffect(() => {
      if (null != a.current) {
        let e = () => {
            if (null == a.current) return;
            let e = a.current.getDistanceFromBottom();
            p >= 36 ? b(e < 20) : e <= 200 && m(e => e + I.md)
          },
          t = a.current.getScrollerNode();
        return null == t || t.addEventListener("scroll", e), () => {
          null == t || t.removeEventListener("scroll", e)
        }
      }
    }, [a, p, m, b]), (0, r.jsx)(c.T7Y, {
      className: R.OW,
      ref: a,
      onScroll: i,
      children: (0, r.jsxs)("div", {
        className: R.bx,
        children: [(0, r.jsxs)("div", {
          className: R.rb,
          children: [(0, r.jsx)(P, {
            handleTransition: t,
            numVisibleItems: p,
            isFetchingCategories: o,
            tab: n
          }), n !== I.G2.CATALOG && p >= 36 && (0, r.jsxs)("div", {
            className: R.R$,
            children: [(0, r.jsx)(c.Heading, {
              variant: "heading-md/semibold",
              children: N.intl.string(N.t.Yr70c4)
            }), (0, r.jsx)(c.Button, {
              variant: "primary",
              text: N.intl.string(N.t.AfrvRD),
              onClick: () => {
                t({
                  sourceButton: "shop all button",
                  shouldAnimate: true
                }), g.default.track(k.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == d ? true : d.sessionId,
                  page_type: n,
                  page_category: n === I.G2.HOME || null == d ? true : d.pageCategory,
                  cta_name: "browse the shop button"
                })
              },
              fullWidth: true
            })]
          })]
        }), (0, r.jsx)(T.A, {
          peaking: _,
          transitioning: s === I.Pf.OUT
        }), (0, r.jsx)(T.A, {
          style: {
            left: 1850
          },
          peaking: _,
          transitioning: s === I.Pf.OUT
        })]
      })
    })
  }