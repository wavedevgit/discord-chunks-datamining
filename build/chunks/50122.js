/** Chunk was on 97492 **/
/** chunk id: 50122, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk812729 = require("./812729.js"),
  l = require.n(Chunk812729),
  Chunk311907 = require("./311907.js"),
  Chunk242919 = require("./242919.js"),
  Chunk60821 = require("./60821.js");

function o() {
  let {
    recentStatuses: e,
    currentHangStatus: t,
    customHangStatus: n,
    favoritedStatuses: r
  } = (0, i.cf)([a.A], () => ({
    recentStatuses: a.A.getRecentStatuses(),
    currentHangStatus: a.A.getCurrentHangStatus(),
    customHangStatus: a.A.getCustomHangStatus(),
    favoritedStatuses: a.A.getFavoritedStatuses()
  })), o = 6 - r.length;
  return e.filter(e => {
    let r = (0, s.A)(e) ? e === t : l()(e, n);
    return !a.A.isFavorited(e) && !r
  }).slice(0, o)
}