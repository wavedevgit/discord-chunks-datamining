/** Chunk was on 3795 **/
/** chunk id: 602146, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  RR: () => s,
  RY: () => c,
  yG: () => E
});
var Chunk562465 = require("./562465.js"),
  Chunk652215 = require("./652215.js");
async function E(t, e, r, E, c) {
  return (await i.Bo.post({
    url: n.Rsh.STAGE_INSTANCES,
    body: {
      channel_id: t,
      topic: e,
      privacy_level: r,
      guild_scheduled_event_id: c,
      send_start_notification: E
    },
    rejectWithError: false
  })).body
}
async function c(t, e, r) {
  return (await i.Bo.patch({
    url: n.Rsh.STAGE_INSTANCE(t),
    body: {
      topic: e,
      privacy_level: r
    },
    rejectWithError: false
  })).body
}

function s(t) {
  return i.Bo.del({
    url: n.Rsh.STAGE_INSTANCE(t),
    rejectWithError: false
  })
}