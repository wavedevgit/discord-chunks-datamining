/** Chunk was on 45956 **/
/** chunk id: 517157, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk621853 = require("./621853.js"),
  Chunk224724 = require("./224724.js");

function s(e) {
  let a = (0, i.e7)([l.default], () => {
      let a = l.default.getId();
      return null != e && a === e
    }, [e]),
    t = (0, i.e7)([r.Z], () => r.Z.getPendingWidgets()),
    s = (0, i.Wu)([n.Z], () => {
      var a;
      if (null == e) return [];
      let t = n.Z.getUserProfile(e);
      return null != (a = null == t ? true : t.widgets) ? a : []
    }, [e]);
  return a && null !== t ? t : s
}