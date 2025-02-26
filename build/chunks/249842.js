/** Chunk was on 68241 **/
n.d(t, {
  P: () => a
});
var r = n(544891),
  l = n(570140),
  s = n(981631);
async function a(e) {
  l.Z.dispatch({
    type: "GUILD_POPOUT_FETCH_START",
    guildId: e
  });
  try {
    let t = await r.tn.get({
      url: s.ANM.GUILD_PREVIEW(e),
      oldFormErrors: !0,
      rejectWithError: !0
    });
    l.Z.dispatch({
      type: "GUILD_POPOUT_FETCH_SUCCESS",
      guildId: e,
      guild: t.body
    })
  } catch (t) {
    l.Z.dispatch({
      type: "GUILD_POPOUT_FETCH_FAILURE",
      guildId: e
    })
  }
}