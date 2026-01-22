/** Chunk was on 21738 **/
/** chunk id: 435875, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => s
});
var Chunk846293 = require("./846293.js"),
  Chunk142120 = require("./142120.js"),
  Chunk970163 = require("./970163.js"),
  Chunk71393 = require("./71393.js");
async function s(e) {
  let {
    code: t
  } = e, s = (await (0, l.A)(t)).invite;
  if (null == s || null == s.guild || (await new Promise(e => {
      i.A.addChangeListener(() => !i.A.isConnected() || (e(), false))
    }), null == a.A.getGuild(s.guild.id))) return;
  let {
    default: o
  } = await Promise.resolve().then(n.bind(n, 967305));
  await o({
    guildId: s.guild.id
  }), r.Ay.transitionToInvite(s, true, true)
}