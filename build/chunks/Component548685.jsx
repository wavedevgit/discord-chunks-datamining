/** Chunk was on 45620 **/
/** chunk id: 548685, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk786040 = require("./786040.jsx"),
  Chunk401975 = require("./401975.jsx"),
  Chunk328626 = require("./328626.js"),
  Chunk849275 = require("./849275.js"),
  Chunk619899 = require("./619899.js"),
  Chunk642909 = require("./642909.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk345213 = require("./345213.js"),
  Chunk310582 = require("./310582.js");
let N = e => {
  var t;
  let {
    isLoading: n,
    title: i,
    sortedSkuIds: N,
    numVisibleItems: P,
    prioritizeUserDiscounts: R,
    tab: Z,
    buttonContainerClassName: w,
    orbsSupportedOnly: H
  } = e, D = (0, s.e7)([d.default], () => d.default.getCurrentUser()), M = C.ZP.canUseCollectibles(D), F = (0, j.G)("FeedBlock"), {
    sortType: W,
    setSortType: U,
    sortedItems: V,
    sortOptions: z,
    shuffleProducts: G,
    showRecommendationOption: K
  } = (0, y.Z)({
    sortedSkuIds: N,
    isPremiumUser: M,
    prioritizeUserDiscounts: R,
    orbsSupportedOnly: H
  }), Y = (0, k.St)(V), q = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), Q = (0, s.e7)([g.Z], () => g.Z.isFocused()), J = !q && Q, {
    animationPhase: X,
    startAnimation: $
  } = (0, S.y)(), ee = (0, h.sp)(), et = null != (t = null == ee ? true : ee.sessionId) ? t : "", en = l.useRef(null), er = l.useCallback(e => {
    $({
      isShuffling: false,
      onOutroComplete: () => U(e)
    }), f.default.track(L.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
      page_session_id: et,
      sort_type: e
    })
  }, [$, U, et]), el = m.Z.useConfig({
    location: "FeedBlock"
  }).showCardsV2;
  return null == D ? null : (0, r.jsxs)("div", {
    className: o()(A.popularPicksSection, A.centeredSection),
    children: [(0, r.jsxs)("div", {
      className: A.blockHeader,
      children: [(0, r.jsxs)("div", {
        className: A.headerLeft,
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-lg/semibold",
          children: i
        }), K && (0, r.jsx)(a.aML, {
          "data-migration-pending": true,
          text: I.intl.string(I.t["3taPdn"]),
          position: "top",
          "aria-label": I.intl.string(I.t["3taPdn"]),
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
              onClick: () => (0, c.Z)(p.Z.getArticleURL(L.BhN.DATA_USED_FOR_RECOMMENDED)),
              className: A.informationIcon,
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
      }), (0, r.jsxs)("div", {
        className: o()(A.headerRight, {
          [B.shopTakeOver]: F
        }),
        children: [(0, r.jsx)(a.Text, {
          variant: "text-md/medium",
          children: I.intl.string(I.t.uaX709)
        }), (0, r.jsx)("div", {
          className: w,
          children: (0, r.jsx)(a.PhF, {
            options: z,
            select: er,
            className: A.sortSelect,
            popoutClassName: o()({
              [B.shopTakeOver]: F
            }),
            isSelected: e => e === W,
            serialize: e => e
          })
        }), (0, r.jsx)("div", {
          className: w,
          children: (0, r.jsx)(a.Button, {
            variant: "secondary",
            text: I.intl.string(I.t.X3tnc3),
            buttonRef: en,
            onClick: () => {
              $({
                isShuffling: true,
                onOutroComplete: G,
                returnRef: en
              }), f.default.track(L.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                page_session_id: et
              })
            },
            disabled: X !== S.g.MOUNTED && X !== S.g.FINISHED
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: A.feed,
      children: n ? (0, r.jsx)(r.Fragment, {
        children: [...Array(12)].map((e, t) => el ? (0, r.jsx)(x.Z, {}, t + 1) : (0, r.jsx)(b.K, {}, t + 1))
      }) : Y.slice(0, P).map((e, t) => {
        let n, l = _.Z.getCategoryForProduct(e.skuId);
        if (null == e || null == l) return null;
        if (J)
          if (X === S.g.SHUFFLE_OUT) return el ? (0, r.jsx)("div", {
            className: A.shuffleOutro,
            children: (0, r.jsx)(x.Z, {
              skipPulseAnimation: true
            })
          }, "".concat(e.skuId, "-").concat(t)) : (0, r.jsx)("div", {
            className: A.shuffleOutro,
            children: (0, r.jsx)("div", {
              className: A.placeholderCard
            })
          }, "".concat(e.skuId, "-").concat(t));
          else X === S.g.SORT_OUT ? n = A.sortChangedOutro : X === S.g.SHUFFLE_IN ? n = A.shuffleIntro : X === S.g.SORT_IN && (n = A.sortChangedIntro);
        return (0, r.jsx)(h.k0, {
          newValue: {
            tilePosition: t,
            pageSection: "popular picks",
            categoryPosition: 2
          },
          children: el && (null == e ? true : e.skuId) != null ? (0, r.jsx)("div", {
            className: n,
            children: (0, r.jsx)(E.Z, {
              skuId: null == e ? true : e.skuId,
              prioritizedCurrency: Z === T.AW.ORBS ? O.tA.ORBS : true,
              onClickAnalytics: (0, O.wO)(e, Z, ee)
            })
          }) : (0, r.jsx)(v.Z, {
            product: e,
            category: l,
            user: D,
            tab: Z,
            className: n
          })
        }, null == e ? true : e.skuId)
      })
    })]
  })
}