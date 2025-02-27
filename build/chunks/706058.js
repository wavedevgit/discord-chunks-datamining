/** Chunk was on 99245 **/
t.d(n, {
  Dk: () => u,
  Ix: () => a,
  me: () => r
});
var i = t(544891),
  l = t(981631);
async function r(e, n, t, r, u) {
  return (await i.tn.post({
    url: l.ANM.STAGE_INSTANCES,
    body: {
      channel_id: e,
      topic: n,
      privacy_level: t,
      guild_scheduled_event_id: u,
      send_start_notification: r
    },
    rejectWithError: !1
  })).body
}
async function u(e, n, t) {
  return (await i.tn.patch({
    url: l.ANM.STAGE_INSTANCE(e),
    body: {
      topic: n,
      privacy_level: t
    },
    rejectWithError: !1
  })).body
}

function a(e) {
  return i.tn.del({
    url: l.ANM.STAGE_INSTANCE(e),
    rejectWithError: !1
  })
}