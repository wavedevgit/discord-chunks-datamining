/** Chunk was on 47841 **/
/** chunk id: 371701, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk209812 = require("./209812.jsx"),
  Chunk242564 = require("./242564.jsx"),
  Chunk906779 = require("./906779.jsx"),
  Chunk586621 = require("./586621.jsx"),
  Chunk522663 = require("./522663.jsx"),
  Chunk857802 = require("./857802.jsx"),
  Chunk595303 = require("./595303.jsx"),
  Chunk781289 = require("./781289.jsx"),
  Chunk555337 = require("./555337.js"),
  Chunk250627 = require("./250627.js"),
  Chunk839837 = require("./839837.js"),
  Chunk89791 = require("./89791.jsx"),
  Chunk985018 = require("./985018.jsx");

function j(e) {
  let {
    listingId: t
  } = e, n = (0, f.az)(t);
  return null == n ? null : (0, r.jsx)(a.fh, {
    children: n.name
  })
}

function _(e) {
  var t, n, a;
  let {
    guildId: f
  } = e, _ = (0, b.A)(f), O = (0, s.GK)(), v = (0, i.bG)([p.A], () => p.A.getGuild());
  return _.loading || null == v ? (0, r.jsx)(l.y$y, {}) : null == _.application ? (0, r.jsx)(u.A, {
    guild: v
  }) : (0, r.jsxs)(d.A, {
    children: [(0, r.jsx)(c.A, {
      revenue: _.metrics.revenue,
      revenueTrend: _.metrics.revenuePctChange,
      summaryMetricLabel: x.intl.string(x.t.R3PCmW),
      summaryMetricValue: null != (t = _.metrics.paymentsCount) ? t : "-",
      summaryMetricTrend: null != (n = _.metrics.paymentsCountChange) ? n : 0,
      summaryMetricTrendIsPercent: false,
      children: (0, r.jsx)(h.A, {
        guildId: f,
        earningsData: _
      })
    }), (0, r.jsx)(l.D0$, {
      label: x.intl.string(x.t["+5Rmhl"]),
      children: (0, r.jsx)(o.A, {
        ListingIdLabel: j,
        payoutsByPeriod: _.payoutsByPeriod,
        team: null == (a = _.application) ? true : a.team
      })
    }), (0, r.jsx)(l.D0$, {
      label: x.intl.string(x.t.O8cDAJ),
      disabled: O,
      children: (0, r.jsx)(g.A, {
        guildId: f,
        application: _.application
      })
    }), (0, r.jsx)(l.D0$, {
      label: x.intl.string(x.t["0n7R2X"]),
      children: (0, r.jsx)(m.A, {
        guildId: f,
        allPeriods: _.payoutsByPeriod
      })
    })]
  })
}