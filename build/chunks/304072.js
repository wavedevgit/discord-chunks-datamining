/** Chunk was on web.js **/
/** chunk id: 304072, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk451988 = require("./451988.js"),
  Chunk444927 = require("./444927.js");

function s(e, t) {
  let [n, s] = (0, r.useState)(e), o = (0, a.A)(() => new i.Ep);
  return (0, r.useEffect)(() => () => o.stop(), [o]), [n, (0, r.useCallback)(n => {
    s(n), n !== e && o.start(t, () => s(e))
  }, [t, e, o])]
}