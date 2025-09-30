/** Chunk was on 74477 **/
/** chunk id: 317595, original params: e,t,r (module,exports,require) **/
"use strict";

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
  n: () => n,
  w: () => i
})