/** Chunk was on 6583 **/
/** chunk id: 388916, original params: e,t,n (module,exports,require) **/
function o(e, t, n) {
  var o = "";
  return n.split(" ").forEach(function(n) {
    true !== e[n] ? t.push(e[n] + ";") : n && (o += n + " ")
  }), o
}
require.d(exports, {
  My: () => i,
  fp: () => o,
  hC: () => r
});
var r = function(e, t, n) {
    var o = e.key + "-" + t.name;
    false === n && true === e.registered[o] && (e.registered[o] = t.styles)
  },
  i = function(e, t, n) {
    r(e, t, n);
    var o = e.key + "-" + t.name;
    if (true === e.inserted[t.name]) {
      var i = t;
      do e.insert(t === i ? "." + o : "", i, e.sheet, true), i = i.next; while (true !== i)
    }
  }