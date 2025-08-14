/** Chunk was on 40725 **/
/** chunk id: 833695, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  } = e, n = (0, h.r)(t);
  return null == n ? null : (0, r.jsx)(s.bL, {
    children: n.name
  })
}

function v(e) {
  var t, n, s;
  let {
    guildId: h
  } = e, v = (0, f.Z)(h), _ = (0, a.f3)(), O = (0, i.e7)([p.Z], () => p.Z.getGuild());
  return v.loading || null == O ? (0, r.jsx)(l.$jN, {}) : null == v.application ? (0, r.jsx)(u.Z, {
    guild: O
  }) : (0, r.jsxs)(d.Z, {
    children: [(0, r.jsx)(c.Z, {
      revenue: v.metrics.revenue,
      revenueTrend: v.metrics.revenuePctChange,
      summaryMetricLabel: x.intl.string(x.t.R3PCmZ),
      summaryMetricValue: null != (n = v.metrics.paymentsCount) ? n : "-",
      summaryMetricTrend: null != (s = v.metrics.paymentsCountChange) ? s : 0,
      summaryMetricTrendIsPercent: false,
      children: (0, r.jsx)(b.Z, {
        guildId: h,
        earningsData: v
      })
    }), (0, r.jsx)(l.hjN, {
      title: x.intl.string(x.t["+5Rmho"]),
      children: (0, r.jsx)(o.Z, {
        ListingIdLabel: j,
        payoutsByPeriod: v.payoutsByPeriod,
        team: null == (t = v.application) ? true : t.team
      })
    }), (0, r.jsx)(l.hjN, {
      title: x.intl.string(x.t.O8cDAA),
      disabled: _,
      children: (0, r.jsx)(m.Z, {
        guildId: h,
        application: v.application
      })
    }), (0, r.jsx)(l.hjN, {
      title: x.intl.string(x.t["0n7R2d"]),
      children: (0, r.jsx)(g.Z, {
        guildId: h,
        allPeriods: v.payoutsByPeriod
      })
    })]
  })
}