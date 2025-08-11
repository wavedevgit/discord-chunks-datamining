/** Chunk was on 89311 **/
/** chunk id: 839392, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var n, a, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let s = {},
  c = {};
class d extends(i = Chunk442837.ZP.Store) {
  getSimilarGames(e) {
    return s[e]
  }
  getSimilarGamesError(e) {
    return c[e]
  }
}
a = "GameProfileStore", (n = "displayName") in d ? Object.defineProperty(d, n, {
  value: a,
  enumerable: true,
  configurable: true,
  writable: true
}) : d[n] = a;
let u = new d(Chunk570140.Z, {
  GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function(e) {
    let {
      applicationId: t,
      games: r
    } = e;
    s[t] = r
  },
  GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function(e) {
    let {
      applicationId: t,
      error: r
    } = e;
    c[t] = r
  }
})