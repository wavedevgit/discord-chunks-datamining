/** Chunk was on 60646 **/
/** chunk id: 405802, original params: e,t,n (module,exports,require) **/
function r(e, t, n) {
  var r = n.getRegistry(),
    i = r.addTarget(e, t);
  return [i, function() {
    return r.removeTarget(i)
  }]
}

function i(e, t, n) {
  var r = n.getRegistry(),
    i = r.addSource(e, t);
  return [i, function() {
    return r.removeSource(i)
  }]
}
require.d(exports, {
  n: () => r,
  w: () => i
})