/** Chunk was on web.js **/
/** chunk id: 522871, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk64700 = require("./64700.js"),
  Chunk172218 = require("./172218.js"),
  Chunk478437 = require("./478437.js"),
  Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk483649 = require("./483649.js"),
  Chunk732071 = require("./732071.js"),
  Chunk652215 = require("./652215.js");
let d = 0;

function f(e) {
  var t, n;
  let {
    message: f,
    channel: p,
    enabled: _ = true
  } = e, h = (0, s.bG)([o.A], () => {
    var e;
    let t = o.A.getGuild(p.guild_id);
    return null != (e = null == t ? true : t.features.has(u.GuildFeatures.COMMUNITY)) && e
  }, [p.guild_id]), m = (null == (t = f.messageReference) ? true : t.guild_id) != null && null != f.webhookId && f.hasFlag(u.pr7.IS_CROSSPOST) && null != p.guild_id, g = p.type === a.r.GUILD_ANNOUNCEMENT && h, E = !f.hasFlag(u.pr7.EPHEMERAL) && (m || g), b = m && null != f.messageReference ? f.messageReference.message_id : f.id, y = m && null != f.messageReference ? f.messageReference.channel_id : p.id, O = m && (null == (n = f.messageReference) ? true : n.guild_id) != null ? f.messageReference.guild_id : p.guild_id, A = r.useCallback(e => {
    e ? c.A.handleMessageBecameVisible({
      type: c.K.ANNOUNCEMENT,
      messageId: b,
      channelId: p.id,
      guildId: p.guild_id,
      sourceChannelId: y,
      sourceGuildId: O
    }) : c.A.handleMessageLostVisibility(b, c.K.ANNOUNCEMENT)
  }, [b, p.id, p.guild_id, y, O]), v = l.A.useExperiment({
    location: "836a4b_1"
  }, {
    disable: !E || !_,
    autoTrackExposure: true
  }).enabled, S = (0, i.K)(A, d, v);
  return r.useEffect(() => () => {
    c.A.handleMessageLostVisibility(b, c.K.ANNOUNCEMENT)
  }, [b]), S
}