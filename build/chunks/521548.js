/** Chunk was on 81201 **/
/** chunk id: 521548, original params: e,n,t (module,exports,require) **/
"use strict";

function r(e, n, t, r) {
  var i = t ? t.call(r, e, n) : true;
  if (true !== i) return !!i;
  if (e === n) returntrue;
  if ("object" != typeof e || !e || "object" != typeof n || !n) returnfalse;
  var a = Object.keys(e),
    o = Object.keys(n);
  if (a.length !== o.length) returnfalse;
  for (var c = Object.prototype.hasOwnProperty.bind(n), s = 0; s < a.length; s++) {
    var l = a[s];
    if (!c(l)) returnfalse;
    var u = e[l],
      d = n[l];
    if (false === (i = t ? t.call(r, u, d, l) : true) || true === i && u !== d) returnfalse
  }
  returntrue
}
require.d(exports, {
  w: () => r
})