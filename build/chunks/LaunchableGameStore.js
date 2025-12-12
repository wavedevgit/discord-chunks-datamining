/** Chunk was on web.js **/
/** chunk id: 592745, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
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
class f extends(r = Chunk442837.ZP.Store) {
  get launchingGames() {
    return s
  }
  get launchableGames() {
    return l
  }
  isLaunchable(e) {
    return null != l[e] ? l[e] : (l[e] = false, o.Z.dispatch({
      type: "CHECK_LAUNCHABLE_GAME",
      gameId: e
    }), false)
  }
}
a(f, "displayName", "LaunchableGameStore");
let p = new f(Chunk570140.Z, {
  GAME_LAUNCHABLE_UPDATE: c,
  GAME_CLOUD_SYNC_START: u,
  GAME_LAUNCH_START: u,
  GAME_LAUNCH_SUCCESS: d,
  GAME_LAUNCH_FAIL: d,
  GAME_CLOUD_SYNC_CONFLICT: d,
  GAME_CLOUD_SYNC_ERROR: d,
  GAME_CLOUD_SYNC_COMPLETE: d
})