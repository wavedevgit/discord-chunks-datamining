/** Chunk was on 92917 **/
/** chunk id: 522871, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk172218 = require("./172218.js"),
  Chunk478437 = require("./478437.js"),
  Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk483649 = require("./483649.js"),
  Chunk732071 = require("./732071.js"),
  Chunk652215 = require("./652215.js");

function d(e) {
  var t, n;
  let {
    message: d,
    channel: p,
    enabled: m = true
  } = e, f = (0, a.bG)([s.A], () => {
    var e;
    let t = s.A.getGuild(p.guild_id);
    return null != (e = null == t ? true : t.features.has(u.GuildFeatures.COMMUNITY)) && e
  }, [p.guild_id]), g = (null == (t = d.messageReference) ? true : t.guild_id) != null && null != d.webhookId && d.hasFlag(u.pr7.IS_CROSSPOST) && null != p.guild_id, h = p.type === l.r.GUILD_ANNOUNCEMENT && f, _ = !d.hasFlag(u.pr7.EPHEMERAL) && (g || h), b = g && null != d.messageReference ? d.messageReference.message_id : d.id, A = g && null != d.messageReference ? d.messageReference.channel_id : p.id, y = g && (null == (n = d.messageReference) ? true : n.guild_id) != null ? d.messageReference.guild_id : p.guild_id, v = r.useCallback(e => {
    e ? c.A.handleMessageBecameVisible({
      type: c.K.ANNOUNCEMENT,
      messageId: b,
      channelId: p.id,
      guildId: p.guild_id,
      sourceChannelId: A,
      sourceGuildId: y
    }) : c.A.handleMessageLostVisibility(b, c.K.ANNOUNCEMENT)
  }, [b, p.id, p.guild_id, A, y]), x = o.A.useExperiment({
    location: "836a4b_1"
  }, {
    disable: !_ || !m,
    autoTrackExposure: true
  }).enabled, O = (0, i.K)(v, 0, x);
  return r.useEffect(() => () => {
    c.A.handleMessageLostVisibility(b, c.K.ANNOUNCEMENT)
  }, [b]), O
}