/** Chunk was on 33131 **/
/** chunk id: 517157, original params: e,a,l (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk621853 = require("./621853.js"),
  Chunk224724 = require("./224724.js");

function s(e) {
  let a = (0, t.e7)([i.default], () => {
      let a = i.default.getId();
      return null != e && a === e
    }, [e]),
    l = (0, t.e7)([r.Z], () => r.Z.getPendingWidgets()),
    s = (0, t.Wu)([n.Z], () => {
      var a;
      if (null == e) return [];
      let l = n.Z.getUserProfile(e);
      return null != (a = null == l ? true : l.widgets) ? a : []
    }, [e]);
  return a && null !== l ? l : s
}