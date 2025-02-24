/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";

function r(e) {
  var t;
  null === (t = window.DiscordSentry) || void 0 === t || t.addBreadcrumb({
    type: "default",
    level: "info",
    category: e.category,
    message: e.message,
    data: e.data,
    timestamp: Date.now()
  })
}
n.d(t, {
  Z: () => r
})