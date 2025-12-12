/** Chunk was on web.js **/
/** chunk id: 346683, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk542094 = require("./542094.js");

function a(e) {
  let [t, n] = r.useState(e);
  return r.useLayoutEffect(() => {
    if (e === i.JS.LEAVE) {
      let t = setTimeout(() => n(e), 100);
      return () => clearTimeout(t)
    }
    n(e)
  }, [e]), t
}