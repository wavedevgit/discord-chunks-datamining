/** Chunk was on web.js **/
/** chunk id: 304072, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk451988 = require("./451988.js"),
  Chunk444927 = require("./444927.js");

function o(e, t) {
  let [n, o] = (0, r.useState)(e), s = (0, a.A)(() => new i.Ep);
  return (0, r.useEffect)(() => () => s.stop(), [s]), [n, (0, r.useCallback)(n => {
    o(n), n !== e && s.start(t, () => o(e))
  }, [t, e, s])]
}