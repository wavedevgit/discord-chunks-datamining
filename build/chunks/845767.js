/** Chunk was on 1272 **/
/** chunk id: 845767, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk594174 = require("./594174.js");
class a extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("POST_CONNECTION_OPEN", this._maybeStartDevSession), Chunk570140.Z.subscribe("LOGOUT", this._maybeStopDevSession)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("POST_CONNECTION_OPEN", this._maybeStartDevSession), Chunk570140.Z.unsubscribe("LOGOUT", this._maybeStopDevSession)
  }
  _maybeStartDevSession() {
    if (null == window.DiscordDevSession || true !== window.__METICULOUS_ENABLED) return;
    let e = "production" === window.GLOBAL_ENV.PROJECT_ENV,
      t = Chunk594174.default.getCurrentUser();
    if (!((null == exports ? true : exports.email) == null || module && exports.isStaff())) exports.username.startsWith("mtcls") || !module ? window.DiscordDevSession.start() : window.DiscordDevSession.stop()
  }
  _maybeStopDevSession() {
    null != window.DiscordDevSession && window.DiscordDevSession.started && window.DiscordDevSession.stop()
  }
}
let s = new a