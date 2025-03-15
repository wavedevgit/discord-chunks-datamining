/** Chunk was on 57876 **/
n.d(t, {
  Z: () => x
});
var r = n(200651);
n(192379);
var i = n(442837),
  l = n(481060),
  s = n(607070),
  o = n(906732),
  a = n(821982),
  C = n(832149),
  d = n(600164),
  c = n(286961),
  u = n(594174),
  p = n(614277),
  _ = n(978234);

function x(e) {
  let {
    onClose: t,
    selectedPromotionalDecoPurchaseRecord: n,
    selectedGiftingPromotionReward: x
  } = e, f = (0, i.e7)([u.default], () => u.default.getCurrentUser()), h = (0, i.e7)([s.Z], () => s.Z.useReducedMotion), {
    analyticsLocations: j
  } = (0, o.ZP)(), m = l.EFr.SIZE_32, L = (0, a.Z)(null == x ? void 0 : x.assetId, m, !h), g = (0, c.Z)(), S = null == g ? void 0 : g.giftPurchaseConfirmation;
  return null == n || null == S ? null : (0, r.jsx)(p.O3, {
    children: (0, r.jsx)(l.mzw, {
      align: d.Z.Align.CENTER,
      children: (0, r.jsxs)("div", {
        className: _.promotionalFooter,
        children: [(0, r.jsx)(l.Xo$, {
          "aria-label": null == f ? void 0 : f.username,
          size: m,
          src: null == f ? void 0 : f.getAvatarURL(void 0, (0, l.pxk)(m), !h),
          avatarDecoration: L
        }), (0, r.jsx)(l.zxk, {
          onClick: () => {
            t(), (0, C.Z)({
              product: n,
              shouldShowPromotionalExperience: !0,
              analyticsLocations: j
            })
          },
          children: S.collectRewardButtonText()
        })]
      })
    })
  })
}