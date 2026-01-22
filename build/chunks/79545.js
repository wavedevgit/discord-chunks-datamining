/** Chunk was on web.js **/
/** chunk id: 79545, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => s,
  U: () => a
});
var Chunk890687 = require("./890687.js"),
  Chunk710969 = require("./710969.js"),
  a = function(e) {
    return e[e.UNENROLLED = 0] = "UNENROLLED", e[e.ENROLLED = 1] = "ENROLLED", e[e.INCOMPLETE = 2] = "INCOMPLETE", e[e.COMPLETED = 3] = "COMPLETED", e[e.CLAIMED = 4] = "CLAIMED", e[e.EXPIRED = 5] = "EXPIRED", e
  }({});

function s(e) {
  var t, n, a;
  let s = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    o = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    l = (null == (a = e.userStatus) ? true : a.claimedAt) != null,
    c = (0, r.fc)(e).percentComplete > 0;
  return (0, i.Ic)(e) ? 5 : l ? 4 : s && o ? 3 : s && c ? 2 : +!!s
}