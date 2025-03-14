/** Chunk was on 99518 **/
t.d(n, {
  Dk: () => u,
  Ix: () => a,
  me: () => l
});
var i = t(544891),
  r = t(981631);
async function l(e, n, t, l, u) {
  return (await i.tn.post({
    url: r.ANM.STAGE_INSTANCES,
    body: {
      channel_id: e,
      topic: n,
      privacy_level: t,
      guild_scheduled_event_id: u,
      send_start_notification: l
    },
    rejectWithError: !1
  })).body
}
async function u(e, n, t) {
  return (await i.tn.patch({
    url: r.ANM.STAGE_INSTANCE(e),
    body: {
      topic: n,
      privacy_level: t
    },
    rejectWithError: !1
  })).body
}

function a(e) {
  return i.tn.del({
    url: r.ANM.STAGE_INSTANCE(e),
    rejectWithError: !1
  })
}