/** Chunk was on 61947 **/
"use strict";
r.d(t, {
  Z: () => l
}), r(388685);
var n = r(451467),
  o = r(37113);

function l(e, t, r) {
  for (let l of o.no[e])
    if ((0, n.Z)(e, l.resolution, l.fps, t, r)) return [l.resolution, l.fps];
  return null
}