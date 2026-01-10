/** Chunk was on 53870 **/
/** chunk id: 521548, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => r
});

function r(e, t, n, r) {
  var i = n ? n.call(r, e, t) : true;
  if (true !== i) return !!i;
  if (e === t) returntrue;
  if ("object" != typeof e || !e || "object" != typeof t || !t) returnfalse;
  var o = Object.keys(e),
    a = Object.keys(t);
  if (o.length !== a.length) returnfalse;
  for (var u = Object.prototype.hasOwnProperty.bind(t), c = 0; c < o.length; c++) {
    var s = o[c];
    if (!u(s)) returnfalse;
    var l = e[s],
      f = t[s];
    if (false === (i = n ? n.call(r, l, f, s) : true) || true === i && l !== f) returnfalse
  }
  returntrue
}