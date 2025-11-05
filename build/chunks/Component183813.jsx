/** Chunk was on 54400 **/
/** chunk id: 183813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => L
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

function L(e) {
  var t, n;
  let {
    handleStepChange: l,
    handleClose: L
  } = e, {
    selectedPlan: v,
    selectedSkuId: S,
    step: O
  } = (0, _.JL)(), {
    setSelectedGiftingPromotionReward: E,
    selectedGiftingPromotionReward: P,
    claimableRewards: w,
    claimableVariants: k
  } = (0, f.wD)(), M = (0, s.e7)([x.default], () => x.default.getCurrentUser()), I = (0, c.ZP)(w, k, P), [T, A] = i.useState(null != (n = null == I ? true : I.defaultCategory) ? n : c.KN.Trick), [Z, N] = i.useState(null == I || null == (t = I.defaultHighlightedReward) ? true : t.skuId), [R, B] = i.useState(false), H = i.useRef(T), U = i.useMemo(() => null == k ? null != w ? w : [] : k.flatMap(e => {
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
  }), [k, w, T]);
  i.useEffect(() => {
    let e = null == I ? true : I.defaultHighlightedReward;
    !R && null == P && null != e && null != e && U.some(t => t.skuId === e.skuId) && (E(e), N(e.skuId))
  }, [I, R, P, U, E]), i.useEffect(() => {
    (null == I ? true : I.defaultCategory) == null || R || A(I.defaultCategory)
  }, [null == I ? true : I.defaultCategory, R]), a()(null != v, "Expected plan to selected"), a()(null != S, "Expected selectedSkuId"), a()(null != O, "Step should be set");
  let F = i.useMemo(() => null != Z && (null != w ? w : []).some(e => e.skuId === Z), [Z, w]),
    G = i.useMemo(() => null != P && U.some(e => e.skuId === P.skuId), [U, P]),
    D = i.useMemo(() => 0 === U.length || null == Z || !G || !F, [U, Z, F, G]);
  i.useEffect(() => {
    if (0 === U.length) {
      N(true), E(true);
      return
    }
    F && U.some(e => e.skuId === Z) || null == Z || (N(true), E(true))
  }, [U, F, Z, E]), i.useEffect(() => {
    H.current === T || G || (E(true), N(true)), H.current = T
  }, [T, G, E]);
  let K = e => {
      E(U.find(t => t.skuId === e)), N(e), B(true)
    },
    z = U.map(e => {
      var t, n;
      return (0, r.jsx)(C.c, {
        skuId: e.skuId,
        assetId: e.assetId,
        productName: null == (t = e.name) ? true : t.call(e),
        a11yLabel: null == (n = e.a11yLabel) ? true : n.call(e),
        claimed: null != w && w.every(t => t.skuId !== e.skuId),
        user: M,
        onSelect: K,
        selectedSkuId: Z,
        category: T
      }, e.skuId)
    }),
    V = (0, r.jsx)(j.O3, {
      children: (0, r.jsx)(o.mzw, {
        "data-migration-pending": true,
        className: y.modalFooter,
        children: (0, r.jsx)(p.y, {
          onStepChange: e => {
            null != M && null != P && h.default.track(g.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: M.id,
              reward_sku_id: P.skuId
            }), l(e)
          },
          onBackClick: () => l(m.h8.PLAN_SELECT),
          shouldRenderUpdatedPaymentModal: true,
          showBackButton: true,
          planOptions: [v.id],
          selectedPlanId: v.id,
          isNextDisabled: D
        })
      })
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(o.xBx, {
      "data-migration-pending": true,
      className: y.modalHeader,
      direction: d.Z.Direction.VERTICAL,
      align: d.Z.Align.START,
      separator: false,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-lg/bold",
        color: "header-primary",
        children: b.intl.string(b.t["3JCuX1"])
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: y.headerSubtitle,
        children: b.intl.string(b.t.MhwtRc)
      }), (0, r.jsx)(o.olH, {
        "data-migration-pending": true,
        className: y.closeButton,
        onClick: L
      })]
    }), (0, r.jsx)(o.hzk, {
      "data-migration-pending": true,
      children: (0, r.jsxs)(o.Kqy, {
        direction: "vertical",
        justify: "center",
        align: "center",
        children: [null != k && k.length > 1 && (0, r.jsx)(u.Z, {
          defaultCategory: T,
          onCategoryChange: A
        }), (0, r.jsx)("div", {
          className: y.giftRewardShopCardsGrid,
          children: z
        })]
      })
    }), V]
  })
}