/** Chunk was on 78036 **/
t.d(e, {
  c: () => l
});
var i = t(954955),
  o = t.n(i),
  c = t(544891),
  r = t(570140),
  a = t(75666),
  _ = t(981631);
let l = o()(async n => {
  try {
    r.Z.dispatch({
      type: "EVENT_DIRECTORY_FETCH_START"
    });
    let e = await c.tn.get({
      url: _.ANM.DIRECTORY_CHANNEL_ENTRIES(n),
      query: {
        type: a.C2.GUILD_SCHEDULED_EVENT
      },
      rejectWithError: !0
    });
    r.Z.dispatch({
      type: "EVENT_DIRECTORY_FETCH_SUCCESS",
      channelId: n,
      entries: e.body
    })
  } catch (n) {
    r.Z.dispatch({
      type: "EVENT_DIRECTORY_FETCH_FAILURE"
    })
  }
}, 200)