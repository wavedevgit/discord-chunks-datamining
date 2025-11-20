/** Chunk was on 89311 **/
/** chunk id: 998058, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => s
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk981631 = require("./981631.js");
let s = async e => {
  try {
    var t;
    let n = (null != (t = (await a.tn.get({
      url: l.ANM.SIMILAR_GAMES(e),
      rejectWithError: false
    })).body.similar_games) ? t : []).filter(t => t !== e);
    i.Z.dispatch({
      type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS",
      applicationId: e,
      games: n
    })
  } catch (e) {
    throw new r.Hx(e)
  }
}