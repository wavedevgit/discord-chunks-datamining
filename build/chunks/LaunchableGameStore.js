/** Chunk was on web.js **/
/** chunk id: 651743, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = new Set,
  l = {};

function c(e) {
  let {
    gameId: t,
    isLaunchable: n
  } = e;
  l[t] = n
}

function u(e) {
  let {
    applicationId: t
  } = e;
  s.add(t)
}

function d(e) {
  let {
    applicationId: t
  } = e;
  s.delete(t)
}
class f extends(r = Chunk311907.Ay.Store) {
  get launchingGames() {
    return s
  }
  get launchableGames() {
    return l
  }
  isLaunchable(e) {
    return null != l[e] ? l[e] : (l[e] = false, a.h.dispatch({
      type: "CHECK_LAUNCHABLE_GAME",
      gameId: e
    }), false)
  }
}
o(f, "displayName", "LaunchableGameStore");
let p = new f(Chunk73153.h, {
  GAME_LAUNCHABLE_UPDATE: c,
  GAME_CLOUD_SYNC_START: u,
  GAME_LAUNCH_START: u,
  GAME_LAUNCH_SUCCESS: d,
  GAME_LAUNCH_FAIL: d,
  GAME_CLOUD_SYNC_CONFLICT: d,
  GAME_CLOUD_SYNC_ERROR: d,
  GAME_CLOUD_SYNC_COMPLETE: d
})