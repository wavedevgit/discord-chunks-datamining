/** Chunk was on 82124 **/
/** chunk id: 278464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => o
});
var Chunk828700 = require("./828700.js"),
  Chunk370774 = require("./370774.js"),
  Chunk905423 = require("./905423.js"),
  Chunk981631 = require("./981631.js");

function o() {
  let e = (0, l.Z)(e => e.guildId),
    {
      pathname: t
    } = (0, r.TH)(),
    n = t.startsWith(a.Z5c.GUILD_DISCOVERY) || t.startsWith(a.Z5c.GLOBAL_DISCOVERY),
    o = t.startsWith(a.Z5c.GUILD_MEMBER_VERIFICATION("")),
    s = (0, i.D)();
  return null == e && !(n || o || s)
}