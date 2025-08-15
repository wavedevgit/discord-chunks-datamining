/** Chunk was on 62981 **/
/** chunk id: 445392, original params: e,n,t (module,exports,require) **/
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[n] = t, e
}
let c = 10 * require("./70956.js").Z.Millis.MINUTE,
  l = {
    lastUsedCommandId: null,
    lastUsedTimeMs: null
  };
class d extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (l.lastUsedCommandId = e.lastUsedCommandId, l.lastUsedTimeMs = e.lastUsedTimeMs)
  }
  getState() {
    return l
  }
  getLastUsedCommandId() {
    let e = Date.now();
    return null == l.lastUsedTimeMs || null == l.lastUsedCommandId ? null : (module > l.lastUsedTimeMs + c && (l.lastUsedCommandId = null, l.lastUsedTimeMs = null), l.lastUsedCommandId)
  }
}
a(d, "displayName", "AppLauncherLastUsedCommandStore"), a(d, "persistKey", "AppLauncherLastUsedCommandStore"), new d(Chunk570140.Z, {
  APPLICATION_COMMAND_USED: function(e) {
    let {
      command: n
    } = e;
    l.lastUsedCommandId = n.id, l.lastUsedTimeMs = Date.now()
  }
})