/** Chunk was on 54400 **/
/** chunk id: 183813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => g
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk14476 = require("./14476.jsx"),
  Chunk699758 = require("./699758.js"),
  Chunk831895 = require("./831895.jsx"),
  Chunk314404 = require("./314404.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk27034 = require("./27034.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk950174 = require("./950174.js");

function g(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    selectedPlan: l,
    selectedSkuId: g,
    step: y
  } = (0, h.JL)(), {
    setSelectedGiftingPromotionReward: S,
    selectedGiftingPromotionReward: v,
    claimableRewards: E,
    claimableVariants: O
  } = (0, _.wD)(), P = (0, a.e7)([u.default], () => u.default.getCurrentUser()), [w, I] = i.useState(null), k = Math.floor(Math.random() * d.mo), [M, Z] = i.useState(k);
  i.useEffect(() => {
    null != E && E.length > 0 && null == v && S(E[0])
  }, [E, v, S]), s()(null != l, "Expected plan to selected"), s()(null != g, "Expected selectedSkuId"), s()(null != y, "Step should be set");
  let T = i.useMemo(() => null == O ? null != E ? E : [] : O.flatMap(e => {
      var t, n;
      return e.variants.length < d.mo ? [] : (t = function(e) {
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
    }), [O, E, M]),
    A = e => {
      S(T.find(t => t.skuId === e)), I(e)
    },
    N = T.map(e => (0, r.jsx)(C.c, {
      skuId: e.skuId,
      assetId: e.assetId,
      productName: e.name,
      a11yLabel: e.a11yLabel,
      claimed: null != E && !E.some(t => t.skuId === e.skuId),
      user: P,
      onSelect: A,
      selectedSkuId: null != w ? w : true,
      category: M
    }, e.skuId)),
    B = (0, r.jsx)(j.O3, {
      children: (0, r.jsx)(o.mzw, {
        className: b.modalFooter,
        children: (0, r.jsx)(p.y, {
          onStepChange: e => {
            null != P && null != v && x.default.track(m.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: P.id,
              reward_sku_id: v.skuId
            }), t(e)
          },
          onBackClick: () => t(f.h8.PLAN_SELECT),
          shouldRenderUpdatedPaymentModal: true,
          showBackButton: true,
          planOptions: [l.id],
          selectedPlanId: l.id
        })
      })
    }),
    U = (0, r.jsxs)(o.X6q, {
      variant: "heading-lg/bold",
      color: "header-primary",
      className: b.title,
      children: [L.intl.string(L.t["3JCuX1"]), (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: b.subtitle,
        children: L.intl.string(L.t.MhwtRU)
      })]
    });
  return (0, r.jsxs)("div", {
    className: b.container,
    children: [(0, r.jsx)(o.xBx, {
      children: (0, r.jsx)(o.olH, {
        onClick: n
      })
    }), (0, r.jsxs)(o.Kqy, {
      direction: "vertical",
      justify: "center",
      align: "center",
      children: [U, null != O && O.length > 1 && (0, r.jsx)(c.Z, {
        defaultCategory: M,
        onCategoryChange: Z
      })]
    }), (0, r.jsx)(o.hzk, {
      children: (0, r.jsx)("div", {
        className: b.cardsGrid,
        children: N
      })
    }), B]
  })
}