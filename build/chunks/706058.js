/** Chunk was on web.js **/
/** chunk id: 706058, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dk: () => a,
  Ix: () => s,
  me: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
async function o(e, t, n, o, a) {
  return (await r.tn.post({
    url: i.ANM.STAGE_INSTANCES,
    body: {
      channel_id: e,
      topic: t,
      privacy_level: n,
      guild_scheduled_event_id: a,
      send_start_notification: o
    },
    rejectWithError: false
  })).body
}
async function a(e, t, n) {
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