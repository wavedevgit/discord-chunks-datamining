/** Chunk was on web.js **/
"use strict";
let r;
n.d(t, {
  U: () => en,
  Z: () => er
}), n(47120);
var i = n(772848),
  o = n(544891),
  a = n(570140),
  s = n(475179),
  l = n(911969),
  c = n(317770),
  u = n(100527),
  d = n(807169),
  f = n(728345),
  p = n(358221),
  _ = n(75060),
  h = n(233764),
  m = n(375824),
  g = n(188597),
  E = n(695346),
  v = n(131704),
  b = n(314897),
  y = n(592125),
  O = n(19780),
  S = n(944486),
  I = n(594174),
  T = n(626135),
  N = n(585483),
  A = n(358085),
  C = n(624138),
  R = n(24933),
  P = n(115130),
  D = n(566620),
  w = n(317381),
  L = n(969345),
  x = n(155268),
  M = n(148720),
  j = n(122613),
  k = n(782769),
  U = n(16609),
  G = n(761122),
  B = n(983695),
  F = n(917107),
  V = n(981631),
  Z = n(388032);

function H(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let W = 2e3,
  Y = {},
  K = {},
  z = {};

function q(e) {
  var t;
  return {
    releasePhase: null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, G.Z)((0, A.getOS)())].release_phase
  }
}

function Q(e) {
  let {
    applicationId: t,
    nonce: n,
    locations: r,
    source: i
  } = e;
  return (null != r || null != i) && (K[t] = {
    nonce: n,
    locations: r,
    source: i
  }, !0)
}

function X(e, t) {
  let n = K[e];
  if (null != n && n.nonce === t) return delete K[e], n
}

function J(e, t) {
  setTimeout(() => X(e, t), W)
}

