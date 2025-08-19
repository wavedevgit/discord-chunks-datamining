/** Chunk was on 54433 **/
/** chunk id: 183813, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  S: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk204418 = require("./204418.jsx"),
  Chunk628952 = require("./628952.jsx"),
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
    handleStepChange: n,
    handleClose: t
  } = e, {
    selectedPlan: l,
    selectedSkuId: g,
    step: y
  } = (0, h.JL)(), {
    setSelectedGiftingPromotionReward: E,
    selectedGiftingPromotionReward: S,
    claimableRewards: v,
    claimableVariants: P
  } = (0, x.wD)(), O = (0, a.e7)([u.default], () => u.default.getCurrentUser());
  r.useEffect(() => {
    null != v && v.length > 0 && null == S && E(v[0])
  }, [v, S, E]), s()(null != l, "Expected plan to selected"), s()(null != g, "Expected selectedSkuId"), s()(null != y, "Step should be set");
  let b = null == v ? true : v.map(e => (e => {
      let n = e.skuId;
      return (0, i.jsx)(d.Z, {
        skuId: n,
        price: _.intl.string(_.t.QQsaCQ),
        isSelected: n === (null == S ? true : S.skuId),
        onSelect: () => E(e),
        className: L.giftSelectItem
      }, n)
    })(e)),
    Z = null != S && null != O ? (0, i.jsx)(C.Z, {
      avatarDecorationOverride: {
        asset: S.assetId
      },
      user: O,
      guildId: null,
      avatarSize: o.EFr.SIZE_152
    }) : null,
    I = (0, i.jsx)(f.O3, {
      children: (0, i.jsx)(o.mzw, {
        className: L.modalFooter,
        children: (0, i.jsx)(c.y, {
          onStepChange: e => {
            null != O && null != S && p.default.track(m.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: O.id,
              reward_sku_id: S.skuId
            }), n(e)
          },
          onBackClick: () => n(j.h8.PLAN_SELECT),
          shouldRenderUpdatedPaymentModal: true,
          showBackButton: true,
          planOptions: [l.id],
          selectedPlanId: l.id
        })
      })
    }),
    M = (0, i.jsx)(o.X6q, {
      variant: "heading-lg/bold",
      color: "header-primary",
      children: _.intl.string(_.t["Rp0+ZG"])
    });
  return (0, i.jsxs)("div", {
    className: L.container,
    children: [(0, i.jsx)(o.xBx, {
      children: (0, i.jsxs)(o.Kqy, {
        direction: "horizontal",
        justify: "space-between",
        align: "center",
        children: [M, (0, i.jsx)(o.olH, {
          onClick: t
        })]
      })
    }), (0, i.jsx)(o.hzk, {
      children: (0, i.jsxs)(o.Kqy, {
        gap: 24,
        align: "center",
        padding: {
          top: 24
        },
        children: [Z, (0, i.jsx)(o.Kqy, {
          gap: 8,
          padding: {
            top: 12
          },
          children: b
        })]
      })
    }), I]
  })
}