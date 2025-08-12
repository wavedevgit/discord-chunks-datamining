/** Chunk was on 63024 **/
/** chunk id: 183813, original params: e,r,n (module,exports,require) **/
require.d(exports, {
  S: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
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
  Chunk864089 = require("./864089.js");

function g(e) {
  let {
    handleStepChange: r,
    handleClose: n
  } = e, {
    selectedPlan: o,
    selectedSkuId: g,
    step: b
  } = (0, x.JL)(), {
    setSelectedGiftingPromotionReward: y,
    selectedGiftingPromotionReward: S,
    claimableRewards: v
  } = (0, _.wD)(), E = (0, l.e7)([p.default], () => p.default.getCurrentUser());
  i.useEffect(() => {
    let e = null != v && v.length > 0;
    null == S && e && y(v[0])
  }, [v, S, y]);
  let I = e => {
    let r = e.skuId;
    return (0, t.jsx)(d.Z, {
      skuId: r,
      price: j.intl.string(j.t.QQsaCQ),
      isSelected: r === (null == S ? true : S.skuId),
      onSelect: () => y(e),
      className: L.giftSelectItem
    }, r)
  };
  a()(null != o, "Expected plan to selected"), a()(null != g, "Expected selectedSkuId"), a()(null != b, "Step should be set");
  let P = null == v ? true : v.map(e => I(e)),
    T = null != S && null != E ? (0, t.jsx)(C.Z, {
      avatarDecorationOverride: {
        asset: S.assetId
      },
      user: E,
      guildId: null,
      avatarSize: s.EFr.SIZE_152
    }) : null,
    O = (0, t.jsx)(m.O3, {
      children: (0, t.jsx)(s.mzw, {
        className: L.modalFooter,
        children: (0, t.jsx)(c.y, {
          onStepChange: e => {
            null != E && null != S && u.default.track(h.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: E.id,
              reward_sku_id: S.skuId
            }), r(e)
          },
          onBackClick: () => r(f.h8.PLAN_SELECT),
          shouldRenderUpdatedPaymentModal: true,
          showBackButton: true,
          planOptions: [o.id],
          selectedPlanId: o.id
        })
      })
    }),
    w = (0, t.jsx)(s.X6q, {
      variant: "heading-lg/bold",
      color: "header-primary",
      children: j.intl.string(j.t["Rp0+ZG"])
    });
  return (0, t.jsxs)("div", {
    className: L.container,
    children: [(0, t.jsx)(s.xBx, {
      children: (0, t.jsxs)(s.Kqy, {
        direction: "horizontal",
        justify: "space-between",
        align: "center",
        children: [w, (0, t.jsx)(s.olH, {
          onClick: n
        })]
      })
    }), (0, t.jsx)(s.hzk, {
      children: (0, t.jsxs)(s.Kqy, {
        gap: 24,
        align: "center",
        padding: {
          top: 24
        },
        children: [T, (0, t.jsx)(s.Kqy, {
          gap: 8,
          padding: {
            top: 12
          },
          children: P
        })]
      })
    }), O]
  })
}