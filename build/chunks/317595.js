/** Chunk was on 81201 **/
/** chunk id: 317595, original params: e,n,t (module,exports,require) **/
"use strict";

function r(e, n, t) {
  var r = t.getRegistry(),
    i = r.addTarget(e, n);
  return [i, function() {
    return r.removeTarget(i)
  }]
}

function i(e, n, t) {
  var r = t.getRegistry(),
    i = r.addSource(e, n);
  return [i, function() {
    return r.removeSource(i)
  }]
}
require.d(exports, {
  n: () => r,
  w: () => i
})