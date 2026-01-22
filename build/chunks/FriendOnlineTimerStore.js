/** Chunk was on web.js **/
/** chunk id: 31369, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = require("./927813.js").A.Millis.HOUR,
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
class d extends(r = Chunk311907.Ay.PersistedStore) {
  initialize() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : l;
    c = null != e ? e : l
  }
  isCooldownElapsed() {
    return null == c.lastReportedAtMs || Date.now() - c.lastReportedAtMs >= o
  }
  getState() {
    return c
  }
}
s(d, "displayName", "FriendOnlineTimerStore"), s(d, "persistKey", "FriendOnlineTimerStore");
let f = new d(Chunk73153.h, {
  FRIEND_ONLINE_TIMER_REPORTED: u
})