/** Chunk was on 38597 (284c18b018f79f5f.js) **/
"use strict";
r.d(t, {
  Z: () => s
});
var a = r(665352),
  n = r(181568);

function s(e, t, {
  epsilon: r = 75e-6
} = {}) {
  e = (0, n.Z)(e), t || (t = e.space), t = a.Z.get(t);
  let o = e.coords;
  return t !== e.space && (o = t.from(e)), t.inGamut(o, {
    epsilon: r
  })
}