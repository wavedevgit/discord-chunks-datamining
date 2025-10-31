/** Chunk was on web.js **/
/** chunk id: 566620, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $h: () => e_,
  G6: () => el,
  Gj: () => eI,
  W5: () => ey,
  a_: () => eT,
  cG: () => es,
  gC: () => ev,
  kv: () => ep,
  mW: () => ef,
  nJ: () => eS,
  pu: () => eE,
  sN: () => eg,
  tg: () => eO,
  ux: () => eb,
  w1: () => em
}), require("./997841.js"), require("./388685.js"), require("./415506.js");
var Chunk990547 = require("./990547.js"),
  Chunk252258 = require("./252258.js"),
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
  Chunk957730 = require("./957730.js"),
  Chunk48854 = require("./48854.js"),
  Chunk522474 = require("./522474.js"),
  Chunk788983 = require("./788983.js"),
  Chunk835873 = require("./835873.js"),
  Chunk973616 = require("./973616.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk626135 = require("./626135.js"),
  Chunk630388 = require("./630388.js"),
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

function ea(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ea(e, t, n[t])
    })
  }
  return e
}

function es(e) {
  let t = H.ZP.getSelfEmbeddedActivityForLocation(e);
  null != t && ef({
    location: t.location,
    applicationId: t.applicationId,
    showFeedback: false
  })
}
async function el(e) {
  var t, n;
  let {
    channelId: r,
    applicationId: a,
    isStart: o,
    analyticsLocations: l,
    locationObject: c,
    embeddedActivitiesManager: u,
    componentId: d,
    commandOrigin: f,
    sectionName: p,
    source: h,
    onExecutedCallback: m,
    referrerId: g,
    customId: E,
    inviterUserId: b,
    onConfirmActivityLaunchChecksAlertOpen: y
  } = e, O = L.Z.getChannel(r), v = null != (t = null == O ? true : O.getGuildId()) ? t : true;
  if (null == v && !(null != (n = null == O ? true : O.isPrivate()) && n)) returnfalse;
  let C = (0, N.r)();
  try {
    R.Z.getWindowOpen(ee.KJ3.ACTIVITY_POPOUT) && (0, P.xv)(ee.KJ3.ACTIVITY_POPOUT);
    let e = A.Z.getConnectedFrame();
    null != e && S.Z.stopFrame({
      applicationId: e.applicationId
    }), s.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_START",
      nonce: C,
      applicationId: a,
      channelId: null != r ? r : null,
      componentId: d,
      analyticsLocations: l,
      source: h,
      commandOrigin: f,
      inviterUserId: b,
      launchParams: {
        customId: E,
        referrerId: g
      }
    });
    let t = await eT(a, null != r ? r : true);
    s.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
      applicationId: a,
      channelId: null != r ? r : null,
      proxyTicket: t
    });
    let n = k.default.getCurrentUser();
    if (null != n && (0, Q.Z)({
        type: o ? ee.q5t.LAUNCH : ee.q5t.JOIN,
        userId: null == n ? true : n.id,
        guildId: v,
        channelId: r,
        channelType: null == O ? true : O.type,
        applicationId: a,
        locationObject: c,
        analyticsLocations: null != l ? l : [],
        source: h,
        referrerId: g,
        inviterUserId: b
      }), o) {
      if (null == r || !ec(a, O)) throw new I.Z(I.Z.Reasons.INVALID_CHANNEL);
      let e = await eu({
        applicationId: a,
        nonce: C,
        channelId: r,
        guildId: v,
        commandOrigin: f,
        sectionName: p,
        source: h,
        onExecutedCallback: m,
        onConfirmActivityLaunchChecksAlertOpen: y,
        embeddedActivitiesManager: u
      });
      if ("failure" === e.result)
        if (4 === e.reason) return s.Z.dispatch({
          type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL",
          nonce: C,
          applicationId: a,
          channelId: null != r ? r : null
        }), false;
        else throw new I.Z(I.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND)
    } else {
      let e = await ed({
        applicationId: a,
        channelId: r,
        embeddedActivitiesManager: u,
        isStart: o,
        guildId: v
      });
      if (null == m || m(), "failure" === e.result) throw new I.Z(I.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason)
    }
    s.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS",
      nonce: C,
      applicationId: a,
      channelId: null != r ? r : null
    })
  } catch (t) {
    let e = null != v ? i.E.GUILD_CHANNEL : i.E.PRIVATE_CHANNEL;
    return s.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
      nonce: C,
      applicationId: a,
      channelId: null != r ? r : null,
      guildId: null != v ? v : null,
      isStart: o,
      error: t instanceof I.Z || t instanceof _.Z || t instanceof T.Z ? t : new _.Z(t),
      locationKind: e
    }), false
  }
  returntrue
}

function ec(e, t) {
  let n = (null == t ? true : t.type) === ee.d4z.GUILD_VOICE,
    r = E.Z.getApplication(e),
    i = null != r && (0, B.yE)(r.flags, ee.udG.EMBEDDED),
    a = (0, V.l5)(t);
  return n && i || a
}
async function eu(e) {
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
    d = await (0, g.ZP)(r, t)
  } catch (e) {
    if (e.message === g.sV) return {
      result: "failure",
      reason: 1
    };
    throw e
  }
  let f = d.handler !== p.VC.APP_HANDLER;
  if (!(f || et.Yq.includes(t))) {
    null != r && await (0, h.FN)({
      type: "channel",
      channelId: r
    }), await (0, h.FN)({
      type: "user"
    });
    let e = L.Z.getChannel(r),
      {
        isAuthorized: n
      } = await (0, b.L)({
        applicationId: t,
        channel: e,
        commandIntegrationTypes: d.integration_types
      });
    if (!n) return {
      result: "failure",
      reason: 2
    }
  }
  let y = L.Z.getChannel(r),
    O = null != i ? M.Z.getGuild(i) : null;
  if (null == y) return {
    result: "failure",
    reason: 3
  };
  if (f) {
    let e, n = E.Z.getApplication(t),
      r = H.ZP.getCurrentEmbeddedActivity();
    (null == r ? true : r.applicationId) != null && (e = E.Z.getApplication(null == r ? true : r.applicationId));
    let i = k.default.getCurrentUser();
    if (null != i && !await (0, Y.p)({
        applicationId: t,
        application: n,
        channel: y,
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
    (0, m.Z)({
      command: d,
      optionValues: {},
      context: {
        channel: y,
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
          null == l || l(), G.default.track(ee.rMx.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
            channel_id: r,
            guild_id: i,
            application_id: t,
            channel_type: null == y ? true : y.type,
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
async function ed(e) {
  let t, {
      applicationId: n,
      channelId: i,
      embeddedActivitiesManager: a,
      isStart: o,
      guildId: s
    } = e,
    c = x.default.getSessionId(),
    u = k.default.getCurrentUser(),
    d = n;
  if (null == d) return {
    result: "failure",
    reason: 1
  };
  let f = await (0, K.Z)(d, i);
  if (null == u || null == f) return {
    result: "failure",
    reason: 2
  };
  if (null == i) return {
    result: "failure",
    reason: 3
  };
  let _ = L.Z.getChannel(i);
  if (null == _) return {
    result: "failure",
    reason: 3
  };
  let p = (0, z.e4)({
    channelId: i,
    ChannelStore: L.Z,
    GuildStore: M.Z,
    PermissionStore: j.Z,
    VoiceStateStore: U.Z
  });
  if (p !== z.jy.CAN_LAUNCH) {
    let e = 4;
    return p === z.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION ? (e = 5, (0, w.w)()) : p === z.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS && (e = 6, l.Z.show({
      title: ei.intl.string(ei.t["IOy+I5"]),
      body: ei.intl.string(ei.t.UXoQTp),
      hideActionSheet: false
    })), {
      result: "failure",
      reason: e
    }
  }
  let h = H.ZP.getCurrentEmbeddedActivity();
  if ((null == h ? true : h.applicationId) != null && (t = E.Z.getApplication(null == h ? true : h.applicationId)), !(!o || await (0, Y.p)({
      applicationId: n,
      application: f,
      channel: _,
      currentEmbeddedApplication: t,
      embeddedActivitiesManager: a,
      user: u
    }))) return {
    result: "failure",
    reason: 7
  };
  if (null != _) {
    let e = (0, q.Z)(_.id),
      n = J.wP.includes(_.type);
    if (e) {
      if (!await (0, X.Z)({
          channelId: _.id,
          bypassChangeModal: null != t
        })) return {
        result: "failure",
        reason: 8
      }
    } else if (!(0, V.WS)(_) || !n) return {
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
        session_id: c
      }
    },
    retries: 3,
    oldFormErrors: true,
    rejectWithError: true
  };
  return null != i ? (await F.Z.post(eo({
    url: ee.ANM.ACTIVITY_CHANNEL_LAUNCH(i, n),
    body: {
      session_id: c,
      guild_id: null != s ? s : true
    }
  }, m)), {
    result: "success"
  }) : {
    result: "failure",
    reason: 0
  }
}

function ef(e) {
  let {
    location: t,
    applicationId: n,
    showFeedback: r = true
  } = e, i = H.ZP.getSelfEmbeddedActivityForLocation(t);
  s.Z.dispatch({
    type: "EMBEDDED_ACTIVITY_CLOSE",
    applicationId: n,
    location: t,
    instanceId: null == i ? true : i.launchId,
    showFeedback: r
  });
  let a = (0, W.p)(t);
  if (null != a) {
    var o;
    let e = O.Z.getSelectedParticipantId(a),
      t = null == (o = k.default.getCurrentUser()) ? true : o.id,
      r = H.ZP.getEmbeddedActivitiesForChannel(a).find(e => e.applicationId === n);
    if (null == r || null == t || "" === t) return;
    e === (0, y.gN)({
      applicationId: n,
      instanceId: null == r ? true : r.compositeInstanceId
    }) && u.Z.selectParticipant(a, null)
  }
}
async function e_() {
  try {
    Chunk570140.Z.dispatch({
      type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START"
    });
    let e = await Chunk544891.tn.get({
        url: Chunk981631.ANM.APPLICATIONS_WITH_ASSETS,
        query: {
          with_team_applications: true
        },
        oldFormErrors: true,
        rejectWithError: true
      }),
      t = module.body.applications,
      n = exports.map(e => D.ZP.createFromServer(e));
    Chunk570140.Z.dispatch({
      type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS",
      applications: require,
      assets: module.body.assets
    }), Chunk570140.Z.dispatch({
      type: "APPLICATIONS_FETCH_SUCCESS",
      applications: exports
    })
  } catch (e) {
    Chunk570140.Z.dispatch({
      type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL"
    })
  }
}
async function ep(e, t, n) {
  try {
    s.Z.dispatch({
      type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START"
    });
    let r = null != t ? {
        channel_id: t
      } : true,
      i = await a.tn.post({
        url: ee.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
        query: r,
        attachments: [{
          name: "file",
          file: n
        }],
        rejectWithError: true
      });
    return s.Z.dispatch({
      type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS",
      attachment: i.body.attachment
    }), i.body.attachment
  } catch (e) {
    return s.Z.dispatch({
      type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL"
    }), new _.Z(e)
  }
}
let eh = (e, t, n) => {
  let {
    guildId: r
  } = n;
  (r === e || null == r && null == e) && t()
};
async function em(e) {
  var t, n, i, a;
  let {
    guildId: o,
    force: l = false
  } = e, c = H.ZP.getShelfActivities(o), u = c.map(e => E.Z.getApplication(e.application_id)).filter(Z.lm);
  if (!l && !H.ZP.shouldFetchShelf(o)) {
    if (null == (t = H.ZP.getShelfFetchStatus(o)) ? true : t.isFetching) {
      let e, t, n = new Promise(t => {
          e = eh.bind(null, o, t), s.Z.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e)
        }),
        r = new Promise(e => {
          t = eh.bind(null, o, e), s.Z.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t)
        });
      await Promise.race([n, r]), null != e && (s.Z.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e), e = null), null != t && (s.Z.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t), t = null)
    }
    return {
      activityConfigs: c,
      applications: u
    }
  }
  try {
    s.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_FETCH_SHELF",
      guildId: o
    });
    let e = true !== o && "" !== o ? {
        guild_id: o
      } : true,
      t = await F.Z.get({
        url: ee.ANM.ACTIVITY_SHELF,
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
      l = null != (n = t.body.activities) ? n : [],
      c = null != (i = t.body.applications) ? i : [],
      u = null != (a = t.body.assets) ? a : {};
    return s.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
      guildId: o,
      activities: l,
      applications: c,
      assets: u
    }), c.length > 0 && s.Z.dispatch({
      type: "APPLICATIONS_FETCH_SUCCESS",
      applications: c
    }), {
      activityConfigs: l,
      applications: c.map(e => D.ZP.createFromServer(e))
    }
  } catch (e) {
    return s.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL",
      guildId: o
    }), {
      activityConfigs: c,
      applications: u
    }
  }
}
async function eg(e) {
  let {
    activityChannelId: t,
    invitedChannelId: n,
    applicationId: r,
    location: i,
    inviteAnalyticsMetadata: a
  } = e, o = await d.ZP.createInvite(t, {
    target_type: er.Iq.EMBEDDED_APPLICATION,
    target_application_id: r
  }, i);
  null != L.Z.getChannel(n) && f.Z.sendInvite(n, o.code, i, a)
}
async function eE(e) {
  let {
    channelId: t,
    applicationId: n,
    userId: r,
    location: i,
    inviteAnalyticsMetadata: a,
    prefixedContent: o
  } = e, s = await d.ZP.createInvite(t, {
    target_type: er.Iq.EMBEDDED_APPLICATION,
    target_application_id: n
  }, i);
  await c.Z.ensurePrivateChannel(r).then(e => {
    let t, n = L.Z.getChannel(e);
    if (null == n) throw Error("Private channel not found");
    null != o && (t = C.ZP.parse(n, o).content), f.Z.sendInvite(e, s.code, i, a, t)
  })
}

function eb() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk921944.L.INDIRECT_ACTION;
  (0, Chunk605236.wH)(Chunk704215.z.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1e3), {
    dismissAction: module
  })
}
async function ey(e) {
  let t = ee.ANM.ACTIVITY_TEST_MODE(e);
  try {
    return await a.tn.get({
      url: t,
      oldFormErrors: true,
      rejectWithError: true
    }), true
  } catch (e) {
    returnfalse
  }
}

function eO(e) {
  s.Z.dispatch({
    type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE",
    activityPanelMode: e
  })
}

function ev(e) {
  s.Z.dispatch({
    type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT",
    focusedActivityLayout: e
  })
}

function eI() {
  eO(Chunk918559.Ez.ACTIVITY_POPOUT_WINDOW), Chunk570140.Z.dispatch({
    type: "ACTIVITY_POPOUT_WINDOW_OPEN"
  })
}
async function eT(e, t) {
  let n = {};
  return null != t && (n.channel_id = t), (await a.tn.post({
    url: ee.ANM.APPLICATION_PROXY_TICKET(e),
    body: n,
    rejectWithError: true
  })).body.ticket
}
async function eS(e, t) {
  s.Z.dispatch({
    type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING",
    applicationId: e,
    refreshing: true
  });
  try {
    let n = await eT(e, null != t ? t : true);
    s.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
      applicationId: e,
      channelId: t,
      proxyTicket: n
    }), s.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET",
      applicationId: e,
      proxyTicket: n
    })
  } catch (l) {
    var n;
    let r = L.Z.getChannel(t),
      a = null != (n = null == r ? true : r.guild_id) ? n : null,
      o = null != a ? i.E.GUILD_CHANNEL : i.E.PRIVATE_CHANNEL;
    return s.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
      nonce: (0, N.r)(),
      applicationId: e,
      channelId: t,
      guildId: a,
      locationKind: o,
      error: l instanceof I.Z || l instanceof _.Z || l instanceof T.Z ? l : new _.Z(l)
    }), false
  } finally {
    s.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING",
      applicationId: e,
      refreshing: false
    })
  }
  returntrue
}