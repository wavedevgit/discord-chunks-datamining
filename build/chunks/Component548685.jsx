/** Chunk was on 45620 **/
/** chunk id: 548685, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk607070 = require("./607070.js"),
  Chunk594174 = require("./594174.js"),
  Chunk451478 = require("./451478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.jsx"),
  Chunk328626 = require("./328626.js"),
  Chunk849275 = require("./849275.js"),
  Chunk619899 = require("./619899.js"),
  Chunk642909 = require("./642909.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk345213 = require("./345213.js"),
  Chunk310582 = require("./310582.js");
let T = e => {
  var t;
  let {
    isLoading: r,
    title: a,
    sortedSkuIds: T,
    numVisibleItems: L,
    hasSorting: k,
    prioritizeUserDiscounts: I,
    tab: N,
    buttonContainerClassName: w
  } = e, A = (0, o.e7)([d.default], () => d.default.getCurrentUser()), B = b.ZP.canUseCollectibles(A), R = (0, y.G)("FeedBlock"), {
    sortType: Z,
    setSortType: D,
    sortedItems: M,
    sortOptions: F,
    shuffleProducts: H,
    showRecommendationOption: W
  } = (0, C.Z)(T, B, I), V = (0, E.St)(M), U = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), z = (0, o.e7)([p.Z], () => p.Z.isFocused()), G = !U && z, {
    animationPhase: q,
    startAnimation: K
  } = (0, O.y)(), Y = (0, m.sp)(), X = null != (t = null == Y ? true : Y.sessionId) ? t : "", Q = l.useRef(null), J = l.useCallback(e => {
    K({
      isShuffling: false,
      onOutroComplete: () => D(e)
    }), g.default.track(S.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
      page_session_id: X,
      sort_type: e
    })
  }, [K, D, X]);
  return null == A ? null : (0, n.jsxs)("div", {
    className: i()(P.popularPicksSection, P.centeredSection),
    children: [(0, n.jsxs)("div", {
      className: P.blockHeader,
      children: [(0, n.jsxs)("div", {
        className: P.headerLeft,
        children: [(0, n.jsx)(s.X6q, {
          variant: "heading-lg/semibold",
          children: a
        }), W && (0, n.jsx)(s.ua7, {
          text: x.intl.string(x.t["3taPdn"]),
          position: "top",
          "aria-label": x.intl.string(x.t["3taPdn"]),
          children: e => {
            var t, r;
            return (0, n.jsx)(s.P3F, (t = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                  n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                  var n;
                  n = r[t], t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = n
                })
              }
              return e
            }({}, e), r = r = {
              onClick: () => (0, c.Z)(f.Z.getArticleURL(S.BhN.DATA_USED_FOR_RECOMMENDED)),
              className: P.informationIcon,
              children: (0, n.jsx)(s.d3s, {
                size: "sm"
              })
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
              var r = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r.push.apply(r, n)
              }
              return r
            })(Object(r)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }), t))
          }
        })]
      }), k ? (0, n.jsxs)("div", {
        className: i()(P.headerRight, {
          [j.shopTakeOver]: R
        }),
        children: [(0, n.jsx)(s.Text, {
          variant: "text-md/medium",
          children: x.intl.string(x.t.uaX709)
        }), (0, n.jsx)("div", {
          className: w,
          children: (0, n.jsx)(s.PhF, {
            options: F,
            select: J,
            className: P.sortSelect,
            popoutClassName: i()({
              [j.shopTakeOver]: R
            }),
            isSelected: e => e === Z,
            serialize: e => e
          })
        }), (0, n.jsx)("div", {
          className: w,
          children: (0, n.jsx)(s.zxk, {
            variant: "secondary",
            text: x.intl.string(x.t.X3tnc3),
            buttonRef: Q,
            onClick: () => {
              K({
                isShuffling: true,
                onOutroComplete: H,
                returnRef: Q
              }), g.default.track(S.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                page_session_id: X
              })
            },
            disabled: q !== O.g.MOUNTED && q !== O.g.FINISHED
          })
        })]
      }) : null]
    }), (0, n.jsx)("div", {
      className: P.feed,
      children: r ? (0, n.jsx)(n.Fragment, {
        children: [...Array(12)].map((e, t) => (0, n.jsx)(_.K, {}, t + 1))
      }) : V.slice(0, L).map((e, t) => {
        let r, l = h.Z.getCategoryForProduct(e.skuId);
        if (null == e || null == l) return null;
        if (G)
          if (q === O.g.SHUFFLE_OUT) return (0, n.jsx)("div", {
            className: P.shuffleOutro
          }, "".concat(e.skuId, "-").concat(t));
          else q === O.g.SORT_OUT ? r = P.sortChangedOutro : q === O.g.SHUFFLE_IN ? r = P.shuffleIntro : q === O.g.SORT_IN && (r = P.sortChangedIntro);
        return (0, n.jsx)(m.k0, {
          newValue: {
            tilePosition: t,
            pageSection: "popular picks",
            categoryPosition: 2
          },
          children: (0, n.jsx)(v.Z, {
            product: e,
            category: l,
            user: A,
            tab: N,
            className: r
          })
        }, null == e ? true : e.skuId)
      })
    })]
  })
}