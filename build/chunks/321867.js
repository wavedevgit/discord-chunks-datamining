/** Chunk was on 99786 **/
n.d(e, {
  Z: () => C
});
var o = n(200651),
  i = n(192379),
  r = n(442837),
  a = n(481060),
  l = n(100527),
  c = n(906732),
  s = n(118012),
  u = n(411477),
  _ = n(197115),
  d = n(594174),
  f = n(626135),
  m = n(74538),
  p = n(981631),
  b = n(486324),
  E = n(474936),
  g = n(388032),
  A = n(301995);

function C(t) {
  let {
    analyticsSection: e,
    type: n
  } = t, C = (0, r.e7)([d.default], () => d.default.getCurrentUser()), N = m.ZP.canUseAnimatedAvatar(C), v = m.ZP.canUsePremiumProfileCustomization(C), x = n === b.pC.BANNER && v || n === b.pC.AVATAR && N, {
    sourceAnalyticsLocations: R
  } = (0, c.ZP)(l.Z.PREMIUM_PREVIEW_UPSELL_HEADER);
  if (i.useEffect(() => {
      x || f.default.track(p.rMx.PREMIUM_UPSELL_VIEWED, {
        type: e,
        location_stack: R
      })
    }, [x, e, R]), x) return null;
  let S = (0, o.jsx)(_.Z, {
    className: A.__invalid_getNitroLink,
    size: a.zxk.Sizes.SMALL,
    look: a.zxk.Looks.LINK,
    color: a.zxk.Colors.LINK,
    subscriptionTier: E.Si.TIER_2,
    buttonText: g.NW.format(g.t["944tDg"], {}),
    showIcon: !1,
    premiumModalAnalyticsLocation: {
      section: e,
      object: p.qAy.BUTTON_CTA
    },
    disableShine: !0
  });
  return (0, o.jsx)(u.Z, {
    reducedRightPadding: !0,
    className: A.nitroPreviewUpsell,
    text: g.NW.format(g.t.Og8039, {}),
    textSize: s.Z.Sizes.SIZE_14,
    textColor: s.Z.Colors.HEADER_PRIMARY,
    button: S
  })
}