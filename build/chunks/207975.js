/** Chunk was on 96811 **/
/** chunk id: 207975, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk677402 = require("./677402.js"),
  Chunk639214 = require("./639214.js"),
  Chunk830012 = require("./830012.js"),
  Chunk654487 = require("./654487.js");

function c(e, t, r) {
  let c = (0, l.H)({
    location: a.rE.STREAM_SOURCE_SELECT
  });
  return n.useMemo(() => {
    if (null == r || !c) return null;
    for (let a of r) {
      var n, l;
      let r = t.find(e => (0, i.A)(a.id, e.windowHandle));
      if ((null == r ? true : r.id) == null) continue;
      let c = (0, s.L7)(e, r.id);
      if (null != c && (null == (n = c.userStatus) ? true : n.enrolledAt) != null && (null == (l = c.userStatus) ? true : l.completedAt) == null) return {
        source: a,
        quest: c
      }
    }
    return null
  }, [c, e, t, r])
}