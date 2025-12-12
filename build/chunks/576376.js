/** Chunk was on web.js **/
/** chunk id: 576376, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  let t, n = false;
  return function() {
    for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
    return n || (n = true, t = e(...i)), t
  }
}
require.d(exports, {
  h: () => r
}), require("./388685.js")