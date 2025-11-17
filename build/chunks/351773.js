/** Chunk was on web.js **/
/** chunk id: 351773, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk473749 = require("./473749.js");

function i(e, t) {
  let n = r.useRef(e);
  return r.useEffect(() => {
    function e(e) {
      null == n.current || n.current.contains(e.target) || t()
    }
    return document.addEventListener("mousedown", e), () => {
      document.removeEventListener("mousedown", e)
    }
  }, [n, t]), n
}