/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => k
}), n(47120), n(301563), n(411104);
var r = n(664751),
  i = n(990547),
  o = n(243814),
  a = n(544891),
  s = n(283693),
  l = n(570140),
  c = n(638880),
  u = n(620662),
  d = n(812206),
  f = n(439849),
  _ = n(669764),
  p = n(706454),
  h = n(757266),
  g = n(77498),
  m = n(283595),
  E = n(417363),
  v = n(626135),
  b = n(630388),
  y = n(877481),
  O = n(358085),
  S = n(573261),
  I = n(278323),
  T = n(58642),
  N = n(254854),
  A = n(981631),
  C = n(701488),
  R = n(388032);
let P = 3,
  D = 20;

function w(e) {
  let {
    applicationId: t,
    secret: n,
    channelId: r,
    intent: i = C.Ws.PLAY,
    embedded: o = !1,
    source: a,
    partyId: s,
    locationObject: c,
    analyticsLocations: u,
    joinUserId: d,
    joinSessionId: f,
    activity: _
  } = e;
  M({
    applicationId: t,
    channelId: r,
    embedded: o,
    source: a,
    partyId: s,
    locationObject: c,
    analyticsLocations: u,
    joinUserId: d,
    joinSessionId: f,
    secret: n,
    activity: _
  }).then(e => 0 === e ? null : y.Z.waitConnected(t).then(() => Promise.race([y.Z.waitSubscribed(t, A.zMe.ACTIVITY_JOIN)]))).then(() => {
    l.Z.dispatch({
      type: "ACTIVITY_JOIN",
      applicationId: t,
      secret: n,
      intent: i,
      embedded: o
    })
  }).catch(() => l.Z.dispatch({
    type: "ACTIVITY_JOIN_FAILED",
    applicationId: t
  }))
}

function L(e, t) {
  return null == e || "" === e ? null : {
    distributor: e,
    sku: t
  }
}

