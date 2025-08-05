/** Chunk was on 54433 **/
n.d(t, {
  Z: () => j
});
var i = n(255367);
n(73800);
var l = n(442837),
  r = n(159691),
  s = n(481060),
  a = n(607070),
  o = n(906732),
  C = n(821982),
  d = n(832149),
  c = n(600164),
  u = n(286961),
  p = n(594174),
  x = n(27034),
  f = n(215023),
  h = n(317112);

function j(e) {
  let {
    onClose: t,
    selectedPromotionalDecoPurchaseRecord: n,
    selectedGiftingPromotionReward: j
  } = e, m = (0, l.e7)([p.default], () => p.default.getCurrentUser()), _ = (0, l.e7)([a.Z], () => a.Z.useReducedMotion), {
    analyticsLocations: L
  } = (0, o.ZP)(), y = s.EFr.SIZE_32, E = (0, C.Z)(null == j ? void 0 : j.assetId, y, !_), g = (0, u.Z)(), S = null == g ? void 0 : g.giftPurchaseConfirmation;
  return null == n || null == S ? null : (0, i.jsx)(x.O3, {
    children: (0, i.jsx)(s.mzw, {
      align: c.Z.Align.CENTER,
      "data-migration-pending": !0,
      children: (0, i.jsxs)("div", {
        className: h.promotionalFooter,
        children: [(0, i.jsx)(s.Xo$, {
          "aria-label": null == m ? void 0 : m.username,
          size: y,
          src: null == m ? void 0 : m.getAvatarURL(void 0, (0, s.pxk)(y), !_),
          avatarDecoration: E
        }), (0, i.jsx)(r.zx, {
          variant: "primary",
          text: S.collectRewardButtonText(),
          onClick: () => {
            t(), (0, d.Z)({
              product: n,
              shouldShowPromotionalExperience: !0,
              analyticsLocations: L,
              purchaseType: f.o8.PROMOTIONAL
            })
          }
        })]
      })
    })
  })
}