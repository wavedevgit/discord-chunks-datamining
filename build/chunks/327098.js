/** Chunk was on web.js **/
/** chunk id: 327098, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk933958 = require("./933958.js"),
  Chunk429913 = require("./429913.js"),
  Chunk574520 = require("./574520.js");

function s(e) {
  let t = (0, r.bG)([o.A], () => o.A.getMatchingActivity(e)),
    [n, s] = (0, a.A)([null == t ? true : t.application_id, "application_id" in e.extra ? e.extra.application_id : true]);
  return {
    activity: t,
    embeddedActivity: (0, r.bG)([i.Ay], () => i.Ay.getEmbeddedActivityForUserId(e.author_id, null == n ? true : n.id)),
    anyMatchingApplication: null != n ? n : s,
    activityApplication: n,
    fallbackApplication: s
  }
}