/** Chunk was on 77443 **/
/** chunk id: 521548, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => r
});

function r(e, t, n, r) {
  var i = n ? n.call(r, e, t) : true;
  if (true !== i) return !!i;
  if (e === t) returntrue;
  if ("object" != typeof e || !e || "object" != typeof t || !t) returnfalse;
  var l = Object.keys(e),
    a = Object.keys(t);
  if (l.length !== a.length) returnfalse;
  for (var o = Object.prototype.hasOwnProperty.bind(t), c = 0; c < l.length; c++) {
    var s = l[c];
    if (!o(s)) returnfalse;
    var u = e[s],
      d = t[s];
    if (false === (i = n ? n.call(r, u, d, s) : true) || true === i && u !== d) returnfalse
  }
  returntrue
}