/** Chunk was on 45620 **/
/** chunk id: 548685, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => I
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
  Chunk128922 = require("./128922.js"),
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.jsx"),
  Chunk653126 = require("./653126.jsx"),
  Chunk328626 = require("./328626.js"),
  Chunk849275 = require("./849275.js"),
  Chunk619899 = require("./619899.js"),
  Chunk642909 = require("./642909.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk345213 = require("./345213.js"),
  Chunk310582 = require("./310582.js");
let I = e => {
  var t;
  let {
    isLoading: n,
    title: a,
    sortedSkuIds: I,
    numVisibleItems: P,
    hasSorting: B,
    prioritizeUserDiscounts: A,
    tab: N,
    buttonContainerClassName: R
  } = e, Z = (0, s.e7)([d.default], () => d.default.getCurrentUser()), w = h.ZP.canUseCollectibles(Z), F = (0, T.G)("FeedBlock"), {
    sortType: M,
    setSortType: H,
    sortedItems: D,
    sortOptions: W,
    shuffleProducts: U,
    showRecommendationOption: V
  } = (0, v.Z)(I, w, A), z = (0, O.St)(D), G = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), q = (0, s.e7)([g.Z], () => g.Z.isFocused()), K = !G && q, {
    animationPhase: Y,
    startAnimation: X
  } = (0, x.y)(), Q = (0, C.sp)(), J = null != (t = null == Q ? true : Q.sessionId) ? t : "", $ = l.useRef(null), ee = l.useCallback(e => {
    X({
      isShuffling: false,
      onOutroComplete: () => H(e)
    }), p.default.track(y.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
      page_session_id: J,
      sort_type: e
    })
  }, [X, H, J]), et = m.Z.useConfig({
    location: "FeedBlock"
  }).showCardsV2;
  return null == Z ? null : (0, r.jsxs)("div", {
    className: i()(k.popularPicksSection, k.centeredSection),
    children: [(0, r.jsxs)("div", {
      className: k.blockHeader,
      children: [(0, r.jsxs)("div", {
        className: k.headerLeft,
        children: [(0, r.jsx)(o.X6q, {
          variant: "heading-lg/semibold",
          children: a
        }), V && (0, r.jsx)(o.ua7, {
          text: L.intl.string(L.t["3taPdn"]),
          position: "top",
          "aria-label": L.intl.string(L.t["3taPdn"]),
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
              onClick: () => (0, c.Z)(f.Z.getArticleURL(y.BhN.DATA_USED_FOR_RECOMMENDED)),
              className: k.informationIcon,
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
      }), B ? (0, r.jsxs)("div", {
        className: i()(k.headerRight, {
          [j.shopTakeOver]: F
        }),
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/medium",
          children: L.intl.string(L.t.uaX709)
        }), (0, r.jsx)("div", {
          className: R,
          children: (0, r.jsx)(o.PhF, {
            options: W,
            select: ee,
            className: k.sortSelect,
            popoutClassName: i()({
              [j.shopTakeOver]: F
            }),
            isSelected: e => e === M,
            serialize: e => e
          })
        }), (0, r.jsx)("div", {
          className: R,
          children: (0, r.jsx)(o.zxk, {
            variant: "secondary",
            text: L.intl.string(L.t.X3tnc3),
            buttonRef: $,
            onClick: () => {
              X({
                isShuffling: true,
                onOutroComplete: U,
                returnRef: $
              }), p.default.track(y.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                page_session_id: J
              })
            },
            disabled: Y !== x.g.MOUNTED && Y !== x.g.FINISHED
          })
        })]
      }) : null]
    }), (0, r.jsx)("div", {
      className: k.feed,
      children: n ? (0, r.jsx)(r.Fragment, {
        children: [...Array(12)].map((e, t) => (0, r.jsx)(b.K, {}, t + 1))
      }) : z.slice(0, P).map((e, t) => {
        let n, l = _.Z.getCategoryForProduct(e.skuId);
        if (null == e || null == l) return null;
        if (K)
          if (Y === x.g.SHUFFLE_OUT) return (0, r.jsx)("div", {
            className: k.shuffleOutro
          }, "".concat(e.skuId, "-").concat(t));
          else Y === x.g.SORT_OUT ? n = k.sortChangedOutro : Y === x.g.SHUFFLE_IN ? n = k.shuffleIntro : Y === x.g.SORT_IN && (n = k.sortChangedIntro);
        return (0, r.jsx)(C.k0, {
          newValue: {
            tilePosition: t,
            pageSection: "popular picks",
            categoryPosition: 2
          },
          children: et ? (0, r.jsx)(S.Z, {
            skuId: null == e ? true : e.skuId,
            config: {
              tab: N
            }
          }) : (0, r.jsx)(E.Z, {
            product: e,
            category: l,
            user: Z,
            tab: N,
            className: n
          })
        }, null == e ? true : e.skuId)
      })
    })]
  })
}