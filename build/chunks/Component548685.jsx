/** Chunk was on 45620 **/
/** chunk id: 548685, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk219588 = require("./219588.js"),
  Chunk310582 = require("./310582.js");
let P = e => {
  var t;
  let {
    isLoading: n,
    title: i,
    sortedSkuIds: P,
    numVisibleItems: B,
    prioritizeUserDiscounts: N,
    tab: A,
    buttonContainerClassName: R,
    orbsSupportedOnly: Z
  } = e, w = (0, a.e7)([f.default], () => f.default.getCurrentUser()), H = h.ZP.canUseCollectibles(w), D = (0, y.B)("FeedBlock"), {
    sortType: M,
    setSortType: F,
    sortedItems: W,
    sortOptions: V,
    shuffleProducts: U,
    showRecommendationOption: z
  } = (0, O.Z)({
    sortedSkuIds: P,
    isPremiumUser: H,
    prioritizeUserDiscounts: N,
    orbsSupportedOnly: Z
  }), G = (0, S.St)(W), K = (0, a.e7)([d.Z], () => d.Z.useReducedMotion), Y = (0, a.e7)([g.Z], () => g.Z.isFocused()), q = !K && Y, {
    animationPhase: J,
    startAnimation: Q
  } = (0, E.y)(), X = (0, C.sp)(), $ = null != (t = null == X ? true : X.sessionId) ? t : "", ee = l.useRef(null), et = l.useCallback(e => {
    Q({
      isShuffling: false,
      onOutroComplete: () => F(e)
    }), p.default.track(I.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
      page_session_id: $,
      sort_type: e
    })
  }, [Q, F, $]);
  return null == w ? null : (0, r.jsxs)("div", {
    className: o()(L.popularPicksSection, L.centeredSection),
    children: [(0, r.jsxs)("div", {
      className: L.blockHeader,
      children: [(0, r.jsxs)("div", {
        className: L.headerLeft,
        children: [(0, r.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          children: i
        }), z && (0, r.jsx)(s.u, {
          text: k.intl.string(k.t["3taPdj"]),
          position: "top",
          "aria-label": k.intl.string(k.t["3taPdj"]),
          children: (0, r.jsx)(c.P3F, {
            onClick: () => (0, u.Z)(m.Z.getArticleURL(I.BhN.DATA_USED_FOR_RECOMMENDED)),
            className: L.informationIcon,
            children: (0, r.jsx)(c.d3s, {
              size: "sm"
            })
          })
        })]
      }), (0, r.jsxs)("div", {
        className: o()(L.headerRight, {
          [T.customCursors]: D
        }),
        children: [(0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          children: k.intl.string(k.t.uaX705)
        }), (0, r.jsx)("div", {
          className: R,
          children: (0, r.jsx)(c.PhF, {
            options: V,
            select: et,
            className: L.sortSelect,
            popoutClassName: o()({
              [T.customCursors]: D
            }),
            isSelected: e => e === M,
            serialize: e => e
          })
        }), (0, r.jsx)("div", {
          className: R,
          children: (0, r.jsx)(c.Button, {
            variant: "secondary",
            text: k.intl.string(k.t.X3tnc4),
            buttonRef: ee,
            onClick: () => {
              Q({
                isShuffling: true,
                onOutroComplete: U,
                returnRef: ee
              }), p.default.track(I.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                page_session_id: $
              })
            },
            disabled: J !== E.g.MOUNTED && J !== E.g.FINISHED
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: L.feed,
      children: n ? (0, r.jsx)(r.Fragment, {
        children: [...Array(12)].map((e, t) => (0, r.jsx)(x.Z, {}, t + 1))
      }) : G.slice(0, B).map((e, t) => {
        let n, l = _.Z.getCategoryForProduct(e.skuId);
        if (null == e || null == l) return null;
        if (q)
          if (J === E.g.SHUFFLE_OUT) return (0, r.jsx)("div", {
            className: L.shuffleOutro,
            children: (0, r.jsx)(x.Z, {
              skipPulseAnimation: true
            })
          }, "".concat(e.skuId, "-").concat(t));
          else J === E.g.SORT_OUT ? n = L.sortChangedOutro : J === E.g.SHUFFLE_IN ? n = L.shuffleIntro : J === E.g.SORT_IN && (n = L.sortChangedIntro);
        return (0, r.jsx)(C.k0, {
          newValue: {
            tilePosition: t,
            pageSection: "popular picks",
            categoryPosition: 2
          },
          children: (0, r.jsx)("div", {
            className: n,
            children: (0, r.jsx)(b.Z, {
              skuId: e.skuId,
              prioritizedCurrency: A === j.AW.ORBS ? v.tA.ORBS : true,
              onClickAnalytics: (0, v.wO)(e, A, X)
            })
          })
        }, e.skuId)
      })
    })]
  })
}