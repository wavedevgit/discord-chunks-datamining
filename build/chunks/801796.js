/** Chunk was on 78376 **/
/** chunk id: 801796, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BD: () => h,
  US: () => f,
  X8: () => E,
  mH: () => A
});
var Chunk757942 = require("./757942.jsx"),
  Chunk455234 = require("./455234.js"),
  Chunk366811 = require("./366811.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk222823 = require("./222823.js"),
  Chunk309010 = require("./309010.js"),
  Chunk543465 = require("./543465.js"),
  Chunk652215 = require("./652215.js"),
  Chunk790782 = require("./790782.js");
let p = (e, t) => {
    let n = a.A.getChannel(t);
    return null != n && ((0, s.Gw)(n.type) || u.kvI.GUILD_VOCAL.has(n.type) ? o.Ay.getMentionCount(t) > 0 || c.A.getVoiceChannelId() === t : (!d.Ay.isChannelMuted(e, t) || o.Ay.getMentionCount(t) > 0) && (0, i.Y)(n))
  },
  m = (e, t) => t === _.P.GUILD_EVENT ? !d.Ay.isMuteScheduledEventsEnabled(e) && o.Ay.hasUnread(e, t) : o.Ay.hasUnread(e, t),
  g = (e, t) => {
    let n = a.A.getChannel(t);
    return null != n && !!u.kvI.GUILD_VOCAL.has(n.type) && (o.Ay.getMentionCount(t) > 0 || c.A.getVoiceChannelId() === t && o.Ay.getUnreadCount(t) > 0)
  },
  A = {
    binds: ["alt+shift+down"],
    comboKeysBindGlobal: true,
    action() {
      var e;
      let t = null != (e = l.A.getState().guildId) ? e : u.ME;
      return (0, r.A)(1, {
        channelPredicate: p,
        guildPredicate: e => e === t || !d.Ay.isMuted(e),
        guildFeaturePredicate: m,
        ensureChatIsVisible: g,
        withVoiceChannels: true
      }), false
    }
  },
  f = {
    binds: ["alt+shift+up"],
    comboKeysBindGlobal: true,
    action() {
      var e;
      let t = null != (e = l.A.getState().guildId) ? e : u.ME;
      return (0, r.A)(false, {
        channelPredicate: p,
        guildPredicate: e => e === t || !d.Ay.isMuted(e),
        guildFeaturePredicate: m,
        ensureChatIsVisible: g,
        withVoiceChannels: true
      }), false
    }
  },
  b = (e, t) => o.Ay.getMentionCount(t) > 0,
  h = {
    binds: ["mod+shift+alt+down"],
    comboKeysBindGlobal: true,
    action: () => ((0, r.A)(1, {
      channelPredicate: b,
      ensureChatIsVisible: g,
      withVoiceChannels: true
    }), false)
  },
  E = {
    binds: ["mod+shift+alt+up"],
    comboKeysBindGlobal: true,
    action: () => ((0, r.A)(false, {
      channelPredicate: b,
      ensureChatIsVisible: g,
      withVoiceChannels: true
    }), false)
  }