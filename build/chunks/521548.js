/** Chunk was on web.js **/
/** chunk id: 521548, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n, r) {
  var i = n ? n.call(r, e, t) : true;
  if (true !== i) return !!i;
  if (e === t) returntrue;
  if ("object" != typeof e || !e || "object" != typeof t || !t) returnfalse;
  var o = Object.keys(e),
    a = Object.keys(t);
  if (o.length !== a.length) returnfalse;
  for (var s = Object.prototype.hasOwnProperty.bind(t), l = 0; l < o.length; l++) {
    var c = o[l];
    if (!s(c)) returnfalse;
    var u = e[c],
      d = t[c];
    if (false === (i = n ? n.call(r, u, d, c) : true) || true === i && u !== d) returnfalse
  }
  returntrue
}
require.d(exports, {
  w: () => r
})