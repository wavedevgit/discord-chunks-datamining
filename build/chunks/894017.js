/** Chunk was on web.js **/
/** chunk id: 894017, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a,
  c: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk924301 = require("./924301.js");

function a(e, t) {
  return s((0, r.Wu)([i.ZP], () => {
    var e, n;
    return null != (n = null == (e = i.ZP.getGuildScheduledEvent(t)) ? true : e.guild_scheduled_event_exceptions) ? n : []
  }), e)
}

function o(e, t) {
  var n, r;
  return s(null != (r = null == (n = i.ZP.getGuildScheduledEvent(t)) ? true : n.guild_scheduled_event_exceptions) ? r : [], e)
}

function s(e, t) {
  return null == e ? true : e.find(e => e.event_exception_id === t)
}