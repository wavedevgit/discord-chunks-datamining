/** Chunk was on web.js **/
/** chunk id: 706058, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dk: () => o,
  Ix: () => s,
  me: () => a
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
async function a(e, t, n, a, o) {
  return (await r.tn.post({
    url: i.ANM.STAGE_INSTANCES,
    body: {
      channel_id: e,
      topic: t,
      privacy_level: n,
      guild_scheduled_event_id: o,
      send_start_notification: a
    },
    rejectWithError: false
  })).body
}
async function o(e, t, n) {
  return (await r.tn.patch({
    url: i.ANM.STAGE_INSTANCE(e),
    body: {
      topic: t,
      privacy_level: n
    },
    rejectWithError: false
  })).body
}

function s(e) {
  return r.tn.del({
    url: i.ANM.STAGE_INSTANCE(e),
    rejectWithError: false
  })
}