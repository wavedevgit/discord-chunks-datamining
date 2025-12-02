/** Chunk was on web.js **/
/** chunk id: 287545, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  U: () => J,
  Z: () => $
}), require("./388685.js");
var Chunk772848 = require("./772848.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk475179 = require("./475179.js"),
  Chunk911969 = require("./911969.js"),
  Chunk317770 = require("./317770.js"),
  Chunk100527 = require("./100527.js"),
  Chunk807169 = require("./807169.js"),
  Chunk728345 = require("./728345.js"),
  Chunk358221 = require("./358221.js"),
  Chunk75060 = require("./75060.js"),
  Chunk131704 = require("./131704.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk358085 = require("./358085.js"),
  Chunk624138 = require("./624138.js"),
  Chunk24933 = require("./24933.js"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js"),
  Chunk969345 = require("./969345.js"),
  Chunk155268 = require("./155268.js"),
  Chunk148720 = require("./148720.js"),
  Chunk122613 = require("./122613.js"),
  Chunk790920 = require("./790920.js"),
  Chunk201567 = require("./201567.js"),
  Chunk16609 = require("./16609.js"),
  Chunk761122 = require("./761122.js"),
  Chunk983695 = require("./983695.js"),
  Chunk917107 = require("./917107.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let B = 2e3,
  F = {},
  V = {},
  H = {};

function Y(e) {
  var t;
  return {
    releasePhase: null == e || null == (t = e.activity) ? true : t.client_platform_config[(0, j.Z)((0, S.getOS)())].release_phase
  }
}

function W(e) {
  let {
    applicationId: t,
    nonce: n,
    locations: r,
    source: i
  } = e;
  return (null != r || null != i) && (V[t] = {
    nonce: n,
    locations: r,
    source: i
  }, true)
}

function K(e, t) {
  let n = V[e];
  if (null != n && n.nonce === t) return delete V[e], n
}

function z(e, t) {
  setTimeout(() => K(e, t), B)
}

function q(e) {
  let {
    applicationId: t,
    nonce: n,
    analyticsLocations: r,
    source: i
  } = e;
  W({
    applicationId: t,
    nonce: n,
    locations: r,
    source: null != i ? i : true
  })
}
async function X(e) {
  var t;
  let {
    applicationId: n,
    location: r,
    instanceId: i
  } = e, o = C.ZP.getEmbeddedActivityDurationMs(r.id, n), s = h.default.getSessionId();
  null != i && null != s && await a.tn.post({
    url: U.ANM.ACTIVITY_LEAVE(n, r.id, i),
    body: {
      session_id: s
    },
    retries: 2,
    rejectWithError: false
  });
  let l = F[n],
    c = (0, L.p)(r),
    u = (0, L.j)(r),
    d = g.Z.getChannel(c),
    f = y.default.getCurrentUser();
  if (null == l || null == f) return;
  let p = C.ZP.getShelfActivities(u),
    m = (0, N.Z)({
      applicationId: n,
      activityConfigs: p
    }),
    {
      releasePhase: E
    } = Y(m),
    b = _.Z.getRawThermalState();
  O.default.track(U.rMx.ACTIVITY_SESSION_LEFT, {
    channel_id: c,
    guild_id: u,
    media_session_id: l.mediaSessionIds[0],
    activity_session_id: l.activitySessionId,
    application_id: n,
    duration_ms: o,
    user_premium_tier: f.premiumType,
    raw_thermal_state: b,
    release_phase: E,
    shelf_rank: null == m || null == (t = m.activity) ? true : t.shelf_rank,
    activity_user_session_id: l.activityUserSessionId,
    channel_type: null == d ? true : d.type,
    media_session_ids: l.mediaSessionIds,
    embedded_activity_location_kind: r.kind
  }), O.default.track(U.rMx.ACTIVITY_IFRAME_UNMOUNT, {
    channel_id: c,
    guild_id: u,
    application_id: n,
    instance_ids: null != l.launchId ? [l.launchId] : true,
    media_session_ids: l.mediaSessionIds,
    activity_user_session_id: l.activityUserSessionId,
    raw_thermal_state: b,
    duration_ms: o,
    embedded_activity_location_kind: r.kind
  }), delete F[n]
}

function Q(e) {
  var t, n;
  let {
    applicationId: r,
    isFirstActivityInChannel: a,
    isStart: o,
    participants: l,
    embeddedActivity: c,
    location: u,
    inviterUserId: f
  } = e, m = h.default.getId(), b = l.find(e => e.userId === m), v = (0, L.p)(u), S = (0, L.j)(u), A = g.Z.getChannel(v);
  if (o && null != A && A.isPrivate() && a && null == b && s.Z.selectParticipant(A.id, null), null == b) return;
  let P = E.Z.getMediaSessionId(),
    R = c.compositeInstanceId,
    w = null == P && (null == A ? true : A.isVocal()) === true && (null == A ? true : A.isPrivate()) === false;
  if (null == R || w) return;
  let D = (0, i.Z)(),
    x = "location" in c ? 2 : 1,
    j = y.default.getCurrentUser();
  if (null == j) return;
  let M = C.ZP.getShelfActivities(S),
    k = T.Z.getState().shelfOrder,
    G = (0, N.Z)({
      applicationId: r,
      activityConfigs: M
    }),
    Z = 1 + k.findIndex(e => e === r),
    {
      releasePhase: B
    } = Y(G),
    H = _.Z.getRawThermalState(),
    W = null != P ? [P] : [],
    K = {
      activitySessionId: R,
      activityUserSessionId: D,
      launchId: c.launchId,
      mediaSessionIds: W,
      activitiesInfraVersion: x
    };
  F[r] = K;
  let z = V[r];
  (0, I.Ew)(b.nonce) || b.nonce === (null == z ? true : z.nonce) || (z = true), O.default.track(U.rMx.ACTIVITY_SESSION_JOINED, {
    channel_id: v,
    guild_id: S,
    media_session_id: W[0],
    activity_session_id: R,
    application_id: r,
    location_stack: null == z ? true : z.locations,
    user_premium_tier: j.premiumType,
    raw_thermal_state: H,
    n_participants: null != A ? p.Z.getUserParticipantCount(A.id) : null,
    is_activity_start: o,
    release_phase: B,
    shelf_rank: null == G || null == (t = G.activity) ? true : t.shelf_rank,
    shelf_sorted_rank: Z > 0 ? Z : null,
    activity_user_session_id: D,
    channel_type: null == A ? true : A.type,
    source: null == z ? true : z.source,
    command_context_type: null != A ? (0, d.Vh)(A, r) : null,
    invite_inviter_id: f,
    interaction_id: null == z ? true : z.interactionId,
    embedded_activity_location_kind: u.kind
  }), O.default.track(U.rMx.ACTIVITY_IFRAME_MOUNT, {
    location_stack: null == z ? true : z.locations,
    channel_id: v,
    channel_type: null == A ? true : A.type,
    guild_id: S,
    application_id: r,
    instance_id: c.launchId,
    initial_media_session_id: W[0],
    activity_user_session_id: D,
    raw_thermal_state: H,
    is_activity_start: o,
    shelf_rank: null == G || null == (n = G.activity) ? true : n.shelf_rank,
    shelf_sorted_rank: Z > 0 ? Z : null,
    activities_infra_version: x,
    embedded_activity_location_kind: u.kind
  })
}

function J(e) {
  return F[e]
}
class $ extends Chunk317770.Z {
  _initialize() {
    Chunk944486.Z.addChangeListener(this.handleSelectedChannelUpdate), Chunk585483.S.subscribe(Chunk981631.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), Chunk585483.S.subscribe(Chunk981631.CkL.OPEN_EMBEDDED_ACTIVITY, Q), Chunk570140.Z.subscribe("EMBEDDED_ACTIVITY_LAUNCH_START", q), Chunk570140.Z.subscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess), Chunk570140.Z.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), Chunk570140.Z.subscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel), Chunk570140.Z.subscribe("EMBEDDED_ACTIVITY_CLOSE", X), Chunk570140.Z.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), Chunk570140.Z.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), Chunk570140.Z.subscribe("CALL_DELETE", this.handleCallDelete), Chunk570140.Z.subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState), Chunk570140.Z.subscribe("GUILD_DELETE", this.handleGuildDelete), Chunk570140.Z.subscribe("CHANNEL_DELETE", this.handleChannelDelete), Chunk570140.Z.subscribe("INTERACTION_QUEUE", this.handleInteractionQueue), Chunk570140.Z.subscribe("INTERACTION_CREATE", this.handleInteractionCreate), Chunk570140.Z.subscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess), Chunk570140.Z.subscribe("INTERACTION_FAILURE", this.handleInteractionFailure)
  }
  _terminate() {
    Chunk944486.Z.removeChangeListener(this.handleSelectedChannelUpdate), Chunk585483.S.unsubscribe(Chunk981631.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), Chunk585483.S.unsubscribe(Chunk981631.CkL.OPEN_EMBEDDED_ACTIVITY, Q), Chunk570140.Z.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_START", q), Chunk570140.Z.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess), Chunk570140.Z.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), Chunk570140.Z.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel), Chunk570140.Z.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", X), Chunk570140.Z.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), Chunk570140.Z.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), Chunk570140.Z.unsubscribe("CALL_DELETE", this.handleCallDelete), Chunk570140.Z.unsubscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState), Chunk570140.Z.unsubscribe("GUILD_DELETE", this.handleGuildDelete), Chunk570140.Z.unsubscribe("CHANNEL_DELETE", this.handleChannelDelete), Chunk570140.Z.unsubscribe("INTERACTION_QUEUE", this.handleInteractionQueue), Chunk570140.Z.unsubscribe("INTERACTION_CREATE", this.handleInteractionCreate), Chunk570140.Z.unsubscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess), Chunk570140.Z.unsubscribe("INTERACTION_FAILURE", this.handleInteractionFailure)
  }
  constructor(...e) {
    super(...e), Z(this, "handleSelectedChannelUpdate", () => {
      let e = b.Z.getVoiceChannelId();
      for (let {
          location: t,
          applicationId: n
        }
        of C.ZP.getSelfEmbeddedActivities().values()) {
        let r = (0, L.p)(t);
        null != r && (0, k.Z)(r) && r !== e && this.leaveActivity({
          location: t,
          applicationId: n
        })
      }
      if (null != e) {
        let t = C.ZP.getEmbeddedActivitiesForChannel(e),
          n = h.default.getId();
        t.forEach(e => {
          if (e.userIds.has(n)) {
            let t = (0, L.p)(e.location),
              n = C.ZP.getSelfEmbeddedActivityForChannel(t);
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
      r = null != e ? e : true
    }), Z(this, "handleActivityWebViewRelease", () => {
      this.releaseWebView()
    }), Z(this, "handleActivityLaunchSuccess", e => {
      let {
        nonce: t,
        applicationId: n
      } = e;
      z(n, t), (0, P.n9)() && this.showDevShelfOverrideEnabled()
    }), Z(this, "handleActivityLaunchFail", async e => {
      let {
        error: t,
        nonce: n,
        channelId: r,
        guildId: i,
        applicationId: a,
        isStart: o,
        locationKind: s
      } = e, l = K(a, n), c = await (0, x.k)(t, a);
      this.showLaunchErrorModal(c.message);
      let u = g.Z.getChannel(r),
        d = _.Z.getRawThermalState();
      O.default.track(U.rMx.ACTIVITY_SESSION_JOIN_FAILED, {
        channel_id: r,
        guild_id: null != i ? i : null == u ? true : u.getGuildId(),
        application_id: a,
        raw_thermal_state: d,
        is_activity_start: o,
        channel_type: null == u ? true : u.type,
        location_stack: null == l ? true : l.locations,
        error_type: c.errorType,
        error_status: c.errorStatus,
        error_code: c.errorCode,
        source: null == l ? true : l.source,
        embedded_activity_location_kind: s
      })
    }), Z(this, "handleActivityLaunchCancel", e => {
      let {
        nonce: t,
        applicationId: n
      } = e;
      K(n, t)
    }), Z(this, "superHandleRPCDisconnect", e => {
      let {
        reason: t,
        application: n
      } = e, r = n.id;
      if (null != r && null != t) {
        for (let {
            applicationId: e,
            location: t
          }
          of C.ZP.getSelfEmbeddedActivities().values()) e === r && this.leaveActivity({
          location: t,
          applicationId: r
        });
        t.code !== U.$VG.CLOSE_NORMAL && (O.default.track(U.rMx.ACTIVITY_CLOSED_RPC_ERROR, {
          rpc_close_code: t.code,
          rpc_message: t.message,
          application_id: r
        }), this.showErrorModal(t, r))
      }
    }), Z(this, "handleCallDelete", e => {
      let {
        channelId: t
      } = e, n = b.Z.getVoiceChannelId();
      null != n && n === t && this.handleCallEnded(t)
    }), Z(this, "handleRTCConnectionState", e => {
      if (e.state !== U.hes.DISCONNECTED) return;
      let t = e.channelId;
      this.handleCallEnded(t)
    }), Z(this, "handleCallEnded", e => {
      let t = C.ZP.getSelfEmbeddedActivityForChannel(e);
      null != t && this.leaveActivity({
        location: t.location,
        applicationId: t.applicationId
      })
    }), Z(this, "handleDeferredOpen", async e => {
      var t, n, r;
      let {
        channelId: i,
        applicationId: a,
        analyticsLocations: o,
        commandOrigin: s,
        inviterUserId: l
      } = e, c = g.Z.getChannel(i);
      if (true === c || m.tx.has(null == c ? true : c.type) && b.Z.getVoiceChannelId() !== i) return;
      let u = C.ZP.getSelfEmbeddedActivityForChannel(i);
      if ((null == u ? true : u.applicationId) === a) return;
      let d = await f.ZP.fetchApplication(a);
      if (!(0, D.a)()) return void this.showLaunchErrorModal(G.intl.string(G.t.UXoQTp));
      if (!(0, M.Z)(null == d || null == (t = d.embedded_activity_config) ? true : t.supported_platforms)) return void this.showLaunchErrorModal(G.intl.string(G.t.uGDCcw));
      let p = null != (n = null == c ? true : c.getGuildId()) ? n : true,
        {
          activityConfigs: _,
          applications: h
        } = await (0, A.w1)({
          guildId: p
        });
      if (null == (0, N.Z)({
          applicationId: a,
          activityConfigs: _,
          applications: h
        })) {
        let e = await (0, A.w1)({
          guildId: p,
          force: true
        });
        (0, N.Z)({
          applicationId: a,
          activityConfigs: e.activityConfigs,
          applications: e.applications
        })
      }
      let E = C.ZP.getEmbeddedActivitiesForChannel(i).find(e => e.applicationId === a);
      (null != (r = null == E ? true : E.userIds.size) ? r : 0) > 0 ? await (0, R.k)({
        channelId: i,
        applicationId: a,
        launchId: null == E ? true : E.launchId,
        inputApplication: null,
        analyticsLocations: o,
        inviterUserId: l
      }) : await (0, w.Z)({
        targetApplicationId: a,
        channelId: i,
        analyticsLocations: o,
        commandOrigin: s,
        inviterUserId: l
      })
    }), Z(this, "handleGuildDelete", e => {
      let {
        guild: t
      } = e;
      C.ZP.getSelfEmbeddedActivities().forEach(e => {
        let {
          location: n,
          applicationId: r
        } = e, i = (0, L.j)(n);
        t.id === i && this.leaveActivity({
          location: n,
          applicationId: r
        })
      })
    }), Z(this, "handleChannelDelete", e => {
      let {
        channel: t
      } = e, n = C.ZP.getSelfEmbeddedActivityForChannel(t.id);
      null != n && this.leaveActivity({
        location: n.location,
        applicationId: n.applicationId
      })
    }), Z(this, "handleInteractionQueue", e => {
      let {
        nonce: t,
        data: n
      } = e;
      if (null == V[n.applicationId]) {
        let e;
        n.interactionType === l.B8.APPLICATION_COMMAND ? e = [u.Z.INTERACTION_APPLICATION_COMMAND] : n.interactionType === l.B8.MESSAGE_COMPONENT ? e = [u.Z.INTERACTION_MESSAGE_COMPONENT] : n.interactionType === l.B8.MODAL_SUBMIT && (e = [u.Z.INTERACTION_MODAL_SUBMIT]), W({
          applicationId: n.applicationId,
          nonce: t,
          locations: e
        }) && (H[t] = n.applicationId)
      }
    }), Z(this, "handleInteractionCreate", e => {
      let {
        nonce: t,
        interactionId: n
      } = e;
      if (null == t) return;
      let r = H[t];
      if (null == r) return;
      let i = V[r];
      null != i && (i.interactionId = n)
    }), Z(this, "handleInteractionSuccess", e => {
      let {
        nonce: t
      } = e;
      if (null == t) return;
      let n = H[t];
      null != n && (delete H[t], z(n, t))
    }), Z(this, "handleInteractionFailure", e => {
      let {
        nonce: t
      } = e;
      if (null == t) return;
      let n = H[t];
      null != n && (delete H[t], K(n, t))
    })
  }
}