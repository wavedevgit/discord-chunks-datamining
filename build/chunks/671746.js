/** Chunk was on 40184 **/
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
  } = (0, l.cj)([a.Z], () => ({
    recentStatuses: a.Z.getRecentStatuses(),
    currentHangStatus: a.Z.getCurrentHangStatus(),
    customHangStatus: a.Z.getCustomHangStatus(),
    favoritedStatuses: a.Z.getFavoritedStatuses()
  })), s = 6 - i.length;
  return e.filter(e => {
    let i = (0, o.Z)(e) ? e === t : r()(e, n);
    return !a.Z.isFavorited(e) && !i
  }).slice(0, s)
}