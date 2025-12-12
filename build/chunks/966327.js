/** Chunk was on web.js **/
/** chunk id: 966327, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => a
});
var Chunk473749 = require("./473749.js");

function i(e, t) {
  if ("function" == typeof e) return void e(t);
  null != e && "object" == typeof e && "current" in e && (e.current = t)
}

function a(e) {
  let t = r.useRef(null);
  return {
    triggerRef: r.useCallback(n => {
      t.current = n, null != e && i(e, n)
    }, [e]),
    targetElementRef: t
  }
}