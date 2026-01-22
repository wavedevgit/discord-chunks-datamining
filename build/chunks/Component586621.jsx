/** Chunk was on 47841 **/
/** chunk id: 586621, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk196827 = require("./196827.jsx"),
  Chunk580630 = require("./580630.js"),
  Chunk18743 = require("./18743.jsx"),
  Chunk233089 = require("./233089.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk796416 = require("./796416.js");

function f(e) {
  let {
    children: t,
    revenue: n,
    revenueTrend: f,
    summaryMetricLabel: g,
    summaryMetricValue: b,
    summaryMetricTrend: m,
    summaryMetricTrendIsPercent: p
  } = e;
  return (0, r.jsx)(i.nVY, {
    label: d.intl.string(d.t.ofmOzb),
    children: (0, r.jsxs)("div", {
      className: u.E7,
      children: [(0, r.jsxs)(c.t, {
        children: [(0, r.jsx)(a.A, {
          label: d.intl.string(d.t.iY1jW3),
          value: (0, s.$g)(null != n ? n : 0, o.Yri.USD),
          additionalContent: (0, r.jsx)(l.u, {
            value: f,
            isPercent: true
          })
        }), (0, r.jsx)(a.A, {
          label: g,
          value: b,
          additionalContent: (0, r.jsx)(l.u, {
            value: m,
            isPercent: p
          })
        })]
      }), t]
    })
  })
}