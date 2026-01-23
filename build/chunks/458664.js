/** Chunk was on web.js **/
/** chunk id: 458664, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => ee,
  D: () => J
}), require("./896048.js");
var Chunk835245 = require("./835245.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk367513 = require("./367513.js"),
  Chunk155718 = require("./155718.js"),
  Chunk272355 = require("./272355.js"),
  Chunk793574 = require("./793574.js"),
  Chunk240591 = require("./240591.js"),
  Chunk627363 = require("./627363.js"),
  Chunk313961 = require("./313961.js"),
  Chunk655087 = require("./655087.js"),
  Chunk95701 = require("./95701.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk383501 = require("./383501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk723702 = require("./723702.js"),
  Chunk240248 = require("./240248.js"),
  Chunk918052 = require("./918052.js"),
  Chunk795816 = require("./795816.js"),
  Chunk933958 = require("./933958.js"),
  Chunk692957 = require("./692957.js"),
  Chunk956518 = require("./956518.js"),
  Chunk281362 = require("./281362.js"),
  Chunk956549 = require("./956549.js"),
  Chunk170148 = require("./170148.js"),
  Chunk907645 = require("./907645.js"),
  Chunk969151 = require("./969151.js"),
  Chunk847381 = require("./847381.js"),
  Chunk166352 = require("./166352.js"),
  Chunk108959 = require("./108959.js"),
  Chunk859007 = require("./859007.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let B = 2e3,
  H = {},
  Y = {},
  W = {};

function K(e) {
  var t;
  return {
    releasePhase: null == e || null == (t = e.activity) ? true : t.client_platform_config[(0, j.A)((0, A.getOS)())].release_phase
  }
}

function z(e) {
  let {
    applicationId: t,
    nonce: n,
    locations: r,
    source: i
  } = e;
  return (null != r || null != i) && (Y[t] = {
    nonce: n,
    locations: r,
    source: i
  }, true)
}

function q(e, t) {
  let n = Y[e];
  if (null != n && n.nonce === t) return delete Y[e], n
}

function X(e, t) {
  setTimeout(() => q(e, t), B)
}

function Z(e) {
  let {
    applicationId: t,
    nonce: n,
    analyticsLocations: r,
    source: i
  } = e;
  z({
    applicationId: t,
    nonce: n,
    locations: r,
    source: null != i ? i : true
  })
}
async function Q(e) {
  var t;
  let {
    applicationId: n,
    location: r,
    instanceId: i
  } = e, s = C.Ay.getEmbeddedActivityDurationMs(r.id, n), o = m.default.getSessionId();
  null != i && null != o && await a.Bo.post({
    url: G.Rsh.ACTIVITY_LEAVE(n, r.id, i),
    body: {
      session_id: o
    },
    retries: 2,
    rejectWithError: false
  });
  let l = H[n],
    c = (0, L.H)(r),
    u = (0, L.D)(r),
    d = g.A.getChannel(c),
    f = b.default.getCurrentUser();
  if (null == l || null == f) return;
  let p = C.Ay.getShelfActivities(u),
    h = (0, N.A)({
      applicationId: n,
      activityConfigs: p
    }),
    {
      releasePhase: E
    } = K(h),
    y = _.A.getRawThermalState();
  O.default.track(G.HAw.ACTIVITY_SESSION_LEFT, {
    channel_id: c,
    guild_id: u,
    media_session_id: l.mediaSessionIds[0],
    activity_session_id: l.activitySessionId,
    application_id: n,
    duration_ms: s,
    user_premium_tier: f.premiumType,
    raw_thermal_state: y,
    release_phase: E,
    shelf_rank: null == h || null == (t = h.activity) ? true : t.shelf_rank,
    activity_user_session_id: l.activityUserSessionId,
    channel_type: null == d ? true : d.type,
    media_session_ids: l.mediaSessionIds,
    embedded_activity_location_kind: r.kind
  }), O.default.track(G.HAw.ACTIVITY_IFRAME_UNMOUNT, {
    channel_id: c,
    guild_id: u,
    application_id: n,
    instance_ids: null != l.launchId ? [l.launchId] : true,
    media_session_ids: l.mediaSessionIds,
    activity_user_session_id: l.activityUserSessionId,
    raw_thermal_state: y,
    duration_ms: s,
    embedded_activity_location_kind: r.kind
  }), delete H[n]
}

function $(e) {
  var t, n;
  let {
    applicationId: r,
    isFirstActivityInChannel: a,
    isStart: s,
    participants: l,
    embeddedActivity: c,
    location: u,
    inviterUserId: f
  } = e;
  if ((0, U.y)({
      applicationId: r
    })) return;
  let h = m.default.getId(),
    y = l.find(e => e.userId === h),
    v = (0, L.H)(u),
    A = (0, L.D)(u),
    T = g.A.getChannel(v);
  if (s && null != T && T.isPrivate() && a && null == y && o.A.selectParticipant(T.id, null), null == y) return;
  let R = E.A.getMediaSessionId(),
    w = c.compositeInstanceId,
    P = null == R && (null == T ? true : T.isVocal()) === true && (null == T ? true : T.isPrivate()) === false;
  if (null == w || P) return;
  let D = (0, i.A)(),
    x = "location" in c ? 2 : 1,
    j = b.default.getCurrentUser();
  if (null == j) return;
  let M = C.Ay.getShelfActivities(A),
    k = S.A.getState().shelfOrder,
    V = (0, N.A)({
      applicationId: r,
      activityConfigs: M
    }),
    F = 1 + k.findIndex(e => e === r),
    {
      releasePhase: B
    } = K(V),
    W = _.A.getRawThermalState(),
    z = null != R ? [R] : [],
    q = {
      activitySessionId: w,
      activityUserSessionId: D,
      launchId: c.launchId,
      mediaSessionIds: z,
      activitiesInfraVersion: x
    };
  H[r] = q;
  let X = Y[r];
  (0, I.uJ)(y.nonce) || y.nonce === (null == X ? true : X.nonce) || (X = true), O.default.track(G.HAw.ACTIVITY_SESSION_JOINED, {
    channel_id: v,
    guild_id: A,
    media_session_id: z[0],
    activity_session_id: w,
    application_id: r,
    location_stack: null == X ? true : X.locations,
    user_premium_tier: j.premiumType,
    raw_thermal_state: W,
    n_participants: null != T ? p.A.getUserParticipantCount(T.id) : null,
    is_activity_start: s,
    release_phase: B,
    shelf_rank: null == V || null == (t = V.activity) ? true : t.shelf_rank,
    shelf_sorted_rank: F > 0 ? F : null,
    activity_user_session_id: D,
    channel_type: null == T ? true : T.type,
    source: null == X ? true : X.source,
    command_context_type: null != T ? (0, d.ud)(T, r) : null,
    invite_inviter_id: f,
    interaction_id: null == X ? true : X.interactionId,
    embedded_activity_location_kind: u.kind
  }), O.default.track(G.HAw.ACTIVITY_IFRAME_MOUNT, {
    location_stack: null == X ? true : X.locations,
    channel_id: v,
    channel_type: null == T ? true : T.type,
    guild_id: A,
    application_id: r,
    instance_id: c.launchId,
    initial_media_session_id: z[0],
    activity_user_session_id: D,
    raw_thermal_state: W,
    is_activity_start: s,
    shelf_rank: null == V || null == (n = V.activity) ? true : n.shelf_rank,
    shelf_sorted_rank: F > 0 ? F : null,
    activities_infra_version: x,
    embedded_activity_location_kind: u.kind
  })
}

function J(e) {
  return H[e]
}
class ee extends Chunk272355.A {
  _initialize() {
    y.A.addChangeListener(this.handleSelectedChannelUpdate), v._.subscribe(G.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), v._.subscribe(G.jej.OPEN_EMBEDDED_ACTIVITY, $), s.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_START", Z), s.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess), s.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), s.h.subscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel), s.h.subscribe("EMBEDDED_ACTIVITY_CLOSE", Q), s.h.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), s.h.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), s.h.subscribe("CALL_DELETE", this.handleCallDelete), s.h.subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState), s.h.subscribe("GUILD_DELETE", this.handleGuildDelete), s.h.subscribe("CHANNEL_DELETE", this.handleChannelDelete), s.h.subscribe("INTERACTION_QUEUE", this.handleInteractionQueue), s.h.subscribe("INTERACTION_CREATE", this.handleInteractionCreate), s.h.subscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess), s.h.subscribe("INTERACTION_FAILURE", this.handleInteractionFailure)
  }
  _terminate() {
    y.A.removeChangeListener(this.handleSelectedChannelUpdate), v._.unsubscribe(G.jej.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), v._.unsubscribe(G.jej.OPEN_EMBEDDED_ACTIVITY, $), s.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_START", Z), s.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess), s.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), s.h.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_CANCEL", this.handleActivityLaunchCancel), s.h.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", Q), s.h.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), s.h.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), s.h.unsubscribe("CALL_DELETE", this.handleCallDelete), s.h.unsubscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState), s.h.unsubscribe("GUILD_DELETE", this.handleGuildDelete), s.h.unsubscribe("CHANNEL_DELETE", this.handleChannelDelete), s.h.unsubscribe("INTERACTION_QUEUE", this.handleInteractionQueue), s.h.unsubscribe("INTERACTION_CREATE", this.handleInteractionCreate), s.h.unsubscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess), s.h.unsubscribe("INTERACTION_FAILURE", this.handleInteractionFailure)
  }
  constructor(...e) {
    super(...e), F(this, "handleSelectedChannelUpdate", () => {
      let e = y.A.getVoiceChannelId();
      for (let {
          location: t,
          applicationId: n
        }
        of C.Ay.getSelfEmbeddedActivities().values()) {
        let r = (0, L.H)(t);
        null != r && (0, k.A)(r) && r !== e && this.leaveActivity({
          location: t,
          applicationId: n
        })
      }
      if (null != e) {
        let t = C.Ay.getEmbeddedActivitiesForChannel(e),
          n = m.default.getId();
        t.forEach(e => {
          if (e.userIds.has(n)) {
            let t = (0, L.H)(e.location),
              n = C.Ay.getSelfEmbeddedActivityForChannel(t);
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
    }), F(this, "handleActivityWebViewRelease", () => {
      this.releaseWebView()
    }), F(this, "handleActivityLaunchSuccess", e => {
      let {
        nonce: t,
        applicationId: n
      } = e;
      X(n, t), (0, R.sF)() && this.showDevShelfOverrideEnabled()
    }), F(this, "handleActivityLaunchFail", async e => {
      let {
        error: t,
        nonce: n,
        channelId: r,
        guildId: i,
        applicationId: a,
        isStart: s,
        locationKind: o
      } = e, l = q(a, n), c = await (0, x.f)(t, a);
      this.showLaunchErrorModal(c.message);
      let u = g.A.getChannel(r),
        d = _.A.getRawThermalState();
      O.default.track(G.HAw.ACTIVITY_SESSION_JOIN_FAILED, {
        channel_id: r,
        guild_id: null != i ? i : null == u ? true : u.getGuildId(),
        application_id: a,
        raw_thermal_state: d,
        is_activity_start: s,
        channel_type: null == u ? true : u.type,
        location_stack: null == l ? true : l.locations,
        error_type: c.errorType,
        error_status: c.errorStatus,
        error_code: c.errorCode,
        source: null == l ? true : l.source,
        embedded_activity_location_kind: o
      })
    }), F(this, "handleActivityLaunchCancel", e => {
      let {
        nonce: t,
        applicationId: n
      } = e;
      q(n, t)
    }), F(this, "superHandleRPCDisconnect", e => {
      let {
        reason: t,
        application: n
      } = e, r = n.id;
      if (null != r && null != t) {
        for (let {
            applicationId: e,
            location: t
          }
          of C.Ay.getSelfEmbeddedActivities().values()) e === r && this.leaveActivity({
          location: t,
          applicationId: r
        });
        t.code !== G.YI$.CLOSE_NORMAL && (O.default.track(G.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
          rpc_close_code: t.code,
          rpc_message: t.message,
          application_id: r
        }), this.showErrorModal(t, r))
      }
    }), F(this, "handleCallDelete", e => {
      let {
        channelId: t
      } = e, n = y.A.getVoiceChannelId();
      null != n && n === t && this.handleCallEnded(t)
    }), F(this, "handleRTCConnectionState", e => {
      if (e.state !== G.S7L.DISCONNECTED) return;
      let t = e.channelId;
      this.handleCallEnded(t)
    }), F(this, "handleCallEnded", e => {
      let t = C.Ay.getSelfEmbeddedActivityForChannel(e);
      null != t && this.leaveActivity({
        location: t.location,
        applicationId: t.applicationId
      })
    }), F(this, "handleDeferredOpen", async e => {
      var t, n, r;
      let {
        channelId: i,
        applicationId: a,
        analyticsLocations: s,
        commandOrigin: o,
        inviterUserId: l
      } = e, c = g.A.getChannel(i);
      if (true === c || h.OU.has(null == c ? true : c.type) && y.A.getVoiceChannelId() !== i) return;
      let u = C.Ay.getSelfEmbeddedActivityForChannel(i);
      if ((null == u ? true : u.applicationId) === a) return;
      let d = await f.Ay.fetchApplication(a);
      if (!(0, D.A)()) return void this.showLaunchErrorModal(V.intl.string(V.t.UXoQTp));
      if (!(0, M.A)(null == d || null == (r = d.embedded_activity_config) ? true : r.supported_platforms)) return void this.showLaunchErrorModal(V.intl.string(V.t.uGDCcw));
      let p = null != (t = null == c ? true : c.getGuildId()) ? t : true,
        {
          activityConfigs: _,
          applications: m
        } = await (0, T.LV)({
          guildId: p
        });
      if (null == (0, N.A)({
          applicationId: a,
          activityConfigs: _,
          applications: m
        })) {
        let e = await (0, T.LV)({
          guildId: p,
          force: true
        });
        (0, N.A)({
          applicationId: a,
          activityConfigs: e.activityConfigs,
          applications: e.applications
        })
      }
      let E = C.Ay.getEmbeddedActivitiesForChannel(i).find(e => e.applicationId === a);
      (null != (n = null == E ? true : E.userIds.size) ? n : 0) > 0 ? await (0, w.E)({
        channelId: i,
        applicationId: a,
        launchId: null == E ? true : E.launchId,
        inputApplication: null,
        analyticsLocations: s,
        inviterUserId: l
      }) : await (0, P.A)({
        targetApplicationId: a,
        channelId: i,
        analyticsLocations: s,
        commandOrigin: o,
        inviterUserId: l
      })
    }), F(this, "handleGuildDelete", e => {
      let {
        guild: t
      } = e;
      C.Ay.getSelfEmbeddedActivities().forEach(e => {
        let {
          location: n,
          applicationId: r
        } = e, i = (0, L.D)(n);
        t.id === i && this.leaveActivity({
          location: n,
          applicationId: r
        })
      })
    }), F(this, "handleChannelDelete", e => {
      let {
        channel: t
      } = e, n = C.Ay.getSelfEmbeddedActivityForChannel(t.id);
      null != n && this.leaveActivity({
        location: n.location,
        applicationId: n.applicationId
      })
    }), F(this, "handleInteractionQueue", e => {
      let {
        nonce: t,
        data: n
      } = e;
      if (null == Y[n.applicationId]) {
        let e;
        n.interactionType === l.G4.APPLICATION_COMMAND ? e = [u.A.INTERACTION_APPLICATION_COMMAND] : n.interactionType === l.G4.MESSAGE_COMPONENT ? e = [u.A.INTERACTION_MESSAGE_COMPONENT] : n.interactionType === l.G4.MODAL_SUBMIT && (e = [u.A.INTERACTION_MODAL_SUBMIT]), z({
          applicationId: n.applicationId,
          nonce: t,
          locations: e
        }) && (W[t] = n.applicationId)
      }
    }), F(this, "handleInteractionCreate", e => {
      let {
        nonce: t,
        interactionId: n
      } = e;
      if (null == t) return;
      let r = W[t];
      if (null == r) return;
      let i = Y[r];
      null != i && (i.interactionId = n)
    }), F(this, "handleInteractionSuccess", e => {
      let {
        nonce: t
      } = e;
      if (null == t) return;
      let n = W[t];
      null != n && (delete W[t], X(n, t))
    }), F(this, "handleInteractionFailure", e => {
      let {
        nonce: t
      } = e;
      if (null == t) return;
      let n = W[t];
      null != n && (delete W[t], q(n, t))
    })
  }
}