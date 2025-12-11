/** Chunk was on 6850 **/
/** chunk id: 305473, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk528011 = require("./528011.js"),
  Chunk533244 = require("./533244.js"),
  Chunk596482 = require("./596482.jsx");

function o(e) {
  let {
    guild: t
  } = e, {
    shouldShowIncidentActions: n,
    incidentData: o,
    isUnderLockdown: s
  } = (0, l.mI)(t.id), c = false;
  return (null != o && (c = (0, i.i9)(o) && n), c || s) ? (0, r.jsx)(a.Z, {
    guild: t,
    incidentData: o,
    isUnderLockdown: s,
    isRaidDetected: c
  }) : null
}