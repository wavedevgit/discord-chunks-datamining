/** Chunk was on web.js **/
/** chunk id: 385771, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk773669 = require("./773669.js");

function s() {
  let e = (0, i.bG)([a.default], () => a.default.locale);
  return r.useMemo(() => new Intl.NumberFormat(e, {
    notation: "compact",
    compactDisplay: "short",
    roundingMode: "floor"
  }), [e])
}