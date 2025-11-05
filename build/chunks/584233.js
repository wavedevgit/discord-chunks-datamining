/** Chunk was on 1272 **/
/** chunk id: 584233, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => s
});
var Chunk447543 = require("./447543.js"),
  Chunk38618 = require("./38618.js"),
  Chunk652898 = require("./652898.js"),
  Chunk430824 = require("./430824.js");
async function s(e) {
  let {
    code: t
  } = e, s = (await (0, l.Z)(t)).invite;
  if (null == s || null == s.guild || (await new Promise(e => {
      i.Z.addChangeListener(() => !i.Z.isConnected() || (e(), false))
    }), null == a.Z.getGuild(s.guild.id))) return;
  let {
    default: o
  } = await Promise.resolve().then(n.bind(n, 17181));
  await o({
    guildId: s.guild.id
  }), r.ZP.transitionToInvite(s, true, true)
}