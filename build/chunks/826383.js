/** Chunk was on 48330 **/
/** chunk id: 826383, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk285059 = require("./285059.js"),
  Chunk698441 = require("./698441.js");

function a(e, t, n) {
  let a = (0, r.bG)([s.Ay], () => s.Ay.getUserCount(t, n));
  return (0, l.useEffect)(() => {
    null != e && null != t && i.A.getGuildEventUserCounts(e, t, null != n ? [n] : [])
  }, [t, e, n]), a
}