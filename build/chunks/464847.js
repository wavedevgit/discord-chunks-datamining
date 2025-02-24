/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
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