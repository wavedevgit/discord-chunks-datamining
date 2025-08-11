/** Chunk was on 45620 **/
/** chunk id: 548685, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk675997 = require("./675997.js"),
  Chunk243126 = require("./243126.js"),
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.jsx"),
  Chunk328626 = require("./328626.js"),
  Chunk619899 = require("./619899.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk306414 = require("./306414.js"),
  Chunk806734 = require("./806734.js");
let P = e => {
  var t;
  let {
    isLoading: n,
    title: a,
    sortedSkuIds: P,
    numVisibleItems: L,
    hasSorting: k,
    tab: I
  } = e, N = (0, o.e7)([d.default], () => d.default.getCurrentUser()), w = b.ZP.canUseCollectibles(N), {
    enableShopTakeOver: A
  } = _.Z.useConfig({
    location: "FeedBlock"
  }), {
    sortType: B,
    setSortType: R,
    sortedItems: Z,
    sortOptions: D,
    shuffleProducts: F,
    showRecommendationOption: M
  } = (0, v.N)(P, w), H = (0, S.St)(Z), W = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), V = (0, o.e7)([p.Z], () => p.Z.isFocused()), U = !W && V, {
    animationPhase: z,
    startAnimation: G
  } = (0, E.y)(), q = (0, h.sp)(), K = null != (t = null == q ? true : q.sessionId) ? t : "", Y = l.useRef(null), X = l.useCallback(e => {
    G({
      isShuffling: false,
      onOutroComplete: () => R(e)
    }), g.default.track(y.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
      page_session_id: K,
      sort_type: e
    })
  }, [G, R, K]);
  return null == N ? null : (0, r.jsxs)("div", {
    className: i()(T.popularPicksSection, T.centeredSection),
    children: [(0, r.jsxs)("div", {
      className: T.blockHeader,
      children: [(0, r.jsxs)("div", {
        className: T.headerLeft,
        children: [(0, r.jsx)(s.X6q, {
          variant: "heading-lg/semibold",
          children: a
        }), M && (0, r.jsx)(s.ua7, {
          text: x.intl.string(x.t["3taPdn"]),
          position: "top",
          "aria-label": x.intl.string(x.t["3taPdn"]),
          children: e => {
            var t, n;
            return (0, r.jsx)(s.P3F, (t = function(e) {
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
              onClick: () => (0, c.Z)(f.Z.getArticleURL(y.BhN.DATA_USED_FOR_RECOMMENDED)),
              className: T.informationIcon,
              children: (0, r.jsx)(s.d3s, {
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
      }), k ? (0, r.jsxs)("div", {
        className: i()(T.headerRight, {
          [j.shopTakeOver]: A
        }),
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/medium",
          children: x.intl.string(x.t.uaX709)
        }), (0, r.jsx)(s.PhF, {
          className: T.sortSelect,
          options: D,
          select: X,
          isSelected: e => e === B,
          serialize: e => e,
          popoutClassName: i()({
            [j.shopTakeOver]: A
          })
        }), (0, r.jsx)(s.zxk, {
          variant: "secondary",
          text: x.intl.string(x.t.X3tnc3),
          buttonRef: Y,
          onClick: () => {
            G({
              isShuffling: true,
              onOutroComplete: F,
              returnRef: Y
            }), g.default.track(y.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
              page_session_id: K
            })
          },
          disabled: z !== E.g.MOUNTED && z !== E.g.FINISHED
        })]
      }) : null]
    }), (0, r.jsx)("div", {
      className: T.feed,
      children: n ? (0, r.jsx)(r.Fragment, {
        children: [...Array(12)].map((e, t) => (0, r.jsx)(O.K, {}, t + 1))
      }) : H.slice(0, L).map((e, t) => {
        let n, l = m.Z.getCategoryForProduct(e.skuId);
        if (null == e || null == l) return null;
        if (U)
          if (z === E.g.SHUFFLE_OUT) return (0, r.jsx)("div", {
            className: T.shuffleOutro
          }, "".concat(e.skuId, "-").concat(t));
          else z === E.g.SORT_OUT ? n = T.sortChangedOutro : z === E.g.SHUFFLE_IN ? n = T.shuffleIntro : z === E.g.SORT_IN && (n = T.sortChangedIntro);
        return (0, r.jsx)(h.k0, {
          newValue: {
            tilePosition: t,
            pageSection: "popular picks",
            categoryPosition: 2
          },
          children: (0, r.jsx)(C.Z, {
            product: e,
            category: l,
            user: N,
            tab: I,
            className: n
          })
        }, null == e ? true : e.skuId)
      })
    })]
  })
}