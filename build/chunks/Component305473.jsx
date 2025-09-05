/** Chunk was on 6850 **/
/** chunk id: 305473, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk528011 = require("./528011.js"),
  Chunk533244 = require("./533244.js"),
  Chunk596482 = require("./596482.jsx");

function a(e) {
  let {
    guild: t
  } = e, {
    shouldShowIncidentActions: n,
    incidentData: a,
    isUnderLockdown: s
  } = (0, l.mI)(t.id), c = false;
  return (null != a && (c = (0, i.i9)(a) && n), c || s) ? (0, r.jsx)(o.Z, {
    guild: t,
    incidentData: a,
    isUnderLockdown: s,
    isRaidDetected: c
  }) : null
}