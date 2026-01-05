/** Chunk was on 1272 **/
/** chunk id: 512847, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => V
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk317381 = require("./317381.js"),
  Chunk16609 = require("./16609.js"),
  Chunk591472 = require("./591472.js"),
  Chunk258609 = require("./258609.js"),
  Chunk569545 = require("./569545.js"),
  Chunk106301 = require("./106301.js"),
  Chunk460181 = require("./460181.js"),
  Chunk979283 = require("./979283.js"),
  Chunk590415 = require("./590415.js"),
  Chunk131704 = require("./131704.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk292959 = require("./292959.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk606304 = require("./606304.js"),
  Chunk979651 = require("./979651.js"),
  Chunk938475 = require("./938475.js"),
  Chunk823379 = require("./823379.js"),
  Chunk981631 = require("./981631.js");

function x(e, t, n, r) {
  i.useEffect(() => {
    let i = t(),
      l = new a.Fh(e, () => {
        let e = t(),
          l = n(i, e);
        null == l || y.Z.isSoundDisabled(l) || (0, f.GN)(l, null != r ? r : .4), i = e
      });
    return l.attach("useSound"), () => l.detach()
  })
}

function A() {
  return x([Chunk131951.Z, Chunk944486.Z], () => ({
    inVoiceChannel: null != Chunk944486.Z.getVoiceChannelId(),
    selfMute: Chunk131951.Z.isSelfMute(),
    selfDeaf: Chunk131951.Z.isSelfDeaf(),
    audioPermissionReady: Chunk131951.Z.isNativeAudioPermissionReady(),
    shouldSkipMuteUnmuteSound: Chunk131951.Z.shouldSkipMuteUnmuteSound()
  }), (e, t) => {
    let {
      inVoiceChannel: n,
      selfMute: r,
      selfDeaf: i,
      audioPermissionReady: l,
      shouldSkipMuteUnmuteSound: a
    } = t;
    if (e.selfDeaf !== i) return i ? "deafen" : "undeafen";
    if (l && (n || e.audioPermissionReady) && e.selfMute !== r) return a ? void v.Z.notifyMuteUnmuteSoundWasSkipped() : r ? "mute" : "unmute"
  }), null
}

function Z() {
  return x([Chunk131951.Z, Chunk944486.Z], () => ({
    videoEnabled: Chunk131951.Z.isVideoEnabled(),
    inVoiceChannel: null != Chunk944486.Z.getVoiceChannelId()
  }), (e, t) => {
    let {
      videoEnabled: n,
      inVoiceChannel: r
    } = t;
    if (!(0, g.O)()) return;
    let {
      videoEnabled: i,
      inVoiceChannel: l
    } = e;
    if (i !== n && l && r) return n ? "camera_on" : "camera_off"
  }), null
}

function w() {
  return x([Chunk592125.Z, Chunk19780.Z, Chunk944486.Z, Chunk258609.default], () => {
    let e = Chunk592125.Z.getChannel(Chunk944486.Z.getVoiceChannelId()),
      t = null == module ? true : module.type,
      n = null == module ? true : module.getGuildId(),
      r = Chunk19780.Z.getWasEverRtcConnected(),
      i = Chunk19780.Z.getState();
    return {
      channelType: exports,
      guildId: require,
      connected: Chunk473749 === Chunk981631.hes.RTC_CONNECTED,
      connectHasStarted: !Chunk54381 && Chunk473749 !== Chunk981631.hes.DISCONNECTED || Chunk473749 === Chunk981631.hes.RTC_CONNECTED,
      awaitingRemote: null != Chunk258609.default.getAwaitingRemoteSessionInfo(),
      connectedRemote: null != Chunk258609.default.getRemoteSessionId()
    }
  }, (e, t) => {
    let {
      channelType: n,
      connected: r,
      connectHasStarted: i,
      awaitingRemote: l,
      connectedRemote: a
    } = t, o = e.channelType, s = e.connectedRemote, c = e.connected;
    if (!e.connectHasStarted && i || a && !s) {
      if (null != n && m.Lr.has(n)) return;
      return "user_join"
    }
    if (c && !r) {
      if (l || a || null != o && m.Lr.has(o)) return;
      return "disconnect"
    }
  }), null
}

function L() {
  return x([Chunk606304.Z], () => Chunk606304.Z.isCurrentUserPTTActive() || Chunk606304.Z.isCurrentUserPTTLatched(), (e, t) => {
    if (e !== t) {
      let e = v.Z.isSelfMute();
      if (v.Z.getMode() === P.pM4.PUSH_TO_TALK && !e) return t ? "ptt_start" : "ptt_stop"
    }
  }), null
}

function R() {
  return x([Chunk131951.Z], () => Chunk131951.Z.getActiveVoiceFilter(), (e, t) => {
    if (e !== t)
      if (null != t) return null != e ? "voice_filter_swap" : "voice_filter_on";
      else return "voice_filter_off"
  }), null
}

function D() {
  return x([Chunk131951.Z], () => Chunk131951.Z.isSelfMutedTemporarily(), (e, t) => {
    if (e !== t) {
      let e = v.Z.isSelfMute();
      if (v.Z.getMode() === P.pM4.VOICE_ACTIVITY && !e) return t ? "ptt_stop" : "ptt_start"
    }
  }), null
}

function M() {
  return x([Chunk606304.Z], () => Chunk606304.Z.isCurrentUserPrioritySpeaker(), (e, t) => {
    if (e !== t) {
      let e = v.Z.isSelfMute();
      if (v.Z.getMode() === P.pM4.VOICE_ACTIVITY && !e) return t ? "ptt_start" : "ptt_stop"
    }
  }), null
}

function k() {
  return x([Chunk979651.Z], () => Chunk979651.Z.userHasBeenMovedVersion, (e, t) => {
    if (e !== t) return "user_moved"
  }), null
}

function U() {
  return x([Chunk944486.Z, Chunk979651.Z], () => {
    let e = Chunk944486.Z.getVoiceChannelId();
    if (null == module) return Chunk590415.xO.NONE;
    let t = Chunk979651.Z.getVoiceStateForChannel(module);
    return (0, Chunk590415.gf)(exports)
  }, (e, t) => {
    if (e !== t && t === h.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return "reconnect"
  }), null
}

function G() {
  return x([Chunk944486.Z, Chunk199902.Z, Chunk314897.default, Chunk979651.Z, Chunk592125.Z], () => {
    let e, t, n = Chunk944486.Z.getVoiceChannelId(),
      r = Chunk314897.default.getId(),
      i = [],
      l = null,
      a = 0,
      o = Chunk199902.Z.getAllActiveStreams();
    if (null != require) {
      let r = Chunk592125.Z.getChannel(require);
      null != Chunk54381 && (e = Chunk54381.type, t = Chunk938475.ZP.countVoiceStatesForChannel(Chunk54381.id) - !!Chunk979651.Z.isInChannel(Chunk54381.id), i = Chunk199902.Z.getAllApplicationStreamsForChannel(Chunk54381.id).map(e => e.ownerId))
    }
    let s = null;
    return (null == (s = 1 === Chunk317381.length ? Chunk317381[0] : Chunk199902.Z.getCurrentUserActiveStream()) ? true : Chunk16609.state) === Chunk981631.jm8.CONNECTING && (s = null), null != Chunk16609 && (l = (0, Chunk569545.V9)(Chunk16609), a = Chunk199902.Z.getViewerIds(Chunk392711).filter(e => e !== r).length), {
      channelType: module,
      voiceChannelId: require,
      voiceChannelUserCount: exports,
      streamingUserIds: Chunk473749,
      singleActiveStreamKey: Chunk392711,
      singleActiveStreamViewerCount: Chunk442837,
      currentUserId: Chunk54381,
      allActiveStreams: Chunk317381
    }
  }, (e, t) => {
    let {
      channelType: n,
      voiceChannelId: r,
      voiceChannelUserCount: i,
      streamingUserIds: l,
      singleActiveStreamKey: a,
      singleActiveStreamViewerCount: o,
      currentUserId: s
    } = t;
    if (e.voiceChannelId !== r || null == r || function(e) {
        let t = E.Z.getChannel(e);
        if (null == t) returnfalse;
        let n = t.getGuildId();
        if (null == n) returnfalse;
        let r = O.Z.getGuild(n);
        return null != r && r.afkChannelId === t.id
      }(r) || null != n && m.Lr.has(n)) return;
    let c = null != a && e.singleActiveStreamKey === a,
      u = l.some(t => !e.streamingUserIds.includes(t)),
      d = e.allActiveStreams.map(e => e.ownerId),
      p = e.streamingUserIds.some(e => !l.includes(e) && (e === s || d.includes(e)));
    if (u) return "stream_started";
    if (p) return "stream_ended";
    if (e.singleActiveStreamViewerCount <= 25 && c && o > e.singleActiveStreamViewerCount) return "stream_user_joined";
    if (null != e.voiceChannelUserCount && null != i && e.voiceChannelUserCount <= 25 && i > e.voiceChannelUserCount) return "user_join";
    if (null != e.voiceChannelUserCount && null != i && e.voiceChannelUserCount <= 25 && i < e.voiceChannelUserCount) return "user_leave";
    else if (e.singleActiveStreamViewerCount <= 25 && c && o < e.singleActiveStreamViewerCount) return "stream_user_left"
  }), null
}

function B() {
  return x([Chunk944486.Z, Chunk317381.ZP, Chunk591472.Z, Chunk314897.default], () => {
    let e = Chunk944486.Z.getVoiceChannelId(),
      t = Chunk944486.Z.getChannelId(),
      n = Chunk317381.ZP.getConnectedActivityLocation(),
      r = (0, Chunk16609.p)(require),
      i = Chunk314897.default.getId(),
      l = (0, Chunk823379.lm)(exports) ? Chunk317381.ZP.getEmbeddedActivitiesForChannel(exports) : Chunk317381.i6,
      a = (0, Chunk823379.lm)(module) ? Chunk317381.ZP.getEmbeddedActivitiesForChannel(module) : Chunk317381.i6,
      u = (0, Chunk823379.lm)(Chunk54381) ? Chunk317381.ZP.getEmbeddedActivitiesForChannel(Chunk54381) : Chunk317381.i6,
      d = (0, Chunk823379.lm)(require) ? Chunk317381.ZP.getSelfEmbeddedActivityForLocation(require) : null;
    return {
      connectedActivityLocation: require,
      voiceChannelId: module,
      currentUserId: Chunk473749,
      channelActivities: Chunk392711,
      connectedChannelActivities: Chunk258609,
      userConnectedActivity: Chunk569545,
      voiceChannelActivities: Chunk442837,
      connectedFrame: Chunk591472.Z.getConnectedFrame()
    }
  }, (e, t) => {
    let n, {
        connectedActivityLocation: r,
        voiceChannelId: i,
        currentUserId: l,
        channelActivities: a,
        connectedChannelActivities: o,
        userConnectedActivity: s,
        voiceChannelActivities: c,
        connectedFrame: u
      } = t,
      d = c.some(e => e.applicationId === (null == s ? true : s.applicationId) && e.launchId === s.launchId);
    if ((0, j.lm)(i)) {
      let t = e.voiceChannelActivities.find(e => e.userIds.has(l)),
        r = c.find(e => e.userIds.has(l));
      e.voiceChannelActivities.length < c.length && (0, j.lm)(e.voiceChannelId) && (n = "activity_launch"), true === r && (0, j.lm)(t) && (n = "activity_end"), true === t && (0, j.lm)(r) && r.userIds.size > 1 && (n = "activity_user_join"), (0, j.lm)(r) && (0, j.lm)(t) && (r.userIds.size > t.userIds.size && (n = "activity_user_join"), r.userIds.size < t.userIds.size && (n = "activity_user_left"))
    }
    if (!d) {
      e.connectedChannelActivities.length < o.length && e.channelActivities.length < a.length && (n = "activity_launch");
      let t = e.userConnectedActivity;
      null == s && (0, j.lm)(t) && (n = "activity_end"), (0, j.lm)(s) && (0, j.lm)(t) && (s.userIds.size > t.userIds.size && (n = "activity_user_join"), s.userIds.size < t.userIds.size && (n = "activity_user_left"))
    }
    return null == n && (null != e.connectedActivityLocation || null != r) && (null == e.connectedActivityLocation && null != r ? n = "activity_launch" : null != e.connectedActivityLocation && null == r ? n = "activity_end" : null != s && null != e.userConnectedActivity && (e.userConnectedActivity.userIds.size < s.userIds.size ? n = "activity_user_join" : e.userConnectedActivity.userIds.size > s.userIds.size && (n = "activity_user_leave"))), null == n && (null != e.connectedFrame || null != u) && (null == e.connectedFrame && null != u ? n = "activity_launch" : null != e.connectedFrame && null == u && (n = "activity_end")), n
  }), null
}

function H() {
  return x([Chunk106301.Z, Chunk944486.Z], () => ({
    hangStatus: Chunk106301.Z.getCurrentHangStatus(),
    customHangStatus: Chunk106301.Z.getCustomHangStatus(),
    gameActivityHangStatus: Chunk106301.Z.getGameActivityHangStatus(),
    inVoice: null != Chunk944486.Z.getVoiceChannelId()
  }), (e, t) => {
    var n, r;
    let {
      hangStatus: i,
      customHangStatus: a,
      gameActivityHangStatus: o
    } = t;
    if (e.inVoice && (null != i && i !== e.hangStatus || null != a && (a.status !== (null == (n = e.customHangStatus) ? true : n.status) || !(0, l.isEqual)(a.emoji, null == (r = e.customHangStatus) ? true : r.emoji)) || null != o && e.gameActivityHangStatus !== o)) return "hang_status_select"
  }, .15), null
}

function V() {
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)(A, {}), (0, Chunk54381.jsx)(Z, {}), (0, Chunk54381.jsx)(w, {}), (0, Chunk54381.jsx)(L, {}), (0, Chunk54381.jsx)(D, {}), (0, Chunk54381.jsx)(k, {}), (0, Chunk54381.jsx)(G, {}), (0, Chunk54381.jsx)(U, {}), (0, Chunk54381.jsx)(B, {}), (0, Chunk54381.jsx)(R, {}), (0, Chunk54381.jsx)(M, {}), (0, Chunk54381.jsx)(H, {})]
  })
}