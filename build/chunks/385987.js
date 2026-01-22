/** Chunk was on web.js **/
/** chunk id: 385987, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  return function() {
    var t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
      n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth]
  }
}
require.d(exports, {
  A: () => r
})