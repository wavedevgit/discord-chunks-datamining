/** Chunk was on web.js **/
/** chunk id: 330726, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk846519 = require("./846519.js"),
  Chunk211266 = require("./211266.js");

function o(e, t) {
  let [n, o] = (0, r.useState)(e), s = (0, a.Z)(() => new i.V7);
  return (0, r.useEffect)(() => () => s.stop(), [s]), [n, (0, r.useCallback)(n => {
    o(n), n !== e && s.start(t, () => o(e))
  }, [t, e, s])]
}