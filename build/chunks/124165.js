/** Chunk was on web.js **/
/** chunk id: 124165, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KX: () => d,
  X2: () => u,
  cg: () => p,
  pF: () => f
});
var Chunk314897 = require("./314897.js"),
  Chunk924301 = require("./924301.js"),
  Chunk894017 = require("./894017.js"),
  Chunk79874 = require("./79874.js"),
  Chunk854698 = require("./854698.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t) {
  let n = r.default.getId();
  return i.ZP.getRsvp(e, t, n)
}
var d = function(e) {
  return e[e.SERIES = 0] = "SERIES", e[e.RECURRENCE = 1] = "RECURRENCE", e
}({});

function f() {
  return [{
    name: Chunk388032.intl.string(Chunk388032.t.uoorxi),
    value: 0
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.lwZCFT),
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
  } = e, p = i.ZP.getGuildScheduledEvent(t);
  if (null == p) return;
  let _ = (0, o.c)(n, t),
    {
      startTime: m
    } = (0, a.Kq)(p, n),
    h = (null == p ? true : p.scheduled_start_time) != null ? (0, s.lh)(_, m, new Date(null == p ? true : p.scheduled_start_time)) : null,
    g = null != h && l.$I.has(h) ? null : null != n ? n : (0, s.DK)(p),
    E = u(p.id),
    b = u(p.id, g);
  null == g ? (c(t, null, r, null != E ? l.gv.UNINTERESTED : l.gv.INTERESTED), null == f || f()) : null != b ? (c(t, g, r, null != E ? l.gv.INTERESTED : l.gv.UNINTERESTED), null == f || f()) : d(p, g)
}