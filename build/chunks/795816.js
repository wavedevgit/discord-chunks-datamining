/** Chunk was on web.js **/
/** chunk id: 795816, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CS: () => e_,
  D2: () => eI,
  Ir: () => eb,
  LK: () => ey,
  LV: () => em,
  SE: () => ep,
  Ue: () => eE,
  _H: () => ef,
  gk: () => eO,
  i5: () => ev,
  jp: () => eA,
  od: () => eS,
  rW: () => es,
  su: () => el,
  tk: () => eg
}), require("./938796.js"), require("./896048.js"), require("./65821.js");
var Chunk110259 = require("./110259.js"),
  Chunk344351 = require("./344351.js"),
  Chunk665260 = require("./665260.js"),
  Chunk562465 = require("./562465.js"),
  Chunk554146 = require("./554146.js"),
  Chunk73153 = require("./73153.js"),
  Chunk157559 = require("./157559.js"),
  Chunk308528 = require("./308528.js"),
  Chunk367513 = require("./367513.js"),
  Chunk846293 = require("./846293.js"),
  Chunk843472 = require("./843472.js"),
  Chunk181658 = require("./181658.js"),
  Chunk155718 = require("./155718.js"),
  Chunk264322 = require("./264322.js"),
  Chunk545152 = require("./545152.js"),
  Chunk361926 = require("./361926.js"),
  Chunk587895 = require("./587895.js"),
  Chunk972995 = require("./972995.js"),
  Chunk568598 = require("./568598.js"),
  Chunk313961 = require("./313961.js"),
  Chunk367727 = require("./367727.js"),
  Chunk744230 = require("./744230.js"),
  Chunk113267 = require("./113267.js"),
  Chunk207371 = require("./207371.js"),
  Chunk451909 = require("./451909.js"),
  Chunk195880 = require("./195880.js"),
  Chunk87001 = require("./87001.js"),
  Chunk192552 = require("./192552.js"),
  Chunk611010 = require("./611010.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk954571 = require("./954571.js"),
  Chunk403362 = require("./403362.js"),
  Chunk499785 = require("./499785.js"),
  Chunk811024 = require("./811024.js"),
  Chunk933958 = require("./933958.js"),
  Chunk383497 = require("./383497.js"),
  Chunk969151 = require("./969151.js"),
  Chunk817636 = require("./817636.js"),
  Chunk782091 = require("./782091.js"),
  Chunk108959 = require("./108959.js"),
  Chunk448739 = require("./448739.js"),
  Chunk90804 = require("./90804.js"),
  Chunk946255 = require("./946255.js"),
  Chunk859007 = require("./859007.js"),
  Chunk360469 = require("./360469.js"),
  Chunk5867 = require("./5867.js"),
  Chunk652215 = require("./652215.js"),
  Chunk705751 = require("./705751.js"),
  Chunk49999 = require("./49999.js"),
  Chunk172799 = require("./172799.js"),
  Chunk985018 = require("./985018.jsx");

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
  let t = B.Ay.getSelfEmbeddedActivityForLocation(e);
  null != t && ef({
    location: t.location,
    applicationId: t.applicationId,
    showFeedback: false
  })
}
async function el(e) {
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
    customId: b,
    inviterUserId: O,
    onConfirmActivityLaunchChecksAlertOpen: v
  } = e, A = L.A.getChannel(a), C = null != (t = null == A ? true : A.getGuildId()) ? t : true;
  if (null == C && !(null != (r = null == A ? true : A.isPrivate()) && r)) returnfalse;
  let R = y.A.getApplication(o),
    P = null != R && (0, T.x)(R),
    D = (0, N.m)();
  try {
    if (w.A.getWindowOpen(ee.MLl.ACTIVITY_POPOUT)) {
      let {
        close: e
      } = n(574172);
      e(ee.MLl.ACTIVITY_POPOUT)
    }
    if ((0, q.Q)(), (0, X.y)({
        applicationId: o
      })) returntrue;
    l.h.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_START",
      nonce: D,
      applicationId: o,
      channelId: null != a ? a : null,
      componentId: f,
      analyticsLocations: c,
      source: m,
      commandOrigin: p,
      inviterUserId: O,
      launchParams: {
        customId: b,
        referrerId: E
      }
    });
    let e = await eI(o, null != a ? a : true);
    l.h.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
      applicationId: o,
      channelId: null != a ? a : null,
      proxyTicket: e
    });
    let t = j.default.getCurrentUser();
    if (null != t && (0, Q.A)({
        type: s ? ee.UqL.LAUNCH : ee.UqL.JOIN,
        userId: null == t ? true : t.id,
        guildId: C,
        channelId: a,
        channelType: null == A ? true : A.type,
        applicationId: o,
        locationObject: u,
        analyticsLocations: null != c ? c : [],
        source: m,
        referrerId: E,
        inviterUserId: O
      }), s) {
      if (null == a || !ec(o, A)) throw new I.A(I.A.Reasons.INVALID_CHANNEL);
      let e = await eu({
        applicationId: o,
        nonce: D,
        channelId: a,
        guildId: C,
        commandOrigin: p,
        sectionName: h,
        source: m,
        onExecutedCallback: g,
        onConfirmActivityLaunchChecksAlertOpen: v,
        embeddedActivitiesManager: d
      });
      if ("failure" === e.result)
        if (4 === e.reason) return l.h.dispatch({
          type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL",
          nonce: D,
          applicationId: o,
          channelId: null != a ? a : null
        }), false;
        else throw new I.A(I.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND)
    } else {
      let e = await ed({
        applicationId: o,
        channelId: a,
        embeddedActivitiesManager: d,
        isStart: s,
        guildId: C
      });
      if (null == g || g(), "failure" === e.result) throw new I.A(I.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason)
    }
    l.h.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS",
      nonce: D,
      applicationId: o,
      channelId: null != a ? a : null
    })
  } catch (t) {
    if (P) returnfalse;
    let e = null != C ? i.T.GUILD_CHANNEL : i.T.PRIVATE_CHANNEL;
    return l.h.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
      nonce: D,
      applicationId: o,
      channelId: null != a ? a : null,
      guildId: null != C ? C : null,
      isStart: s,
      error: t instanceof I.A || t instanceof _.A || t instanceof S.A ? t : new _.A(t),
      locationKind: e
    }), false
  }
  returntrue
}

function ec(e, t) {
  let n = (null == t ? true : t.type) === ee.rbe.GUILD_VOICE,
    r = y.A.getApplication(e),
    i = null != r && (0, a.Lt)(r.flags, ee.gfo.EMBEDDED),
    o = (0, F.AX)(t);
  return n && i || o
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
    d = await (0, E.Ay)(r, t)
  } catch (e) {
    if (e.message === E.c5) return {
      result: "failure",
      reason: 1
    };
    throw e
  }
  let f = d.handler !== h.Ys.APP_HANDLER;
  if (!(f || et.TR.includes(t))) {
    null != r && await (0, m.Zn)({
      type: "channel",
      channelId: r
    }), await (0, m.Zn)({
      type: "user"
    });
    let e = L.A.getChannel(r),
      {
        isAuthorized: n
      } = await (0, b.q)({
        applicationId: t,
        channel: e,
        commandIntegrationTypes: d.integration_types
      });
    if (!n) return {
      result: "failure",
      reason: 2
    }
  }
  let p = L.A.getChannel(r),
    O = null != i ? x.A.getGuild(i) : null;
  if (null == p) return {
    result: "failure",
    reason: 3
  };
  if (f) {
    let e, n = y.A.getApplication(t),
      r = B.Ay.getCurrentEmbeddedActivity();
    (null == r ? true : r.applicationId) != null && (e = y.A.getApplication(null == r ? true : r.applicationId));
    let i = j.default.getCurrentUser();
    if (null != i && !await (0, H.O)({
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
    (0, g.A)({
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
          null == l || l(), U.default.track(ee.HAw.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
            channel_id: r,
            guild_id: i,
            application_id: t,
            channel_type: null == p ? true : p.type,
            error_code: e,
            error_message: n,
            error_status: a,
            error_reason_code: o,
            source: s
          }), null != e && null != n && null != a ? c(new _.A({
            status: a,
            body: {
              message: n,
              code: e
            }
          })) : null != o && o in S.A.ReasonCodes ? c(new S.A(o)) : c(new S.A(S.A.ReasonCodes.UNKNOWN))
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
    l = D.default.getSessionId(),
    u = j.default.getCurrentUser(),
    d = n;
  if (null == d) return {
    result: "failure",
    reason: 1
  };
  let f = await (0, W.A)(d, i);
  if (null == u || null == f) return {
    result: "failure",
    reason: 2
  };
  if (null == i) return {
    result: "failure",
    reason: 3
  };
  let p = L.A.getChannel(i);
  if (null == p) return {
    result: "failure",
    reason: 3
  };
  let _ = (0, K.JH)({
    channelId: i,
    ChannelStore: L.A,
    GuildStore: x.A,
    PermissionStore: M.A,
    VoiceStateStore: k.A
  });
  if (_ !== K.xy.CAN_LAUNCH) {
    let e = 4;
    return _ === K.xy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION ? (e = 5, (0, R.i)()) : _ === K.xy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS && (e = 6, c.A.show({
      title: ei.intl.string(ei.t["IOy+I5"]),
      body: ei.intl.string(ei.t.UXoQTp),
      hideActionSheet: false
    })), {
      result: "failure",
      reason: e
    }
  }
  let h = B.Ay.getCurrentEmbeddedActivity();
  if ((null == h ? true : h.applicationId) != null && (t = y.A.getApplication(null == h ? true : h.applicationId)), !(!o || await (0, H.O)({
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
    let e = (0, z.A)(p.id),
      n = J.lk.includes(p.type);
    if (e) {
      if (!await (0, Z.A)({
          channelId: p.id,
          bypassChangeModal: null != t
        })) return {
        result: "failure",
        reason: 8
      }
    } else if (!(0, F.pE)(p) || !n) return {
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
  return null != i ? (await V.A.post(eo({
    url: ee.Rsh.ACTIVITY_CHANNEL_LAUNCH(i, n),
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

function ef(e) {
  let {
    location: t,
    applicationId: n,
    showFeedback: r = true
  } = e, i = B.Ay.getSelfEmbeddedActivityForLocation(t);
  l.h.dispatch({
    type: "EMBEDDED_ACTIVITY_CLOSE",
    applicationId: n,
    location: t,
    instanceId: null == i ? true : i.launchId,
    showFeedback: r
  });
  let a = (0, Y.H)(t);
  if (null != a) {
    var o;
    let e = v.A.getSelectedParticipantId(a),
      t = null == (o = j.default.getCurrentUser()) ? true : o.id,
      r = B.Ay.getEmbeddedActivitiesForChannel(a).find(e => e.applicationId === n);
    if (null == r || null == t || "" === t) return;
    e === (0, O.Qt)({
      applicationId: n,
      instanceId: null == r ? true : r.compositeInstanceId
    }) && d.A.selectParticipant(a, null)
  }
}
async function ep() {
  try {
    l.h.dispatch({
      type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START"
    });
    let e = await o.Bo.get({
        url: ee.Rsh.APPLICATIONS_WITH_ASSETS,
        query: {
          with_team_applications: true
        },
        oldFormErrors: true,
        rejectWithError: true
      }),
      t = e.body.applications,
      n = t.map(e => P.Ay.createFromServer(e));
    l.h.dispatch({
      type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS",
      applications: n,
      assets: e.body.assets
    }), l.h.dispatch({
      type: "APPLICATIONS_FETCH_SUCCESS",
      applications: t
    })
  } catch (e) {
    l.h.dispatch({
      type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL"
    })
  }
}
async function e_(e, t, n) {
  try {
    l.h.dispatch({
      type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START"
    });
    let r = null != t ? {
        channel_id: t
      } : true,
      i = await o.Bo.post({
        url: ee.Rsh.APPLICATION_UPLOAD_ATTACHMENT(e),
        query: r,
        attachments: [{
          name: "file",
          file: n
        }],
        rejectWithError: true
      });
    return l.h.dispatch({
      type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS",
      attachment: i.body.attachment
    }), i.body.attachment
  } catch (e) {
    return l.h.dispatch({
      type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL"
    }), new _.A(e)
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
    force: s = false
  } = e, c = B.Ay.getShelfActivities(o), u = c.map(e => y.A.getApplication(e.application_id)).filter(G.Vq);
  if (!s && !B.Ay.shouldFetchShelf(o)) {
    if (null == (t = B.Ay.getShelfFetchStatus(o)) ? true : t.isFetching) {
      let e, t, n = new Promise(t => {
          e = eh.bind(null, o, t), l.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e)
        }),
        r = new Promise(e => {
          t = eh.bind(null, o, e), l.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t)
        });
      await Promise.race([n, r]), null != e && (l.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e), e = null), null != t && (l.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t), t = null)
    }
    return {
      activityConfigs: c,
      applications: u
    }
  }
  try {
    l.h.dispatch({
      type: "EMBEDDED_ACTIVITY_FETCH_SHELF",
      guildId: o
    });
    let e = true !== o && "" !== o ? {
        guild_id: o
      } : true,
      t = await V.A.get({
        url: ee.Rsh.ACTIVITY_SHELF,
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
    return l.h.dispatch({
      type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
      guildId: o,
      activities: s,
      applications: c,
      assets: u
    }), c.length > 0 && l.h.dispatch({
      type: "APPLICATIONS_FETCH_SUCCESS",
      applications: c
    }), {
      activityConfigs: s,
      applications: c.map(e => P.Ay.createFromServer(e))
    }
  } catch (e) {
    return l.h.dispatch({
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
  } = e, o = await f.Ay.createInvite(t, {
    target_type: er.yV.EMBEDDED_APPLICATION,
    target_application_id: r
  }, i);
  null != L.A.getChannel(n) && p.A.sendInvite(n, o.code, i, a)
}
async function eE(e) {
  let {
    channelId: t,
    applicationId: n,
    userId: r,
    location: i,
    inviteAnalyticsMetadata: a,
    prefixedContent: o
  } = e, s = await f.Ay.createInvite(t, {
    target_type: er.yV.EMBEDDED_APPLICATION,
    target_application_id: n
  }, i);
  await u.A.ensurePrivateChannel(r).then(e => {
    let t, n = L.A.getChannel(e);
    if (null == n) throw Error("Private channel not found");
    null != o && (t = C.Ay.parse(n, o).content), p.A.sendInvite(e, s.code, i, a, t)
  })
}

function ey() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : en.i.INDIRECT_ACTION;
  (0, A.$l)(s.M.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1e3), {
    dismissAction: e
  })
}
async function eb(e) {
  let t = ee.Rsh.ACTIVITY_TEST_MODE(e);
  try {
    return await o.Bo.get({
      url: t,
      oldFormErrors: true,
      rejectWithError: true
    }), true
  } catch (e) {
    returnfalse
  }
}

function eO(e) {
  l.h.dispatch({
    type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE",
    activityPanelMode: e
  })
}

function ev(e) {
  l.h.dispatch({
    type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT",
    focusedActivityLayout: e
  })
}

function eA() {
  eO($.Gd.ACTIVITY_POPOUT_WINDOW), l.h.dispatch({
    type: "ACTIVITY_POPOUT_WINDOW_OPEN"
  })
}
async function eI(e, t) {
  let n = {};
  return null != t && (n.channel_id = t), (await o.Bo.post({
    url: ee.Rsh.APPLICATION_PROXY_TICKET(e),
    body: n,
    rejectWithError: true
  })).body.ticket
}
async function eS(e, t) {
  l.h.dispatch({
    type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING",
    applicationId: e,
    refreshing: true
  });
  try {
    let n = await eI(e, null != t ? t : true);
    l.h.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
      applicationId: e,
      channelId: t,
      proxyTicket: n
    }), l.h.dispatch({
      type: "EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET",
      applicationId: e,
      proxyTicket: n
    })
  } catch (s) {
    var n;
    let r = L.A.getChannel(t),
      a = null != (n = null == r ? true : r.guild_id) ? n : null,
      o = null != a ? i.T.GUILD_CHANNEL : i.T.PRIVATE_CHANNEL;
    return l.h.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
      nonce: (0, N.m)(),
      applicationId: e,
      channelId: t,
      guildId: a,
      locationKind: o,
      error: s instanceof I.A || s instanceof _.A || s instanceof S.A ? s : new _.A(s)
    }), false
  } finally {
    l.h.dispatch({
      type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING",
      applicationId: e,
      refreshing: false
    })
  }
  returntrue
}