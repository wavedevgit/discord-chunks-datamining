/** Chunk was on 38597 **/
"use strict";
r.d(t, {
  Z: () => s
});
var a = r(501951);

function n(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (0, a.Z)(n.key), n)
  }
}

function s(e, t, r) {
  return t && n(e.prototype, t), r && n(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e
}