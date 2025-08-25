/** Chunk was on web.js **/
/** chunk id: 576376, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  let t, n = false;
  return function() {
    for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
    return n || (n = true, t = e(...i)), t
  }
}
require.d(exports, {
  h: () => r
}), require("./388685.js")