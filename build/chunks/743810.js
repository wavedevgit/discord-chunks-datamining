/** Chunk was on web.js **/
/** chunk id: 743810, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Nv: () => b,
  pd: () => h,
  uX: () => y,
  wk: () => g
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
    let n = s.Z.getChannel(t);
    return null != n && ((0, o.hv)(n.type) || d.TPd.GUILD_VOCAL.has(n.type) ? l.ZP.getMentionCount(t) > 0 || c.Z.getVoiceChannelId() === t : (!u.ZP.isChannelMuted(e, t) || l.ZP.getMentionCount(t) > 0) && (0, i.d)(n))
  },
  _ = (e, t) => t === f.W.GUILD_EVENT ? !u.ZP.isMuteScheduledEventsEnabled(e) && l.ZP.hasUnread(e, t) : l.ZP.hasUnread(e, t),
  m = (e, t) => {
    let n = s.Z.getChannel(t);
    return null != n && !!d.TPd.GUILD_VOCAL.has(n.type) && (l.ZP.getMentionCount(t) > 0 || c.Z.getVoiceChannelId() === t && l.ZP.getUnreadCount(t) > 0)
  },
  h = {
    binds: ["alt+shift+down"],
    comboKeysBindGlobal: true,
    action() {
      var e;
      let t = null != (e = Chunk905423.Z.getState().guildId) ? module : Chunk981631.ME;
      return (0, Chunk350483.Z)(1, {
        channelPredicate: p,
        guildPredicate: e => e === t || !u.ZP.isMuted(e),
        guildFeaturePredicate: _,
        ensureChatIsVisible: m,
        withVoiceChannels: true
      }), false
    }
  },
  g = {
    binds: ["alt+shift+up"],
    comboKeysBindGlobal: true,
    action() {
      var e;
      let t = null != (e = Chunk905423.Z.getState().guildId) ? module : Chunk981631.ME;
      return (0, Chunk350483.Z)(false, {
        channelPredicate: p,
        guildPredicate: e => e === t || !u.ZP.isMuted(e),
        guildFeaturePredicate: _,
        ensureChatIsVisible: m,
        withVoiceChannels: true
      }), false
    }
  },
  E = (e, t) => l.ZP.getMentionCount(t) > 0,
  b = {
    binds: ["mod+shift+alt+down"],
    comboKeysBindGlobal: true,
    action: () => ((0, Chunk350483.Z)(1, {
      channelPredicate: E,
      ensureChatIsVisible: m,
      withVoiceChannels: true
    }), false)
  },
  y = {
    binds: ["mod+shift+alt+up"],
    comboKeysBindGlobal: true,
    action: () => ((0, Chunk350483.Z)(false, {
      channelPredicate: E,
      ensureChatIsVisible: m,
      withVoiceChannels: true
    }), false)
  }