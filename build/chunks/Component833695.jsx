/** Chunk was on 64982 **/
/** chunk id: 833695, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk395586 = require("./395586.jsx"),
  Chunk755930 = require("./755930.jsx"),
  Chunk909667 = require("./909667.jsx"),
  Chunk968820 = require("./968820.jsx"),
  Chunk200472 = require("./200472.jsx"),
  Chunk489028 = require("./489028.jsx"),
  Chunk277369 = require("./277369.jsx"),
  Chunk215124 = require("./215124.jsx"),
  Chunk999382 = require("./999382.js"),
  Chunk267101 = require("./267101.js"),
  Chunk287576 = require("./287576.js"),
  Chunk894610 = require("./894610.jsx"),
  Chunk388032 = require("./388032.jsx");

function j(e) {
  let {
    listingId: t
  } = e, n = (0, f.r)(t);
  return null == n ? null : (0, r.jsx)(s.bL, {
    children: n.name
  })
}

function v(e) {
  var t, n, s;
  let {
    guildId: f
  } = e, v = (0, h.Z)(f), _ = (0, a.f3)(), O = (0, i.e7)([p.Z], () => p.Z.getGuild());
  return v.loading || null == O ? (0, r.jsx)(l.$jN, {}) : null == v.application ? (0, r.jsx)(u.Z, {
    guild: O
  }) : (0, r.jsxs)(d.Z, {
    children: [(0, r.jsx)(c.Z, {
      revenue: v.metrics.revenue,
      revenueTrend: v.metrics.revenuePctChange,
      summaryMetricLabel: x.intl.string(x.t.R3PCmW),
      summaryMetricValue: null != (n = v.metrics.paymentsCount) ? n : "-",
      summaryMetricTrend: null != (s = v.metrics.paymentsCountChange) ? s : 0,
      summaryMetricTrendIsPercent: false,
      children: (0, r.jsx)(b.Z, {
        guildId: f,
        earningsData: v
      })
    }), (0, r.jsx)(l.gNt, {
      label: x.intl.string(x.t["+5Rmhl"]),
      children: (0, r.jsx)(o.Z, {
        ListingIdLabel: j,
        payoutsByPeriod: v.payoutsByPeriod,
        team: null == (t = v.application) ? true : t.team
      })
    }), (0, r.jsx)(l.gNt, {
      label: x.intl.string(x.t.O8cDAJ),
      disabled: _,
      children: (0, r.jsx)(g.Z, {
        guildId: f,
        application: v.application
      })
    }), (0, r.jsx)(l.gNt, {
      label: x.intl.string(x.t["0n7R2X"]),
      children: (0, r.jsx)(m.Z, {
        guildId: f,
        allPeriods: v.payoutsByPeriod
      })
    })]
  })
}