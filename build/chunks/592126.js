/** Chunk was on 62318 **/
/** chunk id: 592126, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk442837 = require("./442837.js"),
  Chunk241155 = require("./241155.js"),
  Chunk430824 = require("./430824.js");

function r(e, t) {
  return (0, d.cj)([i.Z, u.Z], () => {
    let n = i.Z.getGuild(e),
      d = null != n;
    return null == n && null != t && (n = u.Z.getCachedGuildByEventId(t)), {
      isMember: d,
      guild: n
    }
  }, [e, t])
}