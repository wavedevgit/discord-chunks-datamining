/** Chunk was on 1272 **/
/** chunk id: 145604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => en
}), require("./583741.js"), require("./997841.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
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
  Chunk501640 = require("./501640.js"),
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

function J(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      J(e, t, n[t])
    })
  }
  return e
}
async function ee(e) {
  var t;
  let {
    runningGame: n,
    game: r,
    detectionMethod: i,
    overlayStatus: l,
    overlayMethod: a,
    sharedGuildIds: o,
    voiceChannelId: s,
    voiceChannelType: u,
    voiceChannelBitrate: d,
    voiceChannelGuildId: p
  } = e, f = await (0, j.hj)(n.pid), {
    gameName: h,
    gameId: g,
    exe: m,
    distributor: b
  } = (0, _.G8)(n), E = (0, N.NW)("ChatAutoAnalytics", false), y = l.enabledLegacy || E && l.enabledOOP, v = S.v.legacyEnabled || E && S.v.oopEnabled, I = l.source;
  K.default.track(X.rMx.LAUNCH_GAME, {
    game: h,
    game_id: g,
    verified: null != r && (0, _.vp)(m, null == r ? true : r.executables),
    elevated: n.elevated,
    is_launcher: null != (t = null == n ? true : n.isLauncher) && t,
    game_platform: X.M7m.DESKTOP,
    detection_method: i,
    distributor: b,
    is_overlay_enabled: v,
    is_overlay_game_enabled: y,
    is_overlay_game_source: I,
    fullscreen_type: null != f ? c.Jx[f] : c.Jx.UNKNOWN.toString(),
    overlay_method: T.gl[a],
    activity_status_enabled: Z.G6.getSetting(),
    activity_status_shared_guilds: o,
    current_user_status: V.Z.getStatus(),
    game_detection_enabled: (0, O.ik)(n),
    executable_path: m,
    voice_channel_id: s,
    voice_channel_type: u,
    voice_channel_bitrate: d,
    voice_channel_guild_id: p,
    distributor_game_id: n.sku,
    hidden_by_distributor: n.hidden,
    game_metadata: (0, x.sD)(n)
  }), null != m && O.ZP.addExecutableTrackedByAnalytics(m)
}
class et extends Chunk647438.PureComponent {
  componentDidUpdate(e) {
    var t, n, r, i, l, a;
    let {
      voiceChannelId: o,
      voiceChannelGuildId: c,
      voiceChannelType: u,
      voiceChannelBitrate: p,
      videoEnabled: h,
      isScreenSharing: E,
      runningGame: y,
      runningGamePid: I,
      selectedChannelId: C,
      selectedGuildId: S,
      connected: N
    } = this.props;
    if (e.voiceChannelId !== o && null != e.voiceChannelId) {
      let t = O.ZP.getCurrentGameForAnalytics(),
        n = null != t ? t.name : "",
        r = A.Z.getStageInstanceByChannel(e.voiceChannelId),
        i = v.ZP.getActiveEventByChannel(e.voiceChannelId);
      K.default.track(X.rMx.LEAVE_VOICE_CHANNEL, $({
        channel_id: e.voiceChannelId,
        channel_type: e.voiceChannelType,
        channel_bitrate: e.voiceChannelBitrate,
        guild_id: e.voiceChannelGuildId,
        rtc_connection_id: U.Z.getRTCConnectionId(),
        game_name: n,
        duration: U.Z.getDuration(),
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        media_session_id: U.Z.getMediaSessionId(),
        stage_instance_id: null == r ? true : r.id,
        guild_scheduled_event_id: null == i ? true : i.id
      }, (0, d.kO)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled), U.Z.getVoiceStateStats(), m.Z.getSelectedParticipantStats(e.voiceChannelId)))
    }
    if (e.voiceChannelId !== o && null != o) {
      let e = O.ZP.getCurrentGameForAnalytics(),
        t = null != e ? e.name : "",
        n = A.Z.getStageInstanceByChannel(o),
        r = v.ZP.getActiveEventByChannel(o);
      (0, d.yw)(X.rMx.CHANNEL_OPENED, $({}, (0, d.$H)(o))), (0, f.a)(X.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: o
      });
      let i = null,
        l = Y.default.getFocusedPID();
      null != l && P.default.getOverlayMethod(l) !== T.gl.Disabled && (Y.default.isInstanceLocked() ? i = X.ADE.OVERLAY_LOCKED_ACTIVATED : Y.default.isInstanceLocked() || (i = Y.default.isPinned(X.Odu.TEXT) ? X.ADE.OVERLAY_UNLOCKED_PINNED : X.ADE.OVERLAY_UNLOCKED)), K.default.track(X.rMx.JOIN_VOICE_CHANNEL, $({
        location: i,
        channel_id: o,
        channel_type: u,
        channel_bitrate: p,
        guild_id: c,
        game_name: t,
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        stage_instance_id: null == n ? true : n.id,
        guild_scheduled_event_id: null == r ? true : r.id,
        was_moved: U.Z.getWasMoved(),
        join_voice_id: U.Z.getJoinVoiceId()
      }, (0, d.oG)(c, o), (0, d.kO)(c, o, h)))
    }
    let j = null != y && null != y.distributor && null != y.sku && null != e.runningGame && e.runningGame.distributor === y.distributor && y.sku === e.runningGame.sku && y.name === e.runningGame.name,
      x = null != e.runningGame && null != y && e.runningGame.isLauncher !== y.isLauncher;
    if (e.runningGame !== y && null != y && !y.isLauncher && (!j || x)) {
      let {
        gameId: e
      } = (0, _.G8)(y), a = true !== e ? L.Z.getDetectableGame(e) : null, d = O.ZP.getOverrideForGame(y), f = D.Z.getGuildIds(), h = Z.SE.getSetting(), g = f.filter(e => !h.includes(e)).slice(0, 200), m = null;
      m = null != d ? "custom_override" : null != a ? "verified_game" : "launcher";
      let E = P.default.getTrackedGameByPid(y.pid),
        v = (0, O.b6)(y),
        C = {
          enabledOOP: null != (t = null == E ? true : E.oopEnabled) ? t : v.enabledOOP,
          enabledLegacy: null != (n = null == E ? true : E.legacyEnabled) ? n : v.enabledLegacy,
          overlayMethod: null != (r = null == E ? true : E.overlayMethod) ? r : v.overlayMethod,
          source: null != (i = null == E ? true : E.source) ? i : v.source
        },
        S = null != (l = P.default.getOverlayMethod(y.pid)) ? l : C.overlayMethod;
      if (setTimeout(() => {
          (y.distributor === X.GQo.ROBLOX ? this.debouncedRobloxAnalytics : ee)({
            runningGame: y,
            game: a,
            detectionMethod: m,
            overlayStatus: C,
            overlayMethod: S,
            sharedGuildIds: g,
            voiceChannelId: o,
            voiceChannelType: u,
            voiceChannelBitrate: p,
            voiceChannelGuildId: c
          })
        }, 1e4), null != y.name && null != I && L.Z.shouldReport(y.name)) {
        let e = y.name;
        s.Z.identifyGame(I, e).then(e => s.Z.reportUnverifiedGame(e)).catch(e => new b.Z("AutoAnalytics").error("Cannot identify game", e))
      }
    }
    if ((e.videoEnabled !== h || e.isScreenSharing !== E) && null != o) {
      let e = "none",
        t = [E ? "screen" : null, h ? "camera" : null].filter(Q.lm),
        n = null;
      E ? (e = "screen", n = (0, g.t)()) : h && (e = "camera"), K.default.track(X.rMx.VIDEO_INPUT_TOGGLED, $({
        video_input_type: e,
        video_toggle_source: __OVERLAY__ ? "overlay" : "app",
        enabled_inputs: t,
        preview_enabled: Z.qF.getSetting()
      }, n, this.getGameMetadata(), (0, d.AB)(o)))
    }
    if (N && null != C && (!e.connected || C !== e.selectedChannelId || S !== e.selectedGuildId)) {
      let t = e.selectedChannelId,
        n = w.Z.getChannel(t),
        r = D.Z.getGuild(null == n ? true : n.getGuildId());
      if (null != t && null != n && null != r && r.publicUpdatesChannelId === t) {
        let e = M.Z.getMessages(t),
          i = e.toArray().reverse().find(e => {
            var t;
            return (0, q.yE)(e.flags, X.iLy.IS_CROSSPOST) && (null == (t = e.messageReference) ? true : t.guild_id) === "667560445975986187"
          });
        K.default.track(X.rMx.ACK_COMMUNITY_MESSAGES, $({
          last_message_id: null == i ? true : i.id,
          last_message_reference_message_id: null == i || null == (a = i.messageReference) ? true : a.message_id,
          messages_loaded: e.hasFetched
        }, (0, d.v_)(n), (0, d.hH)(r.id)))
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
    super(...e), J(this, "isMessageRequestsInitialized", false), J(this, "debouncedRobloxAnalytics", a().debounce(ee, 5e3))
  }
}

function en() {
  let [e, t] = (0, Chunk442837.Wu)([Chunk944486.Z], () => [Chunk944486.Z.getVoiceChannelId(), Chunk944486.Z.getChannelId()], []), n = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getChannel(exports), [exports]), l = (0, Chunk442837.e7)([Chunk358221.Z], () => (null == require ? true : require.id) != null && Chunk358221.Z.getChatOpen(require.id), [require]), a = null == require ? true : require.nsfw, s = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getChannel(module), [module]), c = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId(), []), g = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(Chunk593472), [Chunk593472]), b = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser(), []), _ = (0, Chunk442837.e7)([Chunk271383.ZP], () => {
    var e, t;
    return null != Chunk710845 && null != Chunk593472 && null != (t = null == (e = Chunk271383.ZP.getMember(Chunk593472, Chunk710845.id)) ? true : module.isPending) && exports
  }, [Chunk710845, Chunk593472]), v = (0, Chunk442837.e7)([Chunk974042.ZP], () => Chunk974042.ZP.getState().section, []), S = (0, Chunk442837.e7)([Chunk774343.Z], () => Chunk774343.Z.getHomeLink(), []), T = (0, Chunk442837.e7)([Chunk38618.Z], () => Chunk38618.Z.isConnected(), []), [N, P] = (0, Chunk442837.Wu)([Chunk131951.Z], () => [Chunk131951.Z.isVideoEnabled(), Chunk131951.Z.isScreenSharing()], []), j = (0, Chunk442837.e7)([Chunk885110.Z], () => Chunk885110.Z.getPrimaryActivity(), []), x = (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.getCurrentGameForAnalytics(), []), A = (0, Chunk501640.Z)(Chunk593472), Z = (0, Chunk442837.e7)([Chunk355298.Z], () => Chunk355298.Z.getMessageRequestsCount(), []), L = {
    selectedChannelId: exports,
    isNSFWChannel: a,
    selectedGuildId: Chunk593472,
    friendsTabSection: Chunk924301,
    homeLink: Chunk454991,
    connected: Chunk837268,
    videoEnabled: Chunk32300,
    isScreenSharing: Chunk371651,
    voiceChannelId: null == Chunk224706 ? true : Chunk224706.id,
    voiceChannelGuildId: null == Chunk224706 ? true : Chunk224706.getGuildId(),
    voiceChannelType: null == Chunk224706 ? true : Chunk224706.type,
    voiceChannelBitrate: null == Chunk224706 ? true : Chunk224706.bitrate,
    runningGame: Chunk509003,
    runningGamePid: null != Chunk509003 ? Chunk509003.pid : null,
    gamePlatform: (0, Chunk941033.Z)(Chunk829907),
    gameName: null != Chunk829907 ? Chunk829907.name : null,
    gameId: null != Chunk829907 ? Chunk829907.application_id : null,
    gameExeName: null != Chunk509003 ? Chunk509003.exeName : null,
    hasPreviewEnabled: null == Chunk318885 ? true : Chunk318885.features.has(Chunk981631.oNc.PREVIEW_ENABLED),
    isMemberPending: Chunk581567,
    postableChannelCount: Chunk427679,
    isTextInVoice: Chunk392711,
    numMessageRequests: Chunk695346
  }, M = Chunk647438.useRef(Chunk77498);
  Chunk647438.useEffect(() => {
    Chunk375954.current = Chunk77498
  }, [Chunk77498]);
  let {
    connected: U,
    friendsTabSection: Y,
    homeLink: q,
    isMemberPending: Q,
    selectedChannelId: J,
    selectedGuildId: ee
  } = Chunk77498;
  Chunk647438.useEffect(() => {
    if (Chunk19780 && null != J) {
      let e = (0, Chunk731429.K)(Chunk592125.Z.getChannel(J), true);
      (0, Chunk367907.yw)(Chunk981631.rMx.CHANNEL_OPENED, $({}, module, (0, Chunk367907.$H)(J))), (0, Chunk188471.a)(Chunk981631.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: J
      }), Chunk375954.current.isTextInVoice && (0, Chunk367907.yw)(Chunk981631.rMx.TEXT_IN_VOICE_OPENED, {
        channel_is_nsfw: Chunk375954.current.isNSFWChannel
      })
    }
  }, [Chunk19780, J]), Chunk647438.useEffect(() => {
    Chunk19780 && null == ee && Chunk630388 === Chunk981631.Z5c.FRIENDS && (0, Chunk176881.Z)({
      tab_opened: Chunk237997
    })
  }, [Chunk19780, Chunk237997, Chunk630388, ee]), Chunk647438.useEffect(() => {
    if (Chunk19780 && null != ee) {
      var e, t, n, r;
      let i = (n = $({}, Chunk823379 ? {
        is_pending: Chunk823379,
        preview_enabled: Chunk375954.current.hasPreviewEnabled
      } : {}), r = r = {
        postable_channels: Chunk375954.current.postableChannelCount,
        premium_progress_bar_enabled: null != (t = null == (e = Chunk430824.Z.getGuild(Chunk914010.Z.getGuildId())) ? true : module.premiumProgressBarEnabled) && exports,
        viewing_all_channels: !Chunk9156.ZP.isOptInEnabled(ee),
        num_recent_channels: Chunk734307.Z.recentsChannelCount(ee)
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
        guildId: ee
      })
    }
  }, [Chunk19780, ee, Chunk823379]);
  let en = Chunk647438.useRef(false);
  return Chunk647438.useEffect(() => {
    Chunk19780 && null == ee && Chunk630388 === Chunk981631.Z5c.MESSAGE_REQUESTS && !en.current && (en.current = true, Chunk626135.default.track(Chunk981631.rMx.MESSAGE_REQUESTS_INITIALIZED, {
      num_message_requests: Chunk375954.current.numMessageRequests
    }))
  }, [Chunk19780, ee, Chunk630388]), (0, Chunk951288.jsx)(et, $({}, Chunk77498))
}