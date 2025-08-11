/** Chunk was on 89311 **/
/** chunk id: 998058, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  i: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk981631 = require("./981631.js");
let o = async e => {
  try {
    var t;
    let r = (null != (t = (await n.tn.get({
      url: l.ANM.SIMILAR_GAMES(e),
      rejectWithError: false
    })).body.similar_games) ? t : []).filter(t => t !== e);
    a.Z.dispatch({
      type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS",
      applicationId: e,
      games: r
    })
  } catch (e) {
    throw new i.Hx(e)
  }
}