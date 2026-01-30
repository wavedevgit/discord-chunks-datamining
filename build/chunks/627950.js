/** Chunk was on 64935 **/
/** chunk id: 627950, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk686956 = require("./686956.js"),
  Chunk22007 = require("./22007.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk954571 = require("./954571.js"),
  Chunk449054 = require("./449054.js"),
  Chunk652215 = require("./652215.js");
async function u(e) {
  var t;
  if (null == e.messageReference) return;
  let n = e.messageReference.guild_id,
    u = e.messageReference.channel_id,
    d = e.messageReference.message_id,
    p = l.A.getChannel(u),
    m = false;
  if (null == p && null != n && null == a.A.getGuild(n)) try {
    await (0, o.Z2)(n, {
      object: c.ZSU.FORWARD_BREADCRUMB
    }, {
      shouldNavigate: false
    }), m = true, await (0, r.k)(n), p = l.A.getChannel(u)
  } catch (e) {}
  s.default.track(c.HAw.FORWARD_BREADCRUMB_CLICKED, {
    guild_id: null == (t = l.A.getBasicChannel(e.channel_id)) ? true : t.guild_id,
    channel_id: e.channel_id,
    message_id: e.id,
    breadcrumb_guild_id: n,
    breadcrumb_channel_id: u,
    breadcrumb_message_id: d,
    did_lurk: m
  });
  let f = m ? u : true;
  (0, i.A)(c.BVt.CHANNEL(n, u, d), {
    welcomeModalChannelId: f
  })
}