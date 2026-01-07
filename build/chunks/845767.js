/** Chunk was on 1272 **/
/** chunk id: 845767, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk594174 = require("./594174.js");
class a extends Chunk317770.Z {
  _initialize() {
    r.Z.subscribe("POST_CONNECTION_OPEN", this._maybeStartDevSession), r.Z.subscribe("LOGOUT", this._maybeStopDevSession)
  }
  _terminate() {
    r.Z.unsubscribe("POST_CONNECTION_OPEN", this._maybeStartDevSession), r.Z.unsubscribe("LOGOUT", this._maybeStopDevSession)
  }
  _maybeStartDevSession() {
    if (null == window.DiscordDevSession || true !== window.__METICULOUS_ENABLED) return;
    let e = "production" === window.GLOBAL_ENV.PROJECT_ENV,
      t = l.default.getCurrentUser();
    if (!((null == t ? true : t.email) == null || e && t.isStaff())) t.username.startsWith("mtcls") || !e ? window.DiscordDevSession.start() : window.DiscordDevSession.stop()
  }
  _maybeStopDevSession() {
    null != window.DiscordDevSession && window.DiscordDevSession.started && window.DiscordDevSession.stop()
  }
}
let o = new a