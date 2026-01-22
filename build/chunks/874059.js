/** Chunk was on 21738 **/
/** chunk id: 874059, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk287809 = require("./287809.js");
class a extends Chunk272355.A {
  _initialize() {
    r.h.subscribe("POST_CONNECTION_OPEN", this._maybeStartDevSession), r.h.subscribe("LOGOUT", this._maybeStopDevSession)
  }
  _terminate() {
    r.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeStartDevSession), r.h.unsubscribe("LOGOUT", this._maybeStopDevSession)
  }
  _maybeStartDevSession() {
    if (null == window.DiscordDevSession || true !== window.__METICULOUS_ENABLED) return;
    let e = "production" === window.GLOBAL_ENV.PROJECT_ENV,
      t = l.default.getCurrentUser();
    (null == t ? true : t.email) == null || e && t.isStaff() || (t.username.startsWith("mtcls") || !e ? window.DiscordDevSession.start() : window.DiscordDevSession.stop())
  }
  _maybeStopDevSession() {
    null != window.DiscordDevSession && window.DiscordDevSession.started && window.DiscordDevSession.stop()
  }
}
let s = new a