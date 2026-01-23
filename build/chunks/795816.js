/** Chunk was on web.js **/
/** chunk id: 795816, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CS: () => ep,
  D2: () => eA,
  Ir: () => ey,
  LK: () => eE,
  LV: () => eh,
  SE: () => ef,
  Ue: () => eg,
  _H: () => ed,
  gk: () => eb,
  i5: () => eO,
  jp: () => ev,
  od: () => eI,
  rW: () => es,
  su: () => eo,
  tk: () => em
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

function ei(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ei(e, t, n[t])
    })
  }
  return e
}

function es(e) {
  let t = B.Ay.getSelfEmbeddedActivityForLocation(e);
  null != t && ed({
    location: t.location,
    applicationId: t.applicationId,
    showFeedback: false
  })
}
async function eo(e) {
  var t, r;
  let {
    channelId: a,
    applicationId: s,
    isStart: o,
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
  } = e, A = x.A.getChannel(a), C = null != (t = null == A ? true : A.getGuildId()) ? t : true;
  if (null == C && !(null != (r = null == A ? true : A.isPrivate()) && r)) returnfalse;
  let R = y.A.getApplication(s),
    P = null != R && (0, T.x)(R),
    D = (0, N.m)();
  try {
    if (w.A.getWindowOpen($.MLl.ACTIVITY_POPOUT)) {
      let {
        close: e
      } = n(574172);
      e($.MLl.ACTIVITY_POPOUT)
    }
    if ((0, X.y)({
        applicationId: s
      })) returntrue;
    l.h.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_START",
      nonce: D,
      applicationId: s,
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
    let e = await eA(s, null != a ? a : true);
    l.h.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
      applicationId: s,
      channelId: null != a ? a : null,
      proxyTicket: e
    });
    let t = M.default.getCurrentUser();
    if (null != t && (0, Z.A)({
        type: o ? $.UqL.LAUNCH : $.UqL.JOIN,
        userId: null == t ? true : t.id,
        guildId: C,
        channelId: a,
        channelType: null == A ? true : A.type,
        applicationId: s,
        locationObject: u,
        analyticsLocations: null != c ? c : [],
        source: m,
        referrerId: E,
        inviterUserId: O
      }), o) {
      if (null == a || !el(s, A)) throw new I.A(I.A.Reasons.INVALID_CHANNEL);
      let e = await ec({
        applicationId: s,
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
          applicationId: s,
          channelId: null != a ? a : null
        }), false;
        else throw new I.A(I.A.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND)
    } else {
      let e = await eu({
        applicationId: s,
        channelId: a,
        embeddedActivitiesManager: d,
        isStart: o,
        guildId: C
      });
      if (null == g || g(), "failure" === e.result) throw new I.A(I.A.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason)
    }
    l.h.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS",
      nonce: D,
      applicationId: s,
      channelId: null != a ? a : null
    })
  } catch (t) {
    if (P) returnfalse;
    let e = null != C ? i.T.GUILD_CHANNEL : i.T.PRIVATE_CHANNEL;
    return l.h.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
      nonce: D,
      applicationId: s,
      channelId: null != a ? a : null,
      guildId: null != C ? C : null,
      isStart: o,
      error: t instanceof I.A || t instanceof _.A || t instanceof S.A ? t : new _.A(t),
      locationKind: e
    }), false
  }
  returntrue
}

function el(e, t) {
  let n = (null == t ? true : t.type) === $.rbe.GUILD_VOICE,
    r = y.A.getApplication(e),
    i = null != r && (0, a.Lt)(r.flags, $.gfo.EMBEDDED),
    s = (0, F.AX)(t);
  return n && i || s
}
async function ec(e) {
  let {
    applicationId: t,
    nonce: n,
    channelId: r,
    guildId: i,
    commandOrigin: a,
    sectionName: s,
    source: o,
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
  if (!(f || ee.TR.includes(t))) {
    null != r && await (0, m.Zn)({
      type: "channel",
      channelId: r
    }), await (0, m.Zn)({
      type: "user"
    });
    let e = x.A.getChannel(r),
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
  let p = x.A.getChannel(r),
    O = null != i ? L.A.getGuild(i) : null;
  if (null == p) return {
    result: "failure",
    reason: 3
  };
  if (f) {
    let e, n = y.A.getApplication(t),
      r = B.Ay.getCurrentEmbeddedActivity();
    (null == r ? true : r.applicationId) != null && (e = y.A.getApplication(null == r ? true : r.applicationId));
    let i = M.default.getCurrentUser();
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
      sectionName: s,
      source: o,
      interactionLifecycleOptionsFactory: () => ({
        nonce: n,
        onSuccess: () => {
          null == l || l(), e()
        },
        onFailure: (e, n, a, s) => {
          null == l || l(), U.default.track($.HAw.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
            channel_id: r,
            guild_id: i,
            application_id: t,
            channel_type: null == p ? true : p.type,
            error_code: e,
            error_message: n,
            error_status: a,
            error_reason_code: s,
            source: o
          }), null != e && null != n && null != a ? c(new _.A({
            status: a,
            body: {
              message: n,
              code: e
            }
          })) : null != s && s in S.A.ReasonCodes ? c(new S.A(s)) : c(new S.A(S.A.ReasonCodes.UNKNOWN))
        }
      })
    })
  }), {
    result: "success"
  }
}
async function eu(e) {
  let t, {
      applicationId: n,
      channelId: i,
      embeddedActivitiesManager: a,
      isStart: s,
      guildId: o
    } = e,
    l = D.default.getSessionId(),
    u = M.default.getCurrentUser(),
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
  let p = x.A.getChannel(i);
  if (null == p) return {
    result: "failure",
    reason: 3
  };
  let _ = (0, K.JH)({
    channelId: i,
    ChannelStore: x.A,
    GuildStore: L.A,
    PermissionStore: j.A,
    VoiceStateStore: k.A
  });
  if (_ !== K.xy.CAN_LAUNCH) {
    let e = 4;
    return _ === K.xy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION ? (e = 5, (0, R.i)()) : _ === K.xy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS && (e = 6, c.A.show({
      title: er.intl.string(er.t["IOy+I5"]),
      body: er.intl.string(er.t.UXoQTp),
      hideActionSheet: false
    })), {
      result: "failure",
      reason: e
    }
  }
  let h = B.Ay.getCurrentEmbeddedActivity();
  if ((null == h ? true : h.applicationId) != null && (t = y.A.getApplication(null == h ? true : h.applicationId)), !(!s || await (0, H.O)({
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
      n = Q.lk.includes(p.type);
    if (e) {
      if (!await (0, q.A)({
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
        guild_id: o,
        channel_id: i,
        application_id: n,
        session_id: l
      }
    },
    retries: 3,
    oldFormErrors: true,
    rejectWithError: true
  };
  return null != i ? (await V.A.post(ea({
    url: $.Rsh.ACTIVITY_CHANNEL_LAUNCH(i, n),
    body: {
      session_id: l,
      guild_id: null != o ? o : true
    }
  }, m)), {
    result: "success"
  }) : {
    result: "failure",
    reason: 0
  }
}

function ed(e) {
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
    var s;
    let e = v.A.getSelectedParticipantId(a),
      t = null == (s = M.default.getCurrentUser()) ? true : s.id,
      r = B.Ay.getEmbeddedActivitiesForChannel(a).find(e => e.applicationId === n);
    if (null == r || null == t || "" === t) return;
    e === (0, O.Qt)({
      applicationId: n,
      instanceId: null == r ? true : r.compositeInstanceId
    }) && d.A.selectParticipant(a, null)
  }
}
async function ef() {
  try {
    l.h.dispatch({
      type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START"
    });
    let e = await s.Bo.get({
        url: $.Rsh.APPLICATIONS_WITH_ASSETS,
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
async function ep(e, t, n) {
  try {
    l.h.dispatch({
      type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START"
    });
    let r = null != t ? {
        channel_id: t
      } : true,
      i = await s.Bo.post({
        url: $.Rsh.APPLICATION_UPLOAD_ATTACHMENT(e),
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
let e_ = (e, t, n) => {
  let {
    guildId: r
  } = n;
  (r === e || null == r && null == e) && t()
};
async function eh(e) {
  var t, n, i, a;
  let {
    guildId: s,
    force: o = false
  } = e, c = B.Ay.getShelfActivities(s), u = c.map(e => y.A.getApplication(e.application_id)).filter(G.Vq);
  if (!o && !B.Ay.shouldFetchShelf(s)) {
    if (null == (t = B.Ay.getShelfFetchStatus(s)) ? true : t.isFetching) {
      let e, t, n = new Promise(t => {
          e = e_.bind(null, s, t), l.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e)
        }),
        r = new Promise(e => {
          t = e_.bind(null, s, e), l.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t)
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
      guildId: s
    });
    let e = true !== s && "" !== s ? {
        guild_id: s
      } : true,
      t = await V.A.get({
        url: $.Rsh.ACTIVITY_SHELF,
        query: e,
        trackedActionData: {
          event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
          properties: {
            guild_id: s
          }
        },
        retries: 0,
        oldFormErrors: true,
        rejectWithError: true
      }),
      o = null != (n = t.body.activities) ? n : [],
      c = null != (i = t.body.applications) ? i : [],
      u = null != (a = t.body.assets) ? a : {};
    return l.h.dispatch({
      type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
      guildId: s,
      activities: o,
      applications: c,
      assets: u
    }), c.length > 0 && l.h.dispatch({
      type: "APPLICATIONS_FETCH_SUCCESS",
      applications: c
    }), {
      activityConfigs: o,
      applications: c.map(e => P.Ay.createFromServer(e))
    }
  } catch (e) {
    return l.h.dispatch({
      type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL",
      guildId: s
    }), {
      activityConfigs: c,
      applications: u
    }
  }
}
async function em(e) {
  let {
    activityChannelId: t,
    invitedChannelId: n,
    applicationId: r,
    location: i,
    inviteAnalyticsMetadata: a
  } = e, s = await f.Ay.createInvite(t, {
    target_type: en.yV.EMBEDDED_APPLICATION,
    target_application_id: r
  }, i);
  null != x.A.getChannel(n) && p.A.sendInvite(n, s.code, i, a)
}
async function eg(e) {
  let {
    channelId: t,
    applicationId: n,
    userId: r,
    location: i,
    inviteAnalyticsMetadata: a,
    prefixedContent: s
  } = e, o = await f.Ay.createInvite(t, {
    target_type: en.yV.EMBEDDED_APPLICATION,
    target_application_id: n
  }, i);
  await u.A.ensurePrivateChannel(r).then(e => {
    let t, n = x.A.getChannel(e);
    if (null == n) throw Error("Private channel not found");
    null != s && (t = C.Ay.parse(n, s).content), p.A.sendInvite(e, o.code, i, a, t)
  })
}

function eE() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : et.i.INDIRECT_ACTION;
  (0, A.$l)(o.M.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1e3), {
    dismissAction: e
  })
}
async function ey(e) {
  let t = $.Rsh.ACTIVITY_TEST_MODE(e);
  try {
    return await s.Bo.get({
      url: t,
      oldFormErrors: true,
      rejectWithError: true
    }), true
  } catch (e) {
    returnfalse
  }
}

function eb(e) {
  l.h.dispatch({
    type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE",
    activityPanelMode: e
  })
}

function eO(e) {
  l.h.dispatch({
    type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT",
    focusedActivityLayout: e
  })
}

function ev() {
  eb(J.Gd.ACTIVITY_POPOUT_WINDOW), l.h.dispatch({
    type: "ACTIVITY_POPOUT_WINDOW_OPEN"
  })
}
async function eA(e, t) {
  let n = {};
  return null != t && (n.channel_id = t), (await s.Bo.post({
    url: $.Rsh.APPLICATION_PROXY_TICKET(e),
    body: n,
    rejectWithError: true
  })).body.ticket
}
async function eI(e, t) {
  l.h.dispatch({
    type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING",
    applicationId: e,
    refreshing: true
  });
  try {
    let n = await eA(e, null != t ? t : true);
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
  } catch (o) {
    var n;
    let r = x.A.getChannel(t),
      a = null != (n = null == r ? true : r.guild_id) ? n : null,
      s = null != a ? i.T.GUILD_CHANNEL : i.T.PRIVATE_CHANNEL;
    return l.h.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
      nonce: (0, N.m)(),
      applicationId: e,
      channelId: t,
      guildId: a,
      locationKind: s,
      error: o instanceof I.A || o instanceof _.A || o instanceof S.A ? o : new _.A(o)
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