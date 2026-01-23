/** Chunk was on 96811 **/
/** chunk id: 207975, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk677402 = require("./677402.js"),
  Chunk639214 = require("./639214.js"),
  Chunk830012 = require("./830012.js"),
  Chunk654487 = require("./654487.js");

function o(e, t, r) {
  let o = (0, i.H)({
    location: a.rE.STREAM_SOURCE_SELECT
  });
  return n.useMemo(() => {
    if (null == r || !o) return null;
    for (let a of r) {
      var n, i;
      let r = t.find(e => (0, s.A)(a.id, e.windowHandle));
      if ((null == r ? true : r.id) == null) continue;
      let o = (0, l.L7)(e, r.id);
      if (null != o && (null == (n = o.userStatus) ? true : n.enrolledAt) != null && (null == (i = o.userStatus) ? true : i.completedAt) == null) return {
        source: a,
        quest: o
      }
    }
    return null
  }, [o, e, t, r])
}