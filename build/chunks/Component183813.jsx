/** Chunk was on 54400 **/
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
    step: S
  } = (0, _.JL)(), {
    setSelectedGiftingPromotionReward: y,
    selectedGiftingPromotionReward: E,
    claimableRewards: b,
    claimableVariants: P
  } = (0, x.wD)(), O = (0, a.e7)([c.default], () => c.default.getCurrentUser());
  i.useEffect(() => {
    null != b && b.length > 0 && null == E && y(b[0])
  }, [b, E, y]), s()(null != l, "Expected plan to selected"), s()(null != g, "Expected selectedSkuId"), s()(null != S, "Step should be set");
  let I = null == b ? true : b.map(e => (e => {
      let n = e.skuId;
      return (0, r.jsx)(d.Z, {
        skuId: n,
        price: L.intl.string(L.t.QQsaCQ),
        isSelected: n === (null == E ? true : E.skuId),
        onSelect: () => y(e),
        className: m.giftSelectItem
      }, n)
    })(e)),
    v = null != E && null != O ? (0, r.jsx)(C.Z, {
      avatarDecorationOverride: {
        asset: E.assetId
      },
      user: O,
      guildId: null,
      avatarSize: o.EFr.SIZE_152
    }) : null,
    Z = (0, r.jsx)(h.O3, {
      children: (0, r.jsx)(o.mzw, {
        className: m.modalFooter,
        children: (0, r.jsx)(p.y, {
          onStepChange: e => {
            null != O && null != E && u.default.track(j.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: O.id,
              reward_sku_id: E.skuId
            }), n(e)
          },
          onBackClick: () => n(f.h8.PLAN_SELECT),
          shouldRenderUpdatedPaymentModal: true,
          showBackButton: true,
          planOptions: [l.id],
          selectedPlanId: l.id
        })
      })
    }),
    M = (0, r.jsx)(o.X6q, {
      variant: "heading-lg/bold",
      color: "header-primary",
      children: L.intl.string(L.t["Rp0+ZG"])
    });
  return (0, r.jsxs)("div", {
    className: m.container,
    children: [(0, r.jsx)(o.xBx, {
      children: (0, r.jsxs)(o.Kqy, {
        direction: "horizontal",
        justify: "space-between",
        align: "center",
        children: [M, (0, r.jsx)(o.olH, {
          onClick: t
        })]
      })
    }), (0, r.jsx)(o.hzk, {
      children: (0, r.jsxs)(o.Kqy, {
        gap: 24,
        align: "center",
        padding: {
          top: 24
        },
        children: [v, (0, r.jsx)(o.Kqy, {
          gap: 8,
          padding: {
            top: 12
          },
          children: I
        })]
      })
    }), Z]
  })
}