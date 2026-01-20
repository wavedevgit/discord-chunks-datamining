/** Chunk was on 45620 **/
/** chunk id: 548685, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk868090 = require("./868090.js"),
  Chunk222194 = require("./222194.js");
let A = e => {
  var t;
  let {
    isLoading: n,
    title: a,
    sortedSkuIds: A,
    numVisibleItems: B,
    prioritizeUserDiscounts: N,
    tab: R,
    buttonContainerClassName: P,
    orbsSupportedOnly: w
  } = e, Z = (0, i.e7)([f.default], () => f.default.getCurrentUser()), D = h.ZP.canUseCollectibles(Z), M = (0, y.B)("FeedBlock"), {
    sortType: H,
    setSortType: F,
    sortedItems: W,
    sortOptions: U,
    shuffleProducts: z,
    showRecommendationOption: V
  } = (0, O.Z)({
    sortedSkuIds: A,
    isPremiumUser: D,
    prioritizeUserDiscounts: N,
    orbsSupportedOnly: w
  }), G = (0, _.St)(W), K = (0, i.e7)([d.Z], () => d.Z.useReducedMotion), Y = (0, i.e7)([g.Z], () => g.Z.isFocused()), q = !K && Y, {
    animationPhase: Q,
    startAnimation: X
  } = (0, S.y)(), J = (0, m.sp)(), $ = null != (t = null == J ? true : J.sessionId) ? t : "", ee = l.useRef(null), et = l.useCallback(e => {
    X({
      isShuffling: false,
      onOutroComplete: () => F(e)
    }), b.default.track(k.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
      page_session_id: $,
      sort_type: e
    })
  }, [X, F, $]);
  return null == Z ? null : (0, r.jsxs)("div", {
    className: s()(L.popularPicksSection, L.centeredSection),
    children: [(0, r.jsxs)("div", {
      className: L.blockHeader,
      children: [(0, r.jsxs)("div", {
        className: L.headerLeft,
        children: [(0, r.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          children: a
        }), V && (0, r.jsx)(o.u, {
          text: T.intl.string(T.t["3taPdj"]),
          position: "top",
          "aria-label": T.intl.string(T.t["3taPdj"]),
          children: (0, r.jsx)(c.P3F, {
            onClick: () => (0, u.Z)(p.Z.getArticleURL(k.BhN.DATA_USED_FOR_RECOMMENDED)),
            className: L.informationIcon,
            children: (0, r.jsx)(c.d3s, {
              size: "sm"
            })
          })
        })]
      }), (0, r.jsxs)("div", {
        className: s()(L.headerRight, {
          [I.customCursors]: M
        }),
        children: [(0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          children: T.intl.string(T.t.uaX705)
        }), (0, r.jsx)("div", {
          className: s()(P, L.sortSelect),
          children: (0, r.jsx)(c.PhF, {
            label: T.intl.string(T.t.uaX705),
            hideLabel: true,
            options: U,
            onSelectionChange: et,
            formatOption: e => {
              let {
                label: t,
                value: n
              } = e;
              return {
                id: n,
                label: t,
                value: n
              }
            },
            value: H,
            selectionMode: "single",
            fullWidth: true
          })
        }), (0, r.jsx)("div", {
          className: P,
          children: (0, r.jsx)(c.Button, {
            variant: "secondary",
            text: T.intl.string(T.t.X3tnc4),
            buttonRef: ee,
            onClick: () => {
              X({
                isShuffling: true,
                onOutroComplete: z,
                returnRef: ee
              }), b.default.track(k.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                page_session_id: $
              })
            },
            disabled: Q !== S.g.MOUNTED && Q !== S.g.FINISHED
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: L.feed,
      children: n ? (0, r.jsx)(r.Fragment, {
        children: [...Array(12)].map((e, t) => (0, r.jsx)(x.Z, {}, t + 1))
      }) : G.slice(0, B).map((e, t) => {
        let n, l = C.Z.getCategoryForProduct(e.skuId);
        if (null == e || null == l) return null;
        if (q)
          if (Q === S.g.SHUFFLE_OUT) return (0, r.jsx)("div", {
            className: L.shuffleOutro,
            children: (0, r.jsx)(x.Z, {
              skipPulseAnimation: true
            })
          }, "".concat(e.skuId, "-").concat(t));
          else Q === S.g.SORT_OUT ? n = L.sortChangedOutro : Q === S.g.SHUFFLE_IN ? n = L.shuffleIntro : Q === S.g.SORT_IN && (n = L.sortChangedIntro);
        return (0, r.jsx)(m.k0, {
          newValue: {
            tilePosition: t,
            pageSection: "popular picks",
            categoryPosition: 2
          },
          children: (0, r.jsx)("div", {
            className: n,
            children: (0, r.jsx)(E.Z, {
              skuId: e.skuId,
              prioritizedCurrency: R === j.AW.ORBS ? v.tA.ORBS : true,
              onClickAnalytics: (0, v.wO)(e, R, J)
            })
          })
        }, e.skuId)
      })
    })]
  })
}