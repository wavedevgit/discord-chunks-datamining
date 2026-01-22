/** Chunk was on web.js **/
/** chunk id: 801796, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BD: () => b,
  US: () => g,
  X8: () => y,
  mH: () => m
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
    let n = o.A.getChannel(t);
    return null != n && ((0, s.Gw)(n.type) || d.kvI.GUILD_VOCAL.has(n.type) ? l.Ay.getMentionCount(t) > 0 || c.A.getVoiceChannelId() === t : (!u.Ay.isChannelMuted(e, t) || l.Ay.getMentionCount(t) > 0) && (0, i.Y)(n))
  },
  _ = (e, t) => t === f.P.GUILD_EVENT ? !u.Ay.isMuteScheduledEventsEnabled(e) && l.Ay.hasUnread(e, t) : l.Ay.hasUnread(e, t),
  h = (e, t) => {
    let n = o.A.getChannel(t);
    return null != n && !!d.kvI.GUILD_VOCAL.has(n.type) && (l.Ay.getMentionCount(t) > 0 || c.A.getVoiceChannelId() === t && l.Ay.getUnreadCount(t) > 0)
  },
  m = {
    binds: ["alt+shift+down"],
    comboKeysBindGlobal: true,
    action() {
      var e;
      let t = null != (e = a.A.getState().guildId) ? e : d.ME;
      return (0, r.A)(1, {
        channelPredicate: p,
        guildPredicate: e => e === t || !u.Ay.isMuted(e),
        guildFeaturePredicate: _,
        ensureChatIsVisible: h,
        withVoiceChannels: true
      }), false
    }
  },
  g = {
    binds: ["alt+shift+up"],
    comboKeysBindGlobal: true,
    action() {
      var e;
      let t = null != (e = a.A.getState().guildId) ? e : d.ME;
      return (0, r.A)(false, {
        channelPredicate: p,
        guildPredicate: e => e === t || !u.Ay.isMuted(e),
        guildFeaturePredicate: _,
        ensureChatIsVisible: h,
        withVoiceChannels: true
      }), false
    }
  },
  E = (e, t) => l.Ay.getMentionCount(t) > 0,
  b = {
    binds: ["mod+shift+alt+down"],
    comboKeysBindGlobal: true,
    action: () => ((0, r.A)(1, {
      channelPredicate: E,
      ensureChatIsVisible: h,
      withVoiceChannels: true
    }), false)
  },
  y = {
    binds: ["mod+shift+alt+up"],
    comboKeysBindGlobal: true,
    action: () => ((0, r.A)(false, {
      channelPredicate: E,
      ensureChatIsVisible: h,
      withVoiceChannels: true
    }), false)
  }