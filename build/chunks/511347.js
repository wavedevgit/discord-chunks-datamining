/** Chunk was on web.js **/
/** chunk id: 511347, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk64700 = require("./64700.js");

function i(e) {
  let t = r.useRef(null),
    n = r.useCallback(n => {
      null != e && ("function" == typeof e ? e(n) : e.current = n, t.current = n)
    }, [e]);
  return [t, n]
}