/** Chunk was on web.js **/
/** chunk id: 376261, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk498642 = require("./498642.js");
require("./424994.js");
var Chunk652215 = require("./652215.js");

function s(e) {
  return (0, r.bG)([i.A], () => {
    if (null == e) return;
    let t = i.A.getMemberCount(e.id),
      n = e.features.has(a.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER),
      r = e.features.has(a.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER),
      s = null != t && t < 1e4;
    return n || r ? n : s
  })
}