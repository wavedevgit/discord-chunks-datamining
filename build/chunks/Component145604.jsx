/** Chunk was on 1272 **/
/** chunk id: 145604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => en
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
  Chunk981631 = require("./981631.js");

function X(e, t, n) {
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
      X(e, t, n[t])
    })
  }
  return e
}
async function ee(e) {
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
  } = e, _ = await (0, x.hj)(a.pid), {
    gameName: E,
    gameId: y,
    exe: I,
    distributor: C,
    rawExePath: S
  } = (0, O.G8)(a), T = c.enabledLegacy || c.enabledOOP, P = N.v.legacyEnabled || N.v.oopEnabled, Z = c.source;
  K.default.track(J.rMx.LAUNCH_GAME, {
    game: E,
    game_id: y,
    verified: null != o && (0, O.vp)(S, null == o ? true : o.executables),
    elevated: a.elevated,
    is_launcher: null != (r = null == a ? true : a.isLauncher) && r,
    game_platform: J.M7m.DESKTOP,
    detection_method: s,
    distributor: C,
    is_overlay_enabled: P,
    is_overlay_game_enabled: T,
    is_overlay_game_source: Z,
    fullscreen_type: null != _ ? u.Jx[_] : u.Jx.UNKNOWN.toString(),
    hardware_display_count: null != (i = await (null === d.Z || true === d.Z || null == (n = d.Z.hardware) || null == (t = n.getDisplayCount) ? true : t.call(n))) ? i : null,
    overlay_method: null != (l = j.gl[p]) ? l : __OVERLAY__ ? j.gl[j.gl.Hook] : null,
    activity_status_enabled: w.G6.getSetting(),
    activity_status_shared_guilds: f,
    current_user_status: V.Z.getStatus(),
    game_detection_enabled: (0, v.ik)(a),
    executable_path: I,
    voice_channel_id: g,
    voice_channel_type: h,
    voice_channel_bitrate: m,
    voice_channel_guild_id: b,
    distributor_game_id: a.sku,
    hidden_by_distributor: a.hidden,
    game_metadata: (0, A.sD)(a)
  }), null != I && v.ZP.addExecutableTrackedByAnalytics(I)
}
class et extends Chunk473749.PureComponent {
  componentDidUpdate(e) {
    var t, n, r, i, l, a, s;
    let {
      voiceChannelId: u,
      voiceChannelGuildId: d,
      voiceChannelType: p,
      voiceChannelBitrate: g,
      videoEnabled: m,
      isScreenSharing: y,
      runningGame: I,
      runningGamePid: S,
      selectedChannelId: T,
      selectedGuildId: N,
      connected: x
    } = this.props;
    if (e.voiceChannelId !== u && null != e.voiceChannelId) {
      let n = v.ZP.getCurrentGameForAnalytics(),
        r = null != n ? n.name : "",
        i = Z.Z.getStageInstanceByChannel(e.voiceChannelId),
        l = C.ZP.getActiveEventByChannel(e.voiceChannelId),
        a = G.Z.getLastRTCConnectionState();
      (null == a ? true : a.channelId) !== e.voiceChannelId && (a = null), K.default.track(J.rMx.LEAVE_VOICE_CHANNEL, $({
        channel_id: e.voiceChannelId,
        channel_type: e.voiceChannelType,
        channel_bitrate: e.voiceChannelBitrate,
        guild_id: e.voiceChannelGuildId,
        rtc_connection_id: null == a ? true : a.rtcConnectionId,
        game_name: r,
        duration: null == a ? true : a.duration,
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        media_session_id: null == a ? true : a.mediaSessionId,
        stage_instance_id: null == i ? true : i.id,
        guild_scheduled_event_id: null == l ? true : l.id
      }, (0, f.kO)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled), null == a || null == (t = a.voiceStateAnalytics) ? true : t.getStats(), _.Z.getSelectedParticipantStats(e.voiceChannelId)))
    }
    if (e.voiceChannelId !== u && null != u) {
      let e = v.ZP.getCurrentGameForAnalytics(),
        t = null != e ? e.name : "",
        n = Z.Z.getStageInstanceByChannel(u),
        r = C.ZP.getActiveEventByChannel(u);
      (0, f.yw)(J.rMx.CHANNEL_OPENED, $({}, (0, f.$H)(u))), (0, h.a)(J.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: u
      });
      let i = null,
        l = q.default.getFocusedPID();
      null != l && P.default.getOverlayMethod(l) !== j.gl.Disabled && (q.default.isInstanceLocked() ? i = J.ADE.OVERLAY_LOCKED_ACTIVATED : q.default.isInstanceLocked() || (i = q.default.isPinned(J.Odu.TEXT) ? J.ADE.OVERLAY_UNLOCKED_PINNED : J.ADE.OVERLAY_UNLOCKED)), K.default.track(J.rMx.JOIN_VOICE_CHANNEL, $({
        location: i,
        channel_id: u,
        channel_type: p,
        channel_bitrate: g,
        guild_id: d,
        game_name: t,
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        stage_instance_id: null == n ? true : n.id,
        guild_scheduled_event_id: null == r ? true : r.id,
        was_moved: G.Z.getWasMoved(),
        join_voice_id: G.Z.getJoinVoiceId()
      }, (0, f.oG)(d, u), (0, f.kO)(d, u, m)))
    }
    let A = null != I && null != I.distributor && null != I.sku && null != e.runningGame && e.runningGame.distributor === I.distributor && I.sku === e.runningGame.sku && I.name === e.runningGame.name,
      D = null != e.runningGame && null != I && e.runningGame.isLauncher !== I.isLauncher;
    if (e.runningGame !== I && null != I && !I.isLauncher && (!A || D)) {
      let {
        gameId: e
      } = (0, O.G8)(I), t = true !== e ? R.Z.getDetectableGame(e) : null, o = v.ZP.getOverrideForGame(I), s = M.Z.getGuildIds(), f = w.SE.getSetting(), h = s.filter(e => !f.includes(e)).slice(0, 200), m = null;
      m = null != o ? "custom_override" : null != t ? "verified_game" : "launcher";
      let b = P.default.getTrackedGameByPid(I.pid),
        _ = (0, v.b6)(I),
        y = {
          enabledOOP: null != (n = null == b ? true : b.oopEnabled) ? n : _.enabledOOP,
          enabledLegacy: null != (r = null == b ? true : b.legacyEnabled) ? r : _.enabledLegacy,
          overlayMethod: null != (i = null == b ? true : b.overlayMethod) ? i : _.overlayMethod,
          source: null != (l = null == b ? true : b.source) ? l : _.source,
          reason: "ChatAutoAnalytics"
        },
        C = null != (a = P.default.getOverlayMethod(I.pid)) ? a : y.overlayMethod;
      if (setTimeout(() => {
          (I.distributor === J.GQo.ROBLOX ? this.debouncedRobloxAnalytics : ee)({
            runningGame: I,
            game: t,
            detectionMethod: m,
            overlayStatus: y,
            overlayMethod: C,
            sharedGuildIds: h,
            voiceChannelId: u,
            voiceChannelType: p,
            voiceChannelBitrate: g,
            voiceChannelGuildId: d
          })
        }, 1e4), null != I.name && null != S && R.Z.shouldReport(I.name)) {
        let e = I.name;
        c.Z.identifyGame(S, e).then(e => c.Z.reportUnverifiedGame(e)).catch(e => new E.Z("AutoAnalytics").error("Cannot identify game", e))
      }
    }
    if ((e.videoEnabled !== m || e.isScreenSharing !== y) && null != u) {
      let e = "none",
        t = [y ? "screen" : null, m ? "camera" : null].filter(Q.lm),
        n = null;
      y ? (e = "screen", n = (0, b.t)()) : m && (e = "camera"), K.default.track(J.rMx.VIDEO_INPUT_TOGGLED, $({
        video_input_type: e,
        video_toggle_source: __OVERLAY__ ? "overlay" : "app",
        enabled_inputs: t,
        preview_enabled: w.qF.getSetting()
      }, n, this.getGameMetadata(), (0, f.AB)(u)))
    }
    if (x && null != T && (!e.connected || T !== e.selectedChannelId || N !== e.selectedGuildId)) {
      let t = e.selectedChannelId,
        n = L.Z.getChannel(t),
        r = M.Z.getGuild(null == n ? true : n.getGuildId());
      if (null != t && null != n && null != r && r.publicUpdatesChannelId === t) {
        let e = U.Z.getMessages(t),
          i = e.toArray().reverse().find(e => {
            var t;
            return (0, o.yE)(e.flags, J.iLy.IS_CROSSPOST) && (null == (t = e.messageReference) ? true : t.guild_id) === "667560445975986187"
          });
        K.default.track(J.rMx.ACK_COMMUNITY_MESSAGES, $({
          last_message_id: null == i ? true : i.id,
          last_message_reference_message_id: null == i || null == (s = i.messageReference) ? true : s.message_id,
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
    super(...e), X(this, "isMessageRequestsInitialized", false), X(this, "debouncedRobloxAnalytics", a().debounce(ee, 5e3))
  }
}

function en() {
  let [e, t] = (0, Chunk442837.Wu)([Chunk944486.Z], () => [Chunk944486.Z.getVoiceChannelId(), Chunk944486.Z.getChannelId()], []), n = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getChannel(exports), [exports]), l = (0, Chunk442837.e7)([Chunk358221.Z], () => (null == require ? true : require.id) != null && Chunk358221.Z.getChatOpen(require.id), [require]), a = null == require ? true : require.nsfw, o = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getChannel(module), [module]), c = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId(), []), u = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(Chunk224706), [Chunk224706]), d = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser(), []), b = (0, Chunk442837.e7)([Chunk271383.ZP], () => {
    var e, t;
    return null != Chunk579806 && null != Chunk224706 && null != (t = null == (e = Chunk271383.ZP.getMember(Chunk224706, Chunk579806.id)) ? true : module.isPending) && exports
  }, [Chunk579806, Chunk224706]), E = (0, Chunk442837.e7)([Chunk974042.ZP], () => Chunk974042.ZP.getState().section, []), O = (0, Chunk442837.e7)([Chunk774343.Z], () => Chunk774343.Z.getHomeLink(), []), C = (0, Chunk442837.e7)([Chunk38618.Z], () => Chunk38618.Z.isConnected(), []), [N, j] = (0, Chunk442837.Wu)([Chunk131951.Z], () => [Chunk131951.Z.isVideoEnabled(), Chunk131951.Z.isScreenSharing()], []), P = (0, Chunk442837.e7)([Chunk885110.Z], () => Chunk885110.Z.getPrimaryActivity(), []), x = (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.getCurrentGameForAnalytics(), []), A = (0, Chunk501640.Z)(Chunk224706), Z = (0, Chunk442837.e7)([Chunk355298.Z], () => Chunk355298.Z.getMessageRequestsCount(), []), w = {
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
    runningGame: Chunk829907,
    runningGamePid: null != Chunk829907 ? Chunk829907.pid : null,
    gamePlatform: (0, Chunk603113.Z)(Chunk371651),
    gameName: null != Chunk371651 ? Chunk371651.name : null,
    gameId: null != Chunk371651 ? Chunk371651.application_id : null,
    gameExeName: null != Chunk829907 ? Chunk829907.exeName : null,
    hasPreviewEnabled: null == Chunk593472 ? true : Chunk593472.features.has(Chunk981631.GuildFeatures.PREVIEW_ENABLED),
    isMemberPending: Chunk318885,
    postableChannelCount: Chunk509003,
    isTextInVoice: Chunk392711,
    numMessageRequests: Chunk427679
  }, R = Chunk473749.useRef(Chunk695346);
  Chunk473749.useEffect(() => {
    Chunk77498.current = Chunk695346
  }, [Chunk695346]);
  let {
    connected: U,
    friendsTabSection: G,
    homeLink: q,
    isMemberPending: Q,
    selectedChannelId: X,
    selectedGuildId: ee
  } = Chunk695346;
  Chunk473749.useEffect(() => {
    if (Chunk375954 && null != X) {
      let e = (0, Chunk731429.K)(Chunk592125.Z.getChannel(X), true);
      (0, Chunk367907.yw)(Chunk981631.rMx.CHANNEL_OPENED, $({}, module, (0, Chunk367907.$H)(X))), (0, Chunk188471.a)(Chunk981631.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: X
      }), Chunk77498.current.isTextInVoice && (0, Chunk367907.yw)(Chunk981631.rMx.TEXT_IN_VOICE_OPENED, {
        channel_is_nsfw: Chunk77498.current.isNSFWChannel
      })
    }
  }, [Chunk375954, X]), Chunk473749.useEffect(() => {
    Chunk375954 && null == ee && (Chunk237997 === Chunk981631.Z5c.FRIENDS || Chunk237997 === Chunk981631.Z5c.ME_ACTIVITY) && (0, Chunk176881.Z)({
      tab_opened: Chunk19780
    })
  }, [Chunk375954, Chunk19780, Chunk237997, ee]), Chunk473749.useEffect(() => {
    if (Chunk375954 && null != ee) {
      var e, t, n, r;
      let i = (n = $({}, Chunk823379 ? {
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
  }, [Chunk375954, ee, Chunk237997]), (0, Chunk54381.jsx)(et, $({}, Chunk695346))
}