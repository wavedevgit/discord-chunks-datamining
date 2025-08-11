/** Chunk was on 62318 **/
/** chunk id: 592126, original params: u,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk442837 = require("./442837.js"),
  Chunk241155 = require("./241155.js"),
  Chunk430824 = require("./430824.js");

function i(u, n) {
  return (0, e.cj)([d.Z, c.Z], () => {
    let t = d.Z.getGuild(u),
      e = null != t;
    return null == t && null != n && (t = c.Z.getCachedGuildByEventId(n)), {
      isMember: e,
      guild: t
    }
  }, [u, n])
}