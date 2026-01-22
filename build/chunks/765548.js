/** Chunk was on web.js **/
/** chunk id: 765548, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
}), require("./896048.js");
var Chunk64700 = require("./64700.js");

function i(e) {
  let t = r.useRef(e);
  return r.useInsertionEffect(() => {
    t.current = e
  }), r.useCallback(function() {
    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    return t.current(...n)
  }, [])
}