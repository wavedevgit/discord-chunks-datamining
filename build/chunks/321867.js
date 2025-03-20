/** Chunk was on 81288 **/
n.d(t, {
  Z: () => N
});
var i = n(200651),
  o = n(192379),
  r = n(442837),
  a = n(481060),
  l = n(100527),
  c = n(906732),
  s = n(118012),
  d = n(411477),
  u = n(197115),
  _ = n(594174),
  g = n(626135),
  b = n(74538),
  f = n(981631),
  m = n(486324),
  p = n(474936),
  h = n(388032),
  v = n(575658);

function N(e) {
  let {
    analyticsSection: t,
    type: n
  } = e, N = (0, r.e7)([_.default], () => _.default.getCurrentUser()), C = b.ZP.canUseAnimatedAvatar(N), y = b.ZP.canUsePremiumProfileCustomization(N), x = n === m.pC.BANNER && y || n === m.pC.AVATAR && C, {
    sourceAnalyticsLocations: T
  } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
  if (o.useEffect(() => {
      x || g.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
        type: t,
        location_stack: T
      })
    }, [x, t, T]), x) return null;
  let E = (0, i.jsx)(u.Z, {
    className: v.__invalid_getNitroLink,
    size: a.zxk.Sizes.SMALL,
    look: a.zxk.Looks.LINK,
    color: a.zxk.Colors.LINK,
    subscriptionTier: p.Si.TIER_2,
    buttonText: h.NW.format(h.t["944tDg"], {}),
    showIcon: !1,
    premiumModalAnalyticsLocation: {
      section: t,
      object: f.qAy.BUTTON_CTA
    },
    disableShine: !0
  });
  return (0, i.jsx)(d.Z, {
    reducedRightPadding: !0,
    className: v.nitroPreviewUpsell,
    text: h.NW.format(h.t.Og8039, {}),
    textSize: s.Z.Sizes.SIZE_14,
    textColor: s.Z.Colors.HEADER_PRIMARY,
    button: E
  })
}