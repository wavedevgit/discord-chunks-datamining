/** Chunk was on 77678 **/
/** chunk id: 517157, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk621853 = require("./621853.js"),
  Chunk224724 = require("./224724.js");

function o(e) {
  let t = (0, r.e7)([i.default], () => {
      let t = i.default.getId();
      return null != e && t === e
    }, [e]),
    n = (0, r.e7)([l.Z], () => l.Z.getPendingWidgets()),
    o = (0, r.Wu)([a.Z], () => {
      var t;
      if (null == e) return [];
      let n = a.Z.getUserProfile(e);
      return null != (t = null == n ? true : n.widgets) ? t : []
    }, [e]);
  return t && null !== n ? n : o
}