/** Chunk was on 20501 **/
/** chunk id: 743810, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Nv: () => _,
  pd: () => f,
  uX: () => j,
  wk: () => b
});
var Chunk350483 = require("./350483.jsx"),
  Chunk220444 = require("./220444.js"),
  Chunk905423 = require("./905423.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk306680 = require("./306680.js"),
  Chunk944486 = require("./944486.js"),
  Chunk9156 = require("./9156.js"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js");
let p = (e, t) => {
    let n = l.Z.getChannel(t);
    return null != n && ((0, a.hv)(n.type) || u.TPd.GUILD_VOCAL.has(n.type) ? o.ZP.getMentionCount(t) > 0 || c.Z.getVoiceChannelId() === t : (!d.ZP.isChannelMuted(e, t) || o.ZP.getMentionCount(t) > 0) && (0, r.d)(n))
  },
  g = (e, t) => t === m.W.GUILD_EVENT ? !d.ZP.isMuteScheduledEventsEnabled(e) && o.ZP.hasUnread(e, t) : o.ZP.hasUnread(e, t),
  h = (e, t) => {
    let n = l.Z.getChannel(t);
    return null != n && !!u.TPd.GUILD_VOCAL.has(n.type) && (o.ZP.getMentionCount(t) > 0 || c.Z.getVoiceChannelId() === t && o.ZP.getUnreadCount(t) > 0)
  },
  f = {
    binds: ["alt+shift+down"],
    comboKeysBindGlobal: true,
    action() {
      var e;
      let t = null != (e = Chunk905423.Z.getState().guildId) ? module : Chunk981631.ME;
      return (0, Chunk350483.Z)(1, {
        channelPredicate: p,
        guildPredicate: e => e === t || !d.ZP.isMuted(e),
        guildFeaturePredicate: g,
        ensureChatIsVisible: h,
        withVoiceChannels: true
      }), false
    }
  },
  b = {
    binds: ["alt+shift+up"],
    comboKeysBindGlobal: true,
    action() {
      var e;
      let t = null != (e = Chunk905423.Z.getState().guildId) ? module : Chunk981631.ME;
      return (0, Chunk350483.Z)(false, {
        channelPredicate: p,
        guildPredicate: e => e === t || !d.ZP.isMuted(e),
        guildFeaturePredicate: g,
        ensureChatIsVisible: h,
        withVoiceChannels: true
      }), false
    }
  },
  x = (e, t) => o.ZP.getMentionCount(t) > 0,
  _ = {
    binds: ["mod+shift+alt+down"],
    comboKeysBindGlobal: true,
    action: () => ((0, Chunk350483.Z)(1, {
      channelPredicate: x,
      ensureChatIsVisible: h,
      withVoiceChannels: true
    }), false)
  },
  j = {
    binds: ["mod+shift+alt+up"],
    comboKeysBindGlobal: true,
    action: () => ((0, Chunk350483.Z)(false, {
      channelPredicate: x,
      ensureChatIsVisible: h,
      withVoiceChannels: true
    }), false)
  }