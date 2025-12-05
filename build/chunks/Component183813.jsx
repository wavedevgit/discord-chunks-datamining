/** Chunk was on 23242 **/
/** chunk id: 183813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => O
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk950174 = require("./950174.js");

function O(e) {
  var t, n, i, O, E, I;
  let {
    handleStepChange: w,
    handleClose: T
  } = e, {
    selectedPlan: k,
    selectedSkuId: C,
    step: N
  } = (0, y.JL)(), {
    setSelectedGiftingPromotionReward: M,
    selectedGiftingPromotionReward: R,
    claimableRewards: _,
    claimableVariants: A
  } = (0, j.wD)(), L = (0, d.Z)(), Z = (0, s.e7)([g.default], () => g.default.getCurrentUser()), D = (0, m.ZP)(_, A, R), [F, B] = r.useState(null == D || null == (t = D.defaultHighlightedReward) ? true : t.skuId), [G, H] = r.useState(false), U = (0, p.Z)({
    claimableVariants: A,
    claimableRewards: _,
    defaultSelection: D,
    selectedGiftingPromotionReward: R,
    setSelectedGiftingPromotionReward: M,
    hasUserMadeSelection: G
  }), z = r.useMemo(() => {
    var e, t;
    if (null == A || 0 === A.length) return null != (e = null == L ? true : L.rewards) ? e : [];
    let n = null != (t = null == U ? true : U.selectedCategory) ? t : m.KN.Trick;
    return A.flatMap(e => {
      var t, l;
      return e.variants.length < m.mo ? [] : (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
              value: l,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = l
          })
        }
        return e
      }({}, e.variants[n]), l = l = {
        name: e.name
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
      }), t)
    })
  }, [A, null == L ? true : L.rewards, null == U ? true : U.selectedCategory]);
  r.useEffect(() => {
    let e = null == D ? true : D.defaultHighlightedReward;
    !G && null == R && null != e && null != e && z.some(t => t.skuId === e.skuId) && (M(e), B(e.skuId))
  }, [D, G, R, z, M]), a()(null != k, "Expected plan to selected"), a()(null != C, "Expected selectedSkuId"), a()(null != N, "Step should be set");
  let K = r.useMemo(() => null != F && (null != _ ? _ : []).some(e => e.skuId === F), [F, _]),
    W = r.useMemo(() => null != R && z.some(e => e.skuId === R.skuId), [z, R]),
    V = r.useMemo(() => 0 === z.length || null == F || !W || !K, [z, F, K, W]);
  r.useEffect(() => {
    if (0 === z.length) {
      B(true), M(true);
      return
    }
    K && z.some(e => e.skuId === F) || null == F || (B(true), M(true))
  }, [z, K, F, M]);
  let Y = e => {
      M(z.find(t => t.skuId === e)), B(e), H(true)
    },
    q = z.map(e => {
      var t, n;
      return (0, l.jsx)(u.c, {
        skuId: e.skuId,
        assetId: e.assetId,
        productName: null == (t = e.name) ? true : t.call(e),
        a11yLabel: null == (n = e.a11yLabel) ? true : n.call(e),
        claimed: null != _ && _.every(t => t.skuId !== e.skuId),
        user: Z,
        onSelect: Y,
        selectedSkuId: F,
        category: null == U ? true : U.selectedCategory,
        type: e.type,
        palette: e.palette
      }, e.skuId)
    }),
    J = (0, l.jsx)(S.O3, {
      children: (0, l.jsx)(o.mzw, {
        "data-migration-pending": true,
        className: P.modalFooter,
        children: (0, l.jsx)(f.y, {
          onStepChange: e => {
            null != Z && null != R && v.default.track(x.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: Z.id,
              reward_sku_id: R.skuId
            }), w(e)
          },
          onBackClick: () => w(b.h8.PLAN_SELECT),
          shouldRenderUpdatedPaymentModal: true,
          showBackButton: true,
          planOptions: [k.id],
          selectedPlanId: k.id,
          isNextDisabled: V
        })
      })
    });
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(o.xBx, {
      "data-migration-pending": true,
      className: P.modalHeader,
      direction: c.Z.Direction.VERTICAL,
      align: c.Z.Align.START,
      separator: false,
      children: [(0, l.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: null == L || null == (n = L.rewardSelection) ? true : n.heading()
      }), (0, l.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-subtle",
        className: P.headerSubtitle,
        children: null == L || null == (i = L.rewardSelection) ? true : i.primarySubtitle()
      }), (null == L || null == (E = L.rewardSelection) || null == (O = E.secondarySubtitle) ? true : O.call(E)) != null && (0, l.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-subtle",
        children: null == L || null == (I = L.rewardSelection) ? true : I.secondarySubtitle()
      }), (0, l.jsx)(o.olH, {
        "data-migration-pending": true,
        className: P.closeButton,
        onClick: T
      })]
    }), (0, l.jsx)(o.hzk, {
      "data-migration-pending": true,
      children: (0, l.jsxs)(o.Kqy, {
        direction: "vertical",
        justify: "center",
        align: "center",
        children: [(null == U ? true : U.shouldRenderCategoryControl) && (0, l.jsx)(h.Z, {
          defaultCategory: U.selectedCategory,
          onCategoryChange: U.setSelectedCategory
        }), (0, l.jsx)("div", {
          className: P.giftRewardShopCardsGrid,
          children: q
        })]
      })
    }), J]
  })
}