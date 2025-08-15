/** Chunk was on 1272 **/
/** chunk id: 145604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => $
}), require("./583741.js"), require("./997841.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk224706 = require("./224706.js"),
  Chunk593472 = require("./593472.js"),
  Chunk941033 = require("./941033.js"),
  Chunk367907 = require("./367907.js"),
  Chunk731429 = require("./731429.js"),
  Chunk188471 = require("./188471.js"),
  Chunk176881 = require("./176881.js"),
  Chunk318885 = require("./318885.js"),
  Chunk358221 = require("./358221.js"),
  Chunk710845 = require("./710845.js"),
  Chunk581567 = require("./581567.js"),
  Chunk594190 = require("./594190.js"),
  Chunk38618 = require("./38618.js"),
  Chunk489745 = require("./489745.js"),
  Chunk924301 = require("./924301.js"),
  Chunk734307 = require("./734307.js"),
  Chunk355298 = require("./355298.js"),
  Chunk454991 = require("./454991.js"),
  Chunk837268 = require("./837268.js"),
  Chunk32300 = require("./32300.js"),
  Chunk371651 = require("./371651.js"),
  Chunk829907 = require("./829907.js"),
  Chunk509003 = require("./509003.js"),
  Chunk427679 = require("./427679.js"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk77498 = require("./77498.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk375954 = require("./375954.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk885110 = require("./885110.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk774343 = require("./774343.js"),
  Chunk974042 = require("./974042.js"),
  Chunk237997 = require("./237997.js"),
  Chunk626135 = require("./626135.js"),
  Chunk630388 = require("./630388.js"),
  Chunk823379 = require("./823379.js"),
  Chunk981631 = require("./981631.js");

function X(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      X(e, t, n[t])
    })
  }
  return e
}
class J extends Chunk647438.PureComponent {
  componentDidUpdate(e) {
    var t, n, r, i, l, s;
    let {
      voiceChannelId: u,
      voiceChannelGuildId: p,
      voiceChannelType: _,
      voiceChannelBitrate: O,
      videoEnabled: y,
      isScreenSharing: v,
      runningGame: w,
      runningGamePid: R,
      selectedChannelId: M,
      selectedGuildId: U,
      connected: B
    } = this.props;
    if (e.voiceChannelId !== u && null != e.voiceChannelId) {
      let t = b.ZP.getCurrentGameForAnalytics(),
        n = null != t ? t.name : "",
        r = j.Z.getStageInstanceByChannel(e.voiceChannelId),
        i = E.ZP.getActiveEventByChannel(e.voiceChannelId);
      W.default.track(q.rMx.LEAVE_VOICE_CHANNEL, Q({
        channel_id: e.voiceChannelId,
        channel_type: e.voiceChannelType,
        channel_bitrate: e.voiceChannelBitrate,
        guild_id: e.voiceChannelGuildId,
        rtc_connection_id: k.Z.getRTCConnectionId(),
        game_name: n,
        duration: k.Z.getDuration(),
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        media_session_id: k.Z.getMediaSessionId(),
        stage_instance_id: null == r ? true : r.id,
        guild_scheduled_event_id: null == i ? true : i.id
      }, (0, c.kO)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled), k.Z.getVoiceStateStats(), h.Z.getSelectedParticipantStats(e.voiceChannelId)))
    }
    if (e.voiceChannelId !== u && null != u) {
      let e = b.ZP.getCurrentGameForAnalytics(),
        t = null != e ? e.name : "",
        n = j.Z.getStageInstanceByChannel(u),
        r = E.ZP.getActiveEventByChannel(u);
      (0, c.yw)(q.rMx.CHANNEL_OPENED, Q({}, (0, c.$H)(u))), (0, d.a)(q.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: u
      });
      let i = null,
        l = z.default.getFocusedPID();
      null != l && N.default.getOverlayMethod(l) !== C.gl.Disabled && (z.default.isInstanceLocked() ? i = q.ADE.OVERLAY_LOCKED_ACTIVATED : z.default.isInstanceLocked() || (i = z.default.isPinned(q.Odu.TEXT) ? q.ADE.OVERLAY_UNLOCKED_PINNED : q.ADE.OVERLAY_UNLOCKED)), W.default.track(q.rMx.JOIN_VOICE_CHANNEL, Q({
        location: i,
        channel_id: u,
        channel_type: _,
        channel_bitrate: O,
        guild_id: p,
        game_name: t,
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        stage_instance_id: null == n ? true : n.id,
        guild_scheduled_event_id: null == r ? true : r.id,
        was_moved: k.Z.getWasMoved(),
        join_voice_id: k.Z.getJoinVoiceId()
      }, (0, c.oG)(p, u), (0, c.kO)(p, u, y)))
    }
    let V = null != w && null != w.distributor && null != w.sku && null != e.runningGame && e.runningGame.distributor === w.distributor && w.sku === e.runningGame.sku,
      H = null != e.runningGame && null != w && e.runningGame.isLauncher !== w.isLauncher;
    if (e.runningGame !== w && null != w && !w.isLauncher && (!V || H)) {
      let e = Z.Z.getGameByName(w.name),
        s = b.ZP.getOverrideForGame(w),
        c = L.Z.getGuildIds(),
        d = x.SE.getSetting(),
        f = c.filter(e => !d.includes(e)).slice(0, 200),
        h = null;
      h = null != s ? "custom_override" : null != e ? "verified_game" : "launcher";
      let E = N.default.getTrackedGameByPid(w.pid),
        y = (0, b.b6)(w),
        v = {
          enabledOOP: null != (t = null == E ? true : E.oopEnabled) ? t : y.enabledOOP,
          enabledLegacy: null != (n = null == E ? true : E.legacyEnabled) ? n : y.enabledLegacy,
          overlayMethod: null != (r = null == E ? true : E.overlayMethod) ? r : y.overlayMethod,
          source: null != (i = null == E ? true : E.source) ? i : y.source
        },
        j = null != (l = N.default.getOverlayMethod(w.pid)) ? l : v.overlayMethod;
      if (setTimeout(async () => {
          var t;
          let n = await (0, T.hj)(w.pid),
            {
              gameName: r,
              gameId: i,
              exe: l,
              distributor: a
            } = (0, m.G8)(w),
            s = (0, S.NW)("ChatAutoAnalytics", false),
            c = v.enabledLegacy || s && v.enabledOOP,
            d = I.v.legacyEnabled || s && I.v.oopEnabled,
            g = v.source;
          W.default.track(q.rMx.LAUNCH_GAME, {
            game: r,
            game_id: i,
            verified: null != e && (0, m.vp)(l, null == e ? true : e.executables),
            elevated: w.elevated,
            is_launcher: null != (t = null == w ? true : w.isLauncher) && t,
            game_platform: q.M7m.DESKTOP,
            detection_method: h,
            distributor: a,
            is_overlay_enabled: d,
            is_overlay_game_enabled: c,
            is_overlay_game_source: g,
            fullscreen_type: null != n ? o.Jx[n] : o.Jx.UNKNOWN.toString(),
            overlay_method: C.gl[j],
            activity_status_enabled: x.G6.getSetting(),
            activity_status_shared_guilds: f,
            current_user_status: G.Z.getStatus(),
            game_detection_enabled: (0, b.ik)(w),
            executable_path: l,
            voice_channel_id: u,
            voice_channel_type: _,
            voice_channel_bitrate: O,
            voice_channel_guild_id: p,
            distributor_game_id: w.sku,
            hidden_by_distributor: w.hidden,
            game_metadata: (0, P.sD)(w)
          }), null != l && b.ZP.addExecutableTrackedByAnalytics(l)
        }, 1e4), null != w.name && null != R && Z.Z.shouldReport(w.name)) {
        let e = w.name;
        a.Z.identifyGame(R, e).then(e => a.Z.reportUnverifiedGame(e)).catch(e => new g.Z("AutoAnalytics").error("Cannot identify game", e))
      }
    }
    if ((e.videoEnabled !== y || e.isScreenSharing !== v) && null != u) {
      let e = "none",
        t = [v ? "screen" : null, y ? "camera" : null].filter(K.lm),
        n = null;
      v ? (e = "screen", n = (0, f.t)()) : y && (e = "camera"), W.default.track(q.rMx.VIDEO_INPUT_TOGGLED, Q({
        video_input_type: e,
        video_toggle_source: __OVERLAY__ ? "overlay" : "app",
        enabled_inputs: t,
        preview_enabled: x.qF.getSetting()
      }, n, this.getGameMetadata(), (0, c.AB)(u)))
    }
    if (B && null != M && (!e.connected || M !== e.selectedChannelId || U !== e.selectedGuildId)) {
      let t = e.selectedChannelId,
        n = A.Z.getChannel(t),
        r = L.Z.getGuild(null == n ? true : n.getGuildId());
      if (null != t && null != n && null != r && r.publicUpdatesChannelId === t) {
        let e = D.Z.getMessages(t),
          i = e.toArray().reverse().find(e => {
            var t;
            return (0, Y.yE)(e.flags, q.iLy.IS_CROSSPOST) && (null == (t = e.messageReference) ? true : t.guild_id) === "667560445975986187"
          });
        W.default.track(q.rMx.ACK_COMMUNITY_MESSAGES, Q({
          last_message_id: null == i ? true : i.id,
          last_message_reference_message_id: null == i || null == (s = i.messageReference) ? true : s.message_id,
          messages_loaded: e.hasFetched
        }, (0, c.v_)(n), (0, c.hH)(r.id)))
      }
    }
  }
  getGameMetadata() {
    return {
      game_platform: this.props.gamePlatform,
      game_name: this.props.gameName,
      game_exe_name: this.props.gameExeName,
      game_id: this.props.gameId
    }
  }
  render() {
    return null
  }
  constructor(...e) {
    super(...e), X(this, "isMessageRequestsInitialized", false)
  }
}

function $() {
  let [e, t] = (0, Chunk442837.Wu)([Chunk944486.Z], () => [Chunk944486.Z.getVoiceChannelId(), Chunk944486.Z.getChannelId()], []), n = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getChannel(exports), [exports]), a = (0, Chunk442837.e7)([Chunk358221.Z], () => (null == require ? true : require.id) != null && Chunk358221.Z.getChatOpen(require.id), [require]), o = null == require ? true : require.nsfw, f = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getChannel(module), [module]), g = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId(), []), m = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(Chunk710845), [Chunk710845]), E = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser(), []), I = (0, Chunk442837.e7)([Chunk271383.ZP], () => {
    var e, t;
    return null != Chunk924301 && null != Chunk710845 && null != (t = null == (e = Chunk271383.ZP.getMember(Chunk710845, Chunk924301.id)) ? true : module.isPending) && exports
  }, [Chunk924301, Chunk710845]), C = (0, Chunk442837.e7)([Chunk974042.ZP], () => Chunk974042.ZP.getState().section, []), S = (0, Chunk442837.e7)([Chunk774343.Z], () => Chunk774343.Z.getHomeLink(), []), N = (0, Chunk442837.e7)([Chunk38618.Z], () => Chunk38618.Z.isConnected(), []), [T, P] = (0, Chunk442837.Wu)([Chunk131951.Z], () => [Chunk131951.Z.isVideoEnabled(), Chunk131951.Z.isScreenSharing()], []), j = (0, Chunk442837.e7)([Chunk885110.Z], () => Chunk885110.Z.getPrimaryActivity(), []), x = (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.getCurrentGameForAnalytics(), []), Z = (0, Chunk489745.Z)(Chunk710845), D = (0, Chunk442837.e7)([Chunk355298.Z], () => Chunk355298.Z.getMessageRequestsCount(), []), k = {
    selectedChannelId: exports,
    isNSFWChannel: Chunk593472,
    selectedGuildId: Chunk710845,
    friendsTabSection: Chunk837268,
    homeLink: Chunk32300,
    connected: Chunk371651,
    videoEnabled: Chunk829907,
    isScreenSharing: Chunk509003,
    voiceChannelId: null == Chunk318885 ? true : Chunk318885.id,
    voiceChannelGuildId: null == Chunk318885 ? true : Chunk318885.getGuildId(),
    voiceChannelType: null == Chunk318885 ? true : Chunk318885.type,
    voiceChannelBitrate: null == Chunk318885 ? true : Chunk318885.bitrate,
    runningGame: Chunk695346,
    runningGamePid: null != Chunk695346 ? Chunk695346.pid : null,
    gamePlatform: (0, Chunk941033.Z)(Chunk427679),
    gameName: null != Chunk427679 ? Chunk427679.name : null,
    gameId: null != Chunk427679 ? Chunk427679.application_id : null,
    gameExeName: null != Chunk695346 ? Chunk695346.exeName : null,
    hasPreviewEnabled: null == Chunk581567 ? true : Chunk581567.features.has(Chunk981631.oNc.PREVIEW_ENABLED),
    isMemberPending: Chunk454991,
    postableChannelCount: Chunk77498,
    isTextInVoice: Chunk224706,
    numMessageRequests: Chunk375954
  }, z = Chunk647438.useRef(Chunk19780);
  Chunk647438.useEffect(() => {
    Chunk237997.current = Chunk19780
  }, [Chunk19780]);
  let {
    connected: Y,
    friendsTabSection: K,
    homeLink: X,
    isMemberPending: $,
    selectedChannelId: ee,
    selectedGuildId: et
  } = Chunk19780;
  Chunk647438.useEffect(() => {
    if (Chunk630388 && null != ee) {
      let e = (0, Chunk731429.K)(Chunk592125.Z.getChannel(ee), true);
      (0, Chunk367907.yw)(Chunk981631.rMx.CHANNEL_OPENED, Q({}, module, (0, Chunk367907.$H)(ee))), (0, Chunk188471.a)(Chunk981631.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: ee
      }), Chunk237997.current.isTextInVoice && (0, Chunk367907.yw)(Chunk981631.rMx.TEXT_IN_VOICE_OPENED, {
        channel_is_nsfw: Chunk237997.current.isNSFWChannel
      })
    }
  }, [Chunk630388, ee]), Chunk647438.useEffect(() => {
    Chunk630388 && null == et && X === Chunk981631.Z5c.FRIENDS && (0, Chunk176881.Z)({
      tab_opened: Chunk823379
    })
  }, [Chunk630388, Chunk823379, X, et]), Chunk647438.useEffect(() => {
    if (Chunk630388 && null != et) {
      var e, t, n, r;
      let i = (n = Q({}, $ ? {
        is_pending: $,
        preview_enabled: Chunk237997.current.hasPreviewEnabled
      } : {}), r = r = {
        postable_channels: Chunk237997.current.postableChannelCount,
        premium_progress_bar_enabled: null != (t = null == (e = Chunk430824.Z.getGuild(Chunk914010.Z.getGuildId())) ? true : module.premiumProgressBarEnabled) && exports,
        viewing_all_channels: !Chunk9156.ZP.isOptInEnabled(et),
        num_recent_channels: Chunk734307.Z.recentsChannelCount(et)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(require, Object.getOwnPropertyDescriptors(Chunk951288)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(Chunk951288)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), require);
      (0, Chunk367907.yw)(Chunk981631.rMx.GUILD_VIEWED, Chunk647438), (0, Chunk188471.a)(Chunk981631.rMx.GUILD_VIEWED_CLICKSTREAM, {
        guildId: et
      })
    }
  }, [Chunk630388, et, $]);
  let en = Chunk647438.useRef(false);
  return Chunk647438.useEffect(() => {
    Chunk630388 && null == et && X === Chunk981631.Z5c.MESSAGE_REQUESTS && !en.current && (en.current = true, Chunk626135.default.track(Chunk981631.rMx.MESSAGE_REQUESTS_INITIALIZED, {
      num_message_requests: Chunk237997.current.numMessageRequests
    }))
  }, [Chunk630388, et, X]), (0, Chunk951288.jsx)(J, Q({}, Chunk19780))
}