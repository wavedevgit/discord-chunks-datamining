/** Chunk was on 45620 **/
/** chunk id: 548685, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
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
    numVisibleItems: N,
    prioritizeUserDiscounts: P,
    tab: R,
    buttonContainerClassName: Z,
    orbsSupportedOnly: w
  } = e, H = (0, o.e7)([g.default], () => g.default.getCurrentUser()), D = h.ZP.canUseCollectibles(H), M = (0, j.B)("FeedBlock"), {
    sortType: F,
    setSortType: W,
    sortedItems: U,
    sortOptions: V,
    shuffleProducts: z,
    showRecommendationOption: G
  } = (0, x.Z)({
    sortedSkuIds: A,
    isPremiumUser: D,
    prioritizeUserDiscounts: P,
    orbsSupportedOnly: w
  }), K = (0, y.St)(U), Y = (0, o.e7)([f.Z], () => f.Z.useReducedMotion), q = (0, o.e7)([p.Z], () => p.Z.isFocused()), Q = !Y && q, {
    animationPhase: J,
    startAnimation: X
  } = (0, O.y)(), $ = (0, C.sp)(), ee = null != (t = null == $ ? true : $.sessionId) ? t : "", et = l.useRef(null), en = l.useCallback(e => {
    X({
      isShuffling: false,
      onOutroComplete: () => W(e)
    }), b.default.track(T.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
      page_session_id: ee,
      sort_type: e
    })
  }, [X, W, ee]);
  return null == H ? null : (0, r.jsxs)("div", {
    className: i()(B.popularPicksSection, B.centeredSection),
    children: [(0, r.jsxs)("div", {
      className: B.blockHeader,
      children: [(0, r.jsxs)("div", {
        className: B.headerLeft,
        children: [(0, r.jsx)(u.Heading, {
          variant: "heading-lg/semibold",
          children: a
        }), G && (0, r.jsx)(c.u, {
          text: I.intl.string(I.t["3taPdj"]),
          position: "top",
          "aria-label": I.intl.string(I.t["3taPdj"]),
          children: (0, r.jsx)(u.P3F, {
            onClick: () => (0, d.Z)(m.Z.getArticleURL(T.BhN.DATA_USED_FOR_RECOMMENDED)),
            className: B.informationIcon,
            children: (0, r.jsx)(u.d3s, {
              size: "sm"
            })
          })
        })]
      }), (0, r.jsxs)("div", {
        className: i()(B.headerRight, {
          [L.customCursors]: M
        }),
        children: [(0, r.jsx)(u.Text, {
          variant: "text-md/medium",
          children: I.intl.string(I.t.uaX705)
        }), (0, r.jsx)("div", {
          className: Z,
          children: (0, r.jsx)(s.B6, {
            options: V,
            select: en,
            className: B.sortSelect,
            popoutClassName: i()({
              [L.customCursors]: M
            }),
            isSelected: e => e === F,
            serialize: e => e
          })
        }), (0, r.jsx)("div", {
          className: Z,
          children: (0, r.jsx)(u.Button, {
            variant: "secondary",
            text: I.intl.string(I.t.X3tnc4),
            buttonRef: et,
            onClick: () => {
              X({
                isShuffling: true,
                onOutroComplete: z,
                returnRef: et
              }), b.default.track(T.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                page_session_id: ee
              })
            },
            disabled: J !== O.g.MOUNTED && J !== O.g.FINISHED
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: B.feed,
      children: n ? (0, r.jsx)(r.Fragment, {
        children: [...Array(12)].map((e, t) => (0, r.jsx)(_.Z, {}, t + 1))
      }) : K.slice(0, N).map((e, t) => {
        let n, l = v.Z.getCategoryForProduct(e.skuId);
        if (null == e || null == l) return null;
        if (Q)
          if (J === O.g.SHUFFLE_OUT) return (0, r.jsx)("div", {
            className: B.shuffleOutro,
            children: (0, r.jsx)(_.Z, {
              skipPulseAnimation: true
            })
          }, "".concat(e.skuId, "-").concat(t));
          else J === O.g.SORT_OUT ? n = B.sortChangedOutro : J === O.g.SHUFFLE_IN ? n = B.shuffleIntro : J === O.g.SORT_IN && (n = B.sortChangedIntro);
        return (0, r.jsx)(C.k0, {
          newValue: {
            tilePosition: t,
            pageSection: "popular picks",
            categoryPosition: 2
          },
          children: (0, r.jsx)("div", {
            className: n,
            children: (0, r.jsx)(E.Z, {
              skuId: e.skuId,
              prioritizedCurrency: R === k.AW.ORBS ? S.tA.ORBS : true,
              onClickAnalytics: (0, S.wO)(e, R, $)
            })
          })
        }, e.skuId)
      })
    })]
  })
}