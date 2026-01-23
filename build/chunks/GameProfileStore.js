/** Chunk was on 13530 **/
/** chunk id: 422069, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var l, r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let s = {},
  o = {};
class c extends(r = Chunk311907.Ay.Store) {
  getSimilarGames(e) {
    return s[e]
  }
  getSimilarGamesError(e) {
    return o[e]
  }
}(l = "displayName") in c ? Object.defineProperty(c, l, {
  value: "GameProfileStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[l] = "GameProfileStore";
let u = new c(Chunk73153.h, {
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