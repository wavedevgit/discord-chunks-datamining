/** Chunk was on 77870 **/
/** chunk id: 404522, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk476370 = require("./476370.js"),
  Chunk795816 = require("./795816.js"),
  Chunk933958 = require("./933958.js");
let o = e => {
  let {
    surface: t,
    skipFetchingShelf: n = true
  } = e, o = (0, l.bG)([a.Ay], () => a.Ay.getState());
  return (0, r.useEffect)(() => {
    var e;
    (null == (e = o.lastCheckedForBadgeableActivities) || new Date(e).getTime() < Date.now() - 432e5) && !n && (0, s.LV)({
      guildId: null
    })
  }, [o.lastCheckedForBadgeableActivities, n]), (0, r.useMemo)(() => (0, i.C)({
    storeState: o,
    surface: t
  }), [o, t])
}