/** Chunk was on 10614 **/
/** chunk id: 212246, original params: e,t,r (module,exports,require) **/
function n(e, t, r) {
  var n = r.getRegistry(),
    i = n.addTarget(e, t);
  return [i, function() {
    return n.removeTarget(i)
  }]
}

function i(e, t, r) {
  var n = r.getRegistry(),
    i = n.addSource(e, t);
  return [i, function() {
    return n.removeSource(i)
  }]
}
require.d(exports, {
  V: () => i,
  l: () => n
})