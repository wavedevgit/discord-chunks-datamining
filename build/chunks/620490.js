/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";

function r(e, t) {
  if (e.score === t.score) {
    var n, r, i, o, a, s;
    let l = null !== (o = null !== (i = e.sortable) && void 0 !== i ? i : null === (n = e.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== o ? o : "",
      c = null !== (s = null !== (a = e.sortable) && void 0 !== a ? a : null === (r = t.comparator) || void 0 === r ? void 0 : r.toLocaleLowerCase()) && void 0 !== s ? s : "";
    if (l < c) return -1;
    if (l > c) return 1
  }
  return t.score - e.score
}
n.d(t, {
  Z: () => r
})