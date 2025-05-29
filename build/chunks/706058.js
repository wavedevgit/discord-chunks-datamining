/** Chunk was on 85885 **/
e.d(n, {
  Dk: () => c,
  Ix: () => a,
  me: () => l
});
var i = e(544891),
  r = e(981631);
async function l(t, n, e, l, c) {
  return (await i.tn.post({
    url: r.ANM.STAGE_INSTANCES,
    body: {
      channel_id: t,
      topic: n,
      privacy_level: e,
      guild_scheduled_event_id: c,
      send_start_notification: l
    },
    rejectWithError: !1
  })).body
}
async function c(t, n, e) {
  return (await i.tn.patch({
    url: r.ANM.STAGE_INSTANCE(t),
    body: {
      topic: n,
      privacy_level: e
    },
    rejectWithError: !1
  })).body
}

function a(t) {
  return i.tn.del({
    url: r.ANM.STAGE_INSTANCE(t),
    rejectWithError: !1
  })
}