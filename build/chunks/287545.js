/** Chunk was on web.js **/
/** chunk id: 287545, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  U: () => en,
  Z: () => er
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
  Chunk233764 = require("./233764.js"),
  Chunk375824 = require("./375824.js"),
  Chunk188597 = require("./188597.js"),
  Chunk695346 = require("./695346.js"),
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
  Chunk115130 = require("./115130.js"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js"),
  Chunk969345 = require("./969345.js"),
  Chunk155268 = require("./155268.js"),
  Chunk148720 = require("./148720.js"),
  Chunk122613 = require("./122613.js"),
  Chunk790920 = require("./790920.js"),
  Chunk16609 = require("./16609.js"),
  Chunk761122 = require("./761122.js"),
  Chunk983695 = require("./983695.js"),
  Chunk917107 = require("./917107.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");

function H(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let Y = 2e3,
  W = {},
  K = {},
  z = {};

function q(e) {
  var t;
  return {
    releasePhase: null == e || null == (t = e.activity) ? true : t.client_platform_config[(0, G.Z)((0, N.getOS)())].release_phase
  }
}

function X(e) {
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
  }, true)
}

function Q(e, t) {
  let n = K[e];
  if (null != n && n.nonce === t) return delete K[e], n
}

function J(e, t) {
  setTimeout(() => Q(e, t), Y)
}

function $(e) {
  let {
    applicationId: t,
    nonce: n,
    analyticsLocations: r,
    source: i
  } = e;
  X({
    applicationId: t,
    nonce: n,
    locations: r,
    source: null != i ? i : true
  })
}
async function ee(e) {
  var t;
  let {
    applicationId: n,
    location: r,
    instanceId: i
  } = e, a = D.ZP.getEmbeddedActivityDurationMs(r.id, n), s = y.default.getSessionId();
  null != i && null != s && await o.tn.post({
    url: F.ANM.ACTIVITY_LEAVE(n, r.id, i),
    body: {
      session_id: s
    },
    retries: 2,
    rejectWithError: false
  });
  let l = W[n],
    c = (0, U.p)(r),
    u = (0, U.j)(r),
    d = O.Z.getChannel(c),
    f = T.default.getCurrentUser();
  if (null == l || null == f) return;
  let _ = D.ZP.getShelfActivities(u),
    h = (0, L.Z)({
      applicationId: n,
      activityConfigs: _
    }),
    {
      releasePhase: m
    } = q(h),
    g = p.Z.getRawThermalState();
  S.default.track(F.rMx.ACTIVITY_SESSION_LEFT, {
    channel_id: c,
    guild_id: u,
    media_session_id: l.mediaSessionIds[0],
    activity_session_id: l.activitySessionId,
    application_id: n,
    duration_ms: a,
    user_premium_tier: f.premiumType,
    raw_thermal_state: g,
    release_phase: m,
    shelf_rank: null == h || null == (t = h.activity) ? true : t.shelf_rank,
    activity_user_session_id: l.activityUserSessionId,
    channel_type: null == d ? true : d.type,
    media_session_ids: l.mediaSessionIds,
    embedded_activity_location_kind: r.kind
  }), S.default.track(F.rMx.ACTIVITY_IFRAME_UNMOUNT, {
    channel_id: c,
    guild_id: u,
    application_id: n,
    instance_ids: null != l.launchId ? [l.launchId] : true,
    media_session_ids: l.mediaSessionIds,
    activity_user_session_id: l.activityUserSessionId,
    raw_thermal_state: g,
    duration_ms: a,
    embedded_activity_location_kind: r.kind
  }), delete W[n]
}

function et(e) {
  var t, n;
  let {
    applicationId: r,
    isFirstActivityInChannel: o,
    isStart: a,
    participants: l,
    embeddedActivity: c,
    location: u,
    inviterUserId: f
  } = e, h = y.default.getId(), m = l.find(e => e.userId === h), g = (0, U.p)(u), E = (0, U.j)(u), b = O.Z.getChannel(g);
  if (a && null != b && b.isPrivate() && o && null == m && s.Z.selectParticipant(b.id, null), null == m) return;
  let I = v.Z.getMediaSessionId(),
    A = c.compositeInstanceId,
    N = null == I && (null == b ? true : b.isVocal()) === true && (null == b ? true : b.isPrivate()) === false;
  if (null == A || N) return;
  let P = (0, i.Z)(),
    w = "location" in c ? 2 : 1,
    x = T.default.getCurrentUser();
  if (null == x) return;
  let M = D.ZP.getShelfActivities(E),
    k = R.Z.getState().shelfOrder,
    j = (0, L.Z)({
      applicationId: r,
      activityConfigs: M
    }),
    G = 1 + k.findIndex(e => e === r),
    {
      releasePhase: B
    } = q(j),
    Z = p.Z.getRawThermalState(),
    V = null != I ? [I] : [],
    H = {
      activitySessionId: A,
      activityUserSessionId: P,
      launchId: c.launchId,
      mediaSessionIds: V,
      activitiesInfraVersion: w
    };
  W[r] = H;
  let Y = K[r];
  (0, C.Ew)(m.nonce) || m.nonce === (null == Y ? true : Y.nonce) || (Y = true), S.default.track(F.rMx.ACTIVITY_SESSION_JOINED, {
    channel_id: g,
    guild_id: E,
    media_session_id: V[0],
    activity_session_id: A,
    application_id: r,
    location_stack: null == Y ? true : Y.locations,
    user_premium_tier: x.premiumType,
    raw_thermal_state: Z,
    n_participants: null != b ? _.Z.getUserParticipantCount(b.id) : null,
    is_activity_start: a,
    release_phase: B,
    shelf_rank: null == j || null == (t = j.activity) ? true : t.shelf_rank,
    shelf_sorted_rank: G > 0 ? G : null,
    activity_user_session_id: P,
    channel_type: null == b ? true : b.type,
    source: null == Y ? true : Y.source,
    command_context_type: null != b ? (0, d.Vh)(b, r) : null,
    invite_inviter_id: f,
    interaction_id: null == Y ? true : Y.interactionId,
    embedded_activity_location_kind: u.kind
  }), S.default.track(F.rMx.ACTIVITY_IFRAME_MOUNT, {
    location_stack: null == Y ? true : Y.locations,
    channel_id: g,
    channel_type: null == b ? true : b.type,
    guild_id: E,
    application_id: r,
    instance_id: c.launchId,
    initial_media_session_id: V[0],
    activity_user_session_id: P,
    raw_thermal_state: Z,
    is_activity_start: a,
    shelf_rank: null == j || null == (n = j.activity) ? true : n.shelf_rank,
    shelf_sorted_rank: G > 0 ? G : null,
    activities_infra_version: w,
    embedded_activity_location_kind: u.kind
  })
}

function en(e) {
  return W[e]
}
class er extends Chunk317770.Z {
  _initialize() {
    Chunk944486.Z.addChangeListener(this.handleSelectedChannelUpdate), Chunk585483.S.subscribe(Chunk981631.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), Chunk585483.S.subscribe(Chunk981631.CkL.OPEN_EMBEDDED_ACTIVITY, et), Chunk570140.Z.subscribe("EMBEDDED_ACTIVITY_LAUNCH_START", $), Chunk570140.Z.subscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess), Chunk570140.Z.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), Chunk570140.Z.subscribe("EMBEDDED_ACTIVITY_CLOSE", ee), Chunk570140.Z.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), Chunk570140.Z.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), Chunk570140.Z.subscribe("CALL_DELETE", this.handleCallDelete), Chunk570140.Z.subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState), Chunk570140.Z.subscribe("GUILD_DELETE", this.handleGuildDelete), Chunk570140.Z.subscribe("CHANNEL_DELETE", this.handleChannelDelete), Chunk570140.Z.subscribe("INTERACTION_QUEUE", this.handleInteractionQueue), Chunk570140.Z.subscribe("INTERACTION_CREATE", this.handleInteractionCreate), Chunk570140.Z.subscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess), Chunk570140.Z.subscribe("INTERACTION_FAILURE", this.handleInteractionFailure)
  }
  _terminate() {
    Chunk944486.Z.removeChangeListener(this.handleSelectedChannelUpdate), Chunk585483.S.unsubscribe(Chunk981631.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), Chunk585483.S.unsubscribe(Chunk981631.CkL.OPEN_EMBEDDED_ACTIVITY, et), Chunk570140.Z.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_START", $), Chunk570140.Z.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", this.handleActivityLaunchSuccess), Chunk570140.Z.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), Chunk570140.Z.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", ee), Chunk570140.Z.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), Chunk570140.Z.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), Chunk570140.Z.unsubscribe("CALL_DELETE", this.handleCallDelete), Chunk570140.Z.unsubscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState), Chunk570140.Z.unsubscribe("GUILD_DELETE", this.handleGuildDelete), Chunk570140.Z.unsubscribe("CHANNEL_DELETE", this.handleChannelDelete), Chunk570140.Z.unsubscribe("INTERACTION_QUEUE", this.handleInteractionQueue), Chunk570140.Z.unsubscribe("INTERACTION_CREATE", this.handleInteractionCreate), Chunk570140.Z.unsubscribe("INTERACTION_SUCCESS", this.handleInteractionSuccess), Chunk570140.Z.unsubscribe("INTERACTION_FAILURE", this.handleInteractionFailure)
  }
  constructor(...e) {
    super(...e), H(this, "handleSelectedChannelUpdate", () => {
      let e = I.Z.getVoiceChannelId();
      for (let {
          location: t,
          applicationId: n
        }
        of D.ZP.getSelfEmbeddedActivities().values()) {
        let r = (0, U.p)(t);
        null != r && (0, Z.Z)(r) && r !== e && this.leaveActivity({
          location: t,
          applicationId: n
        })
      }
      if (null != e) {
        let t = D.ZP.getEmbeddedActivitiesForChannel(e),
          n = y.default.getId();
        t.forEach(e => {
          if (e.userIds.has(n)) {
            let t = (0, U.p)(e.location),
              n = D.ZP.getSelfEmbeddedActivityForChannel(t);
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
          guildId: s,
          applicationId: l,
          isStart: c,
          locationKind: u
        } = e,
        d = Q(l, o),
        f = V.intl.string(V.t["IOy+Iy"]);
      if (i instanceof h.Z) {
        t = 0, r = i.reason;
        let e = P.Z.getFetchState();
        switch (E.Sb.getSetting() && e !== P.O.LOADED && await (0, w.$h)(), i.reason) {
          case h.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
            P.Z.inDevModeForApplication(l) && (f = V.intl.string(V.t.hXRXf3));
            break;
          case h.Z.Reasons.INVALID_CHANNEL:
            f = V.intl.string(V.t.j29zCg);
            break;
          case h.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED:
            n = i.detailCode
        }
      } else if (i instanceof m.Z) {
        var _;
        t = 1, r = i.reason, f = null != (_ = (0, g.A0)(i.reason, l)) ? _ : f
      } else switch (t = 2, n = i.status, r = i.code, i.code) {
        case F.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
          f = V.intl.string(V.t.Gyzcra);
          break;
        case F.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
          f = V.intl.string(V.t.zxv7EB);
          break;
        case F.evJ.INVALID_PERMISSIONS:
          f = V.intl.string(V.t.hHGrW1);
          break;
        case F.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
          f = V.intl.string(V.t.j29zCg);
          break;
        case F.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
          f = V.intl.string(V.t["4WuFRE"]);
          break;
        case F.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
          f = V.intl.string(V.t.RvkXdX);
          break;
        case F.evJ.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
          f = V.intl.string(V.t.uGDCc3)
      }
      this.showLaunchErrorModal(f);
      let b = O.Z.getChannel(a),
        y = p.Z.getRawThermalState();
      S.default.track(F.rMx.ACTIVITY_SESSION_JOIN_FAILED, {
        channel_id: a,
        guild_id: null != s ? s : null == b ? true : b.getGuildId(),
        application_id: l,
        raw_thermal_state: y,
        is_activity_start: c,
        channel_type: null == b ? true : b.type,
        location_stack: null == d ? true : d.locations,
        error_type: t,
        error_status: n,
        error_code: r,
        source: null == d ? true : d.source,
        embedded_activity_location_kind: u
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
          of D.ZP.getSelfEmbeddedActivities().values()) e === r && this.leaveActivity({
          location: t,
          applicationId: r
        });
        t.code !== F.$VG.CLOSE_NORMAL && (S.default.track(F.rMx.ACTIVITY_CLOSED_RPC_ERROR, {
          rpc_close_code: t.code,
          rpc_message: t.message,
          application_id: r
        }), this.showErrorModal(t, r))
      }
    }), H(this, "handleCallDelete", e => {
      let {
        channelId: t
      } = e, n = I.Z.getVoiceChannelId();
      null != n && n === t && this.handleCallEnded(t)
    }), H(this, "handleRTCConnectionState", e => {
      if (e.state !== F.hes.DISCONNECTED) return;
      let t = e.channelId;
      this.handleCallEnded(t)
    }), H(this, "handleCallEnded", e => {
      let t = D.ZP.getSelfEmbeddedActivityForChannel(e);
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
      } = e, c = O.Z.getChannel(i);
      if (true === c || b.tx.has(null == c ? true : c.type) && I.Z.getVoiceChannelId() !== i) return;
      let u = D.ZP.getSelfEmbeddedActivityForChannel(i);
      if ((null == u ? true : u.applicationId) === o) return;
      let d = await f.ZP.fetchApplication(o);
      if (!(0, j.a)()) return void this.showLaunchErrorModal(V.intl.string(V.t.UXoQTk));
      if (!(0, B.Z)(null == d || null == (t = d.embedded_activity_config) ? true : t.supported_platforms)) return void this.showLaunchErrorModal(V.intl.string(V.t.uGDCc3));
      let _ = null != (n = null == c ? true : c.getGuildId()) ? n : true,
        {
          activityConfigs: p,
          applications: h
        } = await (0, w.w1)({
          guildId: _
        });
      if (null == (0, L.Z)({
          applicationId: o,
          activityConfigs: p,
          applications: h
        })) {
        let e = await (0, w.w1)({
          guildId: _,
          force: true
        });
        (0, L.Z)({
          applicationId: o,
          activityConfigs: e.activityConfigs,
          applications: e.applications
        })
      }
      let m = D.ZP.getEmbeddedActivitiesForChannel(i).find(e => e.applicationId === o);
      (null != (r = null == m ? true : m.userIds.size) ? r : 0) > 0 ? await (0, M.k)({
        channelId: i,
        applicationId: o,
        launchId: null == m ? true : m.launchId,
        inputApplication: null,
        analyticsLocations: a,
        inviterUserId: l
      }) : await (0, k.Z)({
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
      D.ZP.getSelfEmbeddedActivities().forEach(e => {
        let {
          location: n,
          applicationId: r
        } = e, i = (0, U.j)(n);
        t.id === i && this.leaveActivity({
          location: n,
          applicationId: r
        })
      })
    }), H(this, "handleChannelDelete", e => {
      let {
        channel: t
      } = e, n = D.ZP.getSelfEmbeddedActivityForChannel(t.id);
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
        n.interactionType === l.B8.APPLICATION_COMMAND ? e = [u.Z.INTERACTION_APPLICATION_COMMAND] : n.interactionType === l.B8.MESSAGE_COMPONENT ? e = [u.Z.INTERACTION_MESSAGE_COMPONENT] : n.interactionType === l.B8.MODAL_SUBMIT && (e = [u.Z.INTERACTION_MODAL_SUBMIT]), X({
          applicationId: n.applicationId,
          nonce: t,
          locations: e
        }) && (z[t] = n.applicationId)
      }
    }), H(this, "handleInteractionCreate", e => {
      let {
        nonce: t,
        interactionId: n
      } = e;
      if (null == t) return;
      let r = z[t];
      if (null == r) return;
      let i = K[r];
      null != i && (i.interactionId = n)
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
      null != n && (delete z[t], Q(n, t))
    })
  }
}