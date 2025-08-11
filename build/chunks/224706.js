/** Chunk was on web.js **/
/** chunk id: 224706, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./35282.js"), require("./415506.js");
var Chunk664751 = require("./664751.js"),
  Chunk990547 = require("./990547.js"),
  Chunk243814 = require("./243814.js"),
  Chunk544891 = require("./544891.js"),
  Chunk283693 = require("./283693.js"),
  Chunk570140 = require("./570140.js"),
  Chunk638880 = require("./638880.js"),
  Chunk812206 = require("./812206.js"),
  Chunk439849 = require("./439849.js"),
  Chunk510839 = require("./510839.js"),
  Chunk813370 = require("./813370.js"),
  Chunk669764 = require("./669764.js"),
  Chunk706454 = require("./706454.js"),
  Chunk757266 = require("./757266.js"),
  Chunk77498 = require("./77498.js"),
  Chunk283595 = require("./283595.js"),
  Chunk417363 = require("./417363.js"),
  Chunk626135 = require("./626135.js"),
  Chunk630388 = require("./630388.js"),
  Chunk877481 = require("./877481.js"),
  Chunk358085 = require("./358085.js"),
  Chunk573261 = require("./573261.js"),
  Chunk278323 = require("./278323.js"),
  Chunk58642 = require("./58642.js"),
  Chunk254854 = require("./254854.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk388032 = require("./388032.js");
let w = 3,
  D = 20;

function L(e) {
  let {
    applicationId: t,
    secret: n,
    channelId: r,
    intent: i = R.Ws.PLAY,
    embedded: o = false,
    source: a,
    locationObject: s,
    analyticsLocations: c
  } = e;
  k({
    applicationId: t,
    channelId: r,
    embedded: o,
    source: a,
    locationObject: s,
    analyticsLocations: c
  }).then(e => 0 === e ? null : v.Z.waitConnected(t).then(() => Promise.race([v.Z.waitSubscribed(t, C.zMe.ACTIVITY_JOIN)]))).then(() => {
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

function x(e, t) {
  return null == e || "" === e ? null : {
    distributor: e,
    sku: t
  }
}

function M(e) {
  return a.tn.post({
    url: C.ANM.OAUTH2_AUTHORIZE,
    query: {
      client_id: e,
      response_type: "token",
      scope: [o.x.IDENTIFY].join(" ")
    },
    retries: 3,
    body: {
      authorize: true
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => {
    let t = e.body.location.split(/#|\?/),
      n = r.parse(t[t.length - 1]);
    if ("invalid_request" === n.error) return null;
    if (null != n.error) {
      var i;
      throw Error("OAuth2 Error: ".concat(n.error, ": ").concat(null != (i = n.error_description) ? i : "unknown error"))
    }
    return n.access_token
  }, e => {
    if (404 === e.status) return null;
    throw e
  })
}
async function k(e) {
  let {
    applicationId: t,
    branchId: n,
    channelId: r,
    embedded: i = false,
    source: o,
    locationObject: a = {},
    analyticsLocations: s = []
  } = e;
  if (i) {
    let e = u.Z.getApplication(t);
    return null != e && (0, _.g)(e) ? ((0, f.s2)({
      applicationId: t
    }), 0) : await (0, c.Z)({
      applicationId: t,
      activityChannelId: null != r ? r : true,
      source: o,
      locationObject: a,
      analyticsLocations: s
    }) ? 0 : Promise.resolve()
  }
  if (m.Z.isConnected(t)) return Promise.resolve();
  let d = null;
  if (null == n) {
    let e = E.Z.getActiveLibraryApplication(t);
    n = null != e ? e.branchId : t
  }
  if (b.Z.isLaunchable(t, n)) {
    let e = b.Z.getState(t, n),
      r = E.Z.getActiveLaunchOptionId(t, n);
    if (null == e) throw Error("Missing dispatch game when launching");
    let i = E.Z.getLibraryApplication(t, n);
    if (null == i) throw Error("Missing library application when launching");
    d = M(t).then(t => v.Z.launchDispatchApplication(e, t, h.default.locale, i.getBranchName(), r))
  } else {
    let e = u.Z.getApplication(t);
    d = null != e ? v.Z.launch(e) : v.Z.launchGame(t)
  }
  let p = Error("game not found");
  return null != d ? (l.Z.dispatch({
    type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE",
    applicationId: t,
    branchId: n
  }), l.Z.dispatch({
    type: "GAME_LAUNCH_START",
    applicationId: t
  }), d.then(e => {
    l.Z.dispatch({
      type: "GAME_LAUNCH_SUCCESS",
      applicationId: t,
      pids: e
    })
  }).catch(e => {
    N.Z.show(C.kVF.LAUNCH_GAME_FAILURE, P.intl.string(P.t.YZEBdn)), l.Z.dispatch({
      type: "GAME_LAUNCH_FAIL",
      applicationId: t,
      error: p
    })
  })) : (l.Z.dispatch({
    type: "GAME_LAUNCH_FAIL",
    applicationId: t,
    error: p
  }), Promise.reject(p))
}
let j = {
  addGame(e, t) {
    l.Z.dispatch({
      type: "RUNNING_GAME_ADD_OVERRIDE",
      pid: e
    }), y.default.track(C.rMx.RUNNING_GAME_OVERRIDE_ADDED, {
      game_name: t
    })
  },
  toggleOverlay(e, t, n) {
    let r = g.Z.getGameByName(e.name);
    if (null != r) {
      let e = E.Z.getActiveLibraryApplication(r.id);
      if (null != e) {
        let r = e.getFlags(),
          i = O.yE(r, C.eHb.OVERLAY_DISABLED);
        t && i !== t && (r = O.x9(r, C.eHb.OVERLAY_DISABLED));
        let o = O.yE(r, C.eHb.OVERLAY_V3_DISABLED);
        null != n && n !== o && (r = O.x9(r, C.eHb.OVERLAY_V3_DISABLED)), A.h(e.id, e.branchId, r);
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
  identifyGame: (e, t) => (0, d.Z)().then(t => new Promise((n, r) => {
    if (null == t) return void r(Error("Game utils module not loaded"));
    t.identifyGame(e, (t, i) => 0 !== t ? void r(Error("Error ".concat(t, " when fetching info on ").concat(e))) : null == i.icon || "" === i.icon || null == i.name || "" === i.name ? void r(Error("Did not find data on ".concat(e))) : void(l.Z.dispatch({
      type: "GAME_ICON_UPDATE",
      gameName: i.name,
      icon: "data:image/png;base64,".concat(i.icon)
    }), n(i)))
  })),
  getDetectableGamesSupplemental(e) {
    let {
      forceFetch: t
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
      forceFetch: false
    }, n = t ? e : e.filter(p.Z.canFetch);
    if (0 === n.length) return;
    l.Z.dispatch({
      type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH",
      applicationIds: n
    });
    let r = async e => {
      try {
        let t = await a.tn.get({
          url: C.ANM.APPLICATIONS_GAMES_SUPPLEMENTAL,
          query: {
            application_ids: e
          },
          rejectWithError: true
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
    if (!Chunk77498.Z.canFetchDetectableGames()) return;
    let e = Chunk77498.Z.detectableGamesEtag;
    Chunk570140.Z.wait(() => {
      Chunk570140.Z.dispatch({
        type: "GAMES_DATABASE_FETCH"
      }), Chunk573261.Z.get({
        url: Chunk981631.ANM.APPLICATIONS_DETECTABLE,
        headers: {
          "If-None-Match": module
        },
        retries: 1,
        oldFormErrors: true,
        trackedActionData: {
          event: Chunk990547.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH,
          properties: t => {
            var n;
            return (0, s.iG)({
              sent_etag: e,
              received_etag: null == t || null == (n = t.headers) ? true : n.etag
            })
          }
        },
        rejectWithError: false
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
    } = e, c = (0, d.F)(s);
    null != c && a.tn.post({
      url: C.ANM.UNVERIFIED_APPLICATIONS,
      body: {
        name: t,
        os: (0, I.getPlatformName)(),
        icon: n,
        distributor_application: x(i, o),
        executable: c,
        publisher: r,
        report_version: w
      },
      retries: 1,
      oldFormErrors: true,
      rejectWithError: true
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
      url: C.ANM.UNVERIFIED_APPLICATIONS_ICONS,
      body: {
        application_name: e,
        application_hash: t,
        icon: n
      },
      retries: 1,
      oldFormErrors: true,
      rejectWithError: true
    })
  },
  deleteEntry(e) {
    l.Z.dispatch({
      type: "RUNNING_GAME_DELETE_ENTRY",
      game: e
    })
  },
  launch: k,
  async join(e) {
    let {
      userId: t,
      sessionId: n,
      applicationId: r,
      channelId: i,
      messageId: o,
      intent: a = R.Ws.PLAY,
      embedded: s = false,
      source: c,
      locationObject: u,
      analyticsLocations: d
    } = e;
    if (__OVERLAY__) return l.Z.dispatch({
      type: "OVERLAY_JOIN_GAME",
      userId: t,
      sessionId: n,
      applicationId: r,
      channelId: i,
      messageId: o
    }), Promise.resolve(true);
    l.Z.dispatch({
      type: "ACTIVITY_JOIN_LOADING",
      applicationId: r
    });
    try {
      let e = await S.Z.getJoinSecret(t, n, r, i, o);
      return L({
        applicationId: r,
        secret: e,
        channelId: i,
        intent: a,
        embedded: s,
        source: c,
        locationObject: u,
        analyticsLocations: d
      }), true
    } catch (e) {
      return l.Z.dispatch({
        type: "ACTIVITY_JOIN_FAILED",
        applicationId: r
      }), false
    }
  },
  joinWithSecret: L
}