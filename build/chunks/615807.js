/** Chunk was on web.js **/
/** chunk id: 615807, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk849269 = require("./849269.js");

function a(e) {
  let [t, n] = r.useState(e);
  return r.useLayoutEffect(() => {
    if (e === i.o6.LEAVE) {
      let t = setTimeout(() => n(e), 100);
      return () => clearTimeout(t)
    }
    n(e)
  }, [e]), t
}