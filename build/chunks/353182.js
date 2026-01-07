/** Chunk was on 19083 **/
/** chunk id: 353182, original params: e,o,i (module,exports,require) **/
require.r(exports), require.d(exports, {
  init: () => t
});
var Chunk846428 = require("./846428.js");

function t() {
  window.DiscordDevSession = {
    start: s,
    stop: r,
    started: false
  }
}

function s() {
  if (null == window.GLOBAL_ENV.DEV_SESSION_KEY) return void console.log("Meticulous token not found");
  (0, n.Rl)({
    recordingToken: window.GLOBAL_ENV.DEV_SESSION_KEY,
    isProduction: false
  }), null != window.DiscordDevSession && (window.DiscordDevSession.started = true), console.log("Meticulous session recording started")
}

function r() {
  (0, n.rk)(), null != window.DiscordDevSession && (window.DiscordDevSession.started = false)
}