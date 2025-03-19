/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => v
});
var r = n(200651);
n(192379);
var i = n(399606),
  s = n(481060),
  a = n(395586),
  l = n(755930),
  o = n(909667),
  c = n(968820),
  A = n(200472),
  d = n(489028),
  u = n(277369),
  g = n(215124),
  f = n(999382),
  m = n(267101),
  p = n(287576),
  h = n(894610),
  C = n(388032);

function b(e) {
  let {
    listingId: t
  } = e, n = (0, m.r)(t);
  return null == n ? null : (0, r.jsx)(l.bL, {
    children: n.name
  })
}

function v(e) {
  var t, n, l;
  let {
    guildId: m
  } = e, v = (0, p.Z)(m), x = (0, a.f3)(), N = (0, i.e7)([f.Z], () => f.Z.getGuild());
  return v.loading || null == N ? (0, r.jsx)(s.$jN, {}) : null == v.application ? (0, r.jsx)(d.Z, {
    guild: N
  }) : (0, r.jsxs)(A.Z, {
    children: [(0, r.jsx)(c.Z, {
      revenue: v.metrics.revenue,
      revenueTrend: v.metrics.revenuePctChange,
      summaryMetricLabel: C.NW.string(C.t.R3PCmZ),
      summaryMetricValue: null !== (n = v.metrics.paymentsCount) && void 0 !== n ? n : "-",
      summaryMetricTrend: null !== (l = v.metrics.paymentsCountChange) && void 0 !== l ? l : 0,
      summaryMetricTrendIsPercent: !1,
      children: (0, r.jsx)(h.Z, {
        guildId: m,
        earningsData: v
      })
    }), (0, r.jsx)(s.hjN, {
      title: C.NW.string(C.t["+5Rmho"]),
      children: (0, r.jsx)(o.Z, {
        ListingIdLabel: b,
        payoutsByPeriod: v.payoutsByPeriod,
        team: null === (t = v.application) || void 0 === t ? void 0 : t.team
      })
    }), (0, r.jsx)(s.hjN, {
      title: C.NW.string(C.t.O8cDAA),
      disabled: x,
      children: (0, r.jsx)(u.Z, {
        guildId: m,
        application: v.application
      })
    }), (0, r.jsx)(s.hjN, {
      title: C.NW.string(C.t["0n7R2d"]),
      children: (0, r.jsx)(g.Z, {
        guildId: m,
        allPeriods: v.payoutsByPeriod
      })
    })]
  })
}