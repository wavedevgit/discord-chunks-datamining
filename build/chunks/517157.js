/** Chunk was on 21585 **/
/** chunk id: 517157, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk621853 = require("./621853.js"),
  Chunk224724 = require("./224724.js");

function o(e) {
  let t = (0, n.e7)([l.default], () => {
      let t = l.default.getId();
      return null != e && t === e
    }, [e]),
    r = (0, n.e7)([a.Z], () => a.Z.getPendingWidgets()),
    o = (0, n.Wu)([i.Z], () => {
      var t;
      if (null == e) return [];
      let r = i.Z.getUserProfile(e);
      return null != (t = null == r ? true : r.widgets) ? t : []
    }, [e]);
  return t && null !== r ? r : o
}