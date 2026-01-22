/** Chunk was on web.js **/
/** chunk id: 935630, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
}), require("./896048.js");
var Chunk64700 = require("./64700.js");

function i() {
  let [e, t] = r.useState(null), n = r.useRef(null);
  return r.useEffect(() => {
    null != e && null != n.current && n.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [e]), {
    purchaseError: e,
    setPurchaseError: t,
    purchaseErrorBlockRef: n
  }
}