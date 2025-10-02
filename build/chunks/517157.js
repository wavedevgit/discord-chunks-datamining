/** Chunk was on 56848 **/
/** chunk id: 517157, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk621853 = require("./621853.js"),
  Chunk224724 = require("./224724.js");

function s(e) {
  let t = (0, n.e7)([i.default], () => {
      let t = i.default.getId();
      return null != e && t === e
    }, [e]),
    r = (0, n.e7)([l.Z], () => l.Z.getPendingWidgets()),
    s = (0, n.Wu)([a.Z], () => {
      var t;
      if (null == e) return [];
      let r = a.Z.getUserProfile(e);
      return null != (t = null == r ? true : r.widgets) ? t : []
    }, [e]);
  return t && null !== r ? r : s
}