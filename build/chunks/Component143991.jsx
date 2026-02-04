/** Chunk was on 21738 **/
/** chunk id: 143991, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => F
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk933958 = require("./933958.js"),
  Chunk969151 = require("./969151.js"),
  Chunk91242 = require("./91242.js"),
  Chunk643501 = require("./643501.js"),
  Chunk652896 = require("./652896.js"),
  Chunk242919 = require("./242919.js"),
  Chunk400492 = require("./400492.js"),
  Chunk723991 = require("./723991.js"),
  Chunk105530 = require("./105530.js"),
  Chunk95701 = require("./95701.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk430452 = require("./430452.js"),
  Chunk803224 = require("./803224.js"),
  Chunk383501 = require("./383501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk485296 = require("./485296.js"),
  Chunk977997 = require("./977997.js"),
  Chunk607567 = require("./607567.js"),
  Chunk403362 = require("./403362.js"),
  Chunk652215 = require("./652215.js");

function x(e, t, n, r) {
  i.useEffect(() => {
    let i = t(),
      l = new a.ru(e, () => {
        let e = t(),
          l = n(i, e);
        null == l || y.A.isSoundDisabled(l) || (0, h.Ak)(l, null != r ? r : .4), i = e
      });
    return l.attach("useSound"), () => l.detach()
  })
}

function P() {
  return x([O.A, v.A], () => ({
    inVoiceChannel: null != v.A.getVoiceChannelId(),
    selfMute: O.A.isSelfMute(),
    selfDeaf: O.A.isSelfDeaf(),
    audioPermissionReady: O.A.isNativeAudioPermissionReady(),
    shouldSkipMuteUnmuteSound: O.A.shouldSkipMuteUnmuteSound()
  }), (e, t) => {
    let {
      inVoiceChannel: n,
      selfMute: r,
      selfDeaf: i,
      audioPermissionReady: l,
      shouldSkipMuteUnmuteSound: a
    } = t;
    if (e.selfDeaf !== i) return i ? "deafen" : "undeafen";
    if (l && (n || e.audioPermissionReady) && e.selfMute !== r) return a ? void O.A.notifyMuteUnmuteSoundWasSkipped() : r ? "mute" : "unmute"
  }), null
}

function w() {
  return x([O.A, v.A], () => ({
    videoEnabled: O.A.isVideoEnabled(),
    inVoiceChannel: null != v.A.getVoiceChannelId()
  }), (e, t) => {
    let {
      videoEnabled: n,
      inVoiceChannel: r
    } = t;
    if (!(0, f.q)()) return;
    let {
      videoEnabled: i,
      inVoiceChannel: l
    } = e;
    if (i !== n && l && r) return n ? "camera_on" : "camera_off"
  }), null
}

function L() {
  return x([b.A, I.A, v.A, u.default], () => {
    let e = b.A.getChannel(v.A.getVoiceChannelId()),
      t = null == e ? true : e.type,
      n = null == e ? true : e.getGuildId(),
      r = I.A.getWasEverRtcConnected(),
      i = I.A.getState();
    return {
      channelType: t,
      guildId: n,
      connected: i === j.S7L.RTC_CONNECTED,
      connectHasStarted: !r && i !== j.S7L.DISCONNECTED || i === j.S7L.RTC_CONNECTED,
      awaitingRemote: null != u.default.getAwaitingRemoteSessionInfo(),
      connectedRemote: null != u.default.getRemoteSessionId()
    }
  }, (e, t) => {
    let {
      channelType: n,
      connected: r,
      connectHasStarted: i,
      awaitingRemote: l,
      connectedRemote: a
    } = t, s = e.channelType, o = e.connectedRemote, c = e.connected;
    if (!e.connectHasStarted && i || a && !o) {
      if (null != n && m.Do.has(n)) return;
      return "user_join"
    }
    if (c && !r) {
      if (l || a || null != s && m.Do.has(s)) return;
      return "disconnect"
    }
  }), null
}

function R() {
  return x([S.A], () => S.A.isCurrentUserPTTActive() || S.A.isCurrentUserPTTLatched(), (e, t) => {
    if (e !== t) {
      let e = O.A.isSelfMute();
      if (O.A.getMode() === j.TBI.PUSH_TO_TALK && !e) return t ? "ptt_start" : "ptt_stop"
    }
  }), null
}

function D() {
  return x([O.A], () => O.A.getActiveVoiceFilter(), (e, t) => {
    if (e !== t)
      if (null != t) return null != e ? "voice_filter_swap" : "voice_filter_on";
      else return "voice_filter_off"
  }), null
}

function M() {
  return x([O.A], () => O.A.isSelfMutedTemporarily(), (e, t) => {
    if (e !== t) {
      let e = O.A.isSelfMute();
      if (O.A.getMode() === j.TBI.VOICE_ACTIVITY && !e) return t ? "ptt_stop" : "ptt_start"
    }
  }), null
}

function k() {
  return x([S.A], () => S.A.isCurrentUserPrioritySpeaker(), (e, t) => {
    if (e !== t) {
      let e = O.A.isSelfMute();
      if (O.A.getMode() === j.TBI.VOICE_ACTIVITY && !e) return t ? "ptt_start" : "ptt_stop"
    }
  }), null
}

function U() {
  return x([C.A], () => C.A.userHasBeenMovedVersion, (e, t) => {
    if (e !== t) return "user_moved"
  }), null
}

function G() {
  return x([v.A, C.A], () => {
    let e = v.A.getVoiceChannelId();
    if (null == e) return g.zF.NONE;
    let t = C.A.getVoiceStateForChannel(e);
    return (0, g.eY)(t)
  }, (e, t) => {
    if (e !== t && t === g.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return "reconnect"
  }), null
}

function V() {
  return x([v.A, A.A, _.default, C.A, b.A], () => {
    let e, t, n = v.A.getVoiceChannelId(),
      r = _.default.getId(),
      i = [],
      l = null,
      a = 0,
      s = A.A.getAllActiveStreams();
    if (null != n) {
      let r = b.A.getChannel(n);
      null != r && (e = r.type, t = N.Ay.countVoiceStatesForChannel(r.id) - !!C.A.isInChannel(r.id), i = A.A.getAllApplicationStreamsForChannel(r.id).map(e => e.ownerId))
    }
    let o = null;
    return (null == (o = 1 === s.length ? s[0] : A.A.getCurrentUserActiveStream()) ? true : o.state) === j.XYD.CONNECTING && (o = null), null != o && (l = (0, d._z)(o), a = A.A.getViewerIds(l).filter(e => e !== r).length), {
      channelType: e,
      voiceChannelId: n,
      voiceChannelUserCount: t,
      streamingUserIds: i,
      singleActiveStreamKey: l,
      singleActiveStreamViewerCount: a,
      currentUserId: r,
      allActiveStreams: s
    }
  }, (e, t) => {
    let {
      channelType: n,
      voiceChannelId: r,
      voiceChannelUserCount: i,
      streamingUserIds: l,
      singleActiveStreamKey: a,
      singleActiveStreamViewerCount: s,
      currentUserId: o
    } = t;
    if (e.voiceChannelId !== r || null == r || function(e) {
        let t = b.A.getChannel(e);
        if (null == t) returnfalse;
        let n = t.getGuildId();
        if (null == n) returnfalse;
        let r = E.A.getGuild(n);
        return null != r && r.afkChannelId === t.id
      }(r) || null != n && m.Do.has(n)) return;
    let c = null != a && e.singleActiveStreamKey === a,
      u = l.some(t => !e.streamingUserIds.includes(t)),
      d = e.allActiveStreams.map(e => e.ownerId),
      p = e.streamingUserIds.some(e => !l.includes(e) && (e === o || d.includes(e)));
    if (u) return "stream_started";
    if (p) return "stream_ended";
    if (e.singleActiveStreamViewerCount <= 25 && c && s > e.singleActiveStreamViewerCount) return "stream_user_joined";
    if (null != e.voiceChannelUserCount && null != i && e.voiceChannelUserCount <= 25 && i > e.voiceChannelUserCount) return "user_join";
    if (null != e.voiceChannelUserCount && null != i && e.voiceChannelUserCount <= 25 && i < e.voiceChannelUserCount) return "user_leave";
    else if (e.singleActiveStreamViewerCount <= 25 && c && s < e.singleActiveStreamViewerCount) return "stream_user_left"
  }), null
}

function B() {
  return x([v.A, s.Ay, c.A, _.default], () => {
    let e = v.A.getVoiceChannelId(),
      t = v.A.getChannelId(),
      n = s.Ay.getConnectedActivityLocation(),
      r = (0, o.H)(n),
      i = _.default.getId(),
      l = (0, T.Vq)(t) ? s.Ay.getEmbeddedActivitiesForChannel(t) : s.Am,
      a = (0, T.Vq)(e) ? s.Ay.getEmbeddedActivitiesForChannel(e) : s.Am,
      u = (0, T.Vq)(r) ? s.Ay.getEmbeddedActivitiesForChannel(r) : s.Am,
      d = (0, T.Vq)(n) ? s.Ay.getSelfEmbeddedActivityForLocation(n) : null;
    return {
      connectedActivityLocation: n,
      voiceChannelId: e,
      currentUserId: i,
      channelActivities: l,
      connectedChannelActivities: u,
      userConnectedActivity: d,
      voiceChannelActivities: a,
      connectedFrame: c.A.getConnectedFrame()
    }
  }, (e, t) => {
    let n, {
        connectedActivityLocation: r,
        voiceChannelId: i,
        currentUserId: l,
        channelActivities: a,
        connectedChannelActivities: s,
        userConnectedActivity: o,
        voiceChannelActivities: c,
        connectedFrame: u
      } = t,
      d = c.some(e => e.applicationId === (null == o ? true : o.applicationId) && e.launchId === o.launchId);
    if ((0, T.Vq)(i)) {
      let t = e.voiceChannelActivities.find(e => e.userIds.has(l)),
        r = c.find(e => e.userIds.has(l));
      e.voiceChannelActivities.length < c.length && (0, T.Vq)(e.voiceChannelId) && (n = "activity_launch"), true === r && (0, T.Vq)(t) && (n = "activity_end"), true === t && (0, T.Vq)(r) && r.userIds.size > 1 && (n = "activity_user_join"), (0, T.Vq)(r) && (0, T.Vq)(t) && (r.userIds.size > t.userIds.size && (n = "activity_user_join"), r.userIds.size < t.userIds.size && (n = "activity_user_left"))
    }
    if (!d) {
      e.connectedChannelActivities.length < s.length && e.channelActivities.length < a.length && (n = "activity_launch");
      let t = e.userConnectedActivity;
      null == o && (0, T.Vq)(t) && (n = "activity_end"), (0, T.Vq)(o) && (0, T.Vq)(t) && (o.userIds.size > t.userIds.size && (n = "activity_user_join"), o.userIds.size < t.userIds.size && (n = "activity_user_left"))
    }
    return null == n && (null != e.connectedActivityLocation || null != r) && (null == e.connectedActivityLocation && null != r ? n = "activity_launch" : null != e.connectedActivityLocation && null == r ? n = "activity_end" : null != o && null != e.userConnectedActivity && (e.userConnectedActivity.userIds.size < o.userIds.size ? n = "activity_user_join" : e.userConnectedActivity.userIds.size > o.userIds.size && (n = "activity_user_leave"))), null == n && (null != e.connectedFrame || null != u) && (null == e.connectedFrame && null != u ? n = "activity_launch" : null != e.connectedFrame && null == u && (n = "activity_end")), n
  }), null
}

function H() {
  return x([p.A, v.A], () => ({
    hangStatus: p.A.getCurrentHangStatus(),
    customHangStatus: p.A.getCustomHangStatus(),
    gameActivityHangStatus: p.A.getGameActivityHangStatus(),
    inVoice: null != v.A.getVoiceChannelId()
  }), (e, t) => {
    var n, r;
    let {
      hangStatus: i,
      customHangStatus: a,
      gameActivityHangStatus: s
    } = t;
    if (e.inVoice && (null != i && i !== e.hangStatus || null != a && (a.status !== (null == (n = e.customHangStatus) ? true : n.status) || !(0, l.isEqual)(a.emoji, null == (r = e.customHangStatus) ? true : r.emoji)) || null != s && e.gameActivityHangStatus !== s)) return "hang_status_select"
  }, .15), null
}

function F() {
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(P, {}), (0, r.jsx)(w, {}), (0, r.jsx)(L, {}), (0, r.jsx)(R, {}), (0, r.jsx)(M, {}), (0, r.jsx)(U, {}), (0, r.jsx)(V, {}), (0, r.jsx)(G, {}), (0, r.jsx)(B, {}), (0, r.jsx)(D, {}), (0, r.jsx)(k, {}), (0, r.jsx)(H, {})]
  })
}