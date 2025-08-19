/** Chunk was on 91173 **/
/** chunk id: 694784, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk749210 = require("./749210.js"),
  Chunk336197 = require("./336197.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk900849 = require("./900849.js"),
  Chunk981631 = require("./981631.js");
async function u(e) {
  var t;
  if (null == e.messageReference) return;
  let n = e.messageReference.guild_id,
    u = e.messageReference.channel_id,
    d = e.messageReference.message_id,
    p = l.Z.getChannel(u),
    m = false;
  if (null == p && null != n && null == a.Z.getGuild(n)) try {
    await (0, s.Ub)(n, {
      object: c.qAy.FORWARD_BREADCRUMB
    }, {
      shouldNavigate: false
    }), m = true, await (0, r.V)(n), p = l.Z.getChannel(u)
  } catch (e) {}
  o.default.track(c.rMx.FORWARD_BREADCRUMB_CLICKED, {
    guild_id: null == (t = l.Z.getBasicChannel(e.channel_id)) ? true : t.guild_id,
    channel_id: e.channel_id,
    message_id: e.id,
    breadcrumb_guild_id: n,
    breadcrumb_channel_id: u,
    breadcrumb_message_id: d,
    did_lurk: m
  });
  let f = m ? u : true;
  (0, i.Z)(c.Z5c.CHANNEL(n, u, d), {
    welcomeModalChannelId: f
  })
}