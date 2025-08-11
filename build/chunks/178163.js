/** Chunk was on web.js **/
/** chunk id: 178163, original params: e,t,n (module,exports,re quire) **/
"use strict";

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