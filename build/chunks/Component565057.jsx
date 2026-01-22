/** Chunk was on 59275 **/
/** chunk id: 565057, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => N
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
let N = e => {
  var t;
  let {
    isLoading: l,
    title: s,
    sortedSkuIds: N,
    numVisibleItems: k,
    prioritizeUserDiscounts: R,
    tab: P,
    buttonContainerClassName: D,
    orbsSupportedOnly: w
  } = e, B = (0, i.bG)([f.default], () => f.default.getCurrentUser()), M = m.Ay.canUseCollectibles(B), H = (0, _.y)("FeedBlock"), {
    sortType: G,
    setSortType: F,
    sortedItems: U,
    sortOptions: z,
    shuffleProducts: V,
    showRecommendationOption: K
  } = (0, C.A)({
    sortedSkuIds: N,
    isPremiumUser: M,
    prioritizeUserDiscounts: R,
    orbsSupportedOnly: w
  }), W = (0, O.od)(U), Y = (0, i.bG)([d.A], () => d.A.useReducedMotion), q = (0, i.bG)([b.A], () => b.A.isFocused()), Z = !Y && q, {
    animationPhase: X,
    startAnimation: J
  } = (0, S.s)(), Q = (0, h.uM)(), $ = null != (t = null == Q ? true : Q.sessionId) ? t : "", ee = r.useRef(null), et = r.useCallback(e => {
    J({
      isShuffling: false,
      onOutroComplete: () => F(e)
    }), g.default.track(j.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
      page_session_id: $,
      sort_type: e
    })
  }, [J, F, $]);
  return null == B ? null : (0, n.jsxs)("div", {
    className: a()(I.lD, I.YB),
    children: [(0, n.jsxs)("div", {
      className: I.$6,
      children: [(0, n.jsxs)("div", {
        className: I.LD,
        children: [(0, n.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          children: s
        }), K && (0, n.jsx)(o.m, {
          text: L.intl.string(L.t["3taPdj"]),
          position: "top",
          "aria-label": L.intl.string(L.t["3taPdj"]),
          children: (0, n.jsx)(c.DUT, {
            onClick: () => (0, u.A)(p.A.getArticleURL(j.MVz.DATA_USED_FOR_RECOMMENDED)),
            className: I.sT,
            children: (0, n.jsx)(c.mir, {
              size: "sm"
            })
          })
        })]
      }), (0, n.jsxs)("div", {
        className: a()(I.IE, {
          [T.T3]: H
        }),
        children: [(0, n.jsx)(c.Text, {
          variant: "text-md/medium",
          children: L.intl.string(L.t.uaX705)
        }), (0, n.jsx)("div", {
          className: a()(D, I.pI),
          children: (0, n.jsx)(c.l6P, {
            label: L.intl.string(L.t.uaX705),
            hideLabel: true,
            options: z,
            onSelectionChange: et,
            formatOption: e => {
              let {
                label: t,
                value: l
              } = e;
              return {
                id: l,
                label: t,
                value: l
              }
            },
            value: G,
            selectionMode: "single",
            fullWidth: true
          })
        }), (0, n.jsx)("div", {
          className: D,
          children: (0, n.jsx)(c.Button, {
            variant: "secondary",
            text: L.intl.string(L.t.X3tnc4),
            buttonRef: ee,
            onClick: () => {
              J({
                isShuffling: true,
                onOutroComplete: V,
                returnRef: ee
              }), g.default.track(j.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                page_session_id: $
              })
            },
            disabled: X !== S.J.MOUNTED && X !== S.J.FINISHED
          })
        })]
      })]
    }), (0, n.jsx)("div", {
      className: I.hm,
      children: l ? (0, n.jsx)(n.Fragment, {
        children: [...Array(12)].map((e, t) => (0, n.jsx)(x.A, {}, t + 1))
      }) : W.slice(0, k).map((e, t) => {
        let l, r = E.A.getCategoryForProduct(e.skuId);
        if (null == e || null == r) return null;
        if (Z)
          if (X === S.J.SHUFFLE_OUT) return (0, n.jsx)("div", {
            className: I.Z2,
            children: (0, n.jsx)(x.A, {
              skipPulseAnimation: true
            })
          }, "".concat(e.skuId, "-").concat(t));
          else X === S.J.SORT_OUT ? l = I.MW : X === S.J.SHUFFLE_IN ? l = I.aS : X === S.J.SORT_IN && (l = I.F7);
        return (0, n.jsx)(h.R9, {
          newValue: {
            tilePosition: t,
            pageSection: "popular picks",
            categoryPosition: 2
          },
          children: (0, n.jsx)("div", {
            className: l,
            children: (0, n.jsx)(v.A, {
              skuId: e.skuId,
              prioritizedCurrency: P === y.G2.ORBS ? A.Hi.ORBS : true,
              onClickAnalytics: (0, A.UU)(e, P, Q)
            })
          })
        }, e.skuId)
      })
    })]
  })
}