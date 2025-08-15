/** Chunk was on 98464 **/
/** chunk id: 592126, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk442837 = require("./442837.js"),
  Chunk241155 = require("./241155.js"),
  Chunk430824 = require("./430824.js");

function d(e, n) {
  return (0, i.cj)([r.Z, l.Z], () => {
    let t = r.Z.getGuild(e),
      i = null != t;
    return null == t && null != n && (t = l.Z.getCachedGuildByEventId(n)), {
      isMember: i,
      guild: t
    }
  }, [e, n])
}