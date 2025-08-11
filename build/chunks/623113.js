/** Chunk was on web.js **/
/** chunk id: 623113, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk73800 = require("./73800.js");

function i(e) {
  let t = r.useRef(null),
    n = r.useCallback(n => {
      null != e && ("function" == typeof e ? e(n) : e.current = n, t.current = n)
    }, [e]);
  return [t, n]
}