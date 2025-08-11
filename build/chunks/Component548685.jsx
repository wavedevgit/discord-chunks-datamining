/** Chunk was on 45620 **/
/** chunk id: 548685, original params: e,t,r (module,exports,require) **/
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
    isLoading: r,
    title: a,
    sortedSkuIds: P,
    numVisibleItems: L,
    hasSorting: k,
    tab: I,
    buttonContainerClassName: N
  } = e, A = (0, o.e7)([d.default], () => d.default.getCurrentUser()), w = b.ZP.canUseCollectibles(A), {
    enableShopTakeOver: B
  } = _.Z.useConfig({
    location: "FeedBlock"
  }), {
    sortType: R,
    setSortType: Z,
    sortedItems: D,
    sortOptions: M,
    shuffleProducts: F,
    showRecommendationOption: H
  } = (0, v.N)(P, w), W = (0, S.St)(D), V = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), U = (0, o.e7)([p.Z], () => p.Z.isFocused()), z = !V && U, {
    animationPhase: G,
    startAnimation: q
  } = (0, E.y)(), K = (0, h.sp)(), Y = null != (t = null == K ? true : K.sessionId) ? t : "", X = l.useRef(null), J = l.useCallback(e => {
    q({
      isShuffling: false,
      onOutroComplete: () => Z(e)
    }), g.default.track(y.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
      page_session_id: Y,
      sort_type: e
    })
  }, [q, Z, Y]);
  return null == A ? null : (0, n.jsxs)("div", {
    className: i()(T.popularPicksSection, T.centeredSection),
    children: [(0, n.jsxs)("div", {
      className: T.blockHeader,
      children: [(0, n.jsxs)("div", {
        className: T.headerLeft,
        children: [(0, n.jsx)(s.X6q, {
          variant: "heading-lg/semibold",
          children: a
        }), H && (0, n.jsx)(s.ua7, {
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
              onClick: () => (0, c.Z)(f.Z.getArticleURL(y.BhN.DATA_USED_FOR_RECOMMENDED)),
              className: T.informationIcon,
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
        className: i()(T.headerRight, {
          [j.shopTakeOver]: B
        }),
        children: [(0, n.jsx)(s.Text, {
          variant: "text-md/medium",
          children: x.intl.string(x.t.uaX709)
        }), (0, n.jsx)("div", {
          className: N,
          children: (0, n.jsx)(s.PhF, {
            options: M,
            select: J,
            className: T.sortSelect,
            popoutClassName: i()({
              [j.shopTakeOver]: B
            }),
            isSelected: e => e === R,
            serialize: e => e
          })
        }), (0, n.jsx)("div", {
          className: N,
          children: (0, n.jsx)(s.zxk, {
            variant: "secondary",
            text: x.intl.string(x.t.X3tnc3),
            buttonRef: X,
            onClick: () => {
              q({
                isShuffling: true,
                onOutroComplete: F,
                returnRef: X
              }), g.default.track(y.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                page_session_id: Y
              })
            },
            disabled: G !== E.g.MOUNTED && G !== E.g.FINISHED
          })
        })]
      }) : null]
    }), (0, n.jsx)("div", {
      className: T.feed,
      children: r ? (0, n.jsx)(n.Fragment, {
        children: [...Array(12)].map((e, t) => (0, n.jsx)(O.K, {}, t + 1))
      }) : W.slice(0, L).map((e, t) => {
        let r, l = m.Z.getCategoryForProduct(e.skuId);
        if (null == e || null == l) return null;
        if (z)
          if (G === E.g.SHUFFLE_OUT) return (0, n.jsx)("div", {
            className: T.shuffleOutro
          }, "".concat(e.skuId, "-").concat(t));
          else G === E.g.SORT_OUT ? r = T.sortChangedOutro : G === E.g.SHUFFLE_IN ? r = T.shuffleIntro : G === E.g.SORT_IN && (r = T.sortChangedIntro);
        return (0, n.jsx)(h.k0, {
          newValue: {
            tilePosition: t,
            pageSection: "popular picks",
            categoryPosition: 2
          },
          children: (0, n.jsx)(C.Z, {
            product: e,
            category: l,
            user: A,
            tab: I,
            className: r
          })
        }, null == e ? true : e.skuId)
      })
    })]
  })
}