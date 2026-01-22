/** Chunk was on 92885 **/
/** chunk id: 534164, original params: e,o,i (module,exports,require) **/
require.d(exports, {
  init: () => t
});
var Chunk461789 = require("./461789.js");

function t() {
  window.DiscordDevSession = {
    start: s,
    stop: r,
    started: false
  }
}

function s() {
  null == window.GLOBAL_ENV.DEV_SESSION_KEY ? console.log("Meticulous token not found") : ((0, n.Lw)({
    recordingToken: window.GLOBAL_ENV.DEV_SESSION_KEY,
    isProduction: false
  }), null != window.DiscordDevSession && (window.DiscordDevSession.started = true), console.log("Meticulous session recording started"))
}

function r() {
  (0, n.B5)(), null != window.DiscordDevSession && (window.DiscordDevSession.started = false)
}