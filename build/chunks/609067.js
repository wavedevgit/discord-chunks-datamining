/** Chunk was on 38597 **/
"use strict";
r.d(t, {
  Z: () => s
});
var a = r(181568),
  n = r(925092);

function s(e, t) {
  e = (0, a.Z)(e), t = (0, a.Z)(t);
  let r = Math.max((0, n.H3)(e), 0),
    s = Math.max((0, n.H3)(t), 0);
  return s > r && ([r, s] = [s, r]), (r + .05) / (s + .05)
}