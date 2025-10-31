/** Chunk was on 64982 **/
/** chunk id: 968820, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
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

function g(e) {
  let {
    children: t,
    revenue: n,
    revenueTrend: g,
    summaryMetricLabel: m,
    summaryMetricValue: p,
    summaryMetricTrend: f,
    summaryMetricTrendIsPercent: h
  } = e;
  return (0, r.jsx)(i.C3N, {
    label: d.intl.string(d.t.ofmOzb),
    children: (0, r.jsxs)("div", {
      className: u.paymentInfoGroup,
      children: [(0, r.jsxs)(o.H, {
        children: [(0, r.jsx)(s.Z, {
          label: d.intl.string(d.t.iY1jW3),
          value: (0, a.T4)(null != n ? n : 0, c.pKx.USD),
          additionalContent: (0, r.jsx)(l.H, {
            value: g,
            isPercent: true
          })
        }), (0, r.jsx)(s.Z, {
          label: m,
          value: p,
          additionalContent: (0, r.jsx)(l.H, {
            value: f,
            isPercent: h
          })
        })]
      }), t]
    })
  })
}