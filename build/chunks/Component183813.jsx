/** Chunk was on 54400 **/
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
  Chunk858026 = require("./858026.js"),
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
  var t;
  let {
    handleStepChange: n,
    handleClose: l
  } = e, {
    selectedPlan: v,
    selectedSkuId: S,
    step: O
  } = (0, _.JL)(), {
    setSelectedGiftingPromotionReward: E,
    selectedGiftingPromotionReward: P,
    claimableRewards: w,
    claimableVariants: k
  } = (0, m.wD)(), M = (0, o.e7)([h.default], () => h.default.getCurrentUser()), I = (0, c.ZP)(w, k, P), [T, A] = i.useState(null == I || null == (t = I.defaultHighlightedReward) ? true : t.skuId), [Z, N] = i.useState(false), R = (0, u.Z)({
    claimableVariants: k,
    claimableRewards: w,
    defaultSelection: I,
    selectedGiftingPromotionReward: P,
    setSelectedGiftingPromotionReward: E,
    hasUserMadeSelection: Z
  }), B = i.useMemo(() => {
    var e;
    if (null == k || 0 === k.length) return null != w ? w : [];
    let t = null != (e = null == R ? true : R.selectedCategory) ? e : c.KN.Trick;
    return k.flatMap(e => {
      var n, r;
      return e.variants.length < c.mo ? [] : (n = function(e) {
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
      }({}, e.variants[t]), r = r = {
        name: e.name
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n)
    })
  }, [k, w, null == R ? true : R.selectedCategory]);
  i.useEffect(() => {
    let e = null == I ? true : I.defaultHighlightedReward;
    !Z && null == P && null != e && null != e && B.some(t => t.skuId === e.skuId) && (E(e), A(e.skuId))
  }, [I, Z, P, B, E]), a()(null != v, "Expected plan to selected"), a()(null != S, "Expected selectedSkuId"), a()(null != O, "Step should be set");
  let H = i.useMemo(() => null != T && (null != w ? w : []).some(e => e.skuId === T), [T, w]),
    U = i.useMemo(() => null != P && B.some(e => e.skuId === P.skuId), [B, P]),
    F = i.useMemo(() => 0 === B.length || null == T || !U || !H, [B, T, H, U]);
  i.useEffect(() => {
    if (0 === B.length) {
      A(true), E(true);
      return
    }
    H && B.some(e => e.skuId === T) || null == T || (A(true), E(true))
  }, [B, H, T, E]);
  let G = e => {
      E(B.find(t => t.skuId === e)), A(e), N(true)
    },
    D = B.map(e => {
      var t, n;
      return (0, r.jsx)(C.c, {
        skuId: e.skuId,
        assetId: e.assetId,
        productName: null == (t = e.name) ? true : t.call(e),
        a11yLabel: null == (n = e.a11yLabel) ? true : n.call(e),
        claimed: null != w && w.every(t => t.skuId !== e.skuId),
        user: M,
        onSelect: G,
        selectedSkuId: T,
        category: null == R ? true : R.selectedCategory
      }, e.skuId)
    }),
    K = (0, r.jsx)(g.O3, {
      children: (0, r.jsx)(s.mzw, {
        "data-migration-pending": true,
        className: L.modalFooter,
        children: (0, r.jsx)(f.y, {
          onStepChange: e => {
            null != M && null != P && x.default.track(b.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: M.id,
              reward_sku_id: P.skuId
            }), n(e)
          },
          onBackClick: () => n(j.h8.PLAN_SELECT),
          shouldRenderUpdatedPaymentModal: true,
          showBackButton: true,
          planOptions: [v.id],
          selectedPlanId: v.id,
          isNextDisabled: F
        })
      })
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(s.xBx, {
      "data-migration-pending": true,
      className: L.modalHeader,
      direction: d.Z.Direction.VERTICAL,
      align: d.Z.Align.START,
      separator: false,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-lg/bold",
        color: "header-primary",
        children: y.intl.string(y.t["3JCuX1"])
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: L.headerSubtitle,
        children: y.intl.string(y.t.MhwtRc)
      }), (0, r.jsx)(s.olH, {
        "data-migration-pending": true,
        className: L.closeButton,
        onClick: l
      })]
    }), (0, r.jsx)(s.hzk, {
      "data-migration-pending": true,
      children: (0, r.jsxs)(s.Kqy, {
        direction: "vertical",
        justify: "center",
        align: "center",
        children: [(null == R ? true : R.shouldRenderCategoryControl) && (0, r.jsx)(p.Z, {
          defaultCategory: R.selectedCategory,
          onCategoryChange: R.setSelectedCategory
        }), (0, r.jsx)("div", {
          className: L.giftRewardShopCardsGrid,
          children: D
        })]
      })
    }), K]
  })
}