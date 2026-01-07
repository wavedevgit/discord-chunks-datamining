/** Chunk was on web.js **/
/** chunk id: 320317, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk473749 = require("./473749.js");

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