/** Chunk was on web.js **/
/** chunk id: 25528, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p,
  n: () => f
}), require("./896048.js"), require("./938796.js");
var Chunk64700 = require("./64700.js"),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk290863 = require("./290863.js"),
  Chunk461213 = require("./461213.js"),
  Chunk652215 = require("./652215.js");
let u = new Set([Chunk652215.yTV.XBOX, Chunk652215.yTV.PS4, Chunk652215.yTV.PS5]);

function d(e) {
  return e.filter(e => {
    var t, n;
    return null != e.application_id && e.type === c.$pd.PLAYING && !(0, i.Lt)(null != (t = e.flags) ? t : 0, c.jUm.EMBEDDED) && !u.has(null != (n = e.platform) ? n : "")
  })
}

function f(e, t) {
  return d(o.default.getId() === e ? l.A.getActivities() : s.A.getActivities(e, t))
}

function p(e, t) {
  let n = (0, a.bG)([l.A, s.A, o.default], () => o.default.getId() === e ? l.A.getActivities() : s.A.getActivities(e, t));
  return r.useMemo(() => d(n), [n])
}