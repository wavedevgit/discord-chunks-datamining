/** Chunk was on 21738 **/
/** chunk id: 249477, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => el
}), require("./264879.js"), require("./938796.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk544420 = require("./544420.js"),
  Chunk56562 = require("./56562.js"),
  Chunk77729 = require("./77729.js"),
  Chunk855511 = require("./855511.js"),
  Chunk58149 = require("./58149.js"),
  Chunk332456 = require("./332456.js"),
  Chunk237774 = require("./237774.js"),
  Chunk504982 = require("./504982.js"),
  Chunk815706 = require("./815706.js"),
  Chunk134047 = require("./134047.js"),
  Chunk313961 = require("./313961.js"),
  Chunk626584 = require("./626584.js"),
  Chunk953384 = require("./953384.js"),
  Chunk973522 = require("./973522.js"),
  Chunk15285 = require("./15285.js"),
  Chunk142120 = require("./142120.js"),
  Chunk442187 = require("./442187.js"),
  Chunk698441 = require("./698441.js"),
  Chunk960755 = require("./960755.js"),
  Chunk380335 = require("./380335.js"),
  Chunk211753 = require("./211753.js"),
  Chunk41984 = require("./41984.js"),
  Chunk833551 = require("./833551.js"),
  Chunk515183 = require("./515183.js"),
  Chunk847521 = require("./847521.js"),
  Chunk446600 = require("./446600.js"),
  Chunk253932 = require("./253932.js"),
  Chunk734057 = require("./734057.js"),
  Chunk760751 = require("./760751.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk430452 = require("./430452.js"),
  Chunk320501 = require("./320501.js"),
  Chunk383501 = require("./383501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk461213 = require("./461213.js"),
  Chunk543465 = require("./543465.js"),
  Chunk287809 = require("./287809.js"),
  Chunk619921 = require("./619921.js"),
  Chunk595623 = require("./595623.js"),
  Chunk256415 = require("./256415.js"),
  Chunk954571 = require("./954571.js"),
  Chunk403362 = require("./403362.js"),
  Chunk652215 = require("./652215.js"),
  Chunk705751 = require("./705751.js");

function et(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function en(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      et(e, t, n[t])
    })
  }
  return e
}
async function er(e) {
  var t, n, r, i, l;
  let {
    runningGame: a,
    game: s,
    detectionMethod: o,
    overlayStatus: c,
    overlayMethod: p,
    sharedGuildIds: h,
    voiceChannelId: g,
    voiceChannelType: f,
    voiceChannelBitrate: m,
    voiceChannelGuildId: A
  } = e, _ = await (0, w.E1)(a.pid), {
    gameName: b,
    gameId: E,
    exe: O,
    distributor: v,
    rawExePath: S
  } = (0, y.wH)(a), C = c.enabledLegacy || c.enabledOOP, N = j.x.legacyEnabled || j.x.oopEnabled, T = c.source;
  Z.default.track(J.HAw.LAUNCH_GAME, {
    game: b,
    game_id: E,
    verified: null != s && (0, y.PQ)(S, null == s ? true : s.executables),
    elevated: a.elevated,
    is_launcher: null != (t = null == a ? true : a.isLauncher) && t,
    game_platform: J.yTV.DESKTOP,
    detection_method: o,
    distributor: v,
    is_overlay_enabled: N,
    is_overlay_game_enabled: C,
    is_overlay_game_source: T,
    fullscreen_type: null != _ ? u.aI[_] : u.aI.UNKNOWN.toString(),
    hardware_display_count: null != (n = await (null === d.A || true === d.A || null == (l = d.A.hardware) || null == (i = l.getDisplayCount) ? true : i.call(l))) ? n : null,
    overlay_method: null != (r = x.Ue[p]) ? r : __OVERLAY__ ? x.Ue[x.Ue.Hook] : null,
    activity_status_enabled: D.tz.getSetting(),
    activity_status_shared_guilds: h,
    current_user_status: K.A.getStatus(),
    game_detection_enabled: (0, I.Xr)(a),
    executable_path: O,
    voice_channel_id: g,
    voice_channel_type: f,
    voice_channel_bitrate: m,
    voice_channel_guild_id: A,
    distributor_game_id: a.sku,
    hidden_by_distributor: a.hidden,
    game_metadata: (0, L.MT)(a),
    executable_fingerprint: a.executableFingerprint
  }), null != O && I.Ay.addExecutableTrackedByAnalytics(O)
}
class ei extends Chunk64700.PureComponent {
  componentDidUpdate(e) {
    var t, n, r, i, l, a, o, u, d, p, g;
    let {
      voiceChannelId: m,
      voiceChannelGuildId: v,
      voiceChannelType: S,
      voiceChannelBitrate: N,
      videoEnabled: T,
      isScreenSharing: j,
      runningGame: w,
      runningGamePid: L,
      runningNonGame: U,
      selectedChannelId: V,
      selectedGuildId: F,
      connected: Y
    } = this.props;
    if (e.voiceChannelId !== m && null != e.voiceChannelId) {
      let t = I.Ay.getCurrentGameForAnalytics(),
        n = null != t ? t.name : "",
        r = R.A.getStageInstanceByChannel(e.voiceChannelId),
        i = C.Ay.getActiveEventByChannel(e.voiceChannelId),
        a = H.A.getLastRTCConnectionState();
      (null == a ? true : a.channelId) !== e.voiceChannelId && (a = null), Z.default.track(J.HAw.LEAVE_VOICE_CHANNEL, en({
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
      }, (0, h.JK)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled), null == a || null == (l = a.voiceStateAnalytics) ? true : l.getStats(), b.A.getSelectedParticipantStats(e.voiceChannelId)))
    }
    if (e.voiceChannelId !== m && null != m) {
      let e = I.Ay.getCurrentGameForAnalytics(),
        t = null != e ? e.name : "",
        n = R.A.getStageInstanceByChannel(m),
        r = C.Ay.getActiveEventByChannel(m);
      (0, h.zV)(J.HAw.CHANNEL_OPENED, en({}, (0, h.qL)(m))), (0, f.k)(J.HAw.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: m
      });
      let i = null,
        l = X.default.getFocusedPID();
      null != l && P.default.getOverlayMethod(l) !== x.Ue.Disabled && (X.default.isInstanceLocked() ? i = J.Xmn.OVERLAY_LOCKED_ACTIVATED : X.default.isInstanceLocked() || (i = X.default.isPinned(J.uss.TEXT) ? J.Xmn.OVERLAY_UNLOCKED_PINNED : J.Xmn.OVERLAY_UNLOCKED)), Z.default.track(J.HAw.JOIN_VOICE_CHANNEL, en({
        location: i,
        channel_id: m,
        channel_type: S,
        channel_bitrate: N,
        guild_id: v,
        game_name: t,
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        stage_instance_id: null == n ? true : n.id,
        guild_scheduled_event_id: null == r ? true : r.id,
        was_moved: H.A.getWasMoved(),
        join_voice_id: H.A.getJoinVoiceId()
      }, (0, h.dL)(v, m), (0, h.JK)(v, m, T)))
    }
    let W = (null == w ? true : w.distributor) === (null == (t = e.runningGame) ? true : t.distributor) && (null == w ? true : w.sku) === (null == (n = e.runningGame) ? true : n.sku) && (null == w ? true : w.name) === (null == (r = e.runningGame) ? true : r.name),
      q = null != e.runningGame && null != w && e.runningGame.isLauncher !== w.isLauncher;
    if (e.runningGame !== w && null != w && !w.isLauncher && (!W || q)) {
      let {
        gameId: e
      } = (0, y.wH)(w), t = true !== e ? k.A.getDetectableGame(e) : null, n = I.Ay.getOverrideForGame(w), r = G.A.getGuildIds(), i = D.JG.getSetting(), l = r.filter(e => !i.includes(e)).slice(0, 200), s = null;
      s = null != n ? "custom_override" : null != t ? "verified_game" : "launcher";
      let h = P.default.getTrackedGameByPid(w.pid),
        g = (0, I.hw)(w),
        f = {
          enabledOOP: null != (a = null == h ? true : h.oopEnabled) ? a : g.enabledOOP,
          enabledLegacy: null != (o = null == h ? true : h.legacyEnabled) ? o : g.enabledLegacy,
          overlayMethod: null != (u = null == h ? true : h.overlayMethod) ? u : g.overlayMethod,
          source: null != (d = null == h ? true : h.source) ? d : g.source,
          reason: "ChatAutoAnalytics"
        },
        A = null != (p = P.default.getOverlayMethod(w.pid)) ? p : f.overlayMethod;
      if (setTimeout(() => {
          (w.distributor === J.d3x.ROBLOX ? this.debouncedRobloxAnalytics : er)({
            runningGame: w,
            game: t,
            detectionMethod: s,
            overlayStatus: f,
            overlayMethod: A,
            sharedGuildIds: l,
            voiceChannelId: m,
            voiceChannelType: S,
            voiceChannelBitrate: N,
            voiceChannelGuildId: v
          })
        }, 1e4), null != w.name && null != L && k.A.shouldReport(w)) {
        let e = w.name;
        c.A.identifyGame(L, e).then(e => c.A.reportUnverifiedGame(e)).catch(e => new E.A("AutoAnalytics").error("Cannot identify game", e))
      }
    }
    if (e.runningNonGame !== U && (null == U ? true : U.id) != null && (null == (i = e.runningNonGame) ? true : i.id) !== U.id) {
      let e = O.A.getById(U.id);
      null != e && Z.default.track(J.HAw.LAUNCH_NON_GAME_APPLICATION, {
        name: e.name,
        application_id: e.id,
        application_type: ee.S7.NON_GAME_DETECTABLE,
        elevated: U.elevated,
        game_platform: J.yTV.DESKTOP,
        distributor: U.distributor,
        detection_method: "verified_non_game_application",
        current_user_status: K.A.getStatus(),
        executable_path: (0, y.Ic)(U.exePath),
        voice_channel_id: m,
        voice_channel_type: S,
        voice_channel_bitrate: N,
        voice_channel_guild_id: v,
        executable_fingerprint: U.executableFingerprint
      })
    }
    if ((e.videoEnabled !== T || e.isScreenSharing !== j) && null != m) {
      let e = "none",
        t = [j ? "screen" : null, T ? "camera" : null].filter($.Vq),
        n = null;
      j ? (e = "screen", n = (0, A.p)()) : T && (e = "camera"), Z.default.track(J.HAw.VIDEO_INPUT_TOGGLED, en({
        video_input_type: e,
        video_toggle_source: __OVERLAY__ ? "overlay" : "app",
        enabled_inputs: t,
        preview_enabled: D.bm.getSetting()
      }, n, this.getGameMetadata(), (0, h.QS)(m)))
    }
    if (Y && null != V && (!e.connected || V !== e.selectedChannelId || F !== e.selectedGuildId)) {
      let t = e.selectedChannelId,
        n = M.A.getChannel(t),
        r = G.A.getGuild(null == n ? true : n.getGuildId());
      if (null != t && null != n && null != r && r.publicUpdatesChannelId === t) {
        let e = B.A.getMessages(t),
          i = e.toArray().reverse().find(e => {
            var t;
            return (0, s.Lt)(e.flags, J.pr7.IS_CROSSPOST) && (null == (t = e.messageReference) ? true : t.guild_id) === "667560445975986187"
          });
        Z.default.track(J.HAw.ACK_COMMUNITY_MESSAGES, en({
          last_message_id: null == i ? true : i.id,
          last_message_reference_message_id: null == i || null == (g = i.messageReference) ? true : g.message_id,
          messages_loaded: e.hasFetched
        }, (0, h.dI)(n), (0, h.H$)(r.id)))
      }
      e.isTextInVoice && !this.props.isTextInVoice && _.M.getConfig({
        location: "ChatAutoAnalytics"
      }).collectAnalytics && Z.default.track(J.HAw.TEXT_IN_VOICE_CLOSED, {
        reason: "switched away",
        channel_id: t,
        guild_id: null == n ? true : n.getGuildId()
      })
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
    super(...e), et(this, "isMessageRequestsInitialized", false), et(this, "debouncedRobloxAnalytics", a().debounce(er, 5e3))
  }
}

function el() {
  let [e, t] = (0, o.yK)([F.A], () => [F.A.getVoiceChannelId(), F.A.getChannelId()], []), n = (0, o.bG)([M.A], () => M.A.getChannel(t), [t]), l = (0, o.bG)([b.A], () => (null == n ? true : n.id) != null && b.A.getChatOpen(n.id), [n]), a = null == n ? true : n.nsfw, s = (0, o.bG)([M.A], () => M.A.getChannel(e), [e]), c = (0, o.bG)([Y.A], () => Y.A.getGuildId(), []), u = (0, o.bG)([G.A], () => G.A.getGuild(c), [c]), d = (0, o.bG)([q.default], () => q.default.getCurrentUser(), []), A = (0, o.bG)([U.Ay], () => {
    var e, t;
    return null != d && null != c && null != (e = null == (t = U.Ay.getMember(c, d.id)) ? true : t.isPending) && e
  }, [d, c]), _ = (0, o.bG)([Q.Ay], () => Q.Ay.getState().section, []), E = (0, o.bG)([z.A], () => z.A.getHomeLink(), []), O = (0, o.bG)([v.A], () => v.A.isConnected(), []), [y, C] = (0, o.yK)([V.A], () => [V.A.isVideoEnabled(), V.A.isScreenSharing()], []), j = (0, o.bG)([K.A], () => K.A.getPrimaryActivity(), []), {
    currentGame: x,
    currentNonGame: P
  } = (0, o.cf)([I.Ay], () => ({
    currentGame: I.Ay.getCurrentGameForAnalytics(),
    currentNonGame: I.Ay.getCurrentNonGameForAnalytics()
  }), []), w = (0, S.A)(c), L = (0, o.bG)([T.A], () => T.A.getMessageRequestsCount(), []), R = {
    selectedChannelId: t,
    isNSFWChannel: a,
    selectedGuildId: c,
    friendsTabSection: _,
    homeLink: E,
    connected: O,
    videoEnabled: y,
    isScreenSharing: C,
    voiceChannelId: null == s ? true : s.id,
    voiceChannelGuildId: null == s ? true : s.getGuildId(),
    voiceChannelType: null == s ? true : s.type,
    voiceChannelBitrate: null == s ? true : s.bitrate,
    runningGame: x,
    runningGamePid: null != x ? x.pid : null,
    runningNonGame: P,
    gamePlatform: (0, p.A)(j),
    gameName: null != j ? j.name : null,
    gameId: null != j ? j.application_id : null,
    gameExeName: null != x ? x.exeName : null,
    hasPreviewEnabled: null == u ? true : u.features.has(J.GuildFeatures.PREVIEW_ENABLED),
    isMemberPending: A,
    postableChannelCount: w,
    isTextInVoice: l,
    numMessageRequests: L
  };
  return ! function(e) {
    let t = i.useRef(e);
    i.useEffect(() => {
      t.current = e
    }, [e]);
    let {
      connected: n,
      friendsTabSection: r,
      homeLink: l,
      isMemberPending: a,
      selectedChannelId: s,
      selectedGuildId: o
    } = e;
    i.useEffect(() => {
      if (n && null != s) {
        let e = (0, g.C)(M.A.getChannel(s), true);
        (0, h.zV)(J.HAw.CHANNEL_OPENED, en({}, e, (0, h.qL)(s))), (0, f.k)(J.HAw.CHANNEL_OPENED_CLICKSTREAM, {
          channelId: s
        }), t.current.isTextInVoice && (0, h.zV)(J.HAw.TEXT_IN_VOICE_OPENED, {
          channel_is_nsfw: t.current.isNSFWChannel
        })
      }
    }, [n, s]), i.useEffect(() => {
      n && null == o && l === J.BVt.FRIENDS && (0, m.A)({
        tab_opened: r
      })
    }, [n, r, l, o]), i.useEffect(() => {
      if (n && null != o) {
        var e, r, i, l;
        let n = (i = en({}, a ? {
          is_pending: a,
          preview_enabled: t.current.hasPreviewEnabled
        } : {}), l = l = {
          postable_channels: t.current.postableChannelCount,
          premium_progress_bar_enabled: null != (e = null == (r = G.A.getGuild(Y.A.getGuildId())) ? true : r.premiumProgressBarEnabled) && e,
          viewing_all_channels: !W.Ay.isOptInEnabled(o),
          num_recent_channels: N.A.recentsChannelCount(o)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
        }), i);
        (0, h.zV)(J.HAw.GUILD_VIEWED, n), (0, f.k)(J.HAw.GUILD_VIEWED_CLICKSTREAM, {
          guildId: o
        })
      }
    }, [n, o, a]);
    let c = i.useRef(false);
    i.useEffect(() => {
      n && null == o && l === J.BVt.MESSAGE_REQUESTS && !c.current && (c.current = true, Z.default.track(J.HAw.MESSAGE_REQUESTS_INITIALIZED, {
        num_message_requests: t.current.numMessageRequests
      }))
    }, [n, o, l])
  }(R), (0, r.jsx)(ei, en({}, R))
}