/** Chunk was on 81288 **/
n.d(t, {
  Z: () => v
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
  m = n(74538),
  b = n(981631),
  f = n(486324),
  p = n(474936),
  h = n(388032),
  N = n(575658);

function v(e) {
  let {
    analyticsSection: t,
    type: n
  } = e, v = (0, r.e7)([_.default], () => _.default.getCurrentUser()), y = m.ZP.canUseAnimatedAvatar(v), C = m.ZP.canUsePremiumProfileCustomization(v), x = n === f.pC.BANNER && C || n === f.pC.AVATAR && y, {
    sourceAnalyticsLocations: T
  } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
  if (o.useEffect(() => {
      x || g.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
        type: t,
        location_stack: T
      })
    }, [x, t, T]), x) return null;
  let B = (0, i.jsx)(u.Z, {
    className: N.__invalid_getNitroLink,
    size: a.zxk.Sizes.SMALL,
    look: a.zxk.Looks.LINK,
    color: a.zxk.Colors.LINK,
    subscriptionTier: p.Si.TIER_2,
    buttonText: h.NW.format(h.t["944tDg"], {}),
    showIcon: !1,
    premiumModalAnalyticsLocation: {
      section: t,
      object: b.qAy.BUTTON_CTA
    },
    disableShine: !0
  });
  return (0, i.jsx)(d.Z, {
    reducedRightPadding: !0,
    className: N.nitroPreviewUpsell,
    text: h.NW.format(h.t.Og8039, {}),
    textSize: s.Z.Sizes.SIZE_14,
    textColor: s.Z.Colors.HEADER_PRIMARY,
    button: B
  })
}