/** Chunk was on 29679 **/
/** chunk id: 833695, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk399606 = require("./399606.js"),
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
  return null == n ? null : (0, r.jsx)(a.bL, {
    children: n.name
  })
}

function _(e) {
  var t, n, a;
  let {
    guildId: f
  } = e, _ = (0, h.Z)(f), v = (0, s.f3)(), C = (0, i.e7)([p.Z], () => p.Z.getGuild());
  return _.loading || null == C ? (0, r.jsx)(l.$jN, {}) : null == _.application ? (0, r.jsx)(u.Z, {
    guild: C
  }) : (0, r.jsxs)(d.Z, {
    children: [(0, r.jsx)(c.Z, {
      revenue: _.metrics.revenue,
      revenueTrend: _.metrics.revenuePctChange,
      summaryMetricLabel: b.intl.string(b.t.R3PCmZ),
      summaryMetricValue: null != (n = _.metrics.paymentsCount) ? n : "-",
      summaryMetricTrend: null != (a = _.metrics.paymentsCountChange) ? a : 0,
      summaryMetricTrendIsPercent: false,
      children: (0, r.jsx)(x.Z, {
        guildId: f,
        earningsData: _
      })
    }), (0, r.jsx)(l.hjN, {
      title: b.intl.string(b.t["+5Rmho"]),
      children: (0, r.jsx)(o.Z, {
        ListingIdLabel: j,
        payoutsByPeriod: _.payoutsByPeriod,
        team: null == (t = _.application) ? true : t.team
      })
    }), (0, r.jsx)(l.hjN, {
      title: b.intl.string(b.t.O8cDAA),
      disabled: v,
      children: (0, r.jsx)(m.Z, {
        guildId: f,
        application: _.application
      })
    }), (0, r.jsx)(l.hjN, {
      title: b.intl.string(b.t["0n7R2d"]),
      children: (0, r.jsx)(g.Z, {
        guildId: f,
        allPeriods: _.payoutsByPeriod
      })
    })]
  })
}