/** Chunk was on 1272 **/
/** chunk id: 584233, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => o
});
var Chunk447543 = require("./447543.js"),
  Chunk38618 = require("./38618.js"),
  Chunk652898 = require("./652898.js"),
  Chunk430824 = require("./430824.js");
async function o(e) {
  let {
    code: t
  } = e, o = (await (0, l.Z)(t)).invite;
  if (null == o || null == o.guild || (await new Promise(e => {
      i.Z.addChangeListener(() => !i.Z.isConnected() || (e(), false))
    }), null == a.Z.getGuild(o.guild.id))) return;
  let {
    default: s
  } = await Promise.resolve().then(n.bind(n, 17181));
  await s({
    guildId: o.guild.id
  }), r.ZP.transitionToInvite(o, true, true)
}