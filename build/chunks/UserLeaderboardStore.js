/** Chunk was on web.js **/
/** chunk id: 311687, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
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

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}
let l = {
  lastUpdateRequested: {}
};

function c(e) {
  let {
    lastUpdateRequested: t,
    leaderboardId: n
  } = e;
  l.lastUpdateRequested[n] = t
}
class u extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    l = s({}, l, null != e ? e : {})
  }
  getState() {
    return l
  }
  getLastUpdateRequested(e) {
    return l.lastUpdateRequested[e]
  }
}
a(u, "displayName", "UserLeaderboardStore"), a(u, "persistKey", "UserLeaderboardStore");
let d = new u(Chunk570140.Z, {
  SET_USER_LEADERBOARD_LAST_UPDATE_REQUESTED: c
})