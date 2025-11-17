/** Chunk was on web.js **/
/** chunk id: 480466, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk473749 = require("./473749.js");
let i = function(e, t) {
  let [n, i] = r.useState(e);
  return r.useEffect(() => {
    let n = setTimeout(() => {
      i(e)
    }, t);
    return () => {
      clearTimeout(n)
    }
  }, [e, t]), n
}