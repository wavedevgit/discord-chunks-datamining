/** Chunk was on 37786 **/
/** chunk id: 183813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => L
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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
  Chunk739621 = require("./739621.js");

function L(e) {
  var t, n;
  let {
    handleStepChange: a,
    handleClose: L
  } = e, {
    selectedPlan: v,
    selectedSkuId: S,
    step: O
  } = (0, m.JL)(), {
    setSelectedGiftingPromotionReward: P,
    selectedGiftingPromotionReward: w,
    claimableRewards: E,
    claimableVariants: I
  } = (0, h.wD)(), k = (0, l.e7)([_.default], () => _.default.getCurrentUser()), T = (0, c.ZP)(E, I, w), [A, M] = i.useState(null != (n = null == T ? true : T.defaultCategory) ? n : c.KN.Trick), [Z, N] = i.useState(null == T || null == (t = T.defaultHighlightedReward) ? true : t.skuId), [R, B] = i.useState(false), F = i.useRef(A), U = i.useMemo(() => null == I ? null != E ? E : [] : I.flatMap(e => {
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
    }({}, e.variants[A]), n = n = {
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
  }), [I, E, A]);
  i.useEffect(() => {
    let e = null == T ? true : T.defaultHighlightedReward;
    !R && null == w && null != e && null != e && U.some(t => t.skuId === e.skuId) && (P(e), N(e.skuId))
  }, [T, R, w, U, P]), i.useEffect(() => {
    (null == T ? true : T.defaultCategory) == null || R || M(T.defaultCategory)
  }, [null == T ? true : T.defaultCategory, R]), o()(null != v, "Expected plan to selected"), o()(null != S, "Expected selectedSkuId"), o()(null != O, "Step should be set");
  let G = i.useMemo(() => null != Z && (null != E ? E : []).some(e => e.skuId === Z), [Z, E]),
    H = i.useMemo(() => null != w && U.some(e => e.skuId === w.skuId), [U, w]),
    D = i.useMemo(() => 0 === U.length || null == Z || !H || !G, [U, Z, G, H]);
  i.useEffect(() => {
    if (0 === U.length) {
      N(true), P(true);
      return
    }
    G && U.some(e => e.skuId === Z) || null == Z || (N(true), P(true))
  }, [U, G, Z, P]), i.useEffect(() => {
    F.current === A || H || (P(true), N(true)), F.current = A
  }, [A, H, P]);
  let z = e => {
      P(U.find(t => t.skuId === e)), N(e), B(true)
    },
    K = U.map(e => {
      var t, n;
      return (0, r.jsx)(d.c, {
        skuId: e.skuId,
        assetId: e.assetId,
        productName: null == (t = e.name) ? true : t.call(e),
        a11yLabel: null == (n = e.a11yLabel) ? true : n.call(e),
        claimed: null != E && E.every(t => t.skuId !== e.skuId),
        user: k,
        onSelect: z,
        selectedSkuId: Z,
        category: A
      }, e.skuId)
    }),
    Y = (0, r.jsx)(g.O3, {
      children: (0, r.jsx)(s.mzw, {
        "data-migration-pending": true,
        className: y.modalFooter,
        children: (0, r.jsx)(p.y, {
          onStepChange: e => {
            null != k && null != w && f.default.track(j.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: k.id,
              reward_sku_id: w.skuId
            }), a(e)
          },
          onBackClick: () => a(x.h8.PLAN_SELECT),
          shouldRenderUpdatedPaymentModal: true,
          showBackButton: true,
          planOptions: [v.id],
          selectedPlanId: v.id,
          isNextDisabled: D
        })
      })
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(s.xBx, {
      "data-migration-pending": true,
      className: y.modalHeader,
      direction: C.Z.Direction.VERTICAL,
      align: C.Z.Align.START,
      separator: false,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-lg/bold",
        color: "header-primary",
        children: b.intl.string(b.t["3JCuX1"])
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: y.headerSubtitle,
        children: b.intl.string(b.t.MhwtRU)
      }), (0, r.jsx)(s.olH, {
        "data-migration-pending": true,
        className: y.closeButton,
        onClick: L
      })]
    }), (0, r.jsx)(s.hzk, {
      "data-migration-pending": true,
      children: (0, r.jsxs)(s.Kqy, {
        direction: "vertical",
        justify: "center",
        align: "center",
        children: [null != I && I.length > 1 && (0, r.jsx)(u.Z, {
          defaultCategory: A,
          onCategoryChange: M
        }), (0, r.jsx)("div", {
          className: y.giftRewardShopCardsGrid,
          children: K
        })]
      })
    }), Y]
  })
}