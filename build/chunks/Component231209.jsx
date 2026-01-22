/** Chunk was on 59275 **/
/** chunk id: 231209, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => D
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
    var t, l, s;
    let {
      handleTransition: c,
      numVisibleItems: u,
      isFetchingCategories: f,
      tab: v
    } = e, {
      noCache: L,
      includeUnpublished: N
    } = (0, A.A)(), P = (0, m.rR)("CollectiblesFeedShop") && v === I.G2.ORBS, D = (l = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
          return Object.getOwnPropertyDescriptor(l, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = l[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, I.ue), s = s = {
      name: k.intl.string(k.t.bfXHLB)
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
      var l = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        l.push.apply(l, n)
      }
      return l
    })(Object(s)).forEach(function(e) {
      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e))
    }), l), [w, B] = r.useState(false), M = (0, b.uM)(), H = null != (t = null == M ? true : M.sessionId) ? t : "";
    r.useEffect(() => {
      (0, h.z)({
        sessionId: H,
        checkpoint: h.t.SHOP_MOUNTED,
        tab: v,
        unpublishedCategoriesShown: N,
        cacheDisabled: L
      })
    }, [v]);
    let {
      isFetchingShopHome: G,
      fetchShopHomeError: U,
      shopBlocks: F,
      refreshShopHome: z
    } = (0, p.y)(v, {
      noCache: L,
      includeUnpublished: N,
      includeBundles: true,
      logPerf: true
    }, {
      sessionId: H,
      tab: v
    }), V = r.useCallback(() => {
      z()
    }, [z]);
    return (r.useEffect(() => {
      null != U || G || 0 === F.length || (0, h.z)({
        sessionId: H,
        checkpoint: h.t.SHOP_RENDERED,
        tab: v,
        unpublishedCategoriesShown: N,
        cacheDisabled: L
      })
    }, [U, G, F.length, N, L, H, v]), null != U) ? (0, n.jsx)(E.h, {
      onRetry: V,
      errorOrigin: E.A.SHOP_PAGE,
      errorMessage: U.message
    }) : G || 0 === F.length ? (0, n.jsxs)("div", {
      className: a()(R.g4, R.Of),
      children: [(0, n.jsx)(O.A, {
        isLoading: G,
        handleTransition: c,
        tab: v
      }), (0, n.jsx)(S.A, {
        isLoading: G,
        handleTransition: c,
        categories: []
      }), (0, n.jsx)(C.A, {
        isLoading: G,
        title: v === I.G2.ORBS ? k.intl.string(k.t.dFgeuZ) : k.intl.string(k.t.NSv5KV),
        numVisibleItems: u,
        tab: v
      })]
    }) : (0, n.jsx)(n.Fragment, {
      children: F.map((e, t) => ((e, t, l) => {
        if (null == e) return null;
        let r = null,
          s = false;
        switch (e.type) {
          case i.g.HERO:
            r = (0, n.jsx)(O.A, {
              isLoading: G,
              handleTransition: c,
              heroBlock: P ? D : e,
              tab: v
            }, l);
            break;
          case i.g.FEATURED:
            r = (0, n.jsx)(S.A, {
              isLoading: G,
              handleTransition: c,
              featuredBlockRecord: e
            }, l);
            break;
          case i.g.FEED:
            let b = e.sortedSkuIds;
            r = (0, n.jsx)(C.A, {
              title: v === I.G2.ORBS ? k.intl.string(k.t.dFgeuZ) : k.intl.string(k.t.NSv5KV),
              isLoading: G || f,
              numVisibleItems: u,
              sortedSkuIds: b,
              buttonContainerClassName: (null == t ? true : t.type) === i.g.IMMERSIVE_BANNER ? R.w : true,
              prioritizeUserDiscounts: v === I.G2.HOME,
              tab: v,
              orbsSupportedOnly: v === I.G2.ORBS
            }, l);
            break;
          case i.g.WIDE_BANNER:
            if (e.isDismissible) {
              var m;
              let t = null != (m = e.dismissibleContentVersion) ? m : 0,
                {
                  isDismissed: l
                } = (0, d.En)(o.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
              if (l) return null
            }
            r = (0, n.jsx)(T.A, {
              wideBannerBlock: e,
              tab: v
            }, l);
            break;
          case i.g.SHELF:
            r = (0, n.jsx)(j.A, {
              handleTransition: c,
              shelf: e,
              tab: v
            }, l);
            break;
          case i.g.COUNTDOWN_TIMER:
            r = (0, n.jsx)(x.S, {
              countdownTimerBlock: e,
              isVisible: w
            }, l), s = true;
            break;
          case i.g.IMMERSIVE_BANNER:
            r = (0, n.jsx)(_.A, {
              immersiveBannerBlock: e,
              onVisibilityChange: e => B(!e)
            }, l);
            break;
          case i.g.REWARD_HERO:
            r = (0, n.jsx)(y.A, {
              isLoading: G,
              handleTransition: c,
              heroBlock: e,
              tab: v
            }, l);
            break;
          default:
            return null
        }
        return (0, n.jsx)(g.rW, {
          blockType: e.type,
          children: (0, n.jsx)("div", {
            className: a()(R.v1, R.Of, {
              [R.J1]: 0 === l || s
            }),
            children: r
          }, l)
        })
      })(e, t > 0 ? F[t - 1] : null, t))
    })
  },
  D = e => {
    let {
      handleTransition: t,
      tab: l,
      transitionState: s
    } = e, a = r.useRef(null), {
      handleScroll: i
    } = (0, u.X)(a, l), o = (0, v.U)(), d = (0, b.uM)(), [g, m] = r.useState(I.md), [p, h] = r.useState(false);
    return r.useEffect(() => {
      if (null != a.current) {
        let e = () => {
            if (null == a.current) return;
            let e = a.current.getDistanceFromBottom();
            g >= 36 ? h(e < 20) : e <= 200 && m(e => e + I.md)
          },
          t = a.current.getScrollerNode();
        return null == t || t.addEventListener("scroll", e), () => {
          null == t || t.removeEventListener("scroll", e)
        }
      }
    }, [a, g, m, h]), (0, n.jsx)(c.T7Y, {
      className: R.OW,
      ref: a,
      onScroll: i,
      children: (0, n.jsxs)("div", {
        className: R.bx,
        children: [(0, n.jsxs)("div", {
          className: R.rb,
          children: [(0, n.jsx)(P, {
            handleTransition: t,
            numVisibleItems: g,
            isFetchingCategories: o,
            tab: l
          }), l !== I.G2.CATALOG && g >= 36 && (0, n.jsxs)("div", {
            className: R.R$,
            children: [(0, n.jsx)(c.Heading, {
              variant: "heading-md/semibold",
              children: k.intl.string(k.t.Yr70c4)
            }), (0, n.jsx)(c.Button, {
              variant: "primary",
              text: k.intl.string(k.t.AfrvRD),
              onClick: () => {
                t({
                  sourceButton: "shop all button",
                  shouldAnimate: true
                }), f.default.track(N.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == d ? true : d.sessionId,
                  page_type: l,
                  page_category: l === I.G2.HOME || null == d ? true : d.pageCategory,
                  cta_name: "browse the shop button"
                })
              },
              fullWidth: true
            })]
          })]
        }), (0, n.jsx)(L.A, {
          peaking: p,
          transitioning: s === I.Pf.OUT
        }), (0, n.jsx)(L.A, {
          style: {
            left: 1850
          },
          peaking: p,
          transitioning: s === I.Pf.OUT
        })]
      })
    })
  }