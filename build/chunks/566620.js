/** Chunk was on web.js **/
/** chunk id: 566620, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $h: () => e_,
  G6: () => ec,
  Gj: () => eI,
  W5: () => eO,
  a_: () => eT,
  cG: () => el,
  gC: () => eS,
  kv: () => eh,
  mW: () => ep,
  nJ: () => eC,
  pu: () => eb,
  sN: () => eE,
  tg: () => ev,
  ux: () => ey,
  w1: () => eg
}), require("./997841.js"), require("./388685.js"), require("./415506.js");
var Chunk990547 = require("./990547.js"),
  Chunk252258 = require("./252258.js"),
  Chunk95015 = require("./95015.js"),
  Chunk544891 = require("./544891.js"),
  Chunk704215 = require("./704215.js"),
  Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk493683 = require("./493683.js"),
  Chunk475179 = require("./475179.js"),
  Chunk447543 = require("./447543.js"),
  Chunk904245 = require("./904245.js"),
  Chunk479531 = require("./479531.js"),
  Chunk911969 = require("./911969.js"),
  Chunk213459 = require("./213459.js"),
  Chunk667204 = require("./667204.js"),
  Chunk812236 = require("./812236.js"),
  Chunk812206 = require("./812206.js"),
  Chunk104919 = require("./104919.js"),
  Chunk413523 = require("./413523.js"),
  Chunk358221 = require("./358221.js"),
  Chunk605236 = require("./605236.js"),
  Chunk233764 = require("./233764.js"),
  Chunk375824 = require("./375824.js"),
  Chunk48131 = require("./48131.js"),
  Chunk591472 = require("./591472.js"),
  Chunk686440 = require("./686440.js"),
  Chunk837366 = require("./837366.js"),
  Chunk957730 = require("./957730.js"),
  Chunk48854 = require("./48854.js"),
  Chunk522474 = require("./522474.js"),
  Chunk835873 = require("./835873.js"),
  Chunk973616 = require("./973616.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk626135 = require("./626135.js"),
  Chunk823379 = require("./823379.js"),
  Chunk573261 = require("./573261.js"),
  Chunk595519 = require("./595519.js"),
  Chunk317381 = require("./317381.js"),
  Chunk882347 = require("./882347.js"),
  Chunk16609 = require("./16609.js"),
  Chunk224189 = require("./224189.js"),
  Chunk374065 = require("./374065.js"),
  Chunk917107 = require("./917107.js"),
  Chunk89425 = require("./89425.js"),
  Chunk275920 = require("./275920.js"),
  Chunk701488 = require("./701488.js"),
  Chunk918559 = require("./918559.js"),
  Chunk981631 = require("./981631.js"),
  Chunk674563 = require("./674563.js"),
  Chunk921944 = require("./921944.js"),
  Chunk245335 = require("./245335.js"),
  Chunk388032 = require("./388032.jsx");

function eo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function es(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eo(e, t, n[t])
    })
  }
  return e
}

function el(e) {
  let t = Y.ZP.getSelfEmbeddedActivityForLocation(e);
  null != t && ep({
    location: t.location,
    applicationId: t.applicationId,
    showFeedback: false
  })
}
async function ec(e) {
  var t, r;
  let {
    channelId: a,
    applicationId: o,
    isStart: s,
    analyticsLocations: c,
    locationObject: u,
    embeddedActivitiesManager: d,
    componentId: f,
    commandOrigin: p,
    sectionName: h,
    source: m,
    onExecutedCallback: g,
    referrerId: E,
    customId: y,
    inviterUserId: O,
    onConfirmActivityLaunchChecksAlertOpen: v
  } = e, S = M.Z.getChannel(a), w = null != (t = null == S ? true : S.getGuildId()) ? t : true;
  if (null == w && !(null != (r = null == S ? true : S.isPrivate()) && r)) returnfalse;
  let x = b.Z.getApplication(o),
    L = null != x && (0, N.g)(x),
    j = (0, R.r)();
  try {
    if (D.Z.getWindowOpen(et.KJ3.ACTIVITY_POPOUT)) {
      let {
        close: e
      } = n(788983);
      e(et.KJ3.ACTIVITY_POPOUT)
    }
    let e = A.Z.getConnectedFrame();
    if (null != e && (0, P.Z)().leaveFrame({
        applicationId: e.applicationId
      }), L) return await C.Z.launchFrame({
      applicationId: o
    }), true;
    l.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_START",
      nonce: j,
      applicationId: o,
      channelId: null != a ? a : null,
      componentId: f,
      analyticsLocations: c,
      source: m,
      commandOrigin: p,
      inviterUserId: O,
      launchParams: {
        customId: y,
        referrerId: E
      }
    });
    let t = await eT(o, null != a ? a : true);
    l.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
      applicationId: o,
      channelId: null != a ? a : null,
      proxyTicket: t
    });
    let r = G.default.getCurrentUser();
    if (null != r && (0, J.Z)({
        type: s ? et.q5t.LAUNCH : et.q5t.JOIN,
        userId: null == r ? true : r.id,
        guildId: w,
        channelId: a,
        channelType: null == S ? true : S.type,
        applicationId: o,
        locationObject: u,
        analyticsLocations: null != c ? c : [],
        source: m,
        referrerId: E,
        inviterUserId: O
      }), s) {
      if (null == a || !eu(o, S)) throw new I.Z(I.Z.Reasons.INVALID_CHANNEL);
      let e = await ed({
        applicationId: o,
        nonce: j,
        channelId: a,
        guildId: w,
        commandOrigin: p,
        sectionName: h,
        source: m,
        onExecutedCallback: g,
        onConfirmActivityLaunchChecksAlertOpen: v,
        embeddedActivitiesManager: d
      });
      if ("failure" === e.result)
        if (4 === e.reason) return l.Z.dispatch({
          type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL",
          nonce: j,
          applicationId: o,
          channelId: null != a ? a : null
        }), false;
        else throw new I.Z(I.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND)
    } else {
      let e = await ef({
        applicationId: o,
        channelId: a,
        embeddedActivitiesManager: d,
        isStart: s,
        guildId: w
      });
      if (null == g || g(), "failure" === e.result) throw new I.Z(I.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason)
    }
    l.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS",
      nonce: j,
      applicationId: o,
      channelId: null != a ? a : null
    })
  } catch (t) {
    if (L) returnfalse;
    let e = null != w ? i.E.GUILD_CHANNEL : i.E.PRIVATE_CHANNEL;
    return l.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
      nonce: j,
      applicationId: o,
      channelId: null != a ? a : null,
      guildId: null != w ? w : null,
      isStart: s,
      error: t instanceof I.Z || t instanceof _.Z || t instanceof T.Z ? t : new _.Z(t),
      locationKind: e
    }), false
  }
  returntrue
}

function eu(e, t) {
  let n = (null == t ? true : t.type) === et.d4z.GUILD_VOICE,
    r = b.Z.getApplication(e),
    i = null != r && (0, a.yE)(r.flags, et.udG.EMBEDDED),
    o = (0, H.l5)(t);
  return n && i || o
}
async function ed(e) {
  let {
    applicationId: t,
    nonce: n,
    channelId: r,
    guildId: i,
    commandOrigin: a,
    sectionName: o,
    source: s,
    onExecutedCallback: l,
    onConfirmActivityLaunchChecksAlertOpen: c,
    embeddedActivitiesManager: u
  } = e, d = null;
  try {
    d = await (0, E.ZP)(r, t)
  } catch (e) {
    if (e.message === E.sV) return {
      result: "failure",
      reason: 1
    };
    throw e
  }
  let f = d.handler !== h.VC.APP_HANDLER;
  if (!(f || en.Yq.includes(t))) {
    null != r && await (0, m.FN)({
      type: "channel",
      channelId: r
    }), await (0, m.FN)({
      type: "user"
    });
    let e = M.Z.getChannel(r),
      {
        isAuthorized: n
      } = await (0, y.L)({
        applicationId: t,
        channel: e,
        commandIntegrationTypes: d.integration_types
      });
    if (!n) return {
      result: "failure",
      reason: 2
    }
  }
  let p = M.Z.getChannel(r),
    O = null != i ? k.Z.getGuild(i) : null;
  if (null == p) return {
    result: "failure",
    reason: 3
  };
  if (f) {
    let e, n = b.Z.getApplication(t),
      r = Y.ZP.getCurrentEmbeddedActivity();
    (null == r ? true : r.applicationId) != null && (e = b.Z.getApplication(null == r ? true : r.applicationId));
    let i = G.default.getCurrentUser();
    if (null != i && !await (0, W.p)({
        applicationId: t,
        application: n,
        channel: p,
        currentEmbeddedApplication: e,
        embeddedActivitiesManager: u,
        user: i,
        onConfirmActivityLaunchChecksAlertOpen: c,
        shouldClosePopoutOnLeaveCurrentEmbeddedApplication: false
      })) return {
      result: "failure",
      reason: 4
    }
  }
  return await new Promise((e, c) => {
    (0, g.Z)({
      command: d,
      optionValues: {},
      context: {
        channel: p,
        guild: O
      },
      commandOrigin: a,
      sectionName: o,
      source: s,
      interactionLifecycleOptionsFactory: () => ({
        nonce: n,
        onSuccess: () => {
          null == l || l(), e()
        },
        onFailure: (e, n, a, o) => {
          null == l || l(), F.default.track(et.rMx.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
            channel_id: r,
            guild_id: i,
            application_id: t,
            channel_type: null == p ? true : p.type,
            error_code: e,
            error_message: n,
            error_status: a,
            error_reason_code: o,
            source: s
          }), null != e && null != n && null != a ? c(new _.Z({
            status: a,
            body: {
              message: n,
              code: e
            }
          })) : null != o && o in T.Z.ReasonCodes ? c(new T.Z(o)) : c(new T.Z(T.Z.ReasonCodes.UNKNOWN))
        }
      })
    })
  }), {
    result: "success"
  }
}
async function ef(e) {
  let t, {
      applicationId: n,
      channelId: i,
      embeddedActivitiesManager: a,
      isStart: o,
      guildId: s
    } = e,
    l = j.default.getSessionId(),
    u = G.default.getCurrentUser(),
    d = n;
  if (null == d) return {
    result: "failure",
    reason: 1
  };
  let f = await (0, z.Z)(d, i);
  if (null == u || null == f) return {
    result: "failure",
    reason: 2
  };
  if (null == i) return {
    result: "failure",
    reason: 3
  };
  let p = M.Z.getChannel(i);
  if (null == p) return {
    result: "failure",
    reason: 3
  };
  let _ = (0, q.e4)({
    channelId: i,
    ChannelStore: M.Z,
    GuildStore: k.Z,
    PermissionStore: U.Z,
    VoiceStateStore: Z.Z
  });
  if (_ !== q.jy.CAN_LAUNCH) {
    let e = 4;
    return _ === q.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION ? (e = 5, (0, x.w)()) : _ === q.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS && (e = 6, c.Z.show({
      title: ea.intl.string(ea.t["IOy+I5"]),
      body: ea.intl.string(ea.t.UXoQTp),
      hideActionSheet: false
    })), {
      result: "failure",
      reason: e
    }
  }
  let h = Y.ZP.getCurrentEmbeddedActivity();
  if ((null == h ? true : h.applicationId) != null && (t = b.Z.getApplication(null == h ? true : h.applicationId)), !(!o || await (0, W.p)({
      applicationId: n,
      application: f,
      channel: p,
      currentEmbeddedApplication: t,
      embeddedActivitiesManager: a,
      user: u
    }))) return {
    result: "failure",
    reason: 7
  };
  if (null != p) {
    let e = (0, Q.Z)(p.id),
      n = $.wP.includes(p.type);
    if (e) {
      if (!await (0, X.Z)({
          channelId: p.id,
          bypassChangeModal: null != t
        })) return {
        result: "failure",
        reason: 8
      }
    } else if (!(0, H.WS)(p) || !n) return {
      result: "failure",
      reason: 9
    }
  }
  let m = {
    trackedActionData: {
      event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
      properties: {
        guild_id: s,
        channel_id: i,
        application_id: n,
        session_id: l
      }
    },
    retries: 3,
    oldFormErrors: true,
    rejectWithError: true
  };
  return null != i ? (await V.Z.post(es({
    url: et.ANM.ACTIVITY_CHANNEL_LAUNCH(i, n),
    body: {
      session_id: l,
      guild_id: null != s ? s : true
    }
  }, m)), {
    result: "success"
  }) : {
    result: "failure",
    reason: 0
  }
}

function ep(e) {
  let {
    location: t,
    applicationId: n,
    showFeedback: r = true
  } = e, i = Y.ZP.getSelfEmbeddedActivityForLocation(t);
  l.Z.dispatch({
    type: "EMBEDDED_ACTIVITY_CLOSE",
    applicationId: n,
    location: t,
    instanceId: null == i ? true : i.launchId,
    showFeedback: r
  });
  let a = (0, K.p)(t);
  if (null != a) {
    var o;
    let e = v.Z.getSelectedParticipantId(a),
      t = null == (o = G.default.getCurrentUser()) ? true : o.id,
      r = Y.ZP.getEmbeddedActivitiesForChannel(a).find(e => e.applicationId === n);
    if (null == r || null == t || "" === t) return;
    e === (0, O.gN)({
      applicationId: n,
      instanceId: null == r ? true : r.compositeInstanceId
    }) && d.Z.selectParticipant(a, null)
  }
}
async function e_() {
  try {
    l.Z.dispatch({
      type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START"
    });
    let e = await o.tn.get({
        url: et.ANM.APPLICATIONS_WITH_ASSETS,
        query: {
          with_team_applications: true
        },
        oldFormErrors: true,
        rejectWithError: true
      }),
      t = e.body.applications,
      n = t.map(e => L.ZP.createFromServer(e));
    l.Z.dispatch({
      type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS",
      applications: n,
      assets: e.body.assets
    }), l.Z.dispatch({
      type: "APPLICATIONS_FETCH_SUCCESS",
      applications: t
    })
  } catch (e) {
    l.Z.dispatch({
      type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL"
    })
  }
}
async function eh(e, t, n) {
  try {
    l.Z.dispatch({
      type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START"
    });
    let r = null != t ? {
        channel_id: t
      } : true,
      i = await o.tn.post({
        url: et.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
        query: r,
        attachments: [{
          name: "file",
          file: n
        }],
        rejectWithError: true
      });
    return l.Z.dispatch({
      type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS",
      attachment: i.body.attachment
    }), i.body.attachment
  } catch (e) {
    return l.Z.dispatch({
      type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL"
    }), new _.Z(e)
  }
}
let em = (e, t, n) => {
  let {
    guildId: r
  } = n;
  (r === e || null == r && null == e) && t()
};
async function eg(e) {
  var t, n, i, a;
  let {
    guildId: o,
    force: s = false
  } = e, c = Y.ZP.getShelfActivities(o), u = c.map(e => b.Z.getApplication(e.application_id)).filter(B.lm);
  if (!s && !Y.ZP.shouldFetchShelf(o)) {
    if (null == (t = Y.ZP.getShelfFetchStatus(o)) ? true : t.isFetching) {
      let e, t, n = new Promise(t => {
          e = em.bind(null, o, t), l.Z.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e)
        }),
        r = new Promise(e => {
          t = em.bind(null, o, e), l.Z.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t)
        });
      await Promise.race([n, r]), null != e && (l.Z.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e), e = null), null != t && (l.Z.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t), t = null)
    }
    return {
      activityConfigs: c,
      applications: u
    }
  }
  try {
    l.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_FETCH_SHELF",
      guildId: o
    });
    let e = true !== o && "" !== o ? {
        guild_id: o
      } : true,
      t = await V.Z.get({
        url: et.ANM.ACTIVITY_SHELF,
        query: e,
        trackedActionData: {
          event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
          properties: {
            guild_id: o
          }
        },
        retries: 0,
        oldFormErrors: true,
        rejectWithError: true
      }),
      s = null != (n = t.body.activities) ? n : [],
      c = null != (i = t.body.applications) ? i : [],
      u = null != (a = t.body.assets) ? a : {};
    return l.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
      guildId: o,
      activities: s,
      applications: c,
      assets: u
    }), c.length > 0 && l.Z.dispatch({
      type: "APPLICATIONS_FETCH_SUCCESS",
      applications: c
    }), {
      activityConfigs: s,
      applications: c.map(e => L.ZP.createFromServer(e))
    }
  } catch (e) {
    return l.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL",
      guildId: o
    }), {
      activityConfigs: c,
      applications: u
    }
  }
}
async function eE(e) {
  let {
    activityChannelId: t,
    invitedChannelId: n,
    applicationId: r,
    location: i,
    inviteAnalyticsMetadata: a
  } = e, o = await f.ZP.createInvite(t, {
    target_type: ei.Iq.EMBEDDED_APPLICATION,
    target_application_id: r
  }, i);
  null != M.Z.getChannel(n) && p.Z.sendInvite(n, o.code, i, a)
}
async function eb(e) {
  let {
    channelId: t,
    applicationId: n,
    userId: r,
    location: i,
    inviteAnalyticsMetadata: a,
    prefixedContent: o
  } = e, s = await f.ZP.createInvite(t, {
    target_type: ei.Iq.EMBEDDED_APPLICATION,
    target_application_id: n
  }, i);
  await u.Z.ensurePrivateChannel(r).then(e => {
    let t, n = M.Z.getChannel(e);
    if (null == n) throw Error("Private channel not found");
    null != o && (t = w.ZP.parse(n, o).content), p.Z.sendInvite(e, s.code, i, a, t)
  })
}

function ey() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : er.L.INDIRECT_ACTION;
  (0, S.wH)(s.z.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1e3), {
    dismissAction: e
  })
}
async function eO(e) {
  let t = et.ANM.ACTIVITY_TEST_MODE(e);
  try {
    return await o.tn.get({
      url: t,
      oldFormErrors: true,
      rejectWithError: true
    }), true
  } catch (e) {
    returnfalse
  }
}

function ev(e) {
  l.Z.dispatch({
    type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE",
    activityPanelMode: e
  })
}

function eS(e) {
  l.Z.dispatch({
    type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT",
    focusedActivityLayout: e
  })
}

function eI() {
  ev(ee.Ez.ACTIVITY_POPOUT_WINDOW), l.Z.dispatch({
    type: "ACTIVITY_POPOUT_WINDOW_OPEN"
  })
}
async function eT(e, t) {
  let n = {};
  return null != t && (n.channel_id = t), (await o.tn.post({
    url: et.ANM.APPLICATION_PROXY_TICKET(e),
    body: n,
    rejectWithError: true
  })).body.ticket
}
async function eC(e, t) {
  l.Z.dispatch({
    type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING",
    applicationId: e,
    refreshing: true
  });
  try {
    let n = await eT(e, null != t ? t : true);
    l.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
      applicationId: e,
      channelId: t,
      proxyTicket: n
    }), l.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET",
      applicationId: e,
      proxyTicket: n
    })
  } catch (s) {
    var n;
    let r = M.Z.getChannel(t),
      a = null != (n = null == r ? true : r.guild_id) ? n : null,
      o = null != a ? i.E.GUILD_CHANNEL : i.E.PRIVATE_CHANNEL;
    return l.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
      nonce: (0, R.r)(),
      applicationId: e,
      channelId: t,
      guildId: a,
      locationKind: o,
      error: s instanceof I.Z || s instanceof _.Z || s instanceof T.Z ? s : new _.Z(s)
    }), false
  } finally {
    l.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING",
      applicationId: e,
      refreshing: false
    })
  }
  returntrue
}