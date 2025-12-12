/** Chunk was on web.js **/
/** chunk id: 689674, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk473749 = require("./473749.js"),
  Chunk907331 = require("./907331.js"),
  Chunk106351 = require("./106351.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk63205 = require("./63205.js"),
  Chunk765383 = require("./765383.js"),
  Chunk981631 = require("./981631.js");
let d = 0;

function f(e) {
  var t, n;
  let {
    message: f,
    channel: p,
    enabled: _ = true
  } = e, m = (0, a.e7)([s.Z], () => {
    var e;
    let t = s.Z.getGuild(p.guild_id);
    return null != (e = null == t ? true : t.features.has(u.GuildFeatures.COMMUNITY)) && e
  }, [p.guild_id]), h = (null == (t = f.messageReference) ? true : t.guild_id) != null && null != f.webhookId && f.hasFlag(u.iLy.IS_CROSSPOST) && null != p.guild_id, g = p.type === o.d.GUILD_ANNOUNCEMENT && m, E = !f.hasFlag(u.iLy.EPHEMERAL) && (h || g), b = h && null != f.messageReference ? f.messageReference.message_id : f.id, y = h && null != f.messageReference ? f.messageReference.channel_id : p.id, O = h && (null == (n = f.messageReference) ? true : n.guild_id) != null ? f.messageReference.guild_id : p.guild_id, v = r.useCallback(e => {
    e ? c.Z.handleMessageBecameVisible({
      type: c.k.ANNOUNCEMENT,
      messageId: b,
      channelId: p.id,
      guildId: p.guild_id,
      sourceChannelId: y,
      sourceGuildId: O
    }) : c.Z.handleMessageLostVisibility(b, c.k.ANNOUNCEMENT)
  }, [b, p.id, p.guild_id, y, O]), S = l.Z.useExperiment({
    location: "836a4b_1"
  }, {
    disable: !E || !_,
    autoTrackExposure: true
  }).enabled, I = (0, i.O)(v, d, S);
  return r.useEffect(() => () => {
    c.Z.handleMessageLostVisibility(b, c.k.ANNOUNCEMENT)
  }, [b]), I
}