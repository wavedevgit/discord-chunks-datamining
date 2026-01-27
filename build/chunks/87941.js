/** Chunk was on 77870 **/
/** chunk id: 87941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => a
});
var Chunk960488 = require("./960488.js"),
  Chunk394953 = require("./394953.js"),
  Chunk366811 = require("./366811.js"),
  Chunk652215 = require("./652215.js");

function a() {
  let e = (0, i.A)(e => e.guildId),
    {
      pathname: t
    } = (0, r.zy)(),
    n = t.startsWith(s.BVt.GUILD_DISCOVERY) || t.startsWith(s.BVt.GLOBAL_DISCOVERY),
    a = t.startsWith(s.BVt.GUILD_MEMBER_VERIFICATION("")),
    o = (0, l.lI)();
  return null == e && !(n || a || o)
}