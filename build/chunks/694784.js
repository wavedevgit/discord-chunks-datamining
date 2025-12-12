/** Chunk was on web.js **/
/** chunk id: 694784, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
    f = a.Z.getChannel(u),
    p = false;
  if (null == f && null != n && null == o.Z.getGuild(n)) try {
    await (0, l.Ub)(n, {
      object: c.qAy.FORWARD_BREADCRUMB
    }, {
      shouldNavigate: false
    }), p = true, await (0, r.V)(n), f = a.Z.getChannel(u)
  } catch (e) {}
  s.default.track(c.rMx.FORWARD_BREADCRUMB_CLICKED, {
    guild_id: null == (t = a.Z.getBasicChannel(e.channel_id)) ? true : t.guild_id,
    channel_id: e.channel_id,
    message_id: e.id,
    breadcrumb_guild_id: n,
    breadcrumb_channel_id: u,
    breadcrumb_message_id: d,
    did_lurk: p
  });
  let _ = p ? u : true;
  (0, i.Z)(c.Z5c.CHANNEL(n, u, d), {
    welcomeModalChannelId: _
  })
}