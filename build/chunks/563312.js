/** Chunk was on web.js **/
/** chunk id: 563312, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => o,
  YR: () => c,
  nh: () => l
});
var Chunk311907 = require("./311907.js"),
  Chunk698441 = require("./698441.js"),
  Chunk722260 = require("./722260.js"),
  Chunk974930 = require("./974930.js");

function o(e, t) {
  t = null != t ? t : (0, s.G3)(e);
  let n = (0, a.A)(t, e.id);
  return u(e, n, t)
}

function l(e, t) {
  let n = (0, r.bG)([i.Ay], () => i.Ay.getGuildScheduledEvent(e));
  t = null != t ? t : (0, s.G3)(n);
  let o = (0, a.A)(t, null == n ? true : n.id);
  return null == n ? null : u(n, o, t)
}

function c(e, t) {
  let n = (0, a.m)(t, e.id);
  return u(e, n, t)
}

function u(e, t, n) {
  if (null == e.recurrence_rule || null == n) return {
    startTime: new Date(e.scheduled_start_time),
    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
  };
  let r = (0, s.CI)(n, e),
    {
      startDate: i,
      endDate: a
    } = (0, s.Ri)(r, t);
  return {
    startTime: i.toDate(),
    endTime: null == a ? true : a.toDate()
  }
}