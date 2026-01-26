/** Chunk was on 39048 **/
/** chunk id: 586621, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
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
  return (0, r.jsx)(i.nVY, {
    label: d.intl.string(d.t.ofmOzb),
    children: (0, r.jsxs)("div", {
      className: u.E7,
      children: [(0, r.jsxs)(o.t, {
        children: [(0, r.jsx)(a.A, {
          label: d.intl.string(d.t.iY1jW3),
          value: (0, s.$g)(null != n ? n : 0, c.Yri.USD),
          additionalContent: (0, r.jsx)(l.u, {
            value: g,
            isPercent: true
          })
        }), (0, r.jsx)(a.A, {
          label: m,
          value: p,
          additionalContent: (0, r.jsx)(l.u, {
            value: f,
            isPercent: h
          })
        })]
      }), t]
    })
  })
}