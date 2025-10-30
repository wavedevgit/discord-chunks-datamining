/** Chunk was on 95661 **/
/** chunk id: 317595, original params: t,e,i (module,exports,require) **/
"use strict";

function n(t, e, i) {
  var n = i.getRegistry(),
    r = n.addTarget(t, e);
  return [r, function() {
    return n.removeTarget(r)
  }]
}

function r(t, e, i) {
  var n = i.getRegistry(),
    r = n.addSource(t, e);
  return [r, function() {
    return n.removeSource(r)
  }]
}
require.d(exports, {
  n: () => n,
  w: () => r
})