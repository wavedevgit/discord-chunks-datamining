/** Chunk was on web.js **/
/** chunk id: 445392, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
let s = 10 * require("./70956.js").Z.Millis.MINUTE,
  l = {
    lastUsedCommandId: null,
    lastUsedTimeMs: null
  };

function c(e) {
  let {
    command: t
  } = e;
  l.lastUsedCommandId = t.id, l.lastUsedTimeMs = Date.now()
}
class u extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (l.lastUsedCommandId = e.lastUsedCommandId, l.lastUsedTimeMs = e.lastUsedTimeMs)
  }
  getState() {
    return l
  }
  getLastUsedCommandId() {
    let e = Date.now();
    return null == l.lastUsedTimeMs || null == l.lastUsedCommandId ? null : (e > l.lastUsedTimeMs + s && (l.lastUsedCommandId = null, l.lastUsedTimeMs = null), l.lastUsedCommandId)
  }
}
o(u, "displayName", "AppLauncherLastUsedCommandStore"), o(u, "persistKey", "AppLauncherLastUsedCommandStore"), new u(Chunk570140.Z, {
  APPLICATION_COMMAND_USED: c
})