/** Chunk was on 92917 **/
/** chunk id: 79545, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => s,
  U: () => a
});
var r, Chunk890687 = require("./890687.js"),
  Chunk710969 = require("./710969.js"),
  a = ((r = {})[r.UNENROLLED = 0] = "UNENROLLED", r[r.ENROLLED = 1] = "ENROLLED", r[r.INCOMPLETE = 2] = "INCOMPLETE", r[r.COMPLETED = 3] = "COMPLETED", r[r.CLAIMED = 4] = "CLAIMED", r[r.EXPIRED = 5] = "EXPIRED", r);

function s(e) {
  var t, n, r;
  let a = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    s = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    o = (null == (r = e.userStatus) ? true : r.claimedAt) != null,
    c = (0, i.fc)(e).percentComplete > 0;
  return (0, l.Ic)(e) ? 5 : o ? 4 : a && s ? 3 : a && c ? 2 : +!!a
}