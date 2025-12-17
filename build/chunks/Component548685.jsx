/** Chunk was on 45620 **/
/** chunk id: 548685, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => B
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
let B = e => {
  var t;
  let {
    isLoading: n,
    title: a,
    sortedSkuIds: B,
    numVisibleItems: N,
    prioritizeUserDiscounts: R,
    tab: P,
    buttonContainerClassName: w,
    orbsSupportedOnly: Z
  } = e, D = (0, o.e7)([g.default], () => g.default.getCurrentUser()), H = h.ZP.canUseCollectibles(D), M = (0, k.B)("FeedBlock"), {
    sortType: F,
    setSortType: W,
    sortedItems: U,
    sortOptions: z,
    shuffleProducts: V,
    showRecommendationOption: G
  } = (0, O.Z)({
    sortedSkuIds: B,
    isPremiumUser: H,
    prioritizeUserDiscounts: R,
    orbsSupportedOnly: Z
  }), K = (0, y.St)(U), Y = (0, o.e7)([f.Z], () => f.Z.useReducedMotion), q = (0, o.e7)([b.Z], () => b.Z.isFocused()), Q = !Y && q, {
    animationPhase: J,
    startAnimation: X
  } = (0, x.y)(), $ = (0, C.sp)(), ee = null != (t = null == $ ? true : $.sessionId) ? t : "", et = l.useRef(null), en = l.useCallback(e => {
    X({
      isShuffling: false,
      onOutroComplete: () => W(e)
    }), p.default.track(j.rMx.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
      page_session_id: ee,
      sort_type: e
    })
  }, [X, W, ee]);
  return null == D ? null : (0, r.jsxs)("div", {
    className: s()(A.popularPicksSection, A.centeredSection),
    children: [(0, r.jsxs)("div", {
      className: A.blockHeader,
      children: [(0, r.jsxs)("div", {
        className: A.headerLeft,
        children: [(0, r.jsx)(u.Heading, {
          variant: "heading-lg/semibold",
          children: a
        }), G && (0, r.jsx)(c.u, {
          text: L.intl.string(L.t["3taPdj"]),
          position: "top",
          "aria-label": L.intl.string(L.t["3taPdj"]),
          children: (0, r.jsx)(u.P3F, {
            onClick: () => (0, d.Z)(m.Z.getArticleURL(j.BhN.DATA_USED_FOR_RECOMMENDED)),
            className: A.informationIcon,
            children: (0, r.jsx)(u.d3s, {
              size: "sm"
            })
          })
        })]
      }), (0, r.jsxs)("div", {
        className: s()(A.headerRight, {
          [I.customCursors]: M
        }),
        children: [(0, r.jsx)(u.Text, {
          variant: "text-md/medium",
          children: L.intl.string(L.t.uaX705)
        }), (0, r.jsx)("div", {
          className: w,
          children: (0, r.jsx)(i.B6, {
            options: z,
            select: en,
            className: A.sortSelect,
            popoutClassName: s()({
              [I.customCursors]: M
            }),
            isSelected: e => e === F,
            serialize: e => e
          })
        }), (0, r.jsx)("div", {
          className: w,
          children: (0, r.jsx)(u.Button, {
            variant: "secondary",
            text: L.intl.string(L.t.X3tnc4),
            buttonRef: et,
            onClick: () => {
              X({
                isShuffling: true,
                onOutroComplete: V,
                returnRef: et
              }), p.default.track(j.rMx.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                page_session_id: ee
              })
            },
            disabled: J !== x.g.MOUNTED && J !== x.g.FINISHED
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: A.feed,
      children: n ? (0, r.jsx)(r.Fragment, {
        children: [...Array(12)].map((e, t) => (0, r.jsx)(_.Z, {}, t + 1))
      }) : K.slice(0, N).map((e, t) => {
        let n, l = E.Z.getCategoryForProduct(e.skuId);
        if (null == e || null == l) return null;
        if (Q)
          if (J === x.g.SHUFFLE_OUT) return (0, r.jsx)("div", {
            className: A.shuffleOutro,
            children: (0, r.jsx)(_.Z, {
              skipPulseAnimation: true
            })
          }, "".concat(e.skuId, "-").concat(t));
          else J === x.g.SORT_OUT ? n = A.sortChangedOutro : J === x.g.SHUFFLE_IN ? n = A.shuffleIntro : J === x.g.SORT_IN && (n = A.sortChangedIntro);
        return (0, r.jsx)(C.k0, {
          newValue: {
            tilePosition: t,
            pageSection: "popular picks",
            categoryPosition: 2
          },
          children: (0, r.jsx)("div", {
            className: n,
            children: (0, r.jsx)(v.Z, {
              skuId: e.skuId,
              prioritizedCurrency: P === T.AW.ORBS ? S.tA.ORBS : true,
              onClickAnalytics: (0, S.wO)(e, P, $)
            })
          })
        }, e.skuId)
      })
    })]
  })
}