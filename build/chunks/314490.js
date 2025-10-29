/** Chunk was on 88647 **/
/** chunk id: 314490, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => s
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk416587 = require("./416587.js"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js");
let s = e => {
  let {
    surface: t,
    skipFetchingShelf: n = true
  } = e, s = (0, i.e7)([o.ZP], () => o.ZP.getState());
  return (0, r.useEffect)(() => {
    var e;
    (null == (e = s.lastCheckedForBadgeableActivities) || new Date(e).getTime() < Date.now() - 432e5) && !n && (0, a.w1)({
      guildId: null
    })
  }, [s.lastCheckedForBadgeableActivities, n]), (0, r.useMemo)(() => (0, l.O)({
    storeState: s,
    surface: t
  }), [s, t])
}