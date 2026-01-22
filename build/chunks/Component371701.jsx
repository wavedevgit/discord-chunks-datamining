/** Chunk was on 47841 **/
/** chunk id: 371701, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => O
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
  } = e, n = (0, m.az)(t);
  return null == n ? null : (0, r.jsx)(a.fh, {
    children: n.name
  })
}

function O(e) {
  var t, n, a;
  let {
    guildId: m
  } = e, O = (0, p.A)(m), y = (0, s.GK)(), v = (0, i.bG)([b.A], () => b.A.getGuild());
  return O.loading || null == v ? (0, r.jsx)(l.y$y, {}) : null == O.application ? (0, r.jsx)(u.A, {
    guild: v
  }) : (0, r.jsxs)(d.A, {
    children: [(0, r.jsx)(o.A, {
      revenue: O.metrics.revenue,
      revenueTrend: O.metrics.revenuePctChange,
      summaryMetricLabel: h.intl.string(h.t.R3PCmW),
      summaryMetricValue: null != (t = O.metrics.paymentsCount) ? t : "-",
      summaryMetricTrend: null != (n = O.metrics.paymentsCountChange) ? n : 0,
      summaryMetricTrendIsPercent: false,
      children: (0, r.jsx)(x.A, {
        guildId: m,
        earningsData: O
      })
    }), (0, r.jsx)(l.D0$, {
      label: h.intl.string(h.t["+5Rmhl"]),
      children: (0, r.jsx)(c.A, {
        ListingIdLabel: j,
        payoutsByPeriod: O.payoutsByPeriod,
        team: null == (a = O.application) ? true : a.team
      })
    }), (0, r.jsx)(l.D0$, {
      label: h.intl.string(h.t.O8cDAJ),
      disabled: y,
      children: (0, r.jsx)(f.A, {
        guildId: m,
        application: O.application
      })
    }), (0, r.jsx)(l.D0$, {
      label: h.intl.string(h.t["0n7R2X"]),
      children: (0, r.jsx)(g.A, {
        guildId: m,
        allPeriods: O.payoutsByPeriod
      })
    })]
  })
}