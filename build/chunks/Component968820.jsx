/** Chunk was on 88479 **/
/** chunk id: 968820, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk791382 = require("./791382.jsx"),
  Chunk937615 = require("./937615.js"),
  Chunk217597 = require("./217597.jsx"),
  Chunk685389 = require("./685389.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk49792 = require("./49792.js");

function m(e) {
  let {
    children: t,
    revenue: n,
    revenueTrend: m,
    summaryMetricLabel: g,
    summaryMetricValue: p,
    summaryMetricTrend: h,
    summaryMetricTrendIsPercent: f
  } = e;
  return (0, r.jsx)(i.hjN, {
    title: d.intl.string(d.t.ofmOzc),
    children: (0, r.jsxs)("div", {
      className: u.paymentInfoGroup,
      children: [(0, r.jsxs)(o.H, {
        children: [(0, r.jsx)(s.Z, {
          label: d.intl.string(d.t.iY1jW1),
          value: (0, a.T4)(null != n ? n : 0, c.pKx.USD),
          additionalContent: (0, r.jsx)(l.H, {
            value: m,
            isPercent: true
          })
        }), (0, r.jsx)(s.Z, {
          label: g,
          value: p,
          additionalContent: (0, r.jsx)(l.H, {
            value: h,
            isPercent: f
          })
        })]
      }), t]
    })
  })
}