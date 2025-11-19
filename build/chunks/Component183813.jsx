/** Chunk was on 54400 **/
/** chunk id: 183813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => _
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
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
  Chunk950174 = require("./950174.js");

function _(e) {
  var t, n, a, _, w, O;
  let {
    handleStepChange: C,
    handleClose: k
  } = e, {
    selectedPlan: E,
    selectedSkuId: I,
    step: T
  } = (0, x.JL)(), {
    setSelectedGiftingPromotionReward: N,
    selectedGiftingPromotionReward: R,
    claimableRewards: M,
    claimableVariants: A
  } = (0, v.wD)(), Z = (0, u.Z)(), L = (0, o.e7)([b.default], () => b.default.getCurrentUser()), B = (0, p.ZP)(M, A, R), [D, F] = l.useState(null == B || null == (t = B.defaultHighlightedReward) ? true : t.skuId), [H, G] = l.useState(false), U = (0, m.Z)({
    claimableVariants: A,
    claimableRewards: M,
    defaultSelection: B,
    selectedGiftingPromotionReward: R,
    setSelectedGiftingPromotionReward: N,
    hasUserMadeSelection: H
  }), z = l.useMemo(() => {
    var e, t;
    if (null == A || 0 === A.length) return null != (e = null == Z ? true : Z.rewards) ? e : [];
    let n = null != (t = null == U ? true : U.selectedCategory) ? t : p.KN.Trick;
    return A.flatMap(e => {
      var t, r;
      return e.variants.length < p.mo ? [] : (t = function(e) {
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
  }, [A, null == Z ? true : Z.rewards, null == U ? true : U.selectedCategory]);
  l.useEffect(() => {
    let e = null == B ? true : B.defaultHighlightedReward;
    !H && null == R && null != e && null != e && z.some(t => t.skuId === e.skuId) && (N(e), F(e.skuId))
  }, [B, H, R, z, N]), i()(null != E, "Expected plan to selected"), i()(null != I, "Expected selectedSkuId"), i()(null != T, "Step should be set");
  let K = l.useMemo(() => null != D && (null != M ? M : []).some(e => e.skuId === D), [D, M]),
    W = l.useMemo(() => null != R && z.some(e => e.skuId === R.skuId), [z, R]),
    Y = l.useMemo(() => 0 === z.length || null == D || !W || !K, [z, D, K, W]);
  l.useEffect(() => {
    if (0 === z.length) {
      F(true), N(true);
      return
    }
    K && z.some(e => e.skuId === D) || null == D || (F(true), N(true))
  }, [z, K, D, N]);
  let V = e => {
      N(z.find(t => t.skuId === e)), F(e), G(true)
    },
    q = z.map(e => {
      var t, n;
      return (0, r.jsx)(d.c, {
        skuId: e.skuId,
        assetId: e.assetId,
        productName: null == (t = e.name) ? true : t.call(e),
        a11yLabel: null == (n = e.a11yLabel) ? true : n.call(e),
        claimed: null != M && M.every(t => t.skuId !== e.skuId),
        user: L,
        onSelect: V,
        selectedSkuId: D,
        category: null == U ? true : U.selectedCategory,
        type: e.type,
        palette: e.palette
      }, e.skuId)
    }),
    J = (0, r.jsx)(P.O3, {
      children: (0, r.jsx)(s.mzw, {
        "data-migration-pending": true,
        className: j.modalFooter,
        children: (0, r.jsx)(f.y, {
          onStepChange: e => {
            null != L && null != R && g.default.track(S.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: L.id,
              reward_sku_id: R.skuId
            }), C(e)
          },
          onBackClick: () => C(y.h8.PLAN_SELECT),
          shouldRenderUpdatedPaymentModal: true,
          showBackButton: true,
          planOptions: [E.id],
          selectedPlanId: E.id,
          isNextDisabled: Y
        })
      })
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(s.xBx, {
      "data-migration-pending": true,
      className: j.modalHeader,
      direction: c.Z.Direction.VERTICAL,
      align: c.Z.Align.START,
      separator: false,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: null == Z || null == (n = Z.rewardSelection) ? true : n.heading()
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        color: "text-secondary",
        className: j.headerSubtitle,
        children: null == Z || null == (a = Z.rewardSelection) ? true : a.primarySubtitle()
      }), (null == Z || null == (w = Z.rewardSelection) || null == (_ = w.secondarySubtitle) ? true : _.call(w)) != null && (0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        color: "text-secondary",
        children: null == Z || null == (O = Z.rewardSelection) ? true : O.secondarySubtitle()
      }), (0, r.jsx)(s.olH, {
        "data-migration-pending": true,
        className: j.closeButton,
        onClick: k
      })]
    }), (0, r.jsx)(s.hzk, {
      "data-migration-pending": true,
      children: (0, r.jsxs)(s.Kqy, {
        direction: "vertical",
        justify: "center",
        align: "center",
        children: [(null == U ? true : U.shouldRenderCategoryControl) && (0, r.jsx)(h.Z, {
          defaultCategory: U.selectedCategory,
          onCategoryChange: U.setSelectedCategory
        }), (0, r.jsx)("div", {
          className: j.giftRewardShopCardsGrid,
          children: q
        })]
      })
    }), J]
  })
}