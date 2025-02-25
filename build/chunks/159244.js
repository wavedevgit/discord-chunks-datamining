/** Chunk was on 79120 **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(442837),
  l = n(699516),
  i = n(594174),
  o = n(981631);
let a = e => {
  let t = (0, r.e7)([i.default], () => i.default.getCurrentUser()),
    n = (0, r.e7)([l.Z], () => l.Z.getRelationshipType(e.id)),
    a = e.isNonUserBot();
  return e.id !== (null == t ? void 0 : t.id) && n !== o.OGo.BLOCKED && !a
}