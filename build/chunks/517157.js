/** Chunk was on 55827 **/
/** chunk id: 517157, original params: e,a,l (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk621853 = require("./621853.js"),
  Chunk224724 = require("./224724.js");

function r(e) {
  let a = (0, i.e7)([t.default], () => {
      let a = t.default.getId();
      return null != e && a === e
    }, [e]),
    l = (0, i.e7)([s.Z], () => s.Z.getPendingWidgets()),
    r = (0, i.Wu)([n.Z], () => {
      var a;
      if (null == e) return [];
      let l = n.Z.getUserProfile(e);
      return null != (a = null == l ? true : l.widgets) ? a : []
    }, [e]);
  return a && null !== l ? l : r
}