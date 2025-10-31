/** Chunk was on 3270 **/
/** chunk id: 183813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => v
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk14476 = require("./14476.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk699758 = require("./699758.js"),
  Chunk831895 = require("./831895.jsx"),
  Chunk314404 = require("./314404.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk614277 = require("./614277.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk950174 = require("./950174.js");

function v(e) {
  var t, n;
  let {
    handleStepChange: l,
    handleClose: v
  } = e, {
    selectedPlan: y,
    selectedSkuId: S,
    step: w
  } = (0, f.JL)(), {
    setSelectedGiftingPromotionReward: O,
    selectedGiftingPromotionReward: I,
    claimableRewards: P,
    claimableVariants: E
  } = (0, _.wD)(), k = (0, s.e7)([h.default], () => h.default.getCurrentUser()), M = (0, c.ZP)(P, E, I), [T, Z] = i.useState(null != (n = null == M ? true : M.defaultCategory) ? n : c.KN.Trick), [A, B] = i.useState(null == M || null == (t = M.defaultHighlightedReward) ? true : t.skuId), [N, R] = i.useState(false), H = i.useRef(T), U = i.useMemo(() => null == E ? null != P ? P : [] : E.flatMap(e => {
    var t, n;
    return e.variants.length < c.mo ? [] : (t = function(e) {
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
    }({}, e.variants[T]), n = n = {
      name: e.name
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t)
  }), [E, P, T]);
  i.useEffect(() => {
    let e = null == M ? true : M.defaultHighlightedReward;
    !N && null == I && null != e && null != e && U.some(t => t.skuId === e.skuId) && (O(e), B(e.skuId))
  }, [M, N, I, U, O]), i.useEffect(() => {
    (null == M ? true : M.defaultCategory) == null || N || Z(M.defaultCategory)
  }, [null == M ? true : M.defaultCategory, N]), a()(null != y, "Expected plan to selected"), a()(null != S, "Expected selectedSkuId"), a()(null != w, "Step should be set");
  let F = i.useMemo(() => null != A && (null != P ? P : []).some(e => e.skuId === A), [A, P]),
    G = i.useMemo(() => null != I && U.some(e => e.skuId === I.skuId), [U, I]),
    D = i.useMemo(() => 0 === U.length || null == A || !G || !F, [U, A, F, G]);
  i.useEffect(() => {
    if (0 === U.length) {
      B(true), O(true);
      return
    }
    F && U.some(e => e.skuId === A) || null == A || (B(true), O(true))
  }, [U, F, A, O]), i.useEffect(() => {
    H.current === T || G || (O(true), B(true)), H.current = T
  }, [T, G, O]);
  let W = e => {
      O(U.find(t => t.skuId === e)), B(e), R(true)
    },
    z = U.map(e => {
      var t, n;
      return (0, r.jsx)(d.c, {
        skuId: e.skuId,
        assetId: e.assetId,
        productName: null == (t = e.name) ? true : t.call(e),
        a11yLabel: null == (n = e.a11yLabel) ? true : n.call(e),
        claimed: null != P && P.every(t => t.skuId !== e.skuId),
        user: k,
        onSelect: W,
        selectedSkuId: A,
        category: T
      }, e.skuId)
    }),
    K = (0, r.jsx)(j.O3, {
      children: (0, r.jsx)(o.mzw, {
        "data-migration-pending": true,
        className: L.modalFooter,
        children: (0, r.jsx)(p.y, {
          onStepChange: e => {
            null != k && null != I && m.default.track(g.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: k.id,
              reward_sku_id: I.skuId
            }), l(e)
          },
          onBackClick: () => l(x.h8.PLAN_SELECT),
          shouldRenderUpdatedPaymentModal: true,
          showBackButton: true,
          planOptions: [y.id],
          selectedPlanId: y.id,
          isNextDisabled: D
        })
      })
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(o.xBx, {
      "data-migration-pending": true,
      className: L.modalHeader,
      direction: C.Z.Direction.VERTICAL,
      align: C.Z.Align.START,
      separator: false,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-lg/bold",
        color: "header-primary",
        children: b.intl.string(b.t["3JCuX1"])
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: L.headerSubtitle,
        children: b.intl.string(b.t.MhwtRc)
      }), (0, r.jsx)(o.olH, {
        "data-migration-pending": true,
        className: L.closeButton,
        onClick: v
      })]
    }), (0, r.jsx)(o.hzk, {
      "data-migration-pending": true,
      children: (0, r.jsxs)(o.Kqy, {
        direction: "vertical",
        justify: "center",
        align: "center",
        children: [null != E && E.length > 1 && (0, r.jsx)(u.Z, {
          defaultCategory: T,
          onCategoryChange: Z
        }), (0, r.jsx)("div", {
          className: L.giftRewardShopCardsGrid,
          children: z
        })]
      })
    }), K]
  })
}