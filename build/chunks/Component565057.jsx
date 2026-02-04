/** Chunk was on 59275 **/
/** chunk id: 565057, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => I
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
  Chunk201073 = require("./201073.js");
let I = e => {
  var t;
  let {
    isLoading: n,
    title: s,
    sortedSkuIds: I,
    numVisibleItems: k,
    prioritizeUserDiscounts: N,
    tab: R,
    buttonContainerClassName: P,
    orbsSupportedOnly: B
  } = e, w = (0, i.bG)([g.default], () => g.default.getCurrentUser()), D = b.Ay.canUseCollectibles(w), M = (0, O.yB)("FeedBlock"), {
    sortType: H,
    setSortType: G,
    sortedItems: U,
    sortOptions: F,
    shuffleProducts: V,
    showRecommendationOption: z
  } = (0, x.A)({
    sortedSkuIds: I,
    isPremiumUser: D,
    prioritizeUserDiscounts: N,
    orbsSupportedOnly: B
  }), K = (0, S.od)(U), W = (0, i.bG)([d.A], () => d.A.useReducedMotion), Y = (0, i.bG)([p.A], () => p.A.isFocused()), q = !W && Y, {
    animationPhase: Z,
    startAnimation: X
  } = (0, A.s)(), J = (0, h.uM)(), Q = null != (t = null == J ? true : J.sessionId) ? t : "", $ = l.useRef(null), ee = l.useCallback(e => {
    X({
      isShuffling: false,
      onOutroComplete: () => G(e)
    }), m.default.track(j.HAw.COLLECTIBLES_SHOP_FEED_SORT_CHANGED, {
      page_session_id: Q,
      sort_type: e
    })
  }, [X, G, Q]);
  return null == w ? null : (0, r.jsxs)("div", {
    className: a()(T.lD, T.YB),
    children: [(0, r.jsxs)("div", {
      className: T.$6,
      children: [(0, r.jsxs)("div", {
        className: T.LD,
        children: [(0, r.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          children: s
        }), z && (0, r.jsx)(o.m, {
          text: L.intl.string(L.t["3taPdj"]),
          position: "top",
          "aria-label": L.intl.string(L.t["3taPdj"]),
          children: (0, r.jsx)(c.DUT, {
            onClick: () => (0, u.A)(f.A.getArticleURL(j.MVz.DATA_USED_FOR_RECOMMENDED)),
            className: T.sT,
            children: (0, r.jsx)(c.mir, {
              size: "sm"
            })
          })
        })]
      }), (0, r.jsxs)("div", {
        className: a()(T.IE, {
          [O.jP]: M
        }),
        children: [(0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          children: L.intl.string(L.t.uaX705)
        }), (0, r.jsx)("div", {
          className: a()(P, T.pI),
          children: (0, r.jsx)(c.l6P, {
            label: L.intl.string(L.t.uaX705),
            hideLabel: true,
            options: F,
            onSelectionChange: ee,
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
            text: L.intl.string(L.t.X3tnc4),
            buttonRef: $,
            onClick: () => {
              X({
                isShuffling: true,
                onOutroComplete: V,
                returnRef: $
              }), m.default.track(j.HAw.COLLECTIBLES_SHOP_FEED_SHUFFLE_CLICKED, {
                page_session_id: Q
              })
            },
            disabled: Z !== A.J.MOUNTED && Z !== A.J.FINISHED
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: T.hm,
      children: n ? (0, r.jsx)(r.Fragment, {
        children: [...Array(12)].map((e, t) => (0, r.jsx)(C.A, {}, t + 1))
      }) : K.slice(0, k).map((e, t) => {
        let n, l = _.A.getCategoryForProduct(e.skuId);
        if (null == e || null == l) return null;
        if (q)
          if (Z === A.J.SHUFFLE_OUT) return (0, r.jsx)("div", {
            className: T.Z2,
            children: (0, r.jsx)(C.A, {
              skipPulseAnimation: true
            })
          }, "".concat(e.skuId, "-").concat(t));
          else Z === A.J.SORT_OUT ? n = T.MW : Z === A.J.SHUFFLE_IN ? n = T.aS : Z === A.J.SORT_IN && (n = T.F7);
        return (0, r.jsx)(h.R9, {
          newValue: {
            tilePosition: t,
            pageSection: "popular picks",
            categoryPosition: 2
          },
          children: (0, r.jsx)("div", {
            className: n,
            children: (0, r.jsx)(E.A, {
              skuId: e.skuId,
              prioritizedCurrency: R === y.G2.ORBS ? v.Hi.ORBS : true,
              onClickAnalytics: (0, v.UU)(e, R, J)
            })
          })
        }, e.skuId)
      })
    })]
  })
}