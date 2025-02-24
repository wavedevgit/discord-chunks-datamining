/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";

function r() {
  var e = navigator.userAgentData;
  return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
    return e.brand + "/" + e.version
  }).join(" ") : navigator.userAgent
}
n.d(t, {
  Z: () => r
})