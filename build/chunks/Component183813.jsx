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
  var t, n, a, _, O, w;
  let {
    handleStepChange: C,
    handleClose: E
  } = e, {
    selectedPlan: k,
    selectedSkuId: I,
    step: T
  } = (0, S.JL)(), {
    setSelectedGiftingPromotionReward: N,
    selectedGiftingPromotionReward: M,
    claimableRewards: R,
    claimableVariants: A
  } = (0, v.wD)(), L = (0, d.Z)(), Z = (0, o.e7)([b.default], () => b.default.getCurrentUser()), D = (0, p.ZP)(R, A, M), [B, F] = l.useState(null == D || null == (t = D.defaultHighlightedReward) ? true : t.skuId), [H, G] = l.useState(false), U = (0, m.Z)({
    claimableVariants: A,
    claimableRewards: R,
    defaultSelection: D,
    selectedGiftingPromotionReward: M,
    setSelectedGiftingPromotionReward: N,
    hasUserMadeSelection: H
  }), z = l.useMemo(() => {
    var e, t;
    if (null == A || 0 === A.length) return null != (e = null == L ? true : L.rewards) ? e : [];
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
  }, [A, null == L ? true : L.rewards, null == U ? true : U.selectedCategory]);
  l.useEffect(() => {
    let e = null == D ? true : D.defaultHighlightedReward;
    !H && null == M && null != e && null != e && z.some(t => t.skuId === e.skuId) && (N(e), F(e.skuId))
  }, [D, H, M, z, N]), i()(null != k, "Expected plan to selected"), i()(null != I, "Expected selectedSkuId"), i()(null != T, "Step should be set");
  let K = l.useMemo(() => null != B && (null != R ? R : []).some(e => e.skuId === B), [B, R]),
    W = l.useMemo(() => null != M && z.some(e => e.skuId === M.skuId), [z, M]),
    V = l.useMemo(() => 0 === z.length || null == B || !W || !K, [z, B, K, W]);
  l.useEffect(() => {
    if (0 === z.length) {
      F(true), N(true);
      return
    }
    K && z.some(e => e.skuId === B) || null == B || (F(true), N(true))
  }, [z, K, B, N]);
  let Y = e => {
      N(z.find(t => t.skuId === e)), F(e), G(true)
    },
    q = z.map(e => {
      var t, n;
      return (0, r.jsx)(u.c, {
        skuId: e.skuId,
        assetId: e.assetId,
        productName: null == (t = e.name) ? true : t.call(e),
        a11yLabel: null == (n = e.a11yLabel) ? true : n.call(e),
        claimed: null != R && R.every(t => t.skuId !== e.skuId),
        user: Z,
        onSelect: Y,
        selectedSkuId: B,
        category: null == U ? true : U.selectedCategory,
        type: e.type,
        palette: e.palette
      }, e.skuId)
    }),
    J = (0, r.jsx)(x.O3, {
      children: (0, r.jsx)(s.mzw, {
        "data-migration-pending": true,
        className: j.modalFooter,
        children: (0, r.jsx)(f.y, {
          onStepChange: e => {
            null != Z && null != M && g.default.track(P.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: Z.id,
              reward_sku_id: M.skuId
            }), C(e)
          },
          onBackClick: () => C(y.h8.PLAN_SELECT),
          shouldRenderUpdatedPaymentModal: true,
          showBackButton: true,
          planOptions: [k.id],
          selectedPlanId: k.id,
          isNextDisabled: V
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
        children: null == L || null == (n = L.rewardSelection) ? true : n.heading()
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        color: "text-subtle",
        className: j.headerSubtitle,
        children: null == L || null == (a = L.rewardSelection) ? true : a.primarySubtitle()
      }), (null == L || null == (O = L.rewardSelection) || null == (_ = O.secondarySubtitle) ? true : _.call(O)) != null && (0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        color: "text-subtle",
        children: null == L || null == (w = L.rewardSelection) ? true : w.secondarySubtitle()
      }), (0, r.jsx)(s.olH, {
        "data-migration-pending": true,
        className: j.closeButton,
        onClick: E
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