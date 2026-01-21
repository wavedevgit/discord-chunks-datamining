/** Chunk was on 82124 **/
/** chunk id: 671746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk348327 = require("./348327.js"),
  i = require.n(Chunk348327),
  Chunk442837 = require("./442837.js"),
  Chunk106301 = require("./106301.js"),
  Chunk54332 = require("./54332.js");

function s() {
  let {
    recentStatuses: e,
    currentHangStatus: t,
    customHangStatus: n,
    favoritedStatuses: r
  } = (0, l.cj)([a.Z], () => ({
    recentStatuses: a.Z.getRecentStatuses(),
    currentHangStatus: a.Z.getCurrentHangStatus(),
    customHangStatus: a.Z.getCustomHangStatus(),
    favoritedStatuses: a.Z.getFavoritedStatuses()
  })), s = 6 - r.length;
  return e.filter(e => {
    let r = (0, o.Z)(e) ? e === t : i()(e, n);
    return !a.Z.isFavorited(e) && !r
  }).slice(0, s)
}