/** Chunk was on 98829 **/
n.d(t, {
  Dk: () => a,
  Ix: () => u,
  me: () => l
});
var i = n(544891),
  r = n(981631);
async function l(e, t, n, l, a) {
  return (await i.tn.post({
    url: r.ANM.STAGE_INSTANCES,
    body: {
      channel_id: e,
      topic: t,
      privacy_level: n,
      guild_scheduled_event_id: a,
      send_start_notification: l
    },
    rejectWithError: !1
  })).body
}
async function a(e, t, n) {
  return (await i.tn.patch({
    url: r.ANM.STAGE_INSTANCE(e),
    body: {
      topic: t,
      privacy_level: n
    },
    rejectWithError: !1
  })).body
}

function u(e) {
  return i.tn.del({
    url: r.ANM.STAGE_INSTANCE(e),
    rejectWithError: !1
  })
}