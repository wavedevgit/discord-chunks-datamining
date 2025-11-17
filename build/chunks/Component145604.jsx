/** Chunk was on 1272 **/
/** chunk id: 145604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => er
}), require("./583741.js"), require("./997841.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
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
  Chunk630388 = require("./630388.js"),
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
    overlayStatus: d,
    overlayMethod: p,
    sharedGuildIds: f,
    voiceChannelId: h,
    voiceChannelType: g,
    voiceChannelBitrate: m,
    voiceChannelGuildId: _
  } = e, b = await (0, x.hj)(a.pid), {
    gameName: y,
    gameId: v,
    exe: I,
    distributor: C,
    rawExePath: S
  } = (0, E.G8)(a), P = (0, j.NW)("ChatAutoAnalytics", false), Z = d.enabledLegacy || P && d.enabledOOP, L = T.v.legacyEnabled || P && T.v.oopEnabled, R = d.source;
  K.default.track(X.rMx.LAUNCH_GAME, {
    game: y,
    game_id: v,
    verified: null != s && (0, E.vp)(S, null == s ? true : s.executables),
    elevated: a.elevated,
    is_launcher: null != (r = null == a ? true : a.isLauncher) && r,
    game_platform: X.M7m.DESKTOP,
    detection_method: o,
    distributor: C,
    is_overlay_enabled: L,
    is_overlay_game_enabled: Z,
    is_overlay_game_source: R,
    fullscreen_type: null != b ? c.Jx[b] : c.Jx.UNKNOWN.toString(),
    hardware_display_count: null != (i = await (null === u.Z || true === u.Z || null == (n = u.Z.hardware) || null == (t = n.getDisplayCount) ? true : t.call(n))) ? i : null,
    overlay_method: null != (l = N.gl[p]) ? l : __OVERLAY__ ? N.gl[N.gl.Hook] : null,
    activity_status_enabled: w.G6.getSetting(),
    activity_status_shared_guilds: f,
    current_user_status: V.Z.getStatus(),
    game_detection_enabled: (0, O.ik)(a),
    executable_path: I,
    voice_channel_id: h,
    voice_channel_type: g,
    voice_channel_bitrate: m,
    voice_channel_guild_id: _,
    distributor_game_id: a.sku,
    hidden_by_distributor: a.hidden,
    game_metadata: (0, A.sD)(a)
  }), null != I && O.ZP.addExecutableTrackedByAnalytics(I)
}
class en extends Chunk473749.PureComponent {
  componentDidUpdate(e) {
    var t, n, r, i, l, a;
    let {
      voiceChannelId: s,
      voiceChannelGuildId: c,
      voiceChannelType: u,
      voiceChannelBitrate: d,
      videoEnabled: f,
      isScreenSharing: g,
      runningGame: y,
      runningGamePid: v,
      selectedChannelId: C,
      selectedGuildId: S,
      connected: T
    } = this.props;
    if (e.voiceChannelId !== s && null != e.voiceChannelId) {
      let t = O.ZP.getCurrentGameForAnalytics(),
        n = null != t ? t.name : "",
        r = Z.Z.getStageInstanceByChannel(e.voiceChannelId),
        i = I.ZP.getActiveEventByChannel(e.voiceChannelId);
      K.default.track(X.rMx.LEAVE_VOICE_CHANNEL, ee({
        channel_id: e.voiceChannelId,
        channel_type: e.voiceChannelType,
        channel_bitrate: e.voiceChannelBitrate,
        guild_id: e.voiceChannelGuildId,
        rtc_connection_id: G.Z.getRTCConnectionId(),
        game_name: n,
        duration: G.Z.getDuration(),
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        media_session_id: G.Z.getMediaSessionId(),
        stage_instance_id: null == r ? true : r.id,
        guild_scheduled_event_id: null == i ? true : i.id
      }, (0, p.kO)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled), G.Z.getVoiceStateStats(), _.Z.getSelectedParticipantStats(e.voiceChannelId)))
    }
    if (e.voiceChannelId !== s && null != s) {
      let e = O.ZP.getCurrentGameForAnalytics(),
        t = null != e ? e.name : "",
        n = Z.Z.getStageInstanceByChannel(s),
        r = I.ZP.getActiveEventByChannel(s);
      (0, p.yw)(X.rMx.CHANNEL_OPENED, ee({}, (0, p.$H)(s))), (0, h.a)(X.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: s
      });
      let i = null,
        l = q.default.getFocusedPID();
      null != l && P.default.getOverlayMethod(l) !== N.gl.Disabled && (q.default.isInstanceLocked() ? i = X.ADE.OVERLAY_LOCKED_ACTIVATED : q.default.isInstanceLocked() || (i = q.default.isPinned(X.Odu.TEXT) ? X.ADE.OVERLAY_UNLOCKED_PINNED : X.ADE.OVERLAY_UNLOCKED)), K.default.track(X.rMx.JOIN_VOICE_CHANNEL, ee({
        location: i,
        channel_id: s,
        channel_type: u,
        channel_bitrate: d,
        guild_id: c,
        game_name: t,
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        stage_instance_id: null == n ? true : n.id,
        guild_scheduled_event_id: null == r ? true : r.id,
        was_moved: G.Z.getWasMoved(),
        join_voice_id: G.Z.getJoinVoiceId()
      }, (0, p.oG)(c, s), (0, p.kO)(c, s, f)))
    }
    let j = null != y && null != y.distributor && null != y.sku && null != e.runningGame && e.runningGame.distributor === y.distributor && y.sku === e.runningGame.sku && y.name === e.runningGame.name,
      x = null != e.runningGame && null != y && e.runningGame.isLauncher !== y.isLauncher;
    if (e.runningGame !== y && null != y && !y.isLauncher && (!j || x)) {
      let {
        gameId: e
      } = (0, E.G8)(y), a = true !== e ? R.Z.getDetectableGame(e) : null, p = O.ZP.getOverrideForGame(y), f = M.Z.getGuildIds(), h = w.SE.getSetting(), g = f.filter(e => !h.includes(e)).slice(0, 200), m = null;
      m = null != p ? "custom_override" : null != a ? "verified_game" : "launcher";
      let _ = P.default.getTrackedGameByPid(y.pid),
        I = (0, O.b6)(y),
        C = {
          enabledOOP: null != (t = null == _ ? true : _.oopEnabled) ? t : I.enabledOOP,
          enabledLegacy: null != (n = null == _ ? true : _.legacyEnabled) ? n : I.enabledLegacy,
          overlayMethod: null != (r = null == _ ? true : _.overlayMethod) ? r : I.overlayMethod,
          source: null != (i = null == _ ? true : _.source) ? i : I.source,
          reason: "ChatAutoAnalytics"
        },
        S = null != (l = P.default.getOverlayMethod(y.pid)) ? l : C.overlayMethod;
      if (setTimeout(() => {
          (y.distributor === X.GQo.ROBLOX ? this.debouncedRobloxAnalytics : et)({
            runningGame: y,
            game: a,
            detectionMethod: m,
            overlayStatus: C,
            overlayMethod: S,
            sharedGuildIds: g,
            voiceChannelId: s,
            voiceChannelType: u,
            voiceChannelBitrate: d,
            voiceChannelGuildId: c
          })
        }, 1e4), null != y.name && null != v && R.Z.shouldReport(y.name)) {
        let e = y.name;
        o.Z.identifyGame(v, e).then(e => o.Z.reportUnverifiedGame(e)).catch(e => new b.Z("AutoAnalytics").error("Cannot identify game", e))
      }
    }
    if ((e.videoEnabled !== f || e.isScreenSharing !== g) && null != s) {
      let e = "none",
        t = [g ? "screen" : null, f ? "camera" : null].filter(J.lm),
        n = null;
      g ? (e = "screen", n = (0, m.t)()) : f && (e = "camera"), K.default.track(X.rMx.VIDEO_INPUT_TOGGLED, ee({
        video_input_type: e,
        video_toggle_source: __OVERLAY__ ? "overlay" : "app",
        enabled_inputs: t,
        preview_enabled: w.qF.getSetting()
      }, n, this.getGameMetadata(), (0, p.AB)(s)))
    }
    if (T && null != C && (!e.connected || C !== e.selectedChannelId || S !== e.selectedGuildId)) {
      let t = e.selectedChannelId,
        n = L.Z.getChannel(t),
        r = M.Z.getGuild(null == n ? true : n.getGuildId());
      if (null != t && null != n && null != r && r.publicUpdatesChannelId === t) {
        let e = U.Z.getMessages(t),
          i = e.toArray().reverse().find(e => {
            var t;
            return (0, Q.yE)(e.flags, X.iLy.IS_CROSSPOST) && (null == (t = e.messageReference) ? true : t.guild_id) === "667560445975986187"
          });
        K.default.track(X.rMx.ACK_COMMUNITY_MESSAGES, ee({
          last_message_id: null == i ? true : i.id,
          last_message_reference_message_id: null == i || null == (a = i.messageReference) ? true : a.message_id,
          messages_loaded: e.hasFetched
        }, (0, p.v_)(n), (0, p.hH)(r.id)))
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
  let [e, t] = (0, Chunk442837.Wu)([Chunk944486.Z], () => [Chunk944486.Z.getVoiceChannelId(), Chunk944486.Z.getChannelId()], []), n = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getChannel(exports), [exports]), l = (0, Chunk442837.e7)([Chunk358221.Z], () => (null == require ? true : require.id) != null && Chunk358221.Z.getChatOpen(require.id), [require]), a = null == require ? true : require.nsfw, o = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getChannel(module), [module]), c = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId(), []), u = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(Chunk593472), [Chunk593472]), m = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser(), []), b = (0, Chunk442837.e7)([Chunk271383.ZP], () => {
    var e, t;
    return null != Chunk318885 && null != Chunk593472 && null != (t = null == (e = Chunk271383.ZP.getMember(Chunk593472, Chunk318885.id)) ? true : module.isPending) && exports
  }, [Chunk318885, Chunk593472]), E = (0, Chunk442837.e7)([Chunk974042.ZP], () => Chunk974042.ZP.getState().section, []), I = (0, Chunk442837.e7)([Chunk774343.Z], () => Chunk774343.Z.getHomeLink(), []), T = (0, Chunk442837.e7)([Chunk38618.Z], () => Chunk38618.Z.isConnected(), []), [N, j] = (0, Chunk442837.Wu)([Chunk131951.Z], () => [Chunk131951.Z.isVideoEnabled(), Chunk131951.Z.isScreenSharing()], []), P = (0, Chunk442837.e7)([Chunk885110.Z], () => Chunk885110.Z.getPrimaryActivity(), []), x = (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.getCurrentGameForAnalytics(), []), A = (0, Chunk489745.Z)(Chunk593472), Z = (0, Chunk442837.e7)([Chunk355298.Z], () => Chunk355298.Z.getMessageRequestsCount(), []), w = {
    selectedChannelId: exports,
    isNSFWChannel: a,
    selectedGuildId: Chunk593472,
    friendsTabSection: Chunk581567,
    homeLink: Chunk924301,
    connected: Chunk454991,
    videoEnabled: Chunk837268,
    isScreenSharing: Chunk32300,
    voiceChannelId: null == Chunk224706 ? true : Chunk224706.id,
    voiceChannelGuildId: null == Chunk224706 ? true : Chunk224706.getGuildId(),
    voiceChannelType: null == Chunk224706 ? true : Chunk224706.type,
    voiceChannelBitrate: null == Chunk224706 ? true : Chunk224706.bitrate,
    runningGame: Chunk829907,
    runningGamePid: null != Chunk829907 ? Chunk829907.pid : null,
    gamePlatform: (0, Chunk603113.Z)(Chunk371651),
    gameName: null != Chunk371651 ? Chunk371651.name : null,
    gameId: null != Chunk371651 ? Chunk371651.application_id : null,
    gameExeName: null != Chunk829907 ? Chunk829907.exeName : null,
    hasPreviewEnabled: null == Chunk579806 ? true : Chunk579806.features.has(Chunk981631.GuildFeatures.PREVIEW_ENABLED),
    isMemberPending: Chunk710845,
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
    selectedChannelId: J,
    selectedGuildId: $
  } = Chunk695346;
  Chunk473749.useEffect(() => {
    if (Chunk375954 && null != Chunk823379) {
      let e = (0, Chunk731429.K)(Chunk592125.Z.getChannel(Chunk823379), true);
      (0, Chunk367907.yw)(Chunk981631.rMx.CHANNEL_OPENED, ee({}, module, (0, Chunk367907.$H)(Chunk823379))), (0, Chunk188471.a)(Chunk981631.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: Chunk823379
      }), Chunk77498.current.isTextInVoice && (0, Chunk367907.yw)(Chunk981631.rMx.TEXT_IN_VOICE_OPENED, {
        channel_is_nsfw: Chunk77498.current.isNSFWChannel
      })
    }
  }, [Chunk375954, Chunk823379]), Chunk473749.useEffect(() => {
    Chunk375954 && null == $ && (Chunk237997 === Chunk981631.Z5c.FRIENDS || Chunk237997 === Chunk981631.Z5c.ME_ACTIVITY) && (0, Chunk176881.Z)({
      tab_opened: Chunk19780
    })
  }, [Chunk375954, Chunk19780, Chunk237997, $]), Chunk473749.useEffect(() => {
    if (Chunk375954 && null != $) {
      var e, t, n, r;
      let i = (n = ee({}, Chunk630388 ? {
        is_pending: Chunk630388,
        preview_enabled: Chunk77498.current.hasPreviewEnabled
      } : {}), r = r = {
        postable_channels: Chunk77498.current.postableChannelCount,
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
  }, [Chunk375954, $, Chunk630388]);
  let et = Chunk473749.useRef(false);
  return Chunk473749.useEffect(() => {
    Chunk375954 && null == $ && Chunk237997 === Chunk981631.Z5c.MESSAGE_REQUESTS && !et.current && (et.current = true, Chunk626135.default.track(Chunk981631.rMx.MESSAGE_REQUESTS_INITIALIZED, {
      num_message_requests: Chunk77498.current.numMessageRequests
    }))
  }, [Chunk375954, $, Chunk237997]), (0, Chunk54381.jsx)(en, ee({}, Chunk695346))
}