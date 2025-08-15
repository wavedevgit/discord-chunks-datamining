/** Chunk was on 89311 **/
/** chunk id: 839392, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var n, a, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = {},
  s = {};
class c extends(a = Chunk442837.ZP.Store) {
  getSimilarGames(e) {
    return o[e]
  }
  getSimilarGamesError(e) {
    return s[e]
  }
}(n = "displayName") in c ? Object.defineProperty(c, n, {
  value: "GameProfileStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[n] = "GameProfileStore";
let u = new c(Chunk570140.Z, {
  GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function(e) {
    let {
      applicationId: t,
      games: r
    } = e;
    o[t] = r
  },
  GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function(e) {
    let {
      applicationId: t,
      error: r
    } = e;
    s[t] = r
  }
})