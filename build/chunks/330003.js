/** Chunk was on web.js **/
/** chunk id: 330003, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk706454 = require("./706454.js");

function o() {
  let e = (0, i.e7)([a.default], () => a.default.locale);
  return r.useMemo(() => new Intl.NumberFormat(e, {
    notation: "compact",
    compactDisplay: "short",
    roundingMode: "floor"
  }), [e])
}