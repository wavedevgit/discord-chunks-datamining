/** Chunk was on web.js **/
/** chunk id: 448986, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk473749 = require("./473749.js");

function i(e) {
  let t = r.useRef(e);
  return r.useInsertionEffect(() => {
    t.current = e
  }), r.useCallback(function() {
    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    return t.current(...n)
  }, [])
}