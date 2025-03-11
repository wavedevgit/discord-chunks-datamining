/** Chunk was on 3743 **/
n.d(t, {
  S: () => S
});
var r = n(200651),
  i = n(192379),
  l = n(512722),
  s = n.n(l),
  o = n(442837),
  a = n(481060),
  C = n(204418),
  d = n(628952),
  c = n(540059),
  u = n(314404),
  p = n(594174),
  _ = n(626135),
  x = n(987209),
  f = n(563132),
  h = n(409813),
  j = n(614277),
  m = n(981631),
  L = n(388032),
  g = n(177326);

function S(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    selectedPlan: l,
    selectedSkuId: S,
    step: y
  } = (0, f.JL)(), {
    setSelectedGiftingPromotionReward: E,
    selectedGiftingPromotionReward: b,
    claimableRewards: N
  } = (0, x.wD)(), I = (0, o.e7)([p.default], () => p.default.getCurrentUser());
  i.useEffect(() => {
    let e = null != N && N.length > 0;
    null == b && e && E(N[0])
  }, [N, b, E]);
  let v = e => {
      let t = e.skuId;
      return (0, r.jsx)(d.Z, {
        skuId: t,
        price: L.NW.string(L.t.QQsaCQ),
        isSelected: t === (null == b ? void 0 : b.skuId),
        onSelect: () => E(e),
        className: g.giftSelectItem
      }, t)
    },
    P = (0, c.Q3)("PremiumPaymentFreeSKUSelectStep");
  s()(null != l, "Expected plan to selected"), s()(null != S, "Expected selectedSkuId"), s()(null != y, "Step should be set");
  let M = null == N ? void 0 : N.map(e => v(e)),
    T = null != b && null != I ? (0, r.jsx)(C.Z, {
      avatarDecorationOverride: {
        asset: b.assetId
      },
      user: I,
      guildId: null,
      avatarSize: a.EFr.SIZE_152
    }) : null,
    Z = (0, r.jsx)(j.O3, {
      children: (0, r.jsx)(a.mzw, {
        className: g.modalFooter,
        children: (0, r.jsx)(u.y, {
          onStepChange: e => {
            null != I && null != b && _.default.track(m.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
              user_id: I.id,
              reward_sku_id: b.skuId
            }), t(e)
          },
          onBackClick: () => t(h.h8.PLAN_SELECT),
          shouldRenderUpdatedPaymentModal: !0,
          showBackButton: !0,
          planOptions: [l.id],
          selectedPlanId: l.id
        })
      })
    }),
    O = (0, r.jsx)(a.X6q, {
      variant: "heading-lg/bold",
      color: "header-primary",
      children: L.NW.string(L.t["Rp0+ZG"])
    });
  return P ? (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)(a.xBx, {
      children: (0, r.jsxs)(a.Kqy, {
        direction: "horizontal",
        justify: "space-between",
        align: "center",
        children: [O, (0, r.jsx)(a.olH, {
          onClick: n
        })]
      })
    }), (0, r.jsx)(a.hzk, {
      children: (0, r.jsxs)(a.Kqy, {
        gap: 24,
        align: "center",
        padding: {
          top: 24
        },
        children: [T, (0, r.jsx)(a.Kqy, {
          gap: 8,
          padding: {
            top: 12
          },
          children: M
        })]
      })
    }), Z]
  }) : (0, r.jsxs)("div", {
    className: g.stepBodySkuSelect,
    children: [(0, r.jsxs)("div", {
      className: g.bodyColumnLeft,
      children: [(0, r.jsx)("div", {
        className: g.header,
        children: O
      }), M]
    }), (0, r.jsx)(a.olH, {
      onClick: n,
      className: g.closeButton
    }), (0, r.jsx)("div", {
      className: g.bodyColumnRight,
      children: T
    }), Z]
  })
}