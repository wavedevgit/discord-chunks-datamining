/** Chunk was on 21738 **/
/** chunk id: 249477, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => ei
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
    game: s,
    detectionMethod: o,
    overlayStatus: c,
    overlayMethod: p,
    sharedGuildIds: h,
    voiceChannelId: g,
    voiceChannelType: f,
    voiceChannelBitrate: m,
    voiceChannelGuildId: A
  } = e, _ = await (0, P.E1)(a.pid), {
    gameName: b,
    gameId: E,
    exe: I,
    distributor: v,
    rawExePath: S
  } = (0, O.wH)(a), C = c.enabledLegacy || c.enabledOOP, N = T.x.legacyEnabled || T.x.oopEnabled, x = c.source;
  X.default.track($.HAw.LAUNCH_GAME, {
    game: b,
    game_id: E,
    verified: null != s && (0, O.PQ)(S, null == s ? true : s.executables),
    elevated: a.elevated,
    is_launcher: null != (t = null == a ? true : a.isLauncher) && t,
    game_platform: $.yTV.DESKTOP,
    detection_method: o,
    distributor: v,
    is_overlay_enabled: N,
    is_overlay_game_enabled: C,
    is_overlay_game_source: x,
    fullscreen_type: null != _ ? u.aI[_] : u.aI.UNKNOWN.toString(),
    hardware_display_count: null != (n = await (null === d.A || true === d.A || null == (l = d.A.hardware) || null == (i = l.getDisplayCount) ? true : i.call(l))) ? n : null,
    overlay_method: null != (r = j.Ue[p]) ? r : __OVERLAY__ ? j.Ue[j.Ue.Hook] : null,
    activity_status_enabled: R.tz.getSetting(),
    activity_status_shared_guilds: h,
    current_user_status: Y.A.getStatus(),
    game_detection_enabled: (0, y.Xr)(a),
    executable_path: I,
    voice_channel_id: g,
    voice_channel_type: f,
    voice_channel_bitrate: m,
    voice_channel_guild_id: A,
    distributor_game_id: a.sku,
    hidden_by_distributor: a.hidden,
    game_metadata: (0, w.MT)(a)
  }), null != I && y.Ay.addExecutableTrackedByAnalytics(I)
}
class er extends Chunk64700.PureComponent {
  componentDidUpdate(e) {
    var t, n, r, i, l, a, o, u, d, p, g;
    let {
      voiceChannelId: m,
      voiceChannelGuildId: I,
      voiceChannelType: v,
      voiceChannelBitrate: C,
      videoEnabled: N,
      isScreenSharing: T,
      runningGame: P,
      runningGamePid: w,
      runningNonGame: k,
      selectedChannelId: G,
      selectedGuildId: H,
      connected: F
    } = this.props;
    if (e.voiceChannelId !== m && null != e.voiceChannelId) {
      let t = y.Ay.getCurrentGameForAnalytics(),
        n = null != t ? t.name : "",
        r = L.A.getStageInstanceByChannel(e.voiceChannelId),
        i = S.Ay.getActiveEventByChannel(e.voiceChannelId),
        a = B.A.getLastRTCConnectionState();
      (null == a ? true : a.channelId) !== e.voiceChannelId && (a = null), X.default.track($.HAw.LEAVE_VOICE_CHANNEL, et({
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
      }, (0, h.JK)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled), null == a || null == (l = a.voiceStateAnalytics) ? true : l.getStats(), _.A.getSelectedParticipantStats(e.voiceChannelId)))
    }
    if (e.voiceChannelId !== m && null != m) {
      let e = y.Ay.getCurrentGameForAnalytics(),
        t = null != e ? e.name : "",
        n = L.A.getStageInstanceByChannel(m),
        r = S.Ay.getActiveEventByChannel(m);
      (0, h.zV)($.HAw.CHANNEL_OPENED, et({}, (0, h.qL)(m))), (0, f.k)($.HAw.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: m
      });
      let i = null,
        l = Q.default.getFocusedPID();
      null != l && x.default.getOverlayMethod(l) !== j.Ue.Disabled && (Q.default.isInstanceLocked() ? i = $.Xmn.OVERLAY_LOCKED_ACTIVATED : Q.default.isInstanceLocked() || (i = Q.default.isPinned($.uss.TEXT) ? $.Xmn.OVERLAY_UNLOCKED_PINNED : $.Xmn.OVERLAY_UNLOCKED)), X.default.track($.HAw.JOIN_VOICE_CHANNEL, et({
        location: i,
        channel_id: m,
        channel_type: v,
        channel_bitrate: C,
        guild_id: I,
        game_name: t,
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        stage_instance_id: null == n ? true : n.id,
        guild_scheduled_event_id: null == r ? true : r.id,
        was_moved: B.A.getWasMoved(),
        join_voice_id: B.A.getJoinVoiceId()
      }, (0, h.dL)(I, m), (0, h.JK)(I, m, N)))
    }
    let K = (null == P ? true : P.distributor) === (null == (t = e.runningGame) ? true : t.distributor) && (null == P ? true : P.sku) === (null == (n = e.runningGame) ? true : n.sku) && (null == P ? true : P.name) === (null == (r = e.runningGame) ? true : r.name),
      W = null != e.runningGame && null != P && e.runningGame.isLauncher !== P.isLauncher;
    if (e.runningGame !== P && null != P && !P.isLauncher && (!K || W)) {
      let {
        gameId: e
      } = (0, O.wH)(P), t = true !== e ? M.A.getDetectableGame(e) : null, n = y.Ay.getOverrideForGame(P), r = U.A.getGuildIds(), i = R.JG.getSetting(), l = r.filter(e => !i.includes(e)).slice(0, 200), s = null;
      s = null != n ? "custom_override" : null != t ? "verified_game" : "launcher";
      let h = x.default.getTrackedGameByPid(P.pid),
        g = (0, y.hw)(P),
        f = {
          enabledOOP: null != (a = null == h ? true : h.oopEnabled) ? a : g.enabledOOP,
          enabledLegacy: null != (o = null == h ? true : h.legacyEnabled) ? o : g.enabledLegacy,
          overlayMethod: null != (u = null == h ? true : h.overlayMethod) ? u : g.overlayMethod,
          source: null != (d = null == h ? true : h.source) ? d : g.source,
          reason: "ChatAutoAnalytics"
        },
        A = null != (p = x.default.getOverlayMethod(P.pid)) ? p : f.overlayMethod;
      if (setTimeout(() => {
          (P.distributor === $.d3x.ROBLOX ? this.debouncedRobloxAnalytics : en)({
            runningGame: P,
            game: t,
            detectionMethod: s,
            overlayStatus: f,
            overlayMethod: A,
            sharedGuildIds: l,
            voiceChannelId: m,
            voiceChannelType: v,
            voiceChannelBitrate: C,
            voiceChannelGuildId: I
          })
        }, 1e4), null != P.name && null != w && M.A.shouldReport(P)) {
        let e = P.name;
        c.A.identifyGame(w, e).then(e => c.A.reportUnverifiedGame(e)).catch(e => new b.A("AutoAnalytics").error("Cannot identify game", e))
      }
    }
    if (e.runningNonGame !== k && (null == k ? true : k.id) != null && (null == (i = e.runningNonGame) ? true : i.id) !== k.id) {
      let e = E.A.getById(k.id);
      null != e && X.default.track($.HAw.LAUNCH_NON_GAME_APPLICATION, {
        name: e.name,
        application_id: e.id,
        application_type: J.S7.NON_GAME_DETECTABLE,
        elevated: k.elevated,
        game_platform: $.yTV.DESKTOP,
        distributor: k.distributor,
        detection_method: "verified_non_game_application",
        current_user_status: Y.A.getStatus(),
        executable_path: (0, O.Ic)(k.exePath),
        voice_channel_id: m,
        voice_channel_type: v,
        voice_channel_bitrate: C,
        voice_channel_guild_id: I
      })
    }
    if ((e.videoEnabled !== N || e.isScreenSharing !== T) && null != m) {
      let e = "none",
        t = [T ? "screen" : null, N ? "camera" : null].filter(Z.Vq),
        n = null;
      T ? (e = "screen", n = (0, A.p)()) : N && (e = "camera"), X.default.track($.HAw.VIDEO_INPUT_TOGGLED, et({
        video_input_type: e,
        video_toggle_source: __OVERLAY__ ? "overlay" : "app",
        enabled_inputs: t,
        preview_enabled: R.bm.getSetting()
      }, n, this.getGameMetadata(), (0, h.QS)(m)))
    }
    if (F && null != G && (!e.connected || G !== e.selectedChannelId || H !== e.selectedGuildId)) {
      let t = e.selectedChannelId,
        n = D.A.getChannel(t),
        r = U.A.getGuild(null == n ? true : n.getGuildId());
      if (null != t && null != n && null != r && r.publicUpdatesChannelId === t) {
        let e = V.A.getMessages(t),
          i = e.toArray().reverse().find(e => {
            var t;
            return (0, s.Lt)(e.flags, $.pr7.IS_CROSSPOST) && (null == (t = e.messageReference) ? true : t.guild_id) === "667560445975986187"
          });
        X.default.track($.HAw.ACK_COMMUNITY_MESSAGES, et({
          last_message_id: null == i ? true : i.id,
          last_message_reference_message_id: null == i || null == (g = i.messageReference) ? true : g.message_id,
          messages_loaded: e.hasFetched
        }, (0, h.dI)(n), (0, h.H$)(r.id)))
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
  let [e, t] = (0, o.yK)([H.A], () => [H.A.getVoiceChannelId(), H.A.getChannelId()], []), n = (0, o.bG)([D.A], () => D.A.getChannel(t), [t]), l = (0, o.bG)([_.A], () => (null == n ? true : n.id) != null && _.A.getChatOpen(n.id), [n]), a = null == n ? true : n.nsfw, s = (0, o.bG)([D.A], () => D.A.getChannel(e), [e]), c = (0, o.bG)([F.A], () => F.A.getGuildId(), []), u = (0, o.bG)([U.A], () => U.A.getGuild(c), [c]), d = (0, o.bG)([W.default], () => W.default.getCurrentUser(), []), A = (0, o.bG)([k.Ay], () => {
    var e, t;
    return null != d && null != c && null != (e = null == (t = k.Ay.getMember(c, d.id)) ? true : t.isPending) && e
  }, [d, c]), b = (0, o.bG)([z.Ay], () => z.Ay.getState().section, []), E = (0, o.bG)([q.A], () => q.A.getHomeLink(), []), O = (0, o.bG)([I.A], () => I.A.isConnected(), []), [S, T] = (0, o.yK)([G.A], () => [G.A.isVideoEnabled(), G.A.isScreenSharing()], []), j = (0, o.bG)([Y.A], () => Y.A.getPrimaryActivity(), []), {
    currentGame: x,
    currentNonGame: P
  } = (0, o.cf)([y.Ay], () => ({
    currentGame: y.Ay.getCurrentGameForAnalytics(),
    currentNonGame: y.Ay.getCurrentNonGameForAnalytics()
  }), []), w = (0, v.A)(c), L = (0, o.bG)([N.A], () => N.A.getMessageRequestsCount(), []), R = {
    selectedChannelId: t,
    isNSFWChannel: a,
    selectedGuildId: c,
    friendsTabSection: b,
    homeLink: E,
    connected: O,
    videoEnabled: S,
    isScreenSharing: T,
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
    hasPreviewEnabled: null == u ? true : u.features.has($.GuildFeatures.PREVIEW_ENABLED),
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
        let e = (0, g.C)(D.A.getChannel(s), true);
        (0, h.zV)($.HAw.CHANNEL_OPENED, et({}, e, (0, h.qL)(s))), (0, f.k)($.HAw.CHANNEL_OPENED_CLICKSTREAM, {
          channelId: s
        }), t.current.isTextInVoice && (0, h.zV)($.HAw.TEXT_IN_VOICE_OPENED, {
          channel_is_nsfw: t.current.isNSFWChannel
        })
      }
    }, [n, s]), i.useEffect(() => {
      n && null == o && l === $.BVt.FRIENDS && (0, m.A)({
        tab_opened: r
      })
    }, [n, r, l, o]), i.useEffect(() => {
      if (n && null != o) {
        var e, r, i, l;
        let n = (i = et({}, a ? {
          is_pending: a,
          preview_enabled: t.current.hasPreviewEnabled
        } : {}), l = l = {
          postable_channels: t.current.postableChannelCount,
          premium_progress_bar_enabled: null != (e = null == (r = U.A.getGuild(F.A.getGuildId())) ? true : r.premiumProgressBarEnabled) && e,
          viewing_all_channels: !K.Ay.isOptInEnabled(o),
          num_recent_channels: C.A.recentsChannelCount(o)
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
        (0, h.zV)($.HAw.GUILD_VIEWED, n), (0, f.k)($.HAw.GUILD_VIEWED_CLICKSTREAM, {
          guildId: o
        })
      }
    }, [n, o, a]);
    let c = i.useRef(false);
    i.useEffect(() => {
      n && null == o && l === $.BVt.MESSAGE_REQUESTS && !c.current && (c.current = true, X.default.track($.HAw.MESSAGE_REQUESTS_INITIALIZED, {
        num_message_requests: t.current.numMessageRequests
      }))
    }, [n, o, l])
  }(R), (0, r.jsx)(er, et({}, R))
}