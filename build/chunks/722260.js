/** Chunk was on web.js **/
/** chunk id: 722260, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a,
  m: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk698441 = require("./698441.js");

function a(e, t) {
  return o((0, r.yK)([i.Ay], () => {
    var e, n;
    return null != (e = null == (n = i.Ay.getGuildScheduledEvent(t)) ? true : n.guild_scheduled_event_exceptions) ? e : []
  }), e)
}

function s(e, t) {
  var n, r;
  return o(null != (n = null == (r = i.Ay.getGuildScheduledEvent(t)) ? true : r.guild_scheduled_event_exceptions) ? n : [], e)
}

function o(e, t) {
  return null == e ? true : e.find(e => e.event_exception_id === t)
}