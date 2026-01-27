/** Chunk was on web.js **/
/** chunk id: 929267, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  QC: () => p,
  TS: () => u,
  ko: () => f,
  yS: () => d
});
var Chunk961350 = require("./961350.js"),
  Chunk698441 = require("./698441.js"),
  Chunk722260 = require("./722260.js"),
  Chunk563312 = require("./563312.js"),
  Chunk974930 = require("./974930.js"),
  Chunk988794 = require("./988794.js"),
  Chunk985018 = require("./985018.jsx");

function u(e, t) {
  let n = r.default.getId();
  return i.Ay.getRsvp(e, t, n)
}
var d = function(e) {
  return e[e.SERIES = 0] = "SERIES", e[e.RECURRENCE = 1] = "RECURRENCE", e
}({});

function f() {
  return [{
    name: c.intl.string(c.t.uoorxi),
    value: 0
  }, {
    name: c.intl.string(c.t.lwZCFT),
    value: 1
  }]
}

function p(e) {
  let {
    eventId: t,
    recurrenceId: n,
    guildId: r,
    updateRsvp: c,
    openRsvpPicker: d,
    onRsvp: f
  } = e, p = i.Ay.getGuildScheduledEvent(t);
  if (null == p) return;
  let _ = (0, a.m)(n, t),
    {
      startTime: h
    } = (0, o.YR)(p, n),
    m = (null == p ? true : p.scheduled_start_time) != null ? (0, s.j)(_, h, new Date(null == p ? true : p.scheduled_start_time)) : null,
    g = null != m && l.lV.has(m) ? null : null != n ? n : (0, s.G3)(p),
    E = u(p.id),
    y = u(p.id, g);
  null == g ? (c(t, null, r, null != E ? l.Qi.UNINTERESTED : l.Qi.INTERESTED), null == f || f()) : null != y ? (c(t, g, r, null != E ? l.Qi.INTERESTED : l.Qi.UNINTERESTED), null == f || f()) : d(p, g)
}