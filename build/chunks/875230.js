/** Chunk was on web.js **/
/** chunk id: 875230, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk348275 = require("./348275.js");

function a(e) {
  let t = r.useRef(null);
  return {
    triggerRef: r.useCallback(n => {
      t.current = n, null != e && (0, i.cZ)(e, n)
    }, [e]),
    targetElementRef: t
  }
}