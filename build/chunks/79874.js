/** Chunk was on web.js **/
/** chunk id: 79874, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Kq: () => c,
  ZP: () => s,
  zI: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk924301 = require("./924301.js"),
  Chunk894017 = require("./894017.js"),
  Chunk854698 = require("./854698.js");

function s(e, t) {
  t = null != t ? t : (0, o.DK)(e);
  let n = (0, a.Z)(t, e.id);
  return u(e, n, t)
}

function l(e, t) {
  let n = (0, r.e7)([i.ZP], () => i.ZP.getGuildScheduledEvent(e));
  t = null != t ? t : (0, o.DK)(n);
  let s = (0, a.Z)(t, null == n ? true : n.id);
  return null == n ? null : u(n, s, t)
}

function c(e, t) {
  let n = (0, a.c)(t, e.id);
  return u(e, n, t)
}

function u(e, t, n) {
  if (null == e.recurrence_rule || null == n) return {
    startTime: new Date(e.scheduled_start_time),
    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
  };
  let r = (0, o.iA)(n, e),
    {
      startDate: i,
      endDate: a
    } = (0, o.x6)(r, t);
  return {
    startTime: i.toDate(),
    endTime: null == a ? true : a.toDate()
  }
}