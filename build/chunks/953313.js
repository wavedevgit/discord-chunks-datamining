/** Chunk was on 46746 **/
/** chunk id: 953313, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk787695 = require("./787695.js"),
  Chunk759479 = require("./759479.js"),
  Chunk855403 = require("./855403.js"),
  Chunk324805 = require("./324805.js");

function c(e, t, n) {
  let c = (0, i.Z)({
    location: o.dr.STREAM_SOURCE_SELECT
  });
  return r.useMemo(() => {
    if (null == n || !c) return null;
    for (let o of n) {
      var r, i;
      let n = t.find(e => (0, l.Z)(o.id, e.windowHandle));
      if ((null == n ? true : n.id) == null) continue;
      let c = (0, s.lQ)(e, n.id);
      if (null != c && (null == (r = c.userStatus) ? true : r.enrolledAt) != null && (null == (i = c.userStatus) ? true : i.completedAt) == null) return {
        source: o,
        quest: c
      }
    }
    return null
  }, [c, e, t, n])
}