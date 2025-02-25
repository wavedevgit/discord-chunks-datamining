/** Chunk was on web.js **/
"use strict";
n.d(t, {
  KX: () => d,
  X2: () => u,
  cg: () => _,
  pF: () => f
});
var r = n(314897),
  i = n(924301),
  o = n(894017),
  a = n(79874),
  s = n(854698),
  l = n(765305),
  c = n(388032);

function u(e, t) {
  let n = r.default.getId();
  return i.ZP.getRsvp(e, t, n)
}
var d = function(e) {
  return e[e.SERIES = 0] = "SERIES", e[e.RECURRENCE = 1] = "RECURRENCE", e
}({});

function f() {
  return [{
    name: c.NW.string(c.t.uoorxs),
    value: 0
  }, {
    name: c.NW.string(c.t.lwZCFR),
    value: 1
  }]
}

function _(e) {
  let {
    eventId: t,
    recurrenceId: n,
    guildId: r,
    updateRsvp: c,
    openRsvpPicker: d,
    onRsvp: f
  } = e, _ = i.ZP.getGuildScheduledEvent(t);
  if (null == _) return;
  let p = (0, o.c)(n, t),
    {
      startTime: h
    } = (0, a.Kq)(_, n),
    g = (null == _ ? void 0 : _.scheduled_start_time) != null ? (0, s.lh)(p, h, new Date(null == _ ? void 0 : _.scheduled_start_time)) : null,
    m = null != g && l.$I.has(g) ? null : null != n ? n : (0, s.DK)(_),
    E = u(_.id),
    v = u(_.id, m);
  null == m ? (c(t, null, r, null != E ? l.gv.UNINTERESTED : l.gv.INTERESTED), null == f || f()) : null != v ? (c(t, m, r, null != E ? l.gv.INTERESTED : l.gv.UNINTERESTED), null == f || f()) : d(_, m)
}