/** Chunk was on 89311 **/
/** chunk id: 839392, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var i, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let s = {},
  o = {};
class c extends(l = Chunk442837.ZP.Store) {
  getSimilarGames(e) {
    return s[e]
  }
  getSimilarGamesError(e) {
    return o[e]
  }
}(i = "displayName") in c ? Object.defineProperty(c, i, {
  value: "GameProfileStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[i] = "GameProfileStore";
let d = new c(Chunk570140.Z, {
  GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function(e) {
    let {
      applicationId: t,
      games: n
    } = e;
    s[t] = n
  },
  GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function(e) {
    let {
      applicationId: t,
      error: n
    } = e;
    o[t] = n
  }
})