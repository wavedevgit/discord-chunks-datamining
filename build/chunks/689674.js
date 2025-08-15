/** Chunk was on 66866 **/
/** chunk id: 689674, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk73800 = require("./73800.js"),
  Chunk106351 = require("./106351.js"),
  Chunk442837 = require("./442837.js"),
  Chunk434650 = require("./434650.js"),
  Chunk430824 = require("./430824.js"),
  Chunk63205 = require("./63205.js"),
  Chunk529726 = require("./529726.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
  var t, n;
  let {
    message: d,
    channel: p,
    enabled: m = true
  } = e, f = (0, l.e7)([o.Z], () => {
    var e;
    let t = o.Z.getGuild(p.guild_id);
    return null != (e = null == t ? true : t.features.has(u.oNc.COMMUNITY)) && e
  }, [p.guild_id]), _ = (null == (t = d.messageReference) ? true : t.guild_id) != null && null != d.webhookId && d.hasFlag(u.iLy.IS_CROSSPOST) && null != p.guild_id, g = p.type === i.d.GUILD_ANNOUNCEMENT && f, h = !d.hasFlag(u.iLy.EPHEMERAL) && (_ || g), b = _ && null != d.messageReference ? d.messageReference.message_id : d.id, E = _ && null != d.messageReference ? d.messageReference.channel_id : p.id, C = _ && (null == (n = d.messageReference) ? true : n.guild_id) != null ? d.messageReference.guild_id : p.guild_id, v = r.useCallback(e => {
    e ? c.Z.handleMessageBecameVisible({
      messageId: b,
      channelId: p.id,
      guildId: p.guild_id,
      sourceChannelId: E,
      sourceGuildId: C
    }) : c.Z.handleMessageLostVisibility(b)
  }, [b, p.id, p.guild_id, E, C]), O = s.Z.useExperiment({
    location: "836a4b_1"
  }, {
    disable: !h || !m,
    autoTrackExposure: true
  }).enabled, y = (0, a.O)(v, 0, O);
  return r.useEffect(() => () => {
    c.Z.handleMessageLostVisibility(b)
  }, [b]), y
}