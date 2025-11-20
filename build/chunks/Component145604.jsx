/** Chunk was on 1272 **/
/** chunk id: 145604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => er
}), require("./583741.js"), require("./997841.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk224706 = require("./224706.js"),
  Chunk593472 = require("./593472.js"),
  Chunk579806 = require("./579806.js"),
  Chunk603113 = require("./603113.js"),
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
  Chunk823379 = require("./823379.js"),
  Chunk981631 = require("./981631.js");

function $(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      $(e, t, n[t])
    })
  }
  return e
}
async function et(e) {
  var t, n, r, i, l;
  let {
    runningGame: a,
    game: s,
    detectionMethod: o,
    overlayStatus: c,
    overlayMethod: p,
    sharedGuildIds: f,
    voiceChannelId: h,
    voiceChannelType: g,
    voiceChannelBitrate: m,
    voiceChannelGuildId: _
  } = e, b = await (0, A.hj)(a.pid), {
    gameName: E,
    gameId: v,
    exe: I,
    distributor: C,
    rawExePath: S
  } = (0, O.G8)(a), T = (0, P.NW)("ChatAutoAnalytics", false), x = c.enabledLegacy || T && c.enabledOOP, w = N.v.legacyEnabled || T && N.v.oopEnabled, R = c.source;
  Q.default.track(X.rMx.LAUNCH_GAME, {
    game: E,
    game_id: v,
    verified: null != s && (0, O.vp)(S, null == s ? true : s.executables),
    elevated: a.elevated,
    is_launcher: null != (r = null == a ? true : a.isLauncher) && r,
    game_platform: X.M7m.DESKTOP,
    detection_method: o,
    distributor: C,
    is_overlay_enabled: w,
    is_overlay_game_enabled: x,
    is_overlay_game_source: R,
    fullscreen_type: null != b ? u.Jx[b] : u.Jx.UNKNOWN.toString(),
    hardware_display_count: null != (i = await (null === d.Z || true === d.Z || null == (n = d.Z.hardware) || null == (t = n.getDisplayCount) ? true : t.call(n))) ? i : null,
    overlay_method: null != (l = j.gl[p]) ? l : __OVERLAY__ ? j.gl[j.gl.Hook] : null,
    activity_status_enabled: L.G6.getSetting(),
    activity_status_shared_guilds: f,
    current_user_status: F.Z.getStatus(),
    game_detection_enabled: (0, y.ik)(a),
    executable_path: I,
    voice_channel_id: h,
    voice_channel_type: g,
    voice_channel_bitrate: m,
    voice_channel_guild_id: _,
    distributor_game_id: a.sku,
    hidden_by_distributor: a.hidden,
    game_metadata: (0, Z.sD)(a)
  }), null != I && y.ZP.addExecutableTrackedByAnalytics(I)
}
class en extends Chunk473749.PureComponent {
  componentDidUpdate(e) {
    var t, n, r, i, l, a;
    let {
      voiceChannelId: o,
      voiceChannelGuildId: u,
      voiceChannelType: d,
      voiceChannelBitrate: p,
      videoEnabled: h,
      isScreenSharing: m,
      runningGame: v,
      runningGamePid: I,
      selectedChannelId: S,
      selectedGuildId: T,
      connected: N
    } = this.props;
    if (e.voiceChannelId !== o && null != e.voiceChannelId) {
      let t = y.ZP.getCurrentGameForAnalytics(),
        n = null != t ? t.name : "",
        r = w.Z.getStageInstanceByChannel(e.voiceChannelId),
        i = C.ZP.getActiveEventByChannel(e.voiceChannelId);
      Q.default.track(X.rMx.LEAVE_VOICE_CHANNEL, ee({
        channel_id: e.voiceChannelId,
        channel_type: e.voiceChannelType,
        channel_bitrate: e.voiceChannelBitrate,
        guild_id: e.voiceChannelGuildId,
        rtc_connection_id: B.Z.getRTCConnectionId(),
        game_name: n,
        duration: B.Z.getDuration(),
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        media_session_id: B.Z.getMediaSessionId(),
        stage_instance_id: null == r ? true : r.id,
        guild_scheduled_event_id: null == i ? true : i.id
      }, (0, f.kO)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled), B.Z.getVoiceStateStats(), b.Z.getSelectedParticipantStats(e.voiceChannelId)))
    }
    if (e.voiceChannelId !== o && null != o) {
      let e = y.ZP.getCurrentGameForAnalytics(),
        t = null != e ? e.name : "",
        n = w.Z.getStageInstanceByChannel(o),
        r = C.ZP.getActiveEventByChannel(o);
      (0, f.yw)(X.rMx.CHANNEL_OPENED, ee({}, (0, f.$H)(o))), (0, g.a)(X.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: o
      });
      let i = null,
        l = K.default.getFocusedPID();
      null != l && x.default.getOverlayMethod(l) !== j.gl.Disabled && (K.default.isInstanceLocked() ? i = X.ADE.OVERLAY_LOCKED_ACTIVATED : K.default.isInstanceLocked() || (i = K.default.isPinned(X.Odu.TEXT) ? X.ADE.OVERLAY_UNLOCKED_PINNED : X.ADE.OVERLAY_UNLOCKED)), Q.default.track(X.rMx.JOIN_VOICE_CHANNEL, ee({
        location: i,
        channel_id: o,
        channel_type: d,
        channel_bitrate: p,
        guild_id: u,
        game_name: t,
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        stage_instance_id: null == n ? true : n.id,
        guild_scheduled_event_id: null == r ? true : r.id,
        was_moved: B.Z.getWasMoved(),
        join_voice_id: B.Z.getJoinVoiceId()
      }, (0, f.oG)(u, o), (0, f.kO)(u, o, h)))
    }
    let P = null != v && null != v.distributor && null != v.sku && null != e.runningGame && e.runningGame.distributor === v.distributor && v.sku === e.runningGame.sku && v.name === e.runningGame.name,
      A = null != e.runningGame && null != v && e.runningGame.isLauncher !== v.isLauncher;
    if (e.runningGame !== v && null != v && !v.isLauncher && (!P || A)) {
      let {
        gameId: e
      } = (0, O.G8)(v), a = true !== e ? D.Z.getDetectableGame(e) : null, s = y.ZP.getOverrideForGame(v), f = k.Z.getGuildIds(), h = L.SE.getSetting(), g = f.filter(e => !h.includes(e)).slice(0, 200), m = null;
      m = null != s ? "custom_override" : null != a ? "verified_game" : "launcher";
      let _ = x.default.getTrackedGameByPid(v.pid),
        b = (0, y.b6)(v),
        C = {
          enabledOOP: null != (t = null == _ ? true : _.oopEnabled) ? t : b.enabledOOP,
          enabledLegacy: null != (n = null == _ ? true : _.legacyEnabled) ? n : b.enabledLegacy,
          overlayMethod: null != (r = null == _ ? true : _.overlayMethod) ? r : b.overlayMethod,
          source: null != (i = null == _ ? true : _.source) ? i : b.source,
          reason: "ChatAutoAnalytics"
        },
        S = null != (l = x.default.getOverlayMethod(v.pid)) ? l : C.overlayMethod;
      if (setTimeout(() => {
          (v.distributor === X.GQo.ROBLOX ? this.debouncedRobloxAnalytics : et)({
            runningGame: v,
            game: a,
            detectionMethod: m,
            overlayStatus: C,
            overlayMethod: S,
            sharedGuildIds: g,
            voiceChannelId: o,
            voiceChannelType: d,
            voiceChannelBitrate: p,
            voiceChannelGuildId: u
          })
        }, 1e4), null != v.name && null != I && D.Z.shouldReport(v.name)) {
        let e = v.name;
        c.Z.identifyGame(I, e).then(e => c.Z.reportUnverifiedGame(e)).catch(e => new E.Z("AutoAnalytics").error("Cannot identify game", e))
      }
    }
    if ((e.videoEnabled !== h || e.isScreenSharing !== m) && null != o) {
      let e = "none",
        t = [m ? "screen" : null, h ? "camera" : null].filter(J.lm),
        n = null;
      m ? (e = "screen", n = (0, _.t)()) : h && (e = "camera"), Q.default.track(X.rMx.VIDEO_INPUT_TOGGLED, ee({
        video_input_type: e,
        video_toggle_source: __OVERLAY__ ? "overlay" : "app",
        enabled_inputs: t,
        preview_enabled: L.qF.getSetting()
      }, n, this.getGameMetadata(), (0, f.AB)(o)))
    }
    if (N && null != S && (!e.connected || S !== e.selectedChannelId || T !== e.selectedGuildId)) {
      let t = e.selectedChannelId,
        n = R.Z.getChannel(t),
        r = k.Z.getGuild(null == n ? true : n.getGuildId());
      if (null != t && null != n && null != r && r.publicUpdatesChannelId === t) {
        let e = G.Z.getMessages(t),
          i = e.toArray().reverse().find(e => {
            var t;
            return (0, s.yE)(e.flags, X.iLy.IS_CROSSPOST) && (null == (t = e.messageReference) ? true : t.guild_id) === "667560445975986187"
          });
        Q.default.track(X.rMx.ACK_COMMUNITY_MESSAGES, ee({
          last_message_id: null == i ? true : i.id,
          last_message_reference_message_id: null == i || null == (a = i.messageReference) ? true : a.message_id,
          messages_loaded: e.hasFetched
        }, (0, f.v_)(n), (0, f.hH)(r.id)))
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
    super(...e), $(this, "isMessageRequestsInitialized", false), $(this, "debouncedRobloxAnalytics", a().debounce(et, 5e3))
  }
}

function er() {
  let [e, t] = (0, Chunk442837.Wu)([Chunk944486.Z], () => [Chunk944486.Z.getVoiceChannelId(), Chunk944486.Z.getChannelId()], []), n = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getChannel(exports), [exports]), l = (0, Chunk442837.e7)([Chunk358221.Z], () => (null == require ? true : require.id) != null && Chunk358221.Z.getChatOpen(require.id), [require]), a = null == require ? true : require.nsfw, s = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getChannel(module), [module]), c = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId(), []), u = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(Chunk224706), [Chunk224706]), d = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser(), []), _ = (0, Chunk442837.e7)([Chunk271383.ZP], () => {
    var e, t;
    return null != Chunk579806 && null != Chunk224706 && null != (t = null == (e = Chunk271383.ZP.getMember(Chunk224706, Chunk579806.id)) ? true : module.isPending) && exports
  }, [Chunk579806, Chunk224706]), E = (0, Chunk442837.e7)([Chunk974042.ZP], () => Chunk974042.ZP.getState().section, []), O = (0, Chunk442837.e7)([Chunk774343.Z], () => Chunk774343.Z.getHomeLink(), []), C = (0, Chunk442837.e7)([Chunk38618.Z], () => Chunk38618.Z.isConnected(), []), [N, j] = (0, Chunk442837.Wu)([Chunk131951.Z], () => [Chunk131951.Z.isVideoEnabled(), Chunk131951.Z.isScreenSharing()], []), P = (0, Chunk442837.e7)([Chunk885110.Z], () => Chunk885110.Z.getPrimaryActivity(), []), x = (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.getCurrentGameForAnalytics(), []), A = (0, Chunk489745.Z)(Chunk224706), Z = (0, Chunk442837.e7)([Chunk355298.Z], () => Chunk355298.Z.getMessageRequestsCount(), []), w = {
    selectedChannelId: exports,
    isNSFWChannel: a,
    selectedGuildId: Chunk224706,
    friendsTabSection: Chunk710845,
    homeLink: Chunk581567,
    connected: Chunk924301,
    videoEnabled: Chunk454991,
    isScreenSharing: Chunk837268,
    voiceChannelId: null == Chunk95015 ? true : Chunk95015.id,
    voiceChannelGuildId: null == Chunk95015 ? true : Chunk95015.getGuildId(),
    voiceChannelType: null == Chunk95015 ? true : Chunk95015.type,
    voiceChannelBitrate: null == Chunk95015 ? true : Chunk95015.bitrate,
    runningGame: Chunk371651,
    runningGamePid: null != Chunk371651 ? Chunk371651.pid : null,
    gamePlatform: (0, Chunk603113.Z)(Chunk32300),
    gameName: null != Chunk32300 ? Chunk32300.name : null,
    gameId: null != Chunk32300 ? Chunk32300.application_id : null,
    gameExeName: null != Chunk371651 ? Chunk371651.exeName : null,
    hasPreviewEnabled: null == Chunk593472 ? true : Chunk593472.features.has(Chunk981631.GuildFeatures.PREVIEW_ENABLED),
    isMemberPending: Chunk318885,
    postableChannelCount: Chunk829907,
    isTextInVoice: Chunk392711,
    numMessageRequests: Chunk509003
  }, L = Chunk473749.useRef(Chunk427679);
  Chunk473749.useEffect(() => {
    Chunk695346.current = Chunk427679
  }, [Chunk427679]);
  let {
    connected: D,
    friendsTabSection: G,
    homeLink: B,
    isMemberPending: K,
    selectedChannelId: J,
    selectedGuildId: $
  } = Chunk427679;
  Chunk473749.useEffect(() => {
    if (Chunk77498 && null != Chunk823379) {
      let e = (0, Chunk731429.K)(Chunk592125.Z.getChannel(Chunk823379), true);
      (0, Chunk367907.yw)(Chunk981631.rMx.CHANNEL_OPENED, ee({}, module, (0, Chunk367907.$H)(Chunk823379))), (0, Chunk188471.a)(Chunk981631.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: Chunk823379
      }), Chunk695346.current.isTextInVoice && (0, Chunk367907.yw)(Chunk981631.rMx.TEXT_IN_VOICE_OPENED, {
        channel_is_nsfw: Chunk695346.current.isNSFWChannel
      })
    }
  }, [Chunk77498, Chunk823379]), Chunk473749.useEffect(() => {
    Chunk77498 && null == $ && (Chunk19780 === Chunk981631.Z5c.FRIENDS || Chunk19780 === Chunk981631.Z5c.ME_ACTIVITY) && (0, Chunk176881.Z)({
      tab_opened: Chunk375954
    })
  }, [Chunk77498, Chunk375954, Chunk19780, $]), Chunk473749.useEffect(() => {
    if (Chunk77498 && null != $) {
      var e, t, n, r;
      let i = (n = ee({}, Chunk237997 ? {
        is_pending: Chunk237997,
        preview_enabled: Chunk695346.current.hasPreviewEnabled
      } : {}), r = r = {
        postable_channels: Chunk695346.current.postableChannelCount,
        premium_progress_bar_enabled: null != (t = null == (e = Chunk430824.Z.getGuild(Chunk914010.Z.getGuildId())) ? true : module.premiumProgressBarEnabled) && exports,
        viewing_all_channels: !Chunk9156.ZP.isOptInEnabled($),
        num_recent_channels: Chunk734307.Z.recentsChannelCount($)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(require, Object.getOwnPropertyDescriptors(Chunk54381)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(Chunk54381)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), require);
      (0, Chunk367907.yw)(Chunk981631.rMx.GUILD_VIEWED, Chunk473749), (0, Chunk188471.a)(Chunk981631.rMx.GUILD_VIEWED_CLICKSTREAM, {
        guildId: $
      })
    }
  }, [Chunk77498, $, Chunk237997]);
  let et = Chunk473749.useRef(false);
  return Chunk473749.useEffect(() => {
    Chunk77498 && null == $ && Chunk19780 === Chunk981631.Z5c.MESSAGE_REQUESTS && !et.current && (et.current = true, Chunk626135.default.track(Chunk981631.rMx.MESSAGE_REQUESTS_INITIALIZED, {
      num_message_requests: Chunk695346.current.numMessageRequests
    }))
  }, [Chunk77498, $, Chunk19780]), (0, Chunk54381.jsx)(en, ee({}, Chunk427679))
}