/** Chunk was on 80193 **/
t.d(n, {
  c: () => l
});
var i = t(954955),
  o = t.n(i),
  c = t(544891),
  a = t(570140),
  r = t(75666),
  _ = t(981631);
let l = o()(async e => {
  try {
    a.Z.dispatch({
      type: "EVENT_DIRECTORY_FETCH_START"
    });
    let n = await c.tn.get({
      url: _.ANM.DIRECTORY_CHANNEL_ENTRIES(e),
      query: {
        type: r.C2.GUILD_SCHEDULED_EVENT
      },
      rejectWithError: !0
    });
    a.Z.dispatch({
      type: "EVENT_DIRECTORY_FETCH_SUCCESS",
      channelId: e,
      entries: n.body
    })
  } catch (e) {
    a.Z.dispatch({
      type: "EVENT_DIRECTORY_FETCH_FAILURE"
    })
  }
}, 200)