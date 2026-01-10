/** Chunk was on web.js **/
/** chunk id: 34586, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk650774 = require("./650774.js"),
  Chunk206583 = require("./206583.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  return (0, r.e7)([i.Z], () => {
    if (null == e) return;
    let t = i.Z.getMemberCount(e.id),
      n = e.features.has(o.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER),
      r = e.features.has(o.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER),
      s = n || r,
      l = null != t && t < a.k4;
    return s ? n : l
  })
}