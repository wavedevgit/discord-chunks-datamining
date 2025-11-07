/** Chunk was on 31899 **/
/** chunk id: 278464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => s
});
var Chunk843611 = require("./843611.js"),
  Chunk370774 = require("./370774.js"),
  Chunk365113 = require("./365113.js"),
  Chunk905423 = require("./905423.js"),
  Chunk981631 = require("./981631.js");

function s() {
  let e = (0, Chunk905423.Z)(e => e.guildId),
    {
      pathname: t
    } = (0, Chunk843611.TH)(),
    n = exports.startsWith(Chunk981631.Z5c.GUILD_DISCOVERY) || exports.startsWith(Chunk981631.Z5c.GLOBAL_DISCOVERY),
    s = exports.startsWith(Chunk981631.Z5c.GUILD_MEMBER_VERIFICATION("")),
    c = (0, Chunk370774.D)(),
    u = Chunk365113.o.useConfig({
      location: "guildsbar"
    }).dmsTab && exports.startsWith(Chunk981631.Z5c.CHANNEL(Chunk981631.ME)) && exports !== Chunk981631.Z5c.CHANNEL(Chunk981631.ME) && exports !== Chunk981631.Z5c.ME_ACTIVITY;
  return null == module && !(require || s || c) && !u
}