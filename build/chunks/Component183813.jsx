/** Chunk was on 54400 **/
/** chunk id: 183813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => O
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk950174 = require("./950174.js");

function O(e) {
  var t;
  let {
    handleStepChange: n,
    handleClose: a
  } = e, {
    selectedPlan: O,
    selectedSkuId: w,
    step: C
  } = (0, P.JL)(), {
    setSelectedGiftingPromotionReward: k,
    selectedGiftingPromotionReward: E,
    claimableRewards: I,
    claimableVariants: T
  } = (0, v.wD)(), N = (0, u.Z)(), R = (0, o.e7)([b.default], () => b.default.getCurrentUser()), M = (0, p.ZP)(I, T, E), [A, Z] = l.useState(null == M || null == (t = M.defaultHighlightedReward) ? true : t.skuId), [L, B] = l.useState(false), D = (0, m.Z)({
    claimableVariants: T,
    claimableRewards: I,
    defaultSelection: M,
    selectedGiftingPromotionReward: E,
    setSelectedGiftingPromotionReward: k,
    hasUserMadeSelection: L
  }), F = l.useMemo(() => {
    var e, t;
    if (null == T || 0 === T.length) return null != (e = null == N ? true : N.rewards) ? e : [];
    let n = null != (t = null == D ? true : D.selectedCategory) ? t : p.KN.Trick;
    return T.flatMap(e => {
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
  }, [T, null == N ? true : N.rewards, null == D ? true : D.selectedCategory]);
  l.useEffect(() => {
    let e = null == M ? true : M.defaultHighlightedReward;
    !L && null == E && null != e && null != e && F.some(t => t.skuId === e.skuId) && (k(e), Z(e.skuId))
  }, [M, L, E, F, k]), i()(null != O, "Expected plan to selected"), i()(null != w, "Expected selectedSkuId"), i()(null != C, "Step should be set");
  let H = l.useMemo(() => null != A && (null != I ? I : []).some(e => e.skuId === A), [A, I]),
    G = l.useMemo(() => null != E && F.some(e => e.skuId === E.skuId), [F, E]),
    U = l.useMemo(() => 0 === F.length || null == A || !G || !H, [F, A, H, G]);
  l.useEffect(() => {
    if (0 === F.length) {
      Z(true), k(true);
      return
    }
    H && F.some(e => e.skuId === A) || null == A || (Z(true), k(true))
  }, [F, H, A, k]);
  let z = e => {
      k(F.find(t => t.skuId === e)), Z(e), B(true)
    },
    K = F.map(e => {
      var t, n;
      return (0, r.jsx)(d.c, {
        skuId: e.skuId,
        assetId: e.assetId,
        productName: null == (t = e.name) ? true : t.call(e),
        a11yLabel: null == (n = e.a11yLabel) ? true : n.call(e),
        claimed: null != I && I.every(t => t.skuId !== e.skuId),
        user: R,
        onSelect: z,
        selectedSkuId: A,
        category: null == D ? true : D.selectedCategory,
        type: e.type,
        palette: e.palette
      }, e.skuId)
    }),
    W = (0, r.jsx)(y.O3, {
      children: (0, r.jsx)(s.mzw, {
        "data-migration-pending": true,
        className: _.modalFooter,
        children: (0, r.jsx)(f.y, {
          onStepChange: e => {
            null != R && null != E && g.default.track(j.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: R.id,
              reward_sku_id: E.skuId
            }), n(e)
          },
          onBackClick: () => n(x.h8.PLAN_SELECT),
          shouldRenderUpdatedPaymentModal: true,
          showBackButton: true,
          planOptions: [O.id],
          selectedPlanId: O.id,
          isNextDisabled: U
        })
      })
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(s.xBx, {
      "data-migration-pending": true,
      className: _.modalHeader,
      direction: c.Z.Direction.VERTICAL,
      align: c.Z.Align.START,
      separator: false,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-lg/bold",
        color: "header-primary",
        children: S.intl.string(S.t["3JCuX1"])
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: _.headerSubtitle,
        children: S.intl.string(S.t.MhwtRc)
      }), (0, r.jsx)(s.olH, {
        "data-migration-pending": true,
        className: _.closeButton,
        onClick: a
      })]
    }), (0, r.jsx)(s.hzk, {
      "data-migration-pending": true,
      children: (0, r.jsxs)(s.Kqy, {
        direction: "vertical",
        justify: "center",
        align: "center",
        children: [(null == D ? true : D.shouldRenderCategoryControl) && (0, r.jsx)(h.Z, {
          defaultCategory: D.selectedCategory,
          onCategoryChange: D.setSelectedCategory
        }), (0, r.jsx)("div", {
          className: _.giftRewardShopCardsGrid,
          children: K
        })]
      })
    }), W]
  })
}