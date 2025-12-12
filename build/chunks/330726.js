/** Chunk was on web.js **/
/** chunk id: 330726, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk846519 = require("./846519.js"),
  Chunk211266 = require("./211266.js");

function a(e, t) {
  let [n, a] = (0, r.useState)(e), s = (0, o.Z)(() => new i.V7);
  return (0, r.useEffect)(() => () => s.stop(), [s]), [n, (0, r.useCallback)(n => {
    a(n), n !== e && s.start(t, () => a(e))
  }, [t, e, s])]
}