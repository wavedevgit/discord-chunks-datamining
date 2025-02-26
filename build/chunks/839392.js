/** Chunk was on 4493 **/
r.d(t, {
  Z: () => d
});
var n, a, i, o = r(442837),
  l = r(570140);
let s = {},
  c = {};
class u extends(i = o.ZP.Store) {
  getSimilarGames(e) {
    return s[e]
  }
  getSimilarGamesError(e) {
    return c[e]
  }
}
a = "GameProfileStore", (n = "displayName") in u ? Object.defineProperty(u, n, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : u[n] = a;
let d = new u(l.Z, {
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