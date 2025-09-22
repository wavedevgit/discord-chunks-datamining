/** Chunk was on 45620 **/
/** chunk id: 548685, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
let j = e => {
  var t;
  let {
    isLoading: n,
    title: a,
    sortedSkuIds: j,
    numVisibleItems: k,
    hasSorting: I,
    prioritizeUserDiscounts: B,
    tab: N,
    buttonContainerClassName: A
  } = e, P = (0, i.e7)([d.default], () => d.default.getCurrentUser()), R = h.ZP.canUseCollectibles(P), Z = (0, v.G)("FeedBlock"), {
    sortType: w,
    setSortType: M,
    sortedItems: F,
    sortOptions: H,
    shuffleProducts: D,
    showRecommendationOption: W
  } = (0, S.Z)(j, R, B), U = (0, O.St)(F), V = (0, i.e7)([u.Z], () => u.Z.useReducedMotion), z = (0, i.e7)([g.Z], () => g.Z.isFocused()), G = !V && z, {
    animationPhase: q,
    startAnimation: K
  } = (0, E.y)(), Y = (0, _.sp)(), X = null != (t = null == Y ? true : Y.sessionId) ? t : "", Q = l.useRef(null), J = l.useCallback(e => {
    K({
      isShuffling: false,
      onOutroComplete: () => M(e)
    }), p.default.track(x.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
      page_session_id: X,
      sort_type: e
    })
  }, [K, M, X]);
  return null == P ? null : (0, r.jsxs)("div", {
    className: s()(L.popularPicksSection, L.centeredSection),
    children: [(0, r.jsxs)("div", {
      className: L.blockHeader,
      children: [(0, r.jsxs)("div", {
        className: L.headerLeft,
        children: [(0, r.jsx)(o.X6q, {
          variant: "heading-lg/semibold",
          children: a
        }), W && (0, r.jsx)(o.ua7, {
          text: T.intl.string(T.t["3taPdn"]),
          position: "top",
          "aria-label": T.intl.string(T.t["3taPdn"]),
          children: e => {
            var t, n;
            return (0, r.jsx)(o.P3F, (t = function(e) {
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
            }({}, e), n = n = {
              onClick: () => (0, c.Z)(f.Z.getArticleURL(x.BhN.DATA_USED_FOR_RECOMMENDED)),
              className: L.informationIcon,
              children: (0, r.jsx)(o.d3s, {
                size: "sm"
              })
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(n)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))
          }
        })]
      }), I ? (0, r.jsxs)("div", {
        className: s()(L.headerRight, {
          [y.shopTakeOver]: Z
        }),
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/medium",
          children: T.intl.string(T.t.uaX709)
        }), (0, r.jsx)("div", {
          className: A,
          children: (0, r.jsx)(o.PhF, {
            options: H,
            select: J,
            className: L.sortSelect,
            popoutClassName: s()({
              [y.shopTakeOver]: Z
            }),
            isSelected: e => e === w,
            serialize: e => e
          })
        }), (0, r.jsx)("div", {
          className: A,
          children: (0, r.jsx)(o.zxk, {
            variant: "secondary",
            text: T.intl.string(T.t.X3tnc3),
            buttonRef: Q,
            onClick: () => {
              K({
                isShuffling: true,
                onOutroComplete: D,
                returnRef: Q
              }), p.default.track(x.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                page_session_id: X
              })
            },
            disabled: q !== E.g.MOUNTED && q !== E.g.FINISHED
          })
        })]
      }) : null]
    }), (0, r.jsx)("div", {
      className: L.feed,
      children: n ? (0, r.jsx)(r.Fragment, {
        children: [...Array(12)].map((e, t) => (0, r.jsx)(m.K, {}, t + 1))
      }) : U.slice(0, k).map((e, t) => {
        let n, l = C.Z.getCategoryForProduct(e.skuId);
        if (null == e || null == l) return null;
        if (G)
          if (q === E.g.SHUFFLE_OUT) return (0, r.jsx)("div", {
            className: L.shuffleOutro
          }, "".concat(e.skuId, "-").concat(t));
          else q === E.g.SORT_OUT ? n = L.sortChangedOutro : q === E.g.SHUFFLE_IN ? n = L.shuffleIntro : q === E.g.SORT_IN && (n = L.sortChangedIntro);
        return (0, r.jsx)(_.k0, {
          newValue: {
            tilePosition: t,
            pageSection: "popular picks",
            categoryPosition: 2
          },
          children: (0, r.jsx)(b.Z, {
            product: e,
            category: l,
            user: P,
            tab: N,
            className: n
          })
        }, null == e ? true : e.skuId)
      })
    })]
  })
}