function x(e) {
  return a.tn.post({
    url: A.ANM.OAUTH2_AUTHORIZE,
    query: {
      client_id: e,
      response_type: "token",
      scope: [o.x.IDENTIFY].join(" ")
    },
    retries: 3,
    body: {
      authorize: !0
    },
    oldFormErrors: !0,
    rejectWithError: !1
  }).then(e => {
    let t = e.body.location.split(/#|\?/),
      n = r.parse(t[t.length - 1]);
    if ("invalid_request" === n.error) return null;
    if (null != n.error) {
      var i;
      throw Error("OAuth2 Error: ".concat(n.error, ": ").concat(null !== (i = n.error_description) && void 0 !== i ? i : "unknown error"))
    }
    return n.access_token
  }, e => {
    if (404 === e.status) return null;
    throw e
  })
}
async function M(e) {
  let {
    applicationId: t,
    branchId: n,
    channelId: r,
    embedded: i = !1,
    source: o,
    partyId: a,
    locationObject: s = {},
    analyticsLocations: f = [],
    joinUserId: _,
    joinSessionId: g,
    secret: v,
    activity: b
  } = e;
  if (i) return await (0, c.Z)({
    applicationId: t,
    activityChannelId: null != r ? r : void 0,
    source: o,
    partyId: a,
    locationObject: s,
    analyticsLocations: f,
    joinUserId: _,
    joinSessionId: g,
    secret: v,
    instanceId: void 0,
    isContextlessActivity: (0, u.Z)(b, A.xjy.EMBEDDED) && (0, u.Z)(b, A.xjy.CONTEXTLESS)
  }) ? 0 : Promise.resolve();
  if (h.Z.isConnected(t)) return Promise.resolve();
  let O = null;
  if (null == n) {
    let e = m.Z.getActiveLibraryApplication(t);
    n = null != e ? e.branchId : t
  }
  if (E.Z.isLaunchable(t, n)) {
    let e = E.Z.getState(t, n),
      r = m.Z.getActiveLaunchOptionId(t, n);
    if (null == e) throw Error("Missing dispatch game when launching");
    let i = m.Z.getLibraryApplication(t, n);
    if (null == i) throw Error("Missing library application when launching");
    O = x(t).then(t => y.Z.launchDispatchApplication(e, t, p.default.locale, i.getBranchName(), r))
  } else {
    let e = d.Z.getApplication(t);
    O = null != e ? y.Z.launch(e) : y.Z.launchGame(t)
  }
  let S = Error("game not found");
  return null != O ? (l.Z.dispatch({
    type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE",
    applicationId: t,
    branchId: n
  }), l.Z.dispatch({
    type: "GAME_LAUNCH_START",
    applicationId: t
  }), O.then(e => {
    l.Z.dispatch({
      type: "GAME_LAUNCH_SUCCESS",
      applicationId: t,
      pids: e
    })
  }).catch(e => {
    N.Z.show(A.kVF.LAUNCH_GAME_FAILURE, R.NW.string(R.t.YZEBdn)), l.Z.dispatch({
      type: "GAME_LAUNCH_FAIL",
      applicationId: t,
      error: S
    })
  })) : (l.Z.dispatch({
    type: "GAME_LAUNCH_FAIL",
    applicationId: t,
    error: S
  }), Promise.reject(S))
}
let k = {
  addGame(e, t) {
    l.Z.dispatch({
      type: "RUNNING_GAME_ADD_OVERRIDE",
      pid: e
    }), v.default.track(A.rMx.RUNNING_GAME_OVERRIDE_ADDED, {
      game_name: t
    })
  },
  toggleOverlay(e, t, n) {
    let r = g.Z.getGameByName(e.name);
    if (null != r) {
      let e = m.Z.getActiveLibraryApplication(r.id);
      if (null != e) {
        let r = e.getFlags(),
          i = b.yE(r, A.eHb.OVERLAY_DISABLED);
        t && i !== t && (r = b.x9(r, A.eHb.OVERLAY_DISABLED));
        let o = b.yE(r, A.eHb.OVERLAY_V3_DISABLED);
        null != n && n !== o && (r = b.x9(r, A.eHb.OVERLAY_V3_DISABLED)), T.h(e.id, e.branchId, r);
        return
      }
    }
    l.Z.dispatch({
      type: "RUNNING_GAME_TOGGLE_OVERLAY",
      game: e,
      newLegacyOverlayEnabledValue: t,
      newOverlayV3EnabledValue: n
    })
  },
  toggleDetection(e) {
    l.Z.dispatch({
      type: "RUNNING_GAME_TOGGLE_DETECTION",
      game: e
    })
  },
  editName(e, t) {
    l.Z.dispatch({
      type: "RUNNING_GAME_EDIT_NAME",
      game: e,
      newName: t
    })
  },
  identifyGame: (e, t) => (0, f.Z)().then(t => new Promise((n, r) => {
    if (null == t) {
      r(Error("Game utils module not loaded"));
      return
    }
    t.identifyGame(e, (t, i) => {
      if (0 !== t) {
        r(Error("Error ".concat(t, " when fetching info on ").concat(e)));
        return
      }
      if (null == i.icon || "" === i.icon || null == i.name || "" === i.name) {
        r(Error("Did not find data on ".concat(e)));
        return
      }
      l.Z.dispatch({
        type: "GAME_ICON_UPDATE",
        gameName: i.name,
        icon: "data:image/png;base64,".concat(i.icon)
      }), n(i)
    })
  })),
  getDetectableGamesSupplemental(e) {
    let {
      forceFetch: t
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      forceFetch: !1
    }, n = t ? e : e.filter(_.Z.canFetch);
    if (0 === n.length) return;
    l.Z.dispatch({
      type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH",
      applicationIds: n
    });
    let r = async e => {
      try {
        let t = await a.tn.get({
          url: A.ANM.APPLICATIONS_GAMES_SUPPLEMENTAL,
          query: {
            application_ids: e
          },
          rejectWithError: !0
        });
        l.Z.dispatch({
          type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS",
          applicationIds: e,
          supplementalGameData: t.body.supplemental_game_data
        })
      } catch (t) {
        l.Z.dispatch({
          type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE",
          applicationIds: e
        })
      }
    };
    for (; n.length > 0;) r(n.splice(0, D))
  },
  getDetectableGames() {
    if (!g.Z.canFetchDetectableGames()) return;
    let e = g.Z.detectableGamesEtag;
    l.Z.wait(() => {
      l.Z.dispatch({
        type: "GAMES_DATABASE_FETCH"
      }), S.Z.get({
        url: A.ANM.APPLICATIONS_DETECTABLE,
        headers: {
          "If-None-Match": e
        },
        retries: 1,
        oldFormErrors: !0,
        trackedActionData: {
          event: i.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH,
          properties: t => {
            var n;
            return (0, s.iG)({
              sent_etag: e,
              received_etag: null == t ? void 0 : null === (n = t.headers) || void 0 === n ? void 0 : n.etag
            })
          }
        },
        rejectWithError: !1
      }).then(e => {
        let {
          body: t,
          headers: {
            etag: n
          }
        } = e;
        l.Z.dispatch({
          type: "GAMES_DATABASE_UPDATE",
          games: t,
          etag: n
        })
      }, e => {
        let {
          status: t
        } = e;
        304 === t ? l.Z.dispatch({
          type: "GAMES_DATABASE_UPDATE",
          games: [],
          etag: g.Z.detectableGamesEtag
        }) : l.Z.dispatch({
          type: "GAMES_DATABASE_FETCH_FAIL"
        })
      })
    })
  },
  reportUnverifiedGame(e) {
    let {
      name: t,
      iconHash: n,
      publisher: r,
      distributor: i,
      sku: o,
      executableName: s
    } = e, c = (0, f.F)(s);
    null != c && a.tn.post({
      url: A.ANM.UNVERIFIED_APPLICATIONS,
      body: {
        name: t,
        os: (0, O.getPlatformName)(),
        icon: n,
        distributor_application: L(i, o),
        executable: c,
        publisher: r,
        report_version: P
      },
      retries: 1,
      oldFormErrors: !0,
      rejectWithError: !0
    }).then(e => {
      let {
        body: {
          name: t,
          hash: n,
          missing_data: r
        }
      } = e;
      l.Z.dispatch({
        type: "UNVERIFIED_GAME_UPDATE",
        name: t,
        hash: n,
        missingData: r
      })
    })
  },
  uploadIcon(e, t, n) {
    a.tn.post({
      url: A.ANM.UNVERIFIED_APPLICATIONS_ICONS,
      body: {
        application_name: e,
        application_hash: t,
        icon: n
      },
      retries: 1,
      oldFormErrors: !0,
      rejectWithError: !0
    })
  },
  deleteEntry(e) {
    l.Z.dispatch({
      type: "RUNNING_GAME_DELETE_ENTRY",
      game: e
    })
  },
  launch: M,
  async join(e) {
    let {
      userId: t,
      sessionId: n,
      applicationId: r,
      channelId: i,
      messageId: o,
      intent: a = C.Ws.PLAY,
      embedded: s = !1,
      source: c,
      partyId: u,
      locationObject: d,
      analyticsLocations: f,
      activity: _
    } = e;
    if (__OVERLAY__) return l.Z.dispatch({
      type: "OVERLAY_JOIN_GAME",
      userId: t,
      sessionId: n,
      applicationId: r,
      channelId: i,
      messageId: o
    }), Promise.resolve(!0);
    l.Z.dispatch({
      type: "ACTIVITY_JOIN_LOADING",
      applicationId: r
    });
    try {
      let e = await I.Z.getJoinSecret(t, n, r, i, o);
      return w({
        applicationId: r,
        secret: e,
        channelId: i,
        intent: a,
        embedded: s,
        partyId: u,
        source: c,
        locationObject: d,
        analyticsLocations: f,
        joinUserId: t,
        joinSessionId: n,
        activity: _
      }), !0
    } catch (e) {
      return l.Z.dispatch({
        type: "ACTIVITY_JOIN_FAILED",
        applicationId: r
      }), !1
    }
  },
  joinWithSecret: w
}