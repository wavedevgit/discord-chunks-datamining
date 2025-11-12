/** Chunk was on 54400 **/
/** chunk id: 183813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => S
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk14476 = require("./14476.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk347896 = require("./347896.js"),
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

function S(e) {
  var t;
  let {
    handleStepChange: n,
    handleClose: l
  } = e, {
    selectedPlan: S,
    selectedSkuId: O,
    step: P
  } = (0, j.JL)(), {
    setSelectedGiftingPromotionReward: E,
    selectedGiftingPromotionReward: w,
    claimableRewards: I,
    claimableVariants: M
  } = (0, _.wD)(), k = (0, c.Z)(), A = (0, s.e7)([f.default], () => f.default.getCurrentUser()), T = (0, u.ZP)(I, M, w), [Z, N] = i.useState(null == T || null == (t = T.defaultHighlightedReward) ? true : t.skuId), [R, B] = i.useState(false), U = (0, p.Z)({
    claimableVariants: M,
    claimableRewards: I,
    defaultSelection: T,
    selectedGiftingPromotionReward: w,
    setSelectedGiftingPromotionReward: E,
    hasUserMadeSelection: R
  }), H = i.useMemo(() => {
    var e, t;
    if (null == M || 0 === M.length) return null != (e = null == k ? true : k.rewards) ? e : [];
    let n = null != (t = null == U ? true : U.selectedCategory) ? t : u.KN.Trick;
    return M.flatMap(e => {
      var t, r;
      return e.variants.length < u.mo ? [] : (t = function(e) {
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
      }({}, e.variants[n]), r = r = {
        name: e.name
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t)
    })
  }, [M, null == k ? true : k.rewards, null == U ? true : U.selectedCategory]);
  i.useEffect(() => {
    let e = null == T ? true : T.defaultHighlightedReward;
    !R && null == w && null != e && null != e && H.some(t => t.skuId === e.skuId) && (E(e), N(e.skuId))
  }, [T, R, w, H, E]), a()(null != S, "Expected plan to selected"), a()(null != O, "Expected selectedSkuId"), a()(null != P, "Step should be set");
  let F = i.useMemo(() => null != Z && (null != I ? I : []).some(e => e.skuId === Z), [Z, I]),
    G = i.useMemo(() => null != w && H.some(e => e.skuId === w.skuId), [H, w]),
    D = i.useMemo(() => 0 === H.length || null == Z || !G || !F, [H, Z, F, G]);
  i.useEffect(() => {
    if (0 === H.length) {
      N(true), E(true);
      return
    }
    F && H.some(e => e.skuId === Z) || null == Z || (N(true), E(true))
  }, [H, F, Z, E]);
  let K = e => {
      E(H.find(t => t.skuId === e)), N(e), B(true)
    },
    z = H.map(e => {
      var t, n;
      return (0, r.jsx)(d.c, {
        skuId: e.skuId,
        assetId: e.assetId,
        productName: null == (t = e.name) ? true : t.call(e),
        a11yLabel: null == (n = e.a11yLabel) ? true : n.call(e),
        claimed: null != I && I.every(t => t.skuId !== e.skuId),
        user: A,
        onSelect: K,
        selectedSkuId: Z,
        category: null == U ? true : U.selectedCategory,
        type: e.type,
        palette: e.palette
      }, e.skuId)
    }),
    V = (0, r.jsx)(b.O3, {
      children: (0, r.jsx)(o.mzw, {
        "data-migration-pending": true,
        className: L.modalFooter,
        children: (0, r.jsx)(m.y, {
          onStepChange: e => {
            null != A && null != w && x.default.track(y.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: A.id,
              reward_sku_id: w.skuId
            }), n(e)
          },
          onBackClick: () => n(g.h8.PLAN_SELECT),
          shouldRenderUpdatedPaymentModal: true,
          showBackButton: true,
          planOptions: [S.id],
          selectedPlanId: S.id,
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
        children: v.intl.string(v.t["3JCuX1"])
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: L.headerSubtitle,
        children: v.intl.string(v.t.MhwtRc)
      }), (0, r.jsx)(o.olH, {
        "data-migration-pending": true,
        className: L.closeButton,
        onClick: l
      })]
    }), (0, r.jsx)(o.hzk, {
      "data-migration-pending": true,
      children: (0, r.jsxs)(o.Kqy, {
        direction: "vertical",
        justify: "center",
        align: "center",
        children: [(null == U ? true : U.shouldRenderCategoryControl) && (0, r.jsx)(h.Z, {
          defaultCategory: U.selectedCategory,
          onCategoryChange: U.setSelectedCategory
        }), (0, r.jsx)("div", {
          className: L.giftRewardShopCardsGrid,
          children: z
        })]
      })
    }), V]
  })
}