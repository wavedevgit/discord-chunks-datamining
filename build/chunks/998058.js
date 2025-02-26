/** Chunk was on 4493 **/
r.d(t, {
  i: () => l
});
var n = r(544891),
  a = r(570140),
  i = r(881052),
  o = r(981631);
let l = async e => {
  try {
    var t;
    let r = await n.tn.get({
        url: o.ANM.SIMILAR_GAMES(e),
        rejectWithError: !1
      }),
      i = (null !== (t = r.body.similar_games) && void 0 !== t ? t : []).filter(t => t !== e);
    a.Z.dispatch({
      type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS",
      applicationId: e,
      games: i
    })
  } catch (e) {
    throw new i.Hx(e)
  }
}