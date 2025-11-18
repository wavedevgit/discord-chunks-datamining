/** Chunk was on 45620 **/
/** chunk id: 548685, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk786040 = require("./786040.js"),
  Chunk401975 = require("./401975.jsx"),
  Chunk328626 = require("./328626.js"),
  Chunk849275 = require("./849275.js"),
  Chunk619899 = require("./619899.js"),
  Chunk811847 = require("./811847.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk664603 = require("./664603.js"),
  Chunk687983 = require("./687983.js");
let A = e => {
  var t;
  let {
    isLoading: n,
    title: i,
    sortedSkuIds: A,
    numVisibleItems: R,
    prioritizeUserDiscounts: Z,
    tab: w,
    buttonContainerClassName: H,
    orbsSupportedOnly: D
  } = e, M = (0, s.e7)([g.default], () => g.default.getCurrentUser()), F = h.ZP.canUseCollectibles(M), W = (0, I.B)("FeedBlock"), {
    sortType: V,
    setSortType: U,
    sortedItems: z,
    sortOptions: G,
    shuffleProducts: K,
    showRecommendationOption: Y
  } = (0, j.Z)({
    sortedSkuIds: A,
    isPremiumUser: F,
    prioritizeUserDiscounts: Z,
    orbsSupportedOnly: D
  }), q = (0, k.St)(z), J = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), Q = (0, s.e7)([p.Z], () => p.Z.isFocused()), X = !J && Q, {
    animationPhase: $,
    startAnimation: ee
  } = (0, y.y)(), et = (0, C.sp)(), en = null != (t = null == et ? true : et.sessionId) ? t : "", er = l.useRef(null), el = l.useCallback(e => {
    ee({
      isShuffling: false,
      onOutroComplete: () => U(e)
    }), f.default.track(L.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
      page_session_id: en,
      sort_type: e
    })
  }, [ee, U, en]), ei = b.Z.useConfig({
    location: "FeedBlock"
  }).showCardsV2;
  return null == M ? null : (0, r.jsxs)("div", {
    className: a()(N.popularPicksSection, N.centeredSection),
    children: [(0, r.jsxs)("div", {
      className: N.blockHeader,
      children: [(0, r.jsxs)("div", {
        className: N.headerLeft,
        children: [(0, r.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          children: i
        }), Y && (0, r.jsx)(o.u, {
          text: B.intl.string(B.t["3taPdj"]),
          position: "top",
          "aria-label": B.intl.string(B.t["3taPdj"]),
          children: (0, r.jsx)(c.P3F, {
            onClick: () => (0, u.Z)(m.Z.getArticleURL(L.BhN.DATA_USED_FOR_RECOMMENDED)),
            className: N.informationIcon,
            children: (0, r.jsx)(c.d3s, {
              size: "sm"
            })
          })
        })]
      }), (0, r.jsxs)("div", {
        className: a()(N.headerRight, {
          [P.customCursors]: W
        }),
        children: [(0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          children: B.intl.string(B.t.uaX705)
        }), (0, r.jsx)("div", {
          className: H,
          children: (0, r.jsx)(c.PhF, {
            options: G,
            select: el,
            className: N.sortSelect,
            popoutClassName: a()({
              [P.customCursors]: W
            }),
            isSelected: e => e === V,
            serialize: e => e
          })
        }), (0, r.jsx)("div", {
          className: H,
          children: (0, r.jsx)(c.Button, {
            variant: "secondary",
            text: B.intl.string(B.t.X3tnc4),
            buttonRef: er,
            onClick: () => {
              ee({
                isShuffling: true,
                onOutroComplete: K,
                returnRef: er
              }), f.default.track(L.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                page_session_id: en
              })
            },
            disabled: $ !== y.g.MOUNTED && $ !== y.g.FINISHED
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: N.feed,
      children: n ? (0, r.jsx)(r.Fragment, {
        children: [...Array(12)].map((e, t) => ei ? (0, r.jsx)(S.Z, {}, t + 1) : (0, r.jsx)(v.K, {}, t + 1))
      }) : q.slice(0, R).map((e, t) => {
        let n, l = _.Z.getCategoryForProduct(e.skuId);
        if (null == e || null == l) return null;
        if (X)
          if ($ === y.g.SHUFFLE_OUT) return ei ? (0, r.jsx)("div", {
            className: N.shuffleOutro,
            children: (0, r.jsx)(S.Z, {
              skipPulseAnimation: true
            })
          }, "".concat(e.skuId, "-").concat(t)) : (0, r.jsx)("div", {
            className: N.shuffleOutro,
            children: (0, r.jsx)("div", {
              className: N.placeholderCard
            })
          }, "".concat(e.skuId, "-").concat(t));
          else $ === y.g.SORT_OUT ? n = N.sortChangedOutro : $ === y.g.SHUFFLE_IN ? n = N.shuffleIntro : $ === y.g.SORT_IN && (n = N.sortChangedIntro);
        return (0, r.jsx)(C.k0, {
          newValue: {
            tilePosition: t,
            pageSection: "popular picks",
            categoryPosition: 2
          },
          children: ei && (null == e ? true : e.skuId) != null ? (0, r.jsx)("div", {
            className: n,
            children: (0, r.jsx)(E.Z, {
              skuId: null == e ? true : e.skuId,
              prioritizedCurrency: w === T.AW.ORBS ? O.tA.ORBS : true,
              onClickAnalytics: (0, O.wO)(e, w, et)
            })
          }) : (0, r.jsx)(x.Z, {
            product: e,
            category: l,
            user: M,
            tab: w,
            className: n
          })
        }, null == e ? true : e.skuId)
      })
    })]
  })
}