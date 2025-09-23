/** Chunk was on 49902 **/
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
  for (var o = Object.prototype.hasOwnProperty.bind(t), s = 0; s < l.length; s++) {
    var c = l[s];
    if (!o(c)) returnfalse;
    var u = e[c],
      d = t[c];
    if (false === (i = n ? n.call(r, u, d, c) : true) || true === i && u !== d) returnfalse
  }
  returntrue
}