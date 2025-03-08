/** Chunk was on 74329 **/
n.d(t, {
  q: () => p
}), n(266796);
var r = n(200651);
n(192379);
var i = n(704215),
  o = n(481060),
  l = n(906732),
  a = n(963249),
  s = n(286961),
  c = n(644916),
  u = n(243778),
  d = n(921944),
  _ = n(24060);
let p = e => {
  let {
    dismissibleContent: t,
    noticeType: n
  } = e, {
    analyticsLocations: p
  } = (0, l.ZP)(), E = (0, s.Z)();
  return (0, r.jsx)(u.Xf, {
    contentType: t,
    latestVersion: (0, c.t)(t),
    groupName: d.R.NOTICE_BAR,
    bypassAutoDismiss: !0,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: l
      } = e;
      if (t === i.z.GIFTING_PROMOTION_REMINDER) {
        let e = null == E ? void 0 : E.reminderNagbar;
        return (0, r.jsxs)(o.qXd, {
          color: o.DM8.PREMIUM_TIER_2,
          children: [(0, r.jsx)(o.RyX, {
            onClick: () => l(d.L.USER_DISMISS),
            noticeType: n
          }), (0, r.jsx)(o.OgN, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            className: _.giftIcon
          }), null == e ? void 0 : e.description(), (0, r.jsx)(o.NoS, {
            onClick: () => {
              (0, a.Z)({
                isGift: !0,
                initialPlanId: null,
                analyticsLocations: p,
                analyticsLocation: null == e ? void 0 : e.analyticsLocation,
                analyticsObject: {
                  page: null == e ? void 0 : e.analyticsPage
                }
              })
            },
            noticeType: n,
            children: null == e ? void 0 : e.cta()
          })]
        })
      }
    }
  })
}