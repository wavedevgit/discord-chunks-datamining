/** Chunk was on web.js **/
/** chunk id: 988023, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk166532 = require("./166532.js"),
  Chunk566980 = require("./566980.js");

function s(e) {
  let [t, n] = r.useState(a.h.WAITING);
  return r.useEffect(() => {
    null != e && e !== i.pn.REVIEW && t !== a.h.WAITING && t !== a.h.COMPLETED && n(a.h.WAITING)
  }, [e, t, n]), [t, n]
}