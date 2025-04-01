/** Chunk was on 13323 **/
n.d(t, {
  Nv: () => x,
  pd: () => f,
  uX: () => _,
  wk: () => b
});
var r = n(350483),
  i = n(220444),
  s = n(905423),
  a = n(131704),
  o = n(592125),
  l = n(306680),
  c = n(944486),
  d = n(9156),
  u = n(981631),
  m = n(490897);
let g = (e, t) => {
    let n = o.Z.getChannel(t);
    return null != n && ((0, a.hv)(n.type) || u.TPd.GUILD_VOCAL.has(n.type) ? l.ZP.getMentionCount(t) > 0 || c.Z.getVoiceChannelId() === t : (!d.ZP.isChannelMuted(e, t) || l.ZP.getMentionCount(t) > 0) && (0, i.d)(n))
  },
  p = (e, t) => t === m.W.GUILD_EVENT ? !d.ZP.isMuteScheduledEventsEnabled(e) && l.ZP.hasUnread(e, t) : l.ZP.hasUnread(e, t),
  h = (e, t) => {
    let n = o.Z.getChannel(t);
    return !!(null != n && u.TPd.GUILD_VOCAL.has(n.type)) && (l.ZP.getMentionCount(t) > 0 || c.Z.getVoiceChannelId() === t && l.ZP.getUnreadCount(t) > 0)
  },
  f = {
    binds: ["alt+shift+down"],
    comboKeysBindGlobal: !0,
    action() {
      var e;
      let t = null !== (e = s.Z.getState().guildId) && void 0 !== e ? e : u.ME;
      return (0, r.Z)(1, {
        channelPredicate: g,
        guildPredicate: e => e === t || !d.ZP.isMuted(e),
        guildFeaturePredicate: p,
        ensureChatIsVisible: h,
        withVoiceChannels: !0
      }), !1
    }
  },
  b = {
    binds: ["alt+shift+up"],
    comboKeysBindGlobal: !0,
    action() {
      var e;
      let t = null !== (e = s.Z.getState().guildId) && void 0 !== e ? e : u.ME;
      return (0, r.Z)(-1, {
        channelPredicate: g,
        guildPredicate: e => e === t || !d.ZP.isMuted(e),
        guildFeaturePredicate: p,
        ensureChatIsVisible: h,
        withVoiceChannels: !0
      }), !1
    }
  },
  N = (e, t) => l.ZP.getMentionCount(t) > 0,
  x = {
    binds: ["mod+shift+alt+down"],
    comboKeysBindGlobal: !0,
    action: () => ((0, r.Z)(1, {
      channelPredicate: N,
      ensureChatIsVisible: h,
      withVoiceChannels: !0
    }), !1)
  },
  _ = {
    binds: ["mod+shift+alt+up"],
    comboKeysBindGlobal: !0,
    action: () => ((0, r.Z)(-1, {
      channelPredicate: N,
      ensureChatIsVisible: h,
      withVoiceChannels: !0
    }), !1)
  }