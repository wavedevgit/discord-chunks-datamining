/** Chunk was on web.js **/
/** chunk id: 854989, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => o,
  w: () => a
});
var Chunk968843 = require("./968843.js"),
  Chunk862657 = require("./862657.js"),
  a = function(e) {
    return e[e.UNENROLLED = 0] = "UNENROLLED", e[e.ENROLLED = 1] = "ENROLLED", e[e.INCOMPLETE = 2] = "INCOMPLETE", e[e.COMPLETED = 3] = "COMPLETED", e[e.CLAIMED = 4] = "CLAIMED", e[e.EXPIRED = 5] = "EXPIRED", e
  }({});

function o(e) {
  var t, n, a;
  let o = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    s = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    l = (null == (a = e.userStatus) ? true : a.claimedAt) != null,
    c = (0, r.Rf)(e).percentComplete > 0;
  return (0, i.zi)(e) ? 5 : l ? 4 : o && s ? 3 : o && c ? 2 : +!!o
}