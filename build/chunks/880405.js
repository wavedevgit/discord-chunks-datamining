/** Chunk was on 13530 **/
/** chunk id: 880405, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  N: () => s
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js"),
  Chunk652215 = require("./652215.js");
let s = async e => {
  try {
    var t;
    let l = (null != (t = (await n.Bo.get({
      url: r.Rsh.SIMILAR_GAMES(e),
      rejectWithError: false
    })).body.similar_games) ? t : []).filter(t => t !== e);
    i.h.dispatch({
      type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS",
      applicationId: e,
      games: l
    })
  } catch (e) {
    throw new a.LG(e)
  }
}