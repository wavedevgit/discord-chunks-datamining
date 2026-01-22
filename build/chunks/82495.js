/** Chunk was on web.js **/
/** chunk id: 82495, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk64700 = require("./64700.js");

function i(e, t, n) {
  let i = r.useRef(e);
  return r.useEffect(() => {
    function e(e) {
      null == i.current || i.current.contains(e.target) || (null == n ? true : n.current) != null && n.current.contains(e.target) || t()
    }
    return document.addEventListener("mousedown", e), () => {
      document.removeEventListener("mousedown", e)
    }
  }, [i, t, n]), i
}