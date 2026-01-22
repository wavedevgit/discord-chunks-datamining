/** Chunk was on web.js **/
/** chunk id: 327098, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk933958 = require("./933958.js"),
  Chunk429913 = require("./429913.js"),
  Chunk574520 = require("./574520.js");

function o(e) {
  let t = (0, r.bG)([s.A], () => s.A.getMatchingActivity(e)),
    [n, o] = (0, a.A)([null == t ? true : t.application_id, "application_id" in e.extra ? e.extra.application_id : true]);
  return {
    activity: t,
    embeddedActivity: (0, r.bG)([i.Ay], () => i.Ay.getEmbeddedActivityForUserId(e.author_id, null == n ? true : n.id)),
    anyMatchingApplication: null != n ? n : o,
    activityApplication: n,
    fallbackApplication: o
  }
}