/** Chunk was on 45620 **/
/** chunk id: 548685, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => B
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
  Chunk128922 = require("./128922.js"),
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.jsx"),
  Chunk653126 = require("./653126.jsx"),
  Chunk401975 = require("./401975.jsx"),
  Chunk328626 = require("./328626.js"),
  Chunk849275 = require("./849275.js"),
  Chunk619899 = require("./619899.js"),
  Chunk642909 = require("./642909.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk345213 = require("./345213.js"),
  Chunk310582 = require("./310582.js");
let B = e => {
  var t;
  let {
    isLoading: n,
    title: i,
    sortedSkuIds: B,
    numVisibleItems: N,
    hasSorting: P,
    prioritizeUserDiscounts: A,
    tab: R,
    buttonContainerClassName: Z
  } = e, w = (0, o.e7)([d.default], () => d.default.getCurrentUser()), H = C.ZP.canUseCollectibles(w), F = (0, T.G)("FeedBlock"), {
    sortType: D,
    setSortType: M,
    sortedItems: W,
    sortOptions: U,
    shuffleProducts: V,
    showRecommendationOption: G
  } = (0, x.Z)(B, H, A), z = (0, y.St)(W), K = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), Y = (0, o.e7)([g.Z], () => g.Z.isFocused()), q = !K && Y, {
    animationPhase: Q,
    startAnimation: J
  } = (0, O.y)(), X = (0, h.sp)(), $ = null != (t = null == X ? true : X.sessionId) ? t : "", ee = l.useRef(null), et = l.useCallback(e => {
    J({
      isShuffling: false,
      onOutroComplete: () => M(e)
    }), f.default.track(j.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
      page_session_id: $,
      sort_type: e
    })
  }, [J, M, $]), en = m.Z.useConfig({
    location: "FeedBlock"
  }).showCardsV2;
  return null == w ? null : (0, r.jsxs)("div", {
    className: s()(I.popularPicksSection, I.centeredSection),
    children: [(0, r.jsxs)("div", {
      className: I.blockHeader,
      children: [(0, r.jsxs)("div", {
        className: I.headerLeft,
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-lg/semibold",
          children: i
        }), G && (0, r.jsx)(a.ua7, {
          "data-migration-pending": true,
          text: L.intl.string(L.t["3taPdn"]),
          position: "top",
          "aria-label": L.intl.string(L.t["3taPdn"]),
          children: e => {
            var t, n;
            return (0, r.jsx)(a.P3F, (t = function(e) {
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
              onClick: () => (0, c.Z)(p.Z.getArticleURL(j.BhN.DATA_USED_FOR_RECOMMENDED)),
              className: I.informationIcon,
              children: (0, r.jsx)(a.d3s, {
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
      }), P ? (0, r.jsxs)("div", {
        className: s()(I.headerRight, {
          [k.shopTakeOver]: F
        }),
        children: [(0, r.jsx)(a.Text, {
          variant: "text-md/medium",
          children: L.intl.string(L.t.uaX709)
        }), (0, r.jsx)("div", {
          className: Z,
          children: (0, r.jsx)(a.PhF, {
            options: U,
            select: et,
            className: I.sortSelect,
            popoutClassName: s()({
              [k.shopTakeOver]: F
            }),
            isSelected: e => e === D,
            serialize: e => e
          })
        }), (0, r.jsx)("div", {
          className: Z,
          children: (0, r.jsx)(a.Button, {
            variant: "secondary",
            text: L.intl.string(L.t.X3tnc3),
            buttonRef: ee,
            onClick: () => {
              J({
                isShuffling: true,
                onOutroComplete: V,
                returnRef: ee
              }), f.default.track(j.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                page_session_id: $
              })
            },
            disabled: Q !== O.g.MOUNTED && Q !== O.g.FINISHED
          })
        })]
      }) : null]
    }), (0, r.jsx)("div", {
      className: I.feed,
      children: n ? (0, r.jsx)(r.Fragment, {
        children: [...Array(12)].map((e, t) => en ? (0, r.jsx)(S.Z, {}, t + 1) : (0, r.jsx)(b.K, {}, t + 1))
      }) : z.slice(0, N).map((e, t) => {
        let n, l = _.Z.getCategoryForProduct(e.skuId);
        if (null == e || null == l) return null;
        if (q)
          if (Q === O.g.SHUFFLE_OUT) return en ? (0, r.jsx)("div", {
            className: I.shuffleOutro,
            children: (0, r.jsx)(S.Z, {
              skipPulseAnimation: true
            })
          }, "".concat(e.skuId, "-").concat(t)) : (0, r.jsx)("div", {
            className: I.shuffleOutro,
            children: (0, r.jsx)("div", {
              className: I.placeholderCard
            })
          }, "".concat(e.skuId, "-").concat(t));
          else Q === O.g.SORT_OUT ? n = I.sortChangedOutro : Q === O.g.SHUFFLE_IN ? n = I.shuffleIntro : Q === O.g.SORT_IN && (n = I.sortChangedIntro);
        return (0, r.jsx)(h.k0, {
          newValue: {
            tilePosition: t,
            pageSection: "popular picks",
            categoryPosition: 2
          },
          children: en && (null == e ? true : e.skuId) != null ? (0, r.jsx)("div", {
            className: n,
            children: (0, r.jsx)(v.Z, {
              skuId: null == e ? true : e.skuId
            })
          }) : (0, r.jsx)(E.Z, {
            product: e,
            category: l,
            user: w,
            tab: R,
            className: n
          })
        }, null == e ? true : e.skuId)
      })
    })]
  })
}