function $(e) {
  let {
    applicationId: t,
    nonce: n,
    analyticsLocations: r,
    source: i
  } = e;
  Q({
    applicationId: t,
    nonce: n,
    locations: r,
    source: null != i ? i : void 0
  })
}
async function ee(e) {
  var t, n;
  let {
    applicationId: r,
    location: i,
    instanceId: a
  } = e, s = w.ZP.getEmbeddedActivityDurationMs(i.id, r), l = b.default.getSessionId();
  null != a && null != l && await o.tn.post({
    url: V.ANM.ACTIVITY_LEAVE(r, i.id, a),
    body: {
      session_id: l
    },
    retries: 2,
    rejectWithError: !1
  });
  let c = Y[r],
    u = y.Z.getChannel((0, U.pY)(i)),
    d = I.default.getCurrentUser();
  if (null == c || null == u || null == d) return;
  let f = u.getGuildId(),
    p = w.ZP.getShelfActivities(f),
    h = (0, L.Z)({
      applicationId: r,
      activityConfigs: p
    }),
    {
      releasePhase: m
    } = q(h),
    g = _.Z.getRawThermalState();
  T.default.track(V.rMx.ACTIVITY_SESSION_LEFT, {
    channel_id: u.id,
    guild_id: f,
    media_session_id: c.mediaSessionIds[0],
    activity_session_id: c.activitySessionId,
    application_id: r,
    duration_ms: s,
    user_premium_tier: d.premiumType,
    raw_thermal_state: g,
    release_phase: m,
    activity_premium_tier_requirement: null == h ? void 0 : null === (t = h.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
    shelf_rank: null == h ? void 0 : null === (n = h.activity) || void 0 === n ? void 0 : n.shelf_rank,
    activity_user_session_id: c.activityUserSessionId,
    channel_type: u.type,
    media_session_ids: c.mediaSessionIds
  }), T.default.track(V.rMx.ACTIVITY_IFRAME_UNMOUNT, {
    channel_id: u.id,
    guild_id: f,
    application_id: r,
    instance_ids: null != c.launchId ? [c.launchId] : void 0,
    media_session_ids: c.mediaSessionIds,
    activity_user_session_id: c.activityUserSessionId,
    raw_thermal_state: g,
    duration_ms: s
  }), delete Y[r]
}

function et(e) {
  var t, n, r;
  let {
    applicationId: o,
    isFirstActivityInChannel: a,
    isStart: l,
    participants: c,
    embeddedActivity: u,
    location: f,
    inviterUserId: h
  } = e, m = b.default.getId(), g = c.find(e => e.userId === m), E = (0, U.pY)(f), v = y.Z.getChannel(E);
  if (l && null != v && v.isPrivate() && a && null == g && s.Z.selectParticipant(v.id, null), null == g) return;
  let S = O.Z.getMediaSessionId(),
    N = u.compositeInstanceId,
    A = null == S && (null == v ? void 0 : v.isVocal()) === !0 && (null == v ? void 0 : v.isPrivate()) === !1;
  if (null == N || A) return;
  let P = (0, i.Z)(),
    D = "location" in u ? 2 : 1,
    x = null == v ? void 0 : v.getGuildId(),
    M = I.default.getCurrentUser();
  if (null == v || null == M) return;
  let j = w.ZP.getShelfActivities(x),
    k = R.Z.getState().shelfOrder,
    G = (0, L.Z)({
      applicationId: o,
      activityConfigs: j
    }),
    B = 1 + k.findIndex(e => e === o),
    {
      releasePhase: F
    } = q(G),
    Z = _.Z.getRawThermalState(),
    H = null != S ? [S] : [],
    W = {
      activitySessionId: N,
      activityUserSessionId: P,
      launchId: u.launchId,
      mediaSessionIds: H,
      activitiesInfraVersion: D
    };
  Y[o] = W;
  let z = K[o];
  (0, C.Ew)(g.nonce) || g.nonce === (null == z ? void 0 : z.nonce) || (z = void 0), T.default.track(V.rMx.ACTIVITY_SESSION_JOINED, {
    channel_id: v.id,
    guild_id: v.getGuildId(),
    media_session_id: H[0],
    activity_session_id: N,
    application_id: o,
    location_stack: null == z ? void 0 : z.locations,
    user_premium_tier: M.premiumType,
    raw_thermal_state: Z,
    n_participants: p.Z.getUserParticipantCount(v.id),
    is_activity_start: l,
    release_phase: F,
    activity_premium_tier_requirement: null == G ? void 0 : null === (t = G.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
    shelf_rank: null == G ? void 0 : null === (n = G.activity) || void 0 === n ? void 0 : n.shelf_rank,
    shelf_sorted_rank: B > 0 ? B : null,
    activity_user_session_id: P,
    channel_type: v.type,
    source: null == z ? void 0 : z.source,
    command_context_type: (0, d.Vh)(v, o),
    invite_inviter_id: h
  }), T.default.track(V.rMx.ACTIVITY_IFRAME_MOUNT, {
    location_stack: null == z ? void 0 : z.locations,
    channel_id: v.id,
    channel_type: v.type,
    guild_id: v.getGuildId(),
    application_id: o,
    instance_id: u.launchId,
    initial_media_session_id: H[0],
    activity_user_session_id: P,
    raw_thermal_state: Z,
    is_activity_start: l,
    shelf_rank: null == G ? void 0 : null === (r = G.activity) || void 0 === r ? void 0 : r.shelf_rank,
    shelf_sorted_rank: B > 0 ? B : null,
    activities_infra_version: D
  })
}

function en(e) {
  return Y[e]
}
class er extends c.Z {
  _initialize() {
    S.Z.addChangeListener(this.handleSelectedChannelUpdate), N.S.subscribe(V.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), N.S.subscribe(V.CkL.OPEN_EMBEDDED_ACTIVITY, et), a.Z.subscribe("EMBEDDED_ACTIVITY_LAUNCH_START", $), a.Z.subscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess), a.Z.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), a.Z.subscribe("EMBEDDED_ACTIVITY_CLOSE", ee), a.Z.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), a.Z.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), a.Z.subscribe("CALL_DELETE", this.handleCallDelete), a.Z.subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState), a.Z.subscribe("GUILD_DELETE", this.handleGuildDelete), a.Z.subscribe("CHANNEL_DELETE", this.handleChannelDelete), a.Z.subscribe("INTERACTION_QUEUE", this.handleInteractionQueue), a.Z.subscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess), a.Z.subscribe("INTERACTION_FAILURE", this.handleInteractionFailure)
  }
  _terminate() {
    S.Z.removeChangeListener(this.handleSelectedChannelUpdate), N.S.unsubscribe(V.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), N.S.unsubscribe(V.CkL.OPEN_EMBEDDED_ACTIVITY, et), a.Z.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_START", $), a.Z.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess), a.Z.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), a.Z.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", ee), a.Z.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), a.Z.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), a.Z.unsubscribe("CALL_DELETE", this.handleCallDelete), a.Z.unsubscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState), a.Z.unsubscribe("GUILD_DELETE", this.handleGuildDelete), a.Z.unsubscribe("CHANNEL_DELETE", this.handleChannelDelete), a.Z.unsubscribe("INTERACTION_QUEUE", this.handleInteractionQueue), a.Z.unsubscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess), a.Z.unsubscribe("INTERACTION_FAILURE", this.handleInteractionFailure)
  }
  constructor(...e) {
    super(...e), H(this, "handleSelectedChannelUpdate", () => {
      let e = S.Z.getVoiceChannelId();
      for (let {
          location: t,
          applicationId: n
        }
        of w.ZP.getSelfEmbeddedActivities().values()) {
        let r = (0, U.pY)(t);
        null != r && (0, F.Z)(r) && r !== e && this.leaveActivity({
          location: t,
          applicationId: n
        })
      }
      if (null != e) {
        let t = w.ZP.getEmbeddedActivitiesForChannel(e),
          n = b.default.getId();
        t.forEach(e => {
          if (e.userIds.has(n)) {
            let t = (0, U.pY)(e.location),
              n = w.ZP.getSelfEmbeddedActivityForChannel(t);
            null == n ? this.leaveActivity({
              location: e.location,
              applicationId: e.applicationId
            }) : null == r && this.hidePIPEmbed({
              location: n.location,
              applicationId: n.applicationId
            })
          }
        })
      }
      r = null != e ? e : void 0
    }), H(this, "handleActivityWebViewRelease", () => {
      this.releaseWebView()
    }), H(this, "handleActivityLaunchSuccess", e => {
      let {
        nonce: t,
        applicationId: n
      } = e;
      J(n, t), (0, x.n9)() && this.showDevShelfOverrideEnabled()
    }), H(this, "handleActivityLaunchFail", async e => {
      let t, n, r, {
          error: i,
          nonce: o,
          channelId: a,
          applicationId: s,
          isStart: l
        } = e,
        c = X(s, o),
        u = Z.NW.string(Z.t["IOy+Iy"]);
      if (i instanceof h.Z) {
        t = 0, r = i.reason;
        let e = P.Z.getFetchState();
        switch (E.Sb.getSetting() && e !== P.O.LOADED && await (0, D.$h)(), i.reason) {
          case h.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
            P.Z.inDevModeForApplication(s) && (u = Z.NW.string(Z.t.hXRXf3));
            break;
          case h.Z.Reasons.INVALID_CHANNEL:
            u = Z.NW.string(Z.t.j29zCg);
            break;
          case h.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED:
            n = i.detailCode
        }
      } else if (i instanceof m.Z) {
        var d;
        t = 1, r = i.reason, u = null !== (d = (0, g.A0)(i.reason, s)) && void 0 !== d ? d : u
      } else switch (t = 2, n = i.status, r = i.code, i.code) {
        case V.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
          u = Z.NW.string(Z.t.Gyzcra);
          break;
        case V.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
          u = Z.NW.string(Z.t.zxv7EB);
          break;
        case V.evJ.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
          u = Z.NW.string(Z.t["H+KK6e"]);
          break;
        case V.evJ.INVALID_PERMISSIONS:
          u = Z.NW.string(Z.t.hHGrW1);
          break;
        case V.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
          u = Z.NW.string(Z.t.j29zCg);
          break;
        case V.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
          u = Z.NW.string(Z.t["4WuFRE"]);
          break;
        case V.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
          u = Z.NW.string(Z.t.RvkXdX);
          break;
        case V.evJ.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
          u = Z.NW.string(Z.t.uGDCc3)
      }
      this.showLaunchErrorModal(u);
      let f = y.Z.getChannel(a);
      if (null == f) return;
      let p = f.getGuildId(),
        v = _.Z.getRawThermalState();
      T.default.track(V.rMx.ACTIVITY_SESSION_JOIN_FAILED, {
        channel_id: a,
        guild_id: p,
        application_id: s,
        raw_thermal_state: v,
        is_activity_start: l,
        channel_type: null == f ? void 0 : f.type,
        location_stack: null == c ? void 0 : c.locations,
        error_type: t,
        error_status: n,
        error_code: r,
        source: null == c ? void 0 : c.source
      })
    }), H(this, "superHandleRPCDisconnect", e => {
      let {
        reason: t,
        application: n
      } = e, r = n.id;
      if (null != r && null != t) {
        for (let {
            applicationId: e,
            location: t
          }
          of w.ZP.getSelfEmbeddedActivities().values()) e === r && this.leaveActivity({
          location: t,
          applicationId: r
        });
        t.code !== V.$VG.CLOSE_NORMAL && (T.default.track(V.rMx.ACTIVITY_CLOSED_RPC_ERROR, {
          rpc_close_code: t.code,
          rpc_message: t.message,
          application_id: r
        }), this.showErrorModal(t, r))
      }
    }), H(this, "handleCallDelete", e => {
      let {
        channelId: t
      } = e, n = S.Z.getVoiceChannelId();
      null != n && n === t && this.handleCallEnded(t)
    }), H(this, "handleRTCConnectionState", e => {
      if (e.state !== V.hes.DISCONNECTED) return;
      let t = e.channelId;
      this.handleCallEnded(t)
    }), H(this, "handleCallEnded", e => {
      let t = w.ZP.getSelfEmbeddedActivityForChannel(e);
      null != t && this.leaveActivity({
        location: t.location,
        applicationId: t.applicationId
      })
    }), H(this, "handleDeferredOpen", async e => {
      var t, n, r;
      let {
        channelId: i,
        applicationId: o,
        analyticsLocations: a,
        commandOrigin: s,
        inviterUserId: l
      } = e, c = y.Z.getChannel(i);
      if (void 0 === c || v.tx.has(null == c ? void 0 : c.type) && S.Z.getVoiceChannelId() !== i) return;
      let u = w.ZP.getSelfEmbeddedActivityForChannel(i);
      if ((null == u ? void 0 : u.applicationId) === o) return;
      let d = await f.ZP.fetchApplication(o);
      if (!(0, k.a)(c)) {
        this.showLaunchErrorModal(Z.NW.string(Z.t.UXoQTk));
        return
      }
      if (!(0, B.Z)(null == d ? void 0 : null === (t = d.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
        this.showLaunchErrorModal(Z.NW.string(Z.t.uGDCc3));
        return
      }
      let p = null !== (n = null == c ? void 0 : c.getGuildId()) && void 0 !== n ? n : void 0,
        {
          activityConfigs: _,
          applications: h
        } = await (0, D.w1)({
          guildId: p
        });
      if (null == (0, L.Z)({
          applicationId: o,
          activityConfigs: _,
          applications: h
        })) {
        let e = await (0, D.w1)({
          guildId: p,
          force: !0
        });
        (0, L.Z)({
          applicationId: o,
          activityConfigs: e.activityConfigs,
          applications: e.applications
        })
      }
      let m = w.ZP.getEmbeddedActivitiesForChannel(i).find(e => e.applicationId === o);
      (null !== (r = null == m ? void 0 : m.userIds.size) && void 0 !== r ? r : 0) > 0 ? await (0, M.k)({
        channelId: i,
        applicationId: o,
        launchId: null == m ? void 0 : m.launchId,
        inputApplication: null,
        analyticsLocations: a,
        inviterUserId: l
      }) : await (0, j.Z)({
        targetApplicationId: o,
        channelId: i,
        analyticsLocations: a,
        commandOrigin: s,
        inviterUserId: l
      })
    }), H(this, "handleGuildDelete", e => {
      let {
        guild: t
      } = e;
      w.ZP.getSelfEmbeddedActivities().forEach(e => {
        let {
          location: n,
          applicationId: r
        } = e, i = (0, U.jS)(n);
        t.id === i && this.leaveActivity({
          location: n,
          applicationId: r
        })
      })
    }), H(this, "handleChannelDelete", e => {
      let {
        channel: t
      } = e, n = w.ZP.getSelfEmbeddedActivityForChannel(t.id);
      null != n && this.leaveActivity({
        location: n.location,
        applicationId: n.applicationId
      })
    }), H(this, "handleInteractionQueue", e => {
      let {
        nonce: t,
        data: n
      } = e;
      if (null == K[n.applicationId]) {
        let e;
        n.interactionType === l.B8.APPLICATION_COMMAND ? e = [u.Z.INTERACTION_APPLICATION_COMMAND] : n.interactionType === l.B8.MESSAGE_COMPONENT ? e = [u.Z.INTERACTION_MESSAGE_COMPONENT] : n.interactionType === l.B8.MODAL_SUBMIT && (e = [u.Z.INTERACTION_MODAL_SUBMIT]), Q({
          applicationId: n.applicationId,
          nonce: t,
          locations: e
        }) && (z[t] = n.applicationId)
      }
    }), H(this, "handleInteractionSuccess", e => {
      let {
        nonce: t
      } = e;
      if (null == t) return;
      let n = z[t];
      null != n && (delete z[t], J(n, t))
    }), H(this, "handleInteractionFailure", e => {
      let {
        nonce: t
      } = e;
      if (null == t) return;
      let n = z[t];
      null != n && (delete z[t], X(n, t))
    })
  }
}