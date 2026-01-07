/** Chunk was on web.js **/
/** chunk id: 395687, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = require("./70956.js").Z.Millis.HOUR,
  l = {
    lastReportedAtMs: null
  },
  c = l;

function u(e) {
  let {
    timestampMs: t
  } = e;
  return c.lastReportedAtMs = t, true
}
class d extends(r = Chunk442837.ZP.PersistedStore) {
  initialize() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : l;
    c = null != e ? e : l
  }
  isCooldownElapsed() {
    return null == c.lastReportedAtMs || Date.now() - c.lastReportedAtMs >= s
  }
  getState() {
    return c
  }
}
o(d, "displayName", "FriendOnlineTimerStore"), o(d, "persistKey", "FriendOnlineTimerStore");
let f = new d(Chunk570140.Z, {
  FRIEND_ONLINE_TIMER_REPORTED: u
})