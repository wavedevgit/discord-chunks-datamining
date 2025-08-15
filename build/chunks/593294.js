/** Chunk was on web.js **/
/** chunk id: 593294, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk317381 = require("./317381.js"),
  Chunk835473 = require("./835473.js"),
  Chunk158776 = require("./158776.js"),
  Chunk719247 = require("./719247.js"),
  Chunk567493 = require("./567493.js");

function c(e) {
  let t = (0, r.e7)([s.Z, o.Z], () => (0, l.KF)(e) ? (0, l.hQ)(e, o.Z) : s.Z.getMatchingActivity(e)),
    [n, c] = (0, a.Z)([null == t ? true : t.application_id, "application_id" in e.extra ? e.extra.application_id : true]);
  return {
    activity: t,
    embeddedActivity: (0, r.e7)([i.ZP], () => i.ZP.getEmbeddedActivityForUserId(e.author_id, null == n ? true : n.id)),
    anyMatchingApplication: null != n ? n : c,
    activityApplication: n,
    fallbackApplication: c
  }
}