/** Chunk was on web.js **/
/** chunk id: 224706, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./388685.js"), require("./35282.js"), require("./415506.js");
var Chunk664751 = require("./664751.js"),
  Chunk990547 = require("./990547.js"),
  Chunk243814 = require("./243814.js"),
  Chunk95015 = require("./95015.js"),
  Chunk544891 = require("./544891.js"),
  Chunk283693 = require("./283693.js"),
  Chunk570140 = require("./570140.js"),
  Chunk638880 = require("./638880.js"),
  Chunk812206 = require("./812206.js"),
  Chunk439849 = require("./439849.js"),
  Chunk710845 = require("./710845.js"),
  Chunk48131 = require("./48131.js"),
  Chunk813370 = require("./813370.js"),
  Chunk346951 = require("./346951.js"),
  Chunk594190 = require("./594190.js"),
  Chunk706454 = require("./706454.js"),
  Chunk757266 = require("./757266.js"),
  Chunk77498 = require("./77498.js"),
  Chunk283595 = require("./283595.js"),
  Chunk417363 = require("./417363.js"),
  Chunk626135 = require("./626135.js"),
  Chunk877481 = require("./877481.js"),
  Chunk358085 = require("./358085.js"),
  Chunk573261 = require("./573261.js"),
  Chunk278323 = require("./278323.js"),
  Chunk58642 = require("./58642.js"),
  Chunk254854 = require("./254854.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk388032 = require("./388032.jsx");
let L = 3,
  x = new Chunk710845.Z("GamesActionCreators");

function M(e) {
  let {
    applicationId: t,
    secret: n,
    channelId: r,
    intent: i = D.Ws.PLAY,
    embedded: a = false,
    source: o,
    locationObject: s,
    analyticsLocations: l,
    preferDeepLink: u = false
  } = e;
  if (u) {
    let e = d.Z.getApplication(t);
    if ((null == e ? true : e.deepLinkUri) != null) {
      let r = "".concat(e.deepLinkUri).concat(P.UWR.GAME_INVITE_FRAGMENT).concat(n);
      try {
        if (r.startsWith("http")) {
          let e = window.open(r, "_blank");
          (null == e || e.closed || true === e.closed) && (x.warn("Deep link popup was blocked by browser, trying location.href", {
            applicationId: t
          }), window.location.href = r)
        } else window.location.href = r;
        return Promise.resolve()
      } catch (e) {
        x.warn("Failed to open deep link, falling back to desktop launch", {
          applicationId: t,
          error: e.message
        })
      }
    }
  }
  U({
    applicationId: t,
    channelId: r,
    embedded: a,
    source: o,
    locationObject: s,
    analyticsLocations: l
  }).then(e => 0 === e ? null : T.Z.waitConnected(t).then(() => Promise.race([T.Z.waitSubscribed(t, P.zMe.ACTIVITY_JOIN)]))).then(() => {
    c.Z.dispatch({
      type: "ACTIVITY_JOIN",
      applicationId: t,
      secret: n,
      intent: i,
      embedded: a
    })
  }).catch(() => c.Z.dispatch({
    type: "ACTIVITY_JOIN_FAILED",
    applicationId: t
  }))
}

function j(e, t) {
  return null == e || "" === e ? null : {
    distributor: e,
    sku: t
  }
}

function k(e) {
  return s.tn.post({
    url: P.ANM.OAUTH2_AUTHORIZE,
    query: {
      client_id: e,
      response_type: "token",
      scope: [a.x.IDENTIFY].join(" ")
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
async function U(e) {
  let {
    applicationId: t,
    branchId: n,
    channelId: r,
    embedded: i = false,
    source: a,
    locationObject: o = {},
    analyticsLocations: s = []
  } = e;
  if (i) {
    let e = d.Z.getApplication(t);
    return null != e && (0, h.g)(e) ? (p.Z.launchFrame({
      applicationId: t
    }), 0) : await (0, u.Z)({
      applicationId: t,
      activityChannelId: null != r ? r : true,
      source: a,
      locationObject: o,
      analyticsLocations: s
    }) ? 0 : Promise.resolve()
  }
  if (b.Z.isConnected(t)) return Promise.resolve();
  let l = null;
  if (null == n) {
    let e = O.Z.getActiveLibraryApplication(t);
    n = null != e ? e.branchId : t
  }
  if (v.Z.isLaunchable(t, n)) {
    let e = v.Z.getState(t, n),
      r = O.Z.getActiveLaunchOptionId(t, n);
    if (null == e) throw Error("Missing dispatch game when launching");
    let i = O.Z.getLibraryApplication(t, n);
    if (null == i) throw Error("Missing library application when launching");
    l = k(t).then(t => T.Z.launchDispatchApplication(e, t, E.default.locale, i.getBranchName(), r))
  } else {
    let e = d.Z.getApplication(t);
    l = null != e ? T.Z.launch(e) : T.Z.launchGame(t)
  }
  let f = Error("game not found");
  return null != l ? (c.Z.dispatch({
    type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE",
    applicationId: t,
    branchId: n
  }), c.Z.dispatch({
    type: "GAME_LAUNCH_START",
    applicationId: t
  }), l.then(e => {
    c.Z.dispatch({
      type: "GAME_LAUNCH_SUCCESS",
      applicationId: t,
      pids: e
    })
  }).catch(e => {
    R.Z.show(P.kVF.LAUNCH_GAME_FAILURE, w.intl.string(w.t.YZEBdj)), c.Z.dispatch({
      type: "GAME_LAUNCH_FAIL",
      applicationId: t,
      error: f
    })
  })) : (c.Z.dispatch({
    type: "GAME_LAUNCH_FAIL",
    applicationId: t,
    error: f
  }), Promise.reject(f))
}
let G = {
  addGame(e, t) {
    c.Z.dispatch({
      type: "RUNNING_GAME_ADD_OVERRIDE",
      pid: e
    }), I.default.track(P.rMx.RUNNING_GAME_OVERRIDE_ADDED, {
      game_name: t
    })
  },
  toggleOverlay(e, t, n) {
    let r = (0, g.ow)(e),
      i = y.Z.getGameByName(r.name);
    if (null != i) {
      let e = O.Z.getActiveLibraryApplication(i.id);
      if (null != e) {
        let r = e.getFlags(),
          i = o.yE(r, P.eHb.OVERLAY_DISABLED);
        t && i !== t && (r = o.x9(r, P.eHb.OVERLAY_DISABLED));
        let a = o.yE(r, P.eHb.OVERLAY_V3_DISABLED);
        null != n && n !== a && (r = o.x9(r, P.eHb.OVERLAY_V3_DISABLED)), N.h(e.id, e.branchId, r);
        return
      }
    }
    c.Z.dispatch({
      type: "RUNNING_GAME_TOGGLE_OVERLAY",
      game: r,
      newLegacyOverlayEnabledValue: t,
      newOverlayV3EnabledValue: n
    })
  },
  toggleDetection(e) {
    c.Z.dispatch({
      type: "RUNNING_GAME_TOGGLE_DETECTION",
      game: e
    })
  },
  editName(e, t) {
    c.Z.dispatch({
      type: "RUNNING_GAME_EDIT_NAME",
      game: e,
      newName: t
    })
  },
  identifyGame: (e, t) => (0, f.Z)().then(t => new Promise((n, r) => {
    if (null == t) return void r(Error("Game utils module not loaded"));
    t.identifyGame(e, (t, i) => (x.log("Identified game: ", {
      status: t,
      name: i.name,
      iconHash: i.iconHash,
      sku: i.sku,
      executableName: i.executableName,
      distributor: i.distributor,
      publisher: i.publisher
    }), 0 !== t) ? void r(Error("Error ".concat(t, " when fetching info on ").concat(e))) : null == i.icon || "" === i.icon || null == i.name || "" === i.name ? void r(Error("Did not find data on ".concat(e))) : void(c.Z.dispatch({
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
    };
    (0, m.R)(e, {
      forceFetch: t
    })
  },
  getDetectableGames() {
    if (!Chunk77498.Z.canFetchDetectableGames()) return;
    let e = Chunk77498.Z.detectableGamesEtag;
    Chunk570140.Z.wait(() => {
      Chunk570140.Z.dispatch({
        type: "GAMES_DATABASE_FETCH"
      }), Chunk573261.Z.get({
        url: Chunk981631.ANM.GAMES_DETECTABLE,
        headers: {
          "If-None-Match": module
        },
        retries: 1,
        oldFormErrors: true,
        trackedActionData: {
          event: Chunk990547.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH,
          properties: t => {
            var n;
            return (0, l.iG)({
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
        c.Z.dispatch({
          type: "GAMES_DATABASE_UPDATE",
          games: t,
          etag: n
        })
      }, e => {
        let {
          status: t
        } = e;
        304 === t ? c.Z.dispatch({
          type: "GAMES_DATABASE_UPDATE",
          games: [],
          etag: y.Z.detectableGamesEtag
        }) : c.Z.dispatch({
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
      sku: a,
      executableName: o
    } = e, l = (0, f.F)(o);
    x.log("Reporting unverified game: ", {
      name: t,
      executableName: o,
      iconHash: n,
      publisher: r,
      distributor: i,
      sku: a,
      cleanedExecutable: l
    }), null != l && s.tn.post({
      url: P.ANM.UNVERIFIED_APPLICATIONS,
      body: {
        name: t,
        os: (0, S.getPlatformName)(),
        icon: n,
        distributor_application: j(i, a),
        executable: l,
        publisher: r,
        report_version: L
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
      c.Z.dispatch({
        type: "UNVERIFIED_GAME_UPDATE",
        name: t,
        hash: n,
        missingData: r
      })
    })
  },
  uploadIcon(e, t, n) {
    s.tn.post({
      url: P.ANM.UNVERIFIED_APPLICATIONS_ICONS,
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
    c.Z.dispatch({
      type: "RUNNING_GAME_DELETE_ENTRY",
      game: e
    })
  },
  launch: U,
  async join(e) {
    let {
      userId: t,
      sessionId: n,
      applicationId: r,
      channelId: i,
      messageId: a,
      intent: o = D.Ws.PLAY,
      embedded: s = false,
      source: l,
      locationObject: u,
      analyticsLocations: d,
      remotePartyId: f
    } = e;
    if (__OVERLAY__) return c.Z.dispatch({
      type: "OVERLAY_JOIN_GAME",
      userId: t,
      sessionId: n,
      applicationId: r,
      channelId: i,
      messageId: a
    }), Promise.resolve(true);
    c.Z.dispatch({
      type: "ACTIVITY_JOIN_LOADING",
      applicationId: r,
      remotePartyId: f
    });
    try {
      let e = (0, S.platformPrefersDeepLink)(),
        c = await C.Z.getJoinSecret(t, n, r, i, a);
      return null == f && M({
        applicationId: r,
        secret: c,
        channelId: i,
        intent: o,
        embedded: s,
        source: l,
        locationObject: u,
        analyticsLocations: d,
        preferDeepLink: e
      }), true
    } catch (e) {
      return c.Z.dispatch({
        type: "ACTIVITY_JOIN_FAILED",
        applicationId: r
      }), false
    }
  },
  joinWithSecret: M
}