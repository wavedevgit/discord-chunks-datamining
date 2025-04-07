/** Chunk was on 74371 **/
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
let a = 10 * n(70956).Z.Millis.MINUTE,
  c = {
    lastUsedCommandId: null,
    lastUsedTimeMs: null
  };
class u extends(r = l.ZP.PersistedStore) {
  initialize(e) {
    null != e && (c.lastUsedCommandId = e.lastUsedCommandId, c.lastUsedTimeMs = e.lastUsedTimeMs)
  }
  getState() {
    return c
  }
  getLastUsedCommandId() {
    let e = Date.now();
    return null == c.lastUsedTimeMs || null == c.lastUsedCommandId ? null : (e > c.lastUsedTimeMs + a && (c.lastUsedCommandId = null, c.lastUsedTimeMs = null), c.lastUsedCommandId)
  }
}
i(u, "displayName", "AppLauncherLastUsedCommandStore"), i(u, "persistKey", "AppLauncherLastUsedCommandStore"), new u(o.Z, {
  APPLICATION_COMMAND_USED: function(e) {
    let {
      command: t
    } = e;
    c.lastUsedCommandId = t.id, c.lastUsedTimeMs = Date.now()
  }
})