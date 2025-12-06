/** Chunk was on 89311 **/
/** chunk id: 839392, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var a, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = {},
  s = {};
class c extends(i = Chunk442837.ZP.Store) {
  getSimilarGames(e) {
    return o[e]
  }
  getSimilarGamesError(e) {
    return s[e]
  }
}(a = "displayName") in c ? Object.defineProperty(c, a, {
  value: "GameProfileStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[a] = "GameProfileStore";
let d = new c(Chunk570140.Z, {
  GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function(e) {
    let {
      applicationId: t,
      games: n
    } = e;
    o[t] = n
  },
  GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function(e) {
    let {
      applicationId: t,
      error: n
    } = e;
    s[t] = n
  }
})