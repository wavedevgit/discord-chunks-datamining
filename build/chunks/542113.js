/** Chunk was on web.js **/
/** chunk id: 542113, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r() {
  return (r = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(null, arguments)
}
require.d(exports, {
  A: () => r
})