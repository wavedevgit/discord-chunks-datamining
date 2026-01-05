/** Chunk was on 1272 **/
/** chunk id: 145604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ei
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
  Chunk569675 = require("./569675.js"),
  Chunk594190 = require("./594190.js"),
  Chunk38618 = require("./38618.js"),
  Chunk501640 = require("./501640.js"),
  Chunk924301 = require("./924301.js"),
  Chunk734307 = require("./734307.js"),
  Chunk355298 = require("./355298.js"),
  Chunk454991 = require("./454991.js"),
  Chunk837268 = require("./837268.js"),
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
  Chunk981631 = require("./981631.js"),
  Chunk674563 = require("./674563.js");

function ee(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ee(e, t, n[t])
    })
  }
  return e
}
async function en(e) {
  var t, n, r, i, l;
  let {
    runningGame: a,
    game: o,
    detectionMethod: s,
    overlayStatus: c,
    overlayMethod: p,
    sharedGuildIds: f,
    voiceChannelId: g,
    voiceChannelType: h,
    voiceChannelBitrate: m,
    voiceChannelGuildId: b
  } = e, _ = await (0, A.hj)(a.pid), {
    gameName: E,
    gameId: v,
    exe: I,
    distributor: C,
    rawExePath: S
  } = (0, O.G8)(a), T = c.enabledLegacy || c.enabledOOP, N = j.v.legacyEnabled || j.v.oopEnabled, x = c.source;
  Q.default.track(X.rMx.LAUNCH_GAME, {
    game: E,
    game_id: v,
    verified: null != o && (0, O.vp)(S, null == o ? true : o.executables),
    elevated: a.elevated,
    is_launcher: null != (r = null == a ? true : a.isLauncher) && r,
    game_platform: X.M7m.DESKTOP,
    detection_method: s,
    distributor: C,
    is_overlay_enabled: N,
    is_overlay_game_enabled: T,
    is_overlay_game_source: x,
    fullscreen_type: null != _ ? u.Jx[_] : u.Jx.UNKNOWN.toString(),
    hardware_display_count: null != (i = await (null === d.Z || true === d.Z || null == (n = d.Z.hardware) || null == (t = n.getDisplayCount) ? true : t.call(n))) ? i : null,
    overlay_method: null != (l = P.gl[p]) ? l : __OVERLAY__ ? P.gl[P.gl.Hook] : null,
    activity_status_enabled: L.G6.getSetting(),
    activity_status_shared_guilds: f,
    current_user_status: F.Z.getStatus(),
    game_detection_enabled: (0, y.ik)(a),
    executable_path: I,
    voice_channel_id: g,
    voice_channel_type: h,
    voice_channel_bitrate: m,
    voice_channel_guild_id: b,
    distributor_game_id: a.sku,
    hidden_by_distributor: a.hidden,
    game_metadata: (0, Z.sD)(a)
  }), null != I && y.ZP.addExecutableTrackedByAnalytics(I)
}
class er extends Chunk473749.PureComponent {
  componentDidUpdate(e) {
    var t, n, r, i, l, a, s, u, d, p, g;
    let {
      voiceChannelId: m,
      voiceChannelGuildId: I,
      voiceChannelType: C,
      voiceChannelBitrate: T,
      videoEnabled: N,
      isScreenSharing: j,
      runningGame: A,
      runningGamePid: Z,
      runningNonGame: M,
      selectedChannelId: U,
      selectedGuildId: H,
      connected: V
    } = this.props;
    if (e.voiceChannelId !== m && null != e.voiceChannelId) {
      let t = y.ZP.getCurrentGameForAnalytics(),
        n = null != t ? t.name : "",
        r = w.Z.getStageInstanceByChannel(e.voiceChannelId),
        i = S.ZP.getActiveEventByChannel(e.voiceChannelId),
        a = B.Z.getLastRTCConnectionState();
      (null == a ? true : a.channelId) !== e.voiceChannelId && (a = null), Q.default.track(X.rMx.LEAVE_VOICE_CHANNEL, et({
        channel_id: e.voiceChannelId,
        channel_type: e.voiceChannelType,
        channel_bitrate: e.voiceChannelBitrate,
        guild_id: e.voiceChannelGuildId,
        rtc_connection_id: null == a ? true : a.rtcConnectionId,
        game_name: n,
        duration: null == a ? true : a.duration,
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        media_session_id: null == a ? true : a.mediaSessionId,
        stage_instance_id: null == r ? true : r.id,
        guild_scheduled_event_id: null == i ? true : i.id
      }, (0, f.kO)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled), null == a || null == (l = a.voiceStateAnalytics) ? true : l.getStats(), _.Z.getSelectedParticipantStats(e.voiceChannelId)))
    }
    if (e.voiceChannelId !== m && null != m) {
      let e = y.ZP.getCurrentGameForAnalytics(),
        t = null != e ? e.name : "",
        n = w.Z.getStageInstanceByChannel(m),
        r = S.ZP.getActiveEventByChannel(m);
      (0, f.yw)(X.rMx.CHANNEL_OPENED, et({}, (0, f.$H)(m))), (0, h.a)(X.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: m
      });
      let i = null,
        l = K.default.getFocusedPID();
      null != l && x.default.getOverlayMethod(l) !== P.gl.Disabled && (K.default.isInstanceLocked() ? i = X.ADE.OVERLAY_LOCKED_ACTIVATED : K.default.isInstanceLocked() || (i = K.default.isPinned(X.Odu.TEXT) ? X.ADE.OVERLAY_UNLOCKED_PINNED : X.ADE.OVERLAY_UNLOCKED)), Q.default.track(X.rMx.JOIN_VOICE_CHANNEL, et({
        location: i,
        channel_id: m,
        channel_type: C,
        channel_bitrate: T,
        guild_id: I,
        game_name: t,
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        stage_instance_id: null == n ? true : n.id,
        guild_scheduled_event_id: null == r ? true : r.id,
        was_moved: B.Z.getWasMoved(),
        join_voice_id: B.Z.getJoinVoiceId()
      }, (0, f.oG)(I, m), (0, f.kO)(I, m, N)))
    }
    let z = (null == A ? true : A.distributor) === (null == (t = e.runningGame) ? true : t.distributor) && (null == A ? true : A.sku) === (null == (n = e.runningGame) ? true : n.sku) && (null == A ? true : A.name) === (null == (r = e.runningGame) ? true : r.name),
      Y = null != e.runningGame && null != A && e.runningGame.isLauncher !== A.isLauncher;
    if (e.runningGame !== A && null != A && !A.isLauncher && (!z || Y)) {
      let {
        gameId: e
      } = (0, O.G8)(A), t = true !== e ? D.Z.getDetectableGame(e) : null, n = y.ZP.getOverrideForGame(A), r = k.Z.getGuildIds(), i = L.SE.getSetting(), l = r.filter(e => !i.includes(e)).slice(0, 200), o = null;
      o = null != n ? "custom_override" : null != t ? "verified_game" : "launcher";
      let f = x.default.getTrackedGameByPid(A.pid),
        g = (0, y.b6)(A),
        h = {
          enabledOOP: null != (a = null == f ? true : f.oopEnabled) ? a : g.enabledOOP,
          enabledLegacy: null != (s = null == f ? true : f.legacyEnabled) ? s : g.enabledLegacy,
          overlayMethod: null != (u = null == f ? true : f.overlayMethod) ? u : g.overlayMethod,
          source: null != (d = null == f ? true : f.source) ? d : g.source,
          reason: "ChatAutoAnalytics"
        },
        b = null != (p = x.default.getOverlayMethod(A.pid)) ? p : h.overlayMethod;
      if (setTimeout(() => {
          (A.distributor === X.GQo.ROBLOX ? this.debouncedRobloxAnalytics : en)({
            runningGame: A,
            game: t,
            detectionMethod: o,
            overlayStatus: h,
            overlayMethod: b,
            sharedGuildIds: l,
            voiceChannelId: m,
            voiceChannelType: C,
            voiceChannelBitrate: T,
            voiceChannelGuildId: I
          })
        }, 1e4), null != A.name && null != Z && D.Z.shouldReport(A.name)) {
        let e = A.name;
        c.Z.identifyGame(Z, e).then(e => c.Z.reportUnverifiedGame(e)).catch(e => new E.Z("AutoAnalytics").error("Cannot identify game", e))
      }
    }
    if (e.runningNonGame !== M && (null == M ? true : M.id) != null && (null == (i = e.runningNonGame) ? true : i.id) !== M.id) {
      let e = v.Z.getById(M.id);
      null != e && Q.default.track(X.rMx.LAUNCH_NON_GAME_APPLICATION, {
        name: e.name,
        application_id: e.id,
        application_type: $.wW.NON_GAME_DETECTABLE,
        elevated: M.elevated,
        game_platform: X.M7m.DESKTOP,
        distributor: M.distributor,
        detection_method: "verified_non_game_application",
        current_user_status: F.Z.getStatus(),
        executable_path: (0, O.N6)(M.exePath),
        voice_channel_id: m,
        voice_channel_type: C,
        voice_channel_bitrate: T,
        voice_channel_guild_id: I
      })
    }
    if ((e.videoEnabled !== N || e.isScreenSharing !== j) && null != m) {
      let e = "none",
        t = [j ? "screen" : null, N ? "camera" : null].filter(J.lm),
        n = null;
      j ? (e = "screen", n = (0, b.t)()) : N && (e = "camera"), Q.default.track(X.rMx.VIDEO_INPUT_TOGGLED, et({
        video_input_type: e,
        video_toggle_source: __OVERLAY__ ? "overlay" : "app",
        enabled_inputs: t,
        preview_enabled: L.qF.getSetting()
      }, n, this.getGameMetadata(), (0, f.AB)(m)))
    }
    if (V && null != U && (!e.connected || U !== e.selectedChannelId || H !== e.selectedGuildId)) {
      let t = e.selectedChannelId,
        n = R.Z.getChannel(t),
        r = k.Z.getGuild(null == n ? true : n.getGuildId());
      if (null != t && null != n && null != r && r.publicUpdatesChannelId === t) {
        let e = G.Z.getMessages(t),
          i = e.toArray().reverse().find(e => {
            var t;
            return (0, o.yE)(e.flags, X.iLy.IS_CROSSPOST) && (null == (t = e.messageReference) ? true : t.guild_id) === "667560445975986187"
          });
        Q.default.track(X.rMx.ACK_COMMUNITY_MESSAGES, et({
          last_message_id: null == i ? true : i.id,
          last_message_reference_message_id: null == i || null == (g = i.messageReference) ? true : g.message_id,
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
    super(...e), ee(this, "isMessageRequestsInitialized", false), ee(this, "debouncedRobloxAnalytics", a().debounce(en, 5e3))
  }
}

function ei() {
  let [e, t] = (0, Chunk442837.Wu)([Chunk944486.Z], () => [Chunk944486.Z.getVoiceChannelId(), Chunk944486.Z.getChannelId()], []), n = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getChannel(exports), [exports]), l = (0, Chunk442837.e7)([Chunk358221.Z], () => (null == require ? true : require.id) != null && Chunk358221.Z.getChatOpen(require.id), [require]), a = null == require ? true : require.nsfw, o = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getChannel(module), [module]), c = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId(), []), u = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(Chunk224706), [Chunk224706]), d = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser(), []), b = (0, Chunk442837.e7)([Chunk271383.ZP], () => {
    var e, t;
    return null != Chunk579806 && null != Chunk224706 && null != (t = null == (e = Chunk271383.ZP.getMember(Chunk224706, Chunk579806.id)) ? true : module.isPending) && exports
  }, [Chunk579806, Chunk224706]), E = (0, Chunk442837.e7)([Chunk974042.ZP], () => Chunk974042.ZP.getState().section, []), O = (0, Chunk442837.e7)([Chunk774343.Z], () => Chunk774343.Z.getHomeLink(), []), v = (0, Chunk442837.e7)([Chunk38618.Z], () => Chunk38618.Z.isConnected(), []), [S, j] = (0, Chunk442837.Wu)([Chunk131951.Z], () => [Chunk131951.Z.isVideoEnabled(), Chunk131951.Z.isScreenSharing()], []), P = (0, Chunk442837.e7)([Chunk885110.Z], () => Chunk885110.Z.getPrimaryActivity(), []), {
    currentGame: x,
    currentNonGame: A
  } = (0, Chunk442837.cj)([Chunk594190.ZP], () => ({
    currentGame: Chunk594190.ZP.getCurrentGameForAnalytics(),
    currentNonGame: Chunk594190.ZP.getCurrentNonGameForAnalytics()
  }), []), Z = (0, Chunk501640.Z)(Chunk224706), w = (0, Chunk442837.e7)([Chunk355298.Z], () => Chunk355298.Z.getMessageRequestsCount(), []), L = {
    selectedChannelId: exports,
    isNSFWChannel: a,
    selectedGuildId: Chunk224706,
    friendsTabSection: Chunk710845,
    homeLink: Chunk581567,
    connected: Chunk569675,
    videoEnabled: Chunk924301,
    isScreenSharing: Chunk454991,
    voiceChannelId: null == Chunk95015 ? true : Chunk95015.id,
    voiceChannelGuildId: null == Chunk95015 ? true : Chunk95015.getGuildId(),
    voiceChannelType: null == Chunk95015 ? true : Chunk95015.type,
    voiceChannelBitrate: null == Chunk95015 ? true : Chunk95015.bitrate,
    runningGame: Chunk371651,
    runningGamePid: null != Chunk371651 ? Chunk371651.pid : null,
    runningNonGame: Chunk829907,
    gamePlatform: (0, Chunk603113.Z)(Chunk837268),
    gameName: null != Chunk837268 ? Chunk837268.name : null,
    gameId: null != Chunk837268 ? Chunk837268.application_id : null,
    gameExeName: null != Chunk371651 ? Chunk371651.exeName : null,
    hasPreviewEnabled: null == Chunk593472 ? true : Chunk593472.features.has(Chunk981631.GuildFeatures.PREVIEW_ENABLED),
    isMemberPending: Chunk318885,
    postableChannelCount: Chunk509003,
    isTextInVoice: Chunk392711,
    numMessageRequests: Chunk427679
  }, D = Chunk473749.useRef(Chunk695346);
  Chunk473749.useEffect(() => {
    Chunk77498.current = Chunk695346
  }, [Chunk695346]);
  let {
    connected: G,
    friendsTabSection: B,
    homeLink: K,
    isMemberPending: J,
    selectedChannelId: $,
    selectedGuildId: ee
  } = Chunk695346;
  Chunk473749.useEffect(() => {
    if (Chunk375954 && null != Chunk674563) {
      let e = (0, Chunk731429.K)(Chunk592125.Z.getChannel(Chunk674563), true);
      (0, Chunk367907.yw)(Chunk981631.rMx.CHANNEL_OPENED, et({}, module, (0, Chunk367907.$H)(Chunk674563))), (0, Chunk188471.a)(Chunk981631.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: Chunk674563
      }), Chunk77498.current.isTextInVoice && (0, Chunk367907.yw)(Chunk981631.rMx.TEXT_IN_VOICE_OPENED, {
        channel_is_nsfw: Chunk77498.current.isNSFWChannel
      })
    }
  }, [Chunk375954, Chunk674563]), Chunk473749.useEffect(() => {
    Chunk375954 && null == ee && Chunk237997 === Chunk981631.Z5c.FRIENDS && (0, Chunk176881.Z)({
      tab_opened: Chunk19780
    })
  }, [Chunk375954, Chunk19780, Chunk237997, ee]), Chunk473749.useEffect(() => {
    if (Chunk375954 && null != ee) {
      var e, t, n, r;
      let i = (n = et({}, Chunk823379 ? {
        is_pending: Chunk823379,
        preview_enabled: Chunk77498.current.hasPreviewEnabled
      } : {}), r = r = {
        postable_channels: Chunk77498.current.postableChannelCount,
        premium_progress_bar_enabled: null != (t = null == (e = Chunk430824.Z.getGuild(Chunk914010.Z.getGuildId())) ? true : module.premiumProgressBarEnabled) && exports,
        viewing_all_channels: !Chunk9156.ZP.isOptInEnabled(ee),
        num_recent_channels: Chunk734307.Z.recentsChannelCount(ee)
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
        guildId: ee
      })
    }
  }, [Chunk375954, ee, Chunk823379]);
  let en = Chunk473749.useRef(false);
  return Chunk473749.useEffect(() => {
    Chunk375954 && null == ee && Chunk237997 === Chunk981631.Z5c.MESSAGE_REQUESTS && !en.current && (en.current = true, Chunk626135.default.track(Chunk981631.rMx.MESSAGE_REQUESTS_INITIALIZED, {
      num_message_requests: Chunk77498.current.numMessageRequests
    }))
  }, [Chunk375954, ee, Chunk237997]), (0, Chunk54381.jsx)(er, et({}, Chunk695346))
}