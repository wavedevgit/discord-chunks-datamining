/** Chunk was on 85362 **/
/** chunk id: 278464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => a
});
var Chunk843611 = require("./843611.js"),
  Chunk370774 = require("./370774.js"),
  Chunk905423 = require("./905423.js"),
  Chunk981631 = require("./981631.js");

function a() {
  let e = (0, Chunk905423.Z)(e => e.guildId),
    {
      pathname: t
    } = (0, Chunk843611.TH)(),
    n = exports.startsWith(Chunk981631.Z5c.GUILD_DISCOVERY) || exports.startsWith(Chunk981631.Z5c.GLOBAL_DISCOVERY),
    a = exports.startsWith(Chunk981631.Z5c.GUILD_MEMBER_VERIFICATION("")),
    s = exports.startsWith(Chunk981631.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB("")),
    c = (0, Chunk370774.D)();
  return null == module && !(require || a || s || c)
}