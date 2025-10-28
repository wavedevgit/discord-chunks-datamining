/** Chunk was on 72651 **/
/** chunk id: 317595, original params: e,t,n (module,exports,require) **/
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