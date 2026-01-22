/** Chunk was on 97492 **/
/** chunk id: 87941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => s
});
var Chunk960488 = require("./960488.js"),
  Chunk394953 = require("./394953.js"),
  Chunk366811 = require("./366811.js"),
  Chunk652215 = require("./652215.js");

function s() {
  let e = (0, i.A)(e => e.guildId),
    {
      pathname: t
    } = (0, r.zy)(),
    n = t.startsWith(a.BVt.GUILD_DISCOVERY) || t.startsWith(a.BVt.GLOBAL_DISCOVERY),
    s = t.startsWith(a.BVt.GUILD_MEMBER_VERIFICATION("")),
    o = (0, l.lI)();
  return null == e && !(n || s || o)
}