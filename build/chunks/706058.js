/** Chunk was on 99665 **/
n.d(t, {
  Dk: () => u,
  Ix: () => o,
  me: () => i
});
var r = n(544891),
  l = n(981631);
async function i(e, t, n, i, u) {
  return (await r.tn.post({
    url: l.ANM.STAGE_INSTANCES,
    body: {
      channel_id: e,
      topic: t,
      privacy_level: n,
      guild_scheduled_event_id: u,
      send_start_notification: i
    },
    rejectWithError: !1
  })).body
}
async function u(e, t, n) {
  return (await r.tn.patch({
    url: l.ANM.STAGE_INSTANCE(e),
    body: {
      topic: t,
      privacy_level: n
    },
    rejectWithError: !1
  })).body
}

function o(e) {
  return r.tn.del({
    url: l.ANM.STAGE_INSTANCE(e),
    rejectWithError: !1
  })
}