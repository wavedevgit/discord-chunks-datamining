/** Chunk was on 67000 **/
/** chunk id: 278464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => o
});
var Chunk828700 = require("./828700.js"),
  Chunk370774 = require("./370774.js"),
  Chunk905423 = require("./905423.js"),
  Chunk981631 = require("./981631.js");

function o() {
  let e = (0, Chunk905423.Z)(e => e.guildId),
    {
      pathname: t
    } = (0, Chunk828700.TH)(),
    n = exports.startsWith(Chunk981631.Z5c.GUILD_DISCOVERY) || exports.startsWith(Chunk981631.Z5c.GLOBAL_DISCOVERY),
    o = exports.startsWith(Chunk981631.Z5c.GUILD_MEMBER_VERIFICATION("")),
    s = (0, Chunk370774.D)();
  return null == module && !(require || o || s)
}