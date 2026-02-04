/** Chunk was on 21738 **/
/** chunk id: 435875, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => o
});
var Chunk73153 = require("./73153.js"),
  Chunk846293 = require("./846293.js"),
  Chunk970163 = require("./970163.js"),
  Chunk71393 = require("./71393.js"),
  Chunk652215 = require("./652215.js");
async function o(e) {
  let {
    code: t
  } = e, o = (await (0, l.A)(t)).invite;
  if (null == o || null == o.guild) return;
  let c = o.guild.id;
  if (null == a.A.getGuild(c)) return void r.h.dispatch({
    type: "INVITE_MODAL_OPEN",
    invite: o,
    code: t,
    context: s.BRT.APP
  });
  let {
    default: u
  } = await Promise.resolve().then(n.bind(n, 967305));
  await u({
    guildId: c
  }), i.Ay.transitionToInvite(o, true, true)
}