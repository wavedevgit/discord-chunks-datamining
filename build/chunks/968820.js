/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => u
});
var r = n(200651);
n(192379);
var i = n(481060),
  s = n(791382),
  a = n(937615),
  l = n(217597),
  o = n(685389),
  A = n(981631),
  c = n(388032),
  d = n(787340);

function u(e) {
  let {
    children: t,
    revenue: n,
    revenueTrend: u,
    summaryMetricLabel: g,
    summaryMetricValue: f,
    summaryMetricTrend: m,
    summaryMetricTrendIsPercent: p
  } = e;
  return (0, r.jsx)(i.hjN, {
    title: c.NW.string(c.t.ofmOzc),
    children: (0, r.jsxs)("div", {
      className: d.paymentInfoGroup,
      children: [(0, r.jsxs)(o.H, {
        children: [(0, r.jsx)(l.Z, {
          label: c.NW.string(c.t.iY1jW1),
          value: (0, a.T4)(null != n ? n : 0, A.pKx.USD),
          additionalContent: (0, r.jsx)(s.H, {
            value: u,
            isPercent: !0
          })
        }), (0, r.jsx)(l.Z, {
          label: g,
          value: f,
          additionalContent: (0, r.jsx)(s.H, {
            value: m,
            isPercent: p
          })
        })]
      }), t]
    })
  })
}