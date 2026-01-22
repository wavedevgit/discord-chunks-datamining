/** Chunk was on web.js **/
/** chunk id: 519948, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = true, n(e())
      })
    })), t
  }
}
require.d(exports, {
  A: () => r
})