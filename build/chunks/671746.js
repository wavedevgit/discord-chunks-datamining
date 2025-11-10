/** Chunk was on 57336 **/
/** chunk id: 671746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk348327 = require("./348327.js"),
  r = require.n(Chunk348327),
  Chunk442837 = require("./442837.js"),
  Chunk106301 = require("./106301.js"),
  Chunk54332 = require("./54332.js");

function s() {
  let {
    recentStatuses: e,
    currentHangStatus: t,
    customHangStatus: n,
    favoritedStatuses: i
  } = (0, Chunk442837.cj)([Chunk106301.Z], () => ({
    recentStatuses: Chunk106301.Z.getRecentStatuses(),
    currentHangStatus: Chunk106301.Z.getCurrentHangStatus(),
    customHangStatus: Chunk106301.Z.getCustomHangStatus(),
    favoritedStatuses: Chunk106301.Z.getFavoritedStatuses()
  })), s = 6 - Chunk348327.length;
  return module.filter(e => {
    let i = (0, o.Z)(e) ? e === t : r()(e, n);
    return !a.Z.isFavorited(e) && !i
  }).slice(0, s)
}