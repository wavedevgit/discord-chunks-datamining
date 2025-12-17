/** Chunk was on 49552 **/
/** chunk id: 245385, original params: t,e,i (module,exports,require) **/
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