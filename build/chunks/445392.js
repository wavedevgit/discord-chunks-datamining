/** Chunk was on 68992 **/
var o, r = t(442837),
  i = t(570140);

function a(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e
}
let c = 10 * t(70956).Z.Millis.MINUTE,
  l = {
    lastUsedCommandId: null,
    lastUsedTimeMs: null
  };
class d extends(o = r.ZP.PersistedStore) {
  initialize(e) {
    null != e && (l.lastUsedCommandId = e.lastUsedCommandId, l.lastUsedTimeMs = e.lastUsedTimeMs)
  }
  getState() {
    return l
  }
  getLastUsedCommandId() {
    let e = Date.now();
    return null == l.lastUsedTimeMs || null == l.lastUsedCommandId ? null : (e > l.lastUsedTimeMs + c && (l.lastUsedCommandId = null, l.lastUsedTimeMs = null), l.lastUsedCommandId)
  }
}
a(d, "displayName", "AppLauncherLastUsedCommandStore"), a(d, "persistKey", "AppLauncherLastUsedCommandStore"), new d(i.Z, {
  APPLICATION_COMMAND_USED: function(e) {
    let {
      command: n
    } = e;
    l.lastUsedCommandId = n.id, l.lastUsedTimeMs = Date.now()
  }
})