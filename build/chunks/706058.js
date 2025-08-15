/** Chunk was on 92522 **/
/** chunk id: 706058, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  Dk: () => u,
  Ix: () => a,
  me: () => l
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
async function l(n, e, t, l, u) {
  return (await i.tn.post({
    url: r.ANM.STAGE_INSTANCES,
    body: {
      channel_id: n,
      topic: e,
      privacy_level: t,
      guild_scheduled_event_id: u,
      send_start_notification: l
    },
    rejectWithError: false
  })).body
}
async function u(n, e, t) {
  return (await i.tn.patch({
    url: r.ANM.STAGE_INSTANCE(n),
    body: {
      topic: e,
      privacy_level: t
    },
    rejectWithError: false
  })).body
}

function a(n) {
  return i.tn.del({
    url: r.ANM.STAGE_INSTANCE(n),
    rejectWithError: false
  })
}