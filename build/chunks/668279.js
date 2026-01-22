/** Chunk was on web.js **/
/** chunk id: 668279, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  var t;
  null == (t = window.DiscordSentry) || t.addBreadcrumb({
    type: "default",
    level: "info",
    category: e.category,
    message: e.message,
    data: e.data,
    timestamp: Date.now()
  })
}
require.d(exports, {
  A: () => r
})