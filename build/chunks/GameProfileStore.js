/** Chunk was on 13530 **/
/** chunk id: 422069, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var n, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let s = {},
  o = {};
class c extends(i = Chunk311907.Ay.Store) {
  getSimilarGames(e) {
    return s[e]
  }
  getSimilarGamesError(e) {
    return o[e]
  }
}(n = "displayName") in c ? Object.defineProperty(c, n, {
  value: "GameProfileStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[n] = "GameProfileStore";
let d = new c(Chunk73153.h, {
  GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function(e) {
    let {
      applicationId: t,
      games: l
    } = e;
    s[t] = l
  },
  GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function(e) {
    let {
      applicationId: t,
      error: l
    } = e;
    o[t] = l
  }
})