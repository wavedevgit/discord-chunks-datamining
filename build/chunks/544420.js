/** Chunk was on web.js **/
/** chunk id: 544420, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => V
}), require("./896048.js"), require("./747238.js"), require("./65821.js");
var Chunk488428 = require("./488428.js"),
  Chunk110259 = require("./110259.js"),
  Chunk179771 = require("./179771.js"),
  Chunk665260 = require("./665260.js"),
  Chunk562465 = require("./562465.js"),
  Chunk933681 = require("./933681.js"),
  Chunk73153 = require("./73153.js"),
  Chunk447031 = require("./447031.js"),
  Chunk587895 = require("./587895.js"),
  Chunk306044 = require("./306044.js"),
  Chunk626584 = require("./626584.js"),
  Chunk625180 = require("./625180.js"),
  Chunk207371 = require("./207371.js"),
  Chunk489803 = require("./489803.js"),
  Chunk953384 = require("./953384.js"),
  Chunk15285 = require("./15285.js"),
  Chunk773669 = require("./773669.js"),
  Chunk134861 = require("./134861.js"),
  Chunk760751 = require("./760751.js"),
  Chunk189081 = require("./189081.js"),
  Chunk194871 = require("./194871.js"),
  Chunk954571 = require("./954571.js"),
  Chunk25171 = require("./25171.js"),
  Chunk723702 = require("./723702.js"),
  Chunk499785 = require("./499785.js"),
  Chunk308368 = require("./308368.js"),
  Chunk59636 = require("./59636.js"),
  Chunk912851 = require("./912851.js"),
  Chunk652215 = require("./652215.js"),
  Chunk360469 = require("./360469.js"),
  Chunk985018 = require("./985018.jsx");
let L = 3,
  j = new Chunk626584.A("GamesActionCreators");

function M(e) {
  let {
    applicationId: t,
    secret: n,
    channelId: r,
    intent: i = D.W9.PLAY,
    embedded: a = false,
    source: s,
    locationObject: o,
    analyticsLocations: l,
    preferDeepLink: u = false
  } = e;
  if (u) {
    let e = d.A.getApplication(t);
    if ((null == e ? true : e.deepLinkUri) != null) {
      let r = "".concat(e.deepLinkUri).concat(P.O3O.GAME_INVITE_FRAGMENT).concat(n);
      try {
        if (r.startsWith("http")) {
          let e = window.open(r, "_blank");
          (null == e || e.closed || true === e.closed) && (j.warn("Deep link popup was blocked by browser, trying location.href", {
            applicationId: t
          }), window.location.href = r)
        } else window.location.href = r;
        return Promise.resolve()
      } catch (e) {
        j.warn("Failed to open deep link, falling back to desktop launch", {
          applicationId: t,
          error: e.message
        })
      }
    }
  }
  G({
    applicationId: t,
    channelId: r,
    embedded: a,
    source: s,
    locationObject: o,
    analyticsLocations: l
  }).then(e => 0 === e ? null : I.A.waitConnected(t).then(() => Promise.race([I.A.waitSubscribed(t, P.ZE4.ACTIVITY_JOIN)]))).then(() => {
    c.h.dispatch({
      type: "ACTIVITY_JOIN",
      applicationId: t,
      secret: n,
      intent: i,
      embedded: a
    })
  }).catch(() => c.h.dispatch({
    type: "ACTIVITY_JOIN_FAILED",
    applicationId: t
  }))
}

function k(e, t) {
  return null == e || "" === e ? null : {
    distributor: e,
    sku: t
  }
}

function U(e) {
  return o.Bo.post({
    url: P.Rsh.OAUTH2_AUTHORIZE,
    query: {
      client_id: e,
      response_type: "token",
      scope: [a.F.IDENTIFY].join(" ")
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
async function G(e) {
  let {
    applicationId: t,
    branchId: n,
    channelId: r,
    embedded: i = false,
    source: a,
    locationObject: s = {},
    analyticsLocations: o = []
  } = e;
  if (i) {
    let e = d.A.getApplication(t);
    return null != e && (0, h.x)(e) ? (await _.A.launchFrame({
      applicationId: t
    }), 0) : await (0, u.A)({
      applicationId: t,
      activityChannelId: null != r ? r : true,
      source: a,
      locationObject: s,
      analyticsLocations: o
    }) ? 0 : Promise.resolve()
  }
  if (y.A.isConnected(t)) return Promise.resolve();
  let l = null;
  if (null == n) {
    let e = A.A.getActiveLibraryApplication(t);
    n = null != e ? e.branchId : t
  }
  if (v.A.isLaunchable(t, n)) {
    let e = v.A.getState(t, n),
      r = A.A.getActiveLaunchOptionId(t, n);
    if (null == e) throw Error("Missing dispatch game when launching");
    let i = A.A.getLibraryApplication(t, n);
    if (null == i) throw Error("Missing library application when launching");
    l = U(t).then(t => I.A.launchDispatchApplication(e, t, b.default.locale, i.getBranchName(), r))
  } else {
    let e = d.A.getApplication(t);
    l = null != e ? I.A.launch(e) : I.A.launchGame(t)
  }
  let f = Error("game not found");
  return null != l ? (c.h.dispatch({
    type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE",
    applicationId: t,
    branchId: n
  }), c.h.dispatch({
    type: "GAME_LAUNCH_START",
    applicationId: t
  }), l.then(e => {
    c.h.dispatch({
      type: "GAME_LAUNCH_SUCCESS",
      applicationId: t,
      pids: e
    })
  }).catch(e => {
    w.A.show(P.kqX.LAUNCH_GAME_FAILURE, x.intl.string(x.t.YZEBdj)), c.h.dispatch({
      type: "GAME_LAUNCH_FAIL",
      applicationId: t,
      error: f
    })
  })) : (c.h.dispatch({
    type: "GAME_LAUNCH_FAIL",
    applicationId: t,
    error: f
  }), Promise.reject(f))
}
let V = {
  addGame(e, t) {
    c.h.dispatch({
      type: "RUNNING_GAME_ADD_OVERRIDE",
      pid: e
    }), S.default.track(P.HAw.RUNNING_GAME_OVERRIDE_ADDED, {
      game_name: t
    })
  },
  toggleOverlay(e, t, n) {
    let r = (0, E.Zh)(e),
      i = O.A.getGameByName(r.name);
    if (null != i) {
      let e = A.A.getActiveLibraryApplication(i.id);
      if (null != e) {
        let r = e.getFlags(),
          i = s.Lt(r, P.hM6.OVERLAY_DISABLED);
        t && i !== t && (r = s.PQ(r, P.hM6.OVERLAY_DISABLED));
        let a = s.Lt(r, P.hM6.OVERLAY_V3_DISABLED);
        null != n && n !== a && (r = s.PQ(r, P.hM6.OVERLAY_V3_DISABLED)), R.V(e.id, e.branchId, r);
        return
      }
    }
    c.h.dispatch({
      type: "RUNNING_GAME_TOGGLE_OVERLAY",
      game: r,
      newLegacyOverlayEnabledValue: t,
      newOverlayV3EnabledValue: n
    })
  },
  toggleDetection(e) {
    c.h.dispatch({
      type: "RUNNING_GAME_TOGGLE_DETECTION",
      game: e
    })
  },
  editName(e, t) {
    c.h.dispatch({
      type: "RUNNING_GAME_EDIT_NAME",
      game: e,
      newName: t
    })
  },
  identifyGame: (e, t) => (0, f.A)().then(t => new Promise((n, r) => {
    null == t ? r(Error("Game utils module not loaded")) : t.identifyGame(e, (t, i) => {
      (j.log("Identified game: ", {
        status: t,
        name: i.name,
        iconHash: i.iconHash,
        sku: i.sku,
        executableName: i.executableName,
        distributor: i.distributor,
        publisher: i.publisher
      }), 0 !== t) ? r(Error("Error ".concat(t, " when fetching info on ").concat(e))): null == i.icon || "" === i.icon || null == i.name || "" === i.name ? r(Error("Did not find data on ".concat(e))) : (c.h.dispatch({
        type: "GAME_ICON_UPDATE",
        gameName: i.name,
        icon: "data:image/png;base64,".concat(i.icon)
      }), n(i))
    })
  })),
  getDetectableGamesSupplemental(e) {
    let {
      forceFetch: t
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
      forceFetch: false
    };
    (0, m.v)(e, {
      forceFetch: t
    })
  },
  getDetectableGames() {
    if (!O.A.canFetchDetectableGames()) return;
    let e = O.A.detectableGamesEtag;
    c.h.wait(() => {
      c.h.dispatch({
        type: "GAMES_DATABASE_FETCH"
      }), C.A.get({
        url: P.Rsh.GAMES_DETECTABLE,
        headers: {
          "If-None-Match": e
        },
        retries: 1,
        oldFormErrors: true,
        trackedActionData: {
          event: i.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH,
          properties: t => {
            var n;
            return (0, l.e0)({
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
        c.h.dispatch({
          type: "GAMES_DATABASE_UPDATE",
          games: t,
          etag: n
        })
      }, e => {
        let {
          status: t
        } = e;
        304 === t ? c.h.dispatch({
          type: "GAMES_DATABASE_UPDATE",
          games: [],
          etag: O.A.detectableGamesEtag
        }) : c.h.dispatch({
          type: "GAMES_DATABASE_FETCH_FAIL"
        })
      })
    })
  },
  getDetectableBlocklist() {
    if (!O.A.canFetchExecutableBlocklist()) return;
    let e = O.A.blocklistEtag;
    c.h.dispatch({
      type: "GAMES_BLOCKLIST_FETCH"
    }), o.Bo.get({
      url: P.Rsh.GAMES_BLOCKLIST,
      headers: {
        "If-None-Match": e
      },
      oldFormErrors: true,
      rejectWithError: false
    }).then(e => {
      var t, n;
      let {
        body: r,
        headers: {
          etag: i
        }
      } = e;
      c.h.dispatch({
        type: "GAMES_BLOCKLIST_UPDATE",
        executables: null != (t = r.executables) ? t : [],
        patterns: null != (n = r.patterns) ? n : [],
        etag: i
      })
    }, e => {
      let {
        status: t
      } = e;
      304 === t ? c.h.dispatch({
        type: "GAMES_BLOCKLIST_UPDATE",
        executables: [],
        patterns: [],
        etag: O.A.blocklistEtag
      }) : (j.error("Failed to fetch games blocklist"), c.h.dispatch({
        type: "GAMES_BLOCKLIST_FETCH_FAIL"
      }))
    })
  },
  getDetectableNonGames() {
    if (!g.A.canFetch()) return;
    let e = g.A.etag;
    c.h.wait(() => {
      c.h.dispatch({
        type: "NON_GAMES_DATABASE_FETCH"
      }), o.Bo.get({
        url: P.Rsh.NON_GAMES_DETECTABLE,
        headers: {
          "If-None-Match": e
        },
        retries: 1,
        rejectWithError: false
      }).then(e => {
        let {
          body: t,
          headers: {
            etag: n
          }
        } = e;
        c.h.dispatch({
          type: "NON_GAMES_DATABASE_UPDATE",
          nonGames: t,
          etag: n
        })
      }, e => {
        let {
          status: t
        } = e;
        304 === t ? c.h.dispatch({
          type: "NON_GAMES_DATABASE_UPDATE",
          nonGames: [],
          etag: g.A.etag
        }) : c.h.dispatch({
          type: "NON_GAMES_DATABASE_FETCH_FAIL"
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
      executableName: s
    } = e, l = (0, f.v)(s);
    j.log("Reporting unverified game: ", {
      name: t,
      executableName: s,
      iconHash: n,
      publisher: r,
      distributor: i,
      sku: a,
      cleanedExecutable: l
    }), null != l && o.Bo.post({
      url: P.Rsh.UNVERIFIED_APPLICATIONS,
      body: {
        name: t,
        os: (0, T.getPlatformName)(),
        icon: n,
        distributor_application: k(i, a),
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
      c.h.dispatch({
        type: "UNVERIFIED_GAME_UPDATE",
        name: t,
        hash: n,
        missingData: r
      })
    })
  },
  uploadIcon(e, t, n) {
    o.Bo.post({
      url: P.Rsh.UNVERIFIED_APPLICATIONS_ICONS,
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
    c.h.dispatch({
      type: "RUNNING_GAME_DELETE_ENTRY",
      game: e
    })
  },
  launch: G,
  async join(e) {
    let {
      userId: t,
      sessionId: n,
      applicationId: r,
      channelId: i,
      messageId: a,
      intent: s = D.W9.PLAY,
      embedded: o = false,
      source: l,
      locationObject: u,
      analyticsLocations: d,
      remotePartyId: f
    } = e;
    if (__OVERLAY__) return c.h.dispatch({
      type: "OVERLAY_JOIN_GAME",
      userId: t,
      sessionId: n,
      applicationId: r,
      channelId: i,
      messageId: a
    }), Promise.resolve(true);
    c.h.dispatch({
      type: "ACTIVITY_JOIN_LOADING",
      applicationId: r,
      remotePartyId: f
    });
    try {
      let e = (0, T.platformPrefersDeepLink)(),
        c = await N.A.getJoinSecret(t, n, r, i, a);
      return null == f && M({
        applicationId: r,
        secret: c,
        channelId: i,
        intent: s,
        embedded: o,
        source: l,
        locationObject: u,
        analyticsLocations: d,
        preferDeepLink: e
      }), true
    } catch (e) {
      return c.h.dispatch({
        type: "ACTIVITY_JOIN_FAILED",
        applicationId: r
      }), false
    }
  },
  joinWithSecret: M
}