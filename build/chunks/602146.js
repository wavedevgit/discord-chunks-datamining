/** Chunk was on web.js **/
/** chunk id: 602146, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  RR: () => o,
  RY: () => s,
  yG: () => a
});
var Chunk562465 = require("./562465.js"),
  Chunk652215 = require("./652215.js");
async function a(e, t, n, a, s) {
  return (await r.Bo.post({
    url: i.Rsh.STAGE_INSTANCES,
    body: {
      channel_id: e,
      topic: t,
      privacy_level: n,
      guild_scheduled_event_id: s,
      send_start_notification: a
    },
    rejectWithError: false
  })).body
}
async function s(e, t, n) {
  return (await r.Bo.patch({
    url: i.Rsh.STAGE_INSTANCE(e),
    body: {
      topic: t,
      privacy_level: n
    },
    rejectWithError: false
  })).body
}

function o(e) {
  return r.Bo.del({
    url: i.Rsh.STAGE_INSTANCE(e),
    rejectWithError: false
  })
}