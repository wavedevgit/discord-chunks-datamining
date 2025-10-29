/** Chunk was on 45620 **/
/** chunk id: 548685, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk685816 = require("./685816.js"),
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
  Chunk642909 = require("./642909.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk345213 = require("./345213.js"),
  Chunk310582 = require("./310582.js");
let R = e => {
  var t;
  let {
    isLoading: n,
    title: i,
    sortedSkuIds: R,
    numVisibleItems: Z,
    prioritizeUserDiscounts: w,
    tab: H,
    buttonContainerClassName: D,
    orbsSupportedOnly: M
  } = e, F = (0, o.e7)([p.default], () => p.default.getCurrentUser()), W = _.ZP.canUseCollectibles(F), V = (0, I.G)("FeedBlock"), {
    sortType: U,
    setSortType: z,
    sortedItems: G,
    sortOptions: K,
    shuffleProducts: Y,
    showRecommendationOption: q
  } = (0, k.Z)({
    sortedSkuIds: R,
    isPremiumUser: W,
    prioritizeUserDiscounts: w,
    orbsSupportedOnly: M
  }), J = (0, T.St)(G), Q = (0, o.e7)([g.Z], () => g.Z.useReducedMotion), X = (0, o.e7)([f.Z], () => f.Z.isFocused()), $ = !Q && X, {
    animationPhase: ee,
    startAnimation: et
  } = (0, j.y)(), en = (0, m.sp)(), er = null != (t = null == en ? true : en.sessionId) ? t : "", el = l.useRef(null), ei = l.useCallback(e => {
    et({
      isShuffling: false,
      onOutroComplete: () => z(e)
    }), h.default.track(B.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
      page_session_id: er,
      sort_type: e
    })
  }, [et, z, er]), ea = v.Z.useConfig({
    location: "FeedBlock"
  }).showCardsV2;
  return null == F ? null : (0, r.jsxs)("div", {
    className: a()(N.popularPicksSection, N.centeredSection),
    children: [(0, r.jsxs)("div", {
      className: N.blockHeader,
      children: [(0, r.jsxs)("div", {
        className: N.headerLeft,
        children: [(0, r.jsx)(u.Heading, {
          variant: "heading-lg/semibold",
          children: i
        }), q && (0, r.jsx)(c.u, {
          text: P.intl.string(P.t["3taPdj"]),
          position: "top",
          "aria-label": P.intl.string(P.t["3taPdj"]),
          children: (0, r.jsx)(u.P3F, {
            onClick: () => (0, d.Z)(C.Z.getArticleURL(B.BhN.DATA_USED_FOR_RECOMMENDED)),
            className: N.informationIcon,
            children: (0, r.jsx)(u.d3s, {
              size: "sm"
            })
          })
        })]
      }), (0, r.jsxs)("div", {
        className: a()(N.headerRight, {
          [A.shopTakeOver]: V
        }),
        children: [(0, r.jsx)(u.Text, {
          variant: "text-md/medium",
          children: P.intl.string(P.t.uaX705)
        }), (0, r.jsx)("div", {
          className: D,
          children: (0, r.jsx)(u.PhF, {
            options: K,
            select: ei,
            className: N.sortSelect,
            popoutClassName: a()({
              [A.shopTakeOver]: V
            }),
            isSelected: e => e === U,
            serialize: e => e
          })
        }), (0, r.jsx)("div", {
          className: D,
          children: (0, r.jsx)(u.Button, {
            variant: "secondary",
            text: P.intl.string(P.t.X3tnc4),
            buttonRef: el,
            onClick: () => {
              et({
                isShuffling: true,
                onOutroComplete: Y,
                returnRef: el
              }), h.default.track(B.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                page_session_id: er
              })
            },
            disabled: ee !== j.g.MOUNTED && ee !== j.g.FINISHED
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: N.feed,
      children: n ? (0, r.jsx)(r.Fragment, {
        children: [...Array(12)].map((e, t) => ea ? (0, r.jsx)(y.Z, {}, t + 1) : (0, r.jsx)(E.K, {}, t + 1))
      }) : J.slice(0, Z).map((e, t) => {
        let n, l = b.Z.getCategoryForProduct(e.skuId);
        if (null == e || null == l) return null;
        if ($)
          if (ee === j.g.SHUFFLE_OUT) return ea ? (0, r.jsx)("div", {
            className: N.shuffleOutro,
            children: (0, r.jsx)(y.Z, {
              skipPulseAnimation: true
            })
          }, "".concat(e.skuId, "-").concat(t)) : (0, r.jsx)("div", {
            className: N.shuffleOutro,
            children: (0, r.jsx)("div", {
              className: N.placeholderCard
            })
          }, "".concat(e.skuId, "-").concat(t));
          else ee === j.g.SORT_OUT ? n = N.sortChangedOutro : ee === j.g.SHUFFLE_IN ? n = N.shuffleIntro : ee === j.g.SORT_IN && (n = N.sortChangedIntro);
        return (0, r.jsx)(m.k0, {
          newValue: {
            tilePosition: t,
            pageSection: "popular picks",
            categoryPosition: 2
          },
          children: ea && (null == e ? true : e.skuId) != null ? (0, r.jsx)("div", {
            className: n,
            children: (0, r.jsx)(O.Z, {
              skuId: null == e ? true : e.skuId,
              prioritizedCurrency: H === L.AW.ORBS ? S.tA.ORBS : true,
              onClickAnalytics: (0, S.wO)(e, H, en)
            })
          }) : (0, r.jsx)(x.Z, {
            product: e,
            category: l,
            user: F,
            tab: H,
            className: n,
            shopBlockType: s.z.FEED
          })
        }, null == e ? true : e.skuId)
      })
    })]
  })
}