/** Chunk was on 59275 **/
/** chunk id: 565057, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => k
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk975807 = require("./975807.js"),
  Chunk775602 = require("./775602.js"),
  Chunk287809 = require("./287809.js"),
  Chunk531685 = require("./531685.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk440938 = require("./440938.jsx"),
  Chunk590180 = require("./590180.js"),
  Chunk751304 = require("./751304.jsx"),
  Chunk561769 = require("./561769.js"),
  Chunk484469 = require("./484469.jsx"),
  Chunk917987 = require("./917987.js"),
  Chunk4196 = require("./4196.js"),
  Chunk940622 = require("./940622.js"),
  Chunk938191 = require("./938191.js"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk816917 = require("./816917.js"),
  Chunk201073 = require("./201073.js");
let k = e => {
  var t;
  let {
    isLoading: n,
    title: s,
    sortedSkuIds: k,
    numVisibleItems: N,
    prioritizeUserDiscounts: R,
    tab: P,
    buttonContainerClassName: B,
    orbsSupportedOnly: w
  } = e, D = (0, i.bG)([g.default], () => g.default.getCurrentUser()), M = _.Ay.canUseCollectibles(D), H = (0, O.y)("FeedBlock"), {
    sortType: G,
    setSortType: U,
    sortedItems: F,
    sortOptions: z,
    shuffleProducts: V,
    showRecommendationOption: K
  } = (0, x.A)({
    sortedSkuIds: k,
    isPremiumUser: M,
    prioritizeUserDiscounts: R,
    orbsSupportedOnly: w
  }), W = (0, S.od)(F), Y = (0, i.bG)([d.A], () => d.A.useReducedMotion), q = (0, i.bG)([f.A], () => f.A.isFocused()), Z = !Y && q, {
    animationPhase: X,
    startAnimation: J
  } = (0, A.s)(), Q = (0, b.uM)(), $ = null != (t = null == Q ? true : Q.sessionId) ? t : "", ee = l.useRef(null), et = l.useCallback(e => {
    J({
      isShuffling: false,
      onOutroComplete: () => U(e)
    }), m.default.track(j.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
      page_session_id: $,
      sort_type: e
    })
  }, [J, U, $]);
  return null == D ? null : (0, r.jsxs)("div", {
    className: a()(I.lD, I.YB),
    children: [(0, r.jsxs)("div", {
      className: I.$6,
      children: [(0, r.jsxs)("div", {
        className: I.LD,
        children: [(0, r.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          children: s
        }), K && (0, r.jsx)(o.m, {
          text: T.intl.string(T.t["3taPdj"]),
          position: "top",
          "aria-label": T.intl.string(T.t["3taPdj"]),
          children: (0, r.jsx)(c.DUT, {
            onClick: () => (0, u.A)(p.A.getArticleURL(j.MVz.DATA_USED_FOR_RECOMMENDED)),
            className: I.sT,
            children: (0, r.jsx)(c.mir, {
              size: "sm"
            })
          })
        })]
      }), (0, r.jsxs)("div", {
        className: a()(I.IE, {
          [L.T3]: H
        }),
        children: [(0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          children: T.intl.string(T.t.uaX705)
        }), (0, r.jsx)("div", {
          className: a()(B, I.pI),
          children: (0, r.jsx)(c.l6P, {
            label: T.intl.string(T.t.uaX705),
            hideLabel: true,
            options: z,
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
            value: G,
            selectionMode: "single",
            fullWidth: true
          })
        }), (0, r.jsx)("div", {
          className: B,
          children: (0, r.jsx)(c.Button, {
            variant: "secondary",
            text: T.intl.string(T.t.X3tnc4),
            buttonRef: ee,
            onClick: () => {
              J({
                isShuffling: true,
                onOutroComplete: V,
                returnRef: ee
              }), m.default.track(j.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                page_session_id: $
              })
            },
            disabled: X !== A.J.MOUNTED && X !== A.J.FINISHED
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: I.hm,
      children: n ? (0, r.jsx)(r.Fragment, {
        children: [...Array(12)].map((e, t) => (0, r.jsx)(C.A, {}, t + 1))
      }) : W.slice(0, N).map((e, t) => {
        let n, l = h.A.getCategoryForProduct(e.skuId);
        if (null == e || null == l) return null;
        if (Z)
          if (X === A.J.SHUFFLE_OUT) return (0, r.jsx)("div", {
            className: I.Z2,
            children: (0, r.jsx)(C.A, {
              skipPulseAnimation: true
            })
          }, "".concat(e.skuId, "-").concat(t));
          else X === A.J.SORT_OUT ? n = I.MW : X === A.J.SHUFFLE_IN ? n = I.aS : X === A.J.SORT_IN && (n = I.F7);
        return (0, r.jsx)(b.R9, {
          newValue: {
            tilePosition: t,
            pageSection: "popular picks",
            categoryPosition: 2
          },
          children: (0, r.jsx)("div", {
            className: n,
            children: (0, r.jsx)(E.A, {
              skuId: e.skuId,
              prioritizedCurrency: P === y.G2.ORBS ? v.Hi.ORBS : true,
              onClickAnalytics: (0, v.UU)(e, P, Q)
            })
          })
        }, e.skuId)
      })
    })]
  })
}