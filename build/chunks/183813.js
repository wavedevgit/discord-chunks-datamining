/** Chunk was on 54433 **/
n.d(t, {
  S: () => y
});
var i = n(255367),
  l = n(73800),
  r = n(512722),
  s = n.n(r),
  a = n(442837),
  o = n(481060),
  C = n(204418),
  d = n(628952),
  c = n(314404),
  u = n(594174),
  p = n(626135),
  x = n(987209),
  f = n(563132),
  h = n(409813),
  j = n(27034),
  m = n(981631),
  _ = n(388032),
  L = n(529190);

function y(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    selectedPlan: r,
    selectedSkuId: y,
    step: E
  } = (0, f.JL)(), {
    setSelectedGiftingPromotionReward: g,
    selectedGiftingPromotionReward: S,
    claimableRewards: b
  } = (0, x.wD)(), v = (0, a.e7)([u.default], () => u.default.getCurrentUser());
  l.useEffect(() => {
    let e = null != b && b.length > 0;
    null == S && e && g(b[0])
  }, [b, S, g]);
  let O = e => {
    let t = e.skuId;
    return (0, i.jsx)(d.Z, {
      skuId: t,
      price: _.intl.string(_.t.QQsaCQ),
      isSelected: t === (null == S ? void 0 : S.skuId),
      onSelect: () => g(e),
      className: L.giftSelectItem
    }, t)
  };
  s()(null != r, "Expected plan to selected"), s()(null != y, "Expected selectedSkuId"), s()(null != E, "Step should be set");
  let w = null == b ? void 0 : b.map(e => O(e)),
    I = null != S && null != v ? (0, i.jsx)(C.Z, {
      avatarDecorationOverride: {
        asset: S.assetId
      },
      user: v,
      guildId: null,
      avatarSize: o.EFr.SIZE_152
    }) : null,
    Z = (0, i.jsx)(j.O3, {
      children: (0, i.jsx)(o.mzw, {
        className: L.modalFooter,
        children: (0, i.jsx)(c.y, {
          onStepChange: e => {
            null != v && null != S && p.default.track(m.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: v.id,
              reward_sku_id: S.skuId
            }), t(e)
          },
          onBackClick: () => t(h.h8.PLAN_SELECT),
          shouldRenderUpdatedPaymentModal: !0,
          showBackButton: !0,
          planOptions: [r.id],
          selectedPlanId: r.id
        })
      })
    }),
    P = (0, i.jsx)(o.X6q, {
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
        children: [P, (0, i.jsx)(o.olH, {
          onClick: n
        })]
      })
    }), (0, i.jsx)(o.hzk, {
      children: (0, i.jsxs)(o.Kqy, {
        gap: 24,
        align: "center",
        padding: {
          top: 24
        },
        children: [I, (0, i.jsx)(o.Kqy, {
          gap: 8,
          padding: {
            top: 12
          },
          children: w
        })]
      })
    }), Z]
  })
}