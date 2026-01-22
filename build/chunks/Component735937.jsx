/** Chunk was on 35894 **/
/** chunk id: 735937, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk585510 = require("./585510.js"),
  Chunk903093 = require("./903093.js"),
  Chunk976715 = require("./976715.jsx");

function a(e) {
  let {
    guild: t
  } = e, {
    shouldShowIncidentActions: n,
    incidentData: a,
    isUnderLockdown: s
  } = (0, l.Li)(t.id), c = false;
  return (null != a && (c = (0, i.k$)(a) && n), c || s) ? (0, r.jsx)(o.A, {
    guild: t,
    incidentData: a,
    isUnderLockdown: s,
    isRaidDetected: c
  }) : null
}