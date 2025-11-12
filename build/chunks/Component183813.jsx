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
    step: E
  } = (0, j.JL)(), {
    setSelectedGiftingPromotionReward: P,
    selectedGiftingPromotionReward: w,
    claimableRewards: k,
    claimableVariants: M
  } = (0, _.wD)(), I = (0, c.Z)(), T = (0, o.e7)([x.default], () => x.default.getCurrentUser()), A = (0, u.ZP)(k, M, w), [Z, N] = i.useState(null == A || null == (t = A.defaultHighlightedReward) ? true : t.skuId), [R, B] = i.useState(false), H = (0, p.Z)({
    claimableVariants: M,
    claimableRewards: k,
    defaultSelection: A,
    selectedGiftingPromotionReward: w,
    setSelectedGiftingPromotionReward: P,
    hasUserMadeSelection: R
  }), U = i.useMemo(() => {
    var e, t;
    if (null == M || 0 === M.length) return null != (e = null == I ? true : I.rewards) ? e : [];
    let n = null != (t = null == H ? true : H.selectedCategory) ? t : u.KN.Trick;
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
  }, [M, null == I ? true : I.rewards, null == H ? true : H.selectedCategory]);
  i.useEffect(() => {
    let e = null == A ? true : A.defaultHighlightedReward;
    !R && null == w && null != e && null != e && U.some(t => t.skuId === e.skuId) && (P(e), N(e.skuId))
  }, [A, R, w, U, P]), a()(null != S, "Expected plan to selected"), a()(null != O, "Expected selectedSkuId"), a()(null != E, "Step should be set");
  let F = i.useMemo(() => null != Z && (null != k ? k : []).some(e => e.skuId === Z), [Z, k]),
    G = i.useMemo(() => null != w && U.some(e => e.skuId === w.skuId), [U, w]),
    D = i.useMemo(() => 0 === U.length || null == Z || !G || !F, [U, Z, F, G]);
  i.useEffect(() => {
    if (0 === U.length) {
      N(true), P(true);
      return
    }
    F && U.some(e => e.skuId === Z) || null == Z || (N(true), P(true))
  }, [U, F, Z, P]);
  let K = e => {
      P(U.find(t => t.skuId === e)), N(e), B(true)
    },
    z = U.map(e => {
      var t, n;
      return (0, r.jsx)(C.c, {
        skuId: e.skuId,
        assetId: e.assetId,
        productName: null == (t = e.name) ? true : t.call(e),
        a11yLabel: null == (n = e.a11yLabel) ? true : n.call(e),
        claimed: null != k && k.every(t => t.skuId !== e.skuId),
        user: T,
        onSelect: K,
        selectedSkuId: Z,
        category: null == H ? true : H.selectedCategory
      }, e.skuId)
    }),
    V = (0, r.jsx)(b.O3, {
      children: (0, r.jsx)(s.mzw, {
        "data-migration-pending": true,
        className: v.modalFooter,
        children: (0, r.jsx)(h.y, {
          onStepChange: e => {
            null != T && null != w && m.default.track(y.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: T.id,
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
    children: [(0, r.jsxs)(s.xBx, {
      "data-migration-pending": true,
      className: v.modalHeader,
      direction: d.Z.Direction.VERTICAL,
      align: d.Z.Align.START,
      separator: false,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-lg/bold",
        color: "header-primary",
        children: L.intl.string(L.t["3JCuX1"])
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: v.headerSubtitle,
        children: L.intl.string(L.t.MhwtRc)
      }), (0, r.jsx)(s.olH, {
        "data-migration-pending": true,
        className: v.closeButton,
        onClick: l
      })]
    }), (0, r.jsx)(s.hzk, {
      "data-migration-pending": true,
      children: (0, r.jsxs)(s.Kqy, {
        direction: "vertical",
        justify: "center",
        align: "center",
        children: [(null == H ? true : H.shouldRenderCategoryControl) && (0, r.jsx)(f.Z, {
          defaultCategory: H.selectedCategory,
          onCategoryChange: H.setSelectedCategory
        }), (0, r.jsx)("div", {
          className: v.giftRewardShopCardsGrid,
          children: z
        })]
      })
    }), V]
  })
}