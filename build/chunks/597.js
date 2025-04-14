/** Chunk was on 7549 **/
n.d(e, {
  c: () => s
});
var i = n(954955),
  _ = n.n(i),
  d = n(544891),
  a = n(570140),
  r = n(75666),
  l = n(981631);
let s = _()(async t => {
  try {
    a.Z.dispatch({
      type: "EVENT_DIRECTORY_FETCH_START"
    });
    let e = await d.tn.get({
      url: l.ANM.DIRECTORY_CHANNEL_ENTRIES(t),
      query: {
        type: r.C2.GUILD_SCHEDULED_EVENT
      },
      rejectWithError: !0
    });
    a.Z.dispatch({
      type: "EVENT_DIRECTORY_FETCH_SUCCESS",
      channelId: t,
      entries: e.body
    })
  } catch (t) {
    a.Z.dispatch({
      type: "EVENT_DIRECTORY_FETCH_FAILURE"
    })
  }
}, 200)