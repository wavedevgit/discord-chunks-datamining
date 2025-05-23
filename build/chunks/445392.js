/** Chunk was on 22005 **/
var r, l = n(442837),
  o = n(570140);

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = 10 * n(70956).Z.Millis.MINUTE,
  u = {
    lastUsedCommandId: null,
    lastUsedTimeMs: null
  };
class a extends(r = l.ZP.PersistedStore) {
  initialize(e) {
    null != e && (u.lastUsedCommandId = e.lastUsedCommandId, u.lastUsedTimeMs = e.lastUsedTimeMs)
  }
  getState() {
    return u
  }
  getLastUsedCommandId() {
    let e = Date.now();
    return null == u.lastUsedTimeMs || null == u.lastUsedCommandId ? null : (e > u.lastUsedTimeMs + c && (u.lastUsedCommandId = null, u.lastUsedTimeMs = null), u.lastUsedCommandId)
  }
}
i(a, "displayName", "AppLauncherLastUsedCommandStore"), i(a, "persistKey", "AppLauncherLastUsedCommandStore"), new a(o.Z, {
  APPLICATION_COMMAND_USED: function(e) {
    let {
      command: t
    } = e;
    u.lastUsedCommandId = t.id, u.lastUsedTimeMs = Date.now()
  }
})