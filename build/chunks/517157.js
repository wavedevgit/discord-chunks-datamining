/** Chunk was on 30355 **/
/** chunk id: 517157, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk835473 = require("./835473.js"),
  Chunk314897 = require("./314897.js"),
  Chunk621853 = require("./621853.js"),
  Chunk224724 = require("./224724.js");

function c(e) {
  let t = (0, l.e7)([a.default], () => {
      let t = a.default.getId();
      return null != e && t === e
    }, [e]),
    n = (0, l.e7)([o.Z], () => o.Z.getPendingWidgets()),
    c = (0, l.Wu)([s.Z], () => {
      var t;
      if (null == e) return [];
      let n = s.Z.getUserProfile(e);
      return null != (t = null == n ? true : n.widgets) ? t : []
    }, [e]);
  return ((0, i.Z)(function(e) {
    let t = new Set;
    return e.forEach(e => {
      e.type === r.l.APPLICATION && t.add(e.applicationId)
    }), [...t]
  }([...c, ...null != n ? n : []])), t && null !== n) ? n : c
}