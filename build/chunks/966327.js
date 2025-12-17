/** Chunk was on web.js **/
/** chunk id: 966327, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => a
});
var Chunk473749 = require("./473749.js"),
  Chunk464281 = require("./464281.js");

function a(e) {
  let t = r.useRef(null);
  return {
    triggerRef: r.useCallback(n => {
      t.current = n, null != e && (0, i.k$)(e, n)
    }, [e]),
    targetElementRef: t
  }
}