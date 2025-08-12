/** Chunk was on 96492 **/
/** chunk id: 592126, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk241155 = require("./241155.js"),
  Chunk430824 = require("./430824.js");

function o(e, n) {
  return (0, l.cj)([r.Z, i.Z], () => {
    let t = r.Z.getGuild(e),
      l = null != t;
    return null == t && null != n && (t = i.Z.getCachedGuildByEventId(n)), {
      isMember: l,
      guild: t
    }
  }, [e, n])
}