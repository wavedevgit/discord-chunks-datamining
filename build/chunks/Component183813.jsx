/** Chunk was on 31029 **/
/** chunk id: 183813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => L
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
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
    handleStepChange: a,
    handleClose: L
  } = e, {
    selectedPlan: v,
    selectedSkuId: S,
    step: w
  } = (0, f.JL)(), {
    setSelectedGiftingPromotionReward: O,
    selectedGiftingPromotionReward: I,
    claimableRewards: P,
    claimableVariants: E
  } = (0, m.wD)(), T = (0, o.e7)([_.default], () => _.default.getCurrentUser()), k = (0, c.ZP)(P, E, I), [M, A] = i.useState(null != (n = null == k ? true : k.defaultCategory) ? n : c.KN.Trick), [B, Z] = i.useState(null == k || null == (t = k.defaultHighlightedReward) ? true : t.skuId), [N, R] = i.useState(false), F = i.useRef(M), G = i.useMemo(() => null == E ? null != P ? P : [] : E.flatMap(e => {
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
    }({}, e.variants[M]), n = n = {
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
  }), [E, P, M]);
  i.useEffect(() => {
    let e = null == k ? true : k.defaultHighlightedReward;
    !N && null == I && null != e && null != e && G.some(t => t.skuId === e.skuId) && (O(e), Z(e.skuId))
  }, [k, N, I, G, O]), i.useEffect(() => {
    (null == k ? true : k.defaultCategory) == null || N || A(k.defaultCategory)
  }, [null == k ? true : k.defaultCategory, N]), l()(null != v, "Expected plan to selected"), l()(null != S, "Expected selectedSkuId"), l()(null != w, "Step should be set");
  let H = i.useMemo(() => null != B && (null != P ? P : []).some(e => e.skuId === B), [B, P]),
    U = i.useMemo(() => null != I && G.some(e => e.skuId === I.skuId), [G, I]),
    D = i.useMemo(() => 0 === G.length || null == B || !U || !H, [G, B, H, U]);
  i.useEffect(() => {
    if (0 === G.length) {
      Z(true), O(true);
      return
    }
    H && G.some(e => e.skuId === B) || null == B || (Z(true), O(true))
  }, [G, H, B, O]), i.useEffect(() => {
    F.current === M || U || (O(true), Z(true)), F.current = M
  }, [M, U, O]);
  let z = e => {
      O(G.find(t => t.skuId === e)), Z(e), R(true)
    },
    W = G.map(e => {
      var t, n;
      return (0, r.jsx)(d.c, {
        skuId: e.skuId,
        assetId: e.assetId,
        productName: null == (t = e.name) ? true : t.call(e),
        a11yLabel: null == (n = e.a11yLabel) ? true : n.call(e),
        claimed: null != P && P.every(t => t.skuId !== e.skuId),
        user: T,
        onSelect: z,
        selectedSkuId: B,
        category: M
      }, e.skuId)
    }),
    K = (0, r.jsx)(g.O3, {
      children: (0, r.jsx)(s.mzw, {
        "data-migration-pending": true,
        className: y.modalFooter,
        children: (0, r.jsx)(p.y, {
          onStepChange: e => {
            null != T && null != I && h.default.track(j.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: T.id,
              reward_sku_id: I.skuId
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
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-lg/bold",
        color: "header-primary",
        children: b.intl.string(b.t["3JCuX1"])
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: y.headerSubtitle,
        children: b.intl.string(b.t.MhwtRc)
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
        children: [null != E && E.length > 1 && (0, r.jsx)(u.Z, {
          defaultCategory: M,
          onCategoryChange: A
        }), (0, r.jsx)("div", {
          className: y.giftRewardShopCardsGrid,
          children: W
        })]
      })
    }), K]
  })
}