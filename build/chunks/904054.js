/** Chunk was on web.js **/
/** chunk id: 904054, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk253932 = require("./253932.js"),
  Chunk430452 = require("./430452.js"),
  Chunk824744 = require("./824744.js");

function s(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : (() => {
    var e, t;
    return null != (e = null == (t = r.dG.getSetting()) ? true : t.volume) ? e : 100
  })();
  return Math.min(e * ((0, a.M)(t) / 100) * Math.min(i.A.getOutputVolume() / 100, 1), 1)
}