/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Ig: () => o,
  UU: () => a,
  ZY: () => i
});
var r = n(392711);

function i(e) {
  return e.__DISCORD_WINDOW_ID
}

function o(e) {
  let t = (0, r.uniqueId)("window-");
  return e.__DISCORD_WINDOW_ID = t, t
}

function a() {
  return i(window)
}