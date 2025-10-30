/** Chunk was on web.js **/
/** chunk id: 689674, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk647438 = require("./647438.js"),
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
    channel: _,
    enabled: p = true
  } = e, h = (0, o.e7)([s.Z], () => {
    var e;
    let t = s.Z.getGuild(_.guild_id);
    return null != (e = null == t ? true : t.features.has(u.GuildFeatures.COMMUNITY)) && e
  }, [_.guild_id]), m = (null == (t = f.messageReference) ? true : t.guild_id) != null && null != f.webhookId && f.hasFlag(u.iLy.IS_CROSSPOST) && null != _.guild_id, g = _.type === a.d.GUILD_ANNOUNCEMENT && h, E = !f.hasFlag(u.iLy.EPHEMERAL) && (m || g), b = m && null != f.messageReference ? f.messageReference.message_id : f.id, y = m && null != f.messageReference ? f.messageReference.channel_id : _.id, O = m && (null == (n = f.messageReference) ? true : n.guild_id) != null ? f.messageReference.guild_id : _.guild_id, v = r.useCallback(e => {
    e ? c.Z.handleMessageBecameVisible({
      type: c.k.ANNOUNCEMENT,
      messageId: b,
      channelId: _.id,
      guildId: _.guild_id,
      sourceChannelId: y,
      sourceGuildId: O
    }) : c.Z.handleMessageLostVisibility(b, c.k.ANNOUNCEMENT)
  }, [b, _.id, _.guild_id, y, O]), I = l.Z.useExperiment({
    location: "836a4b_1"
  }, {
    disable: !E || !p,
    autoTrackExposure: true
  }).enabled, S = (0, i.O)(v, d, I);
  return r.useEffect(() => () => {
    c.Z.handleMessageLostVisibility(b, c.k.ANNOUNCEMENT)
  }, [b]), S
}