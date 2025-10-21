/** Chunk was on 63962 **/
/** chunk id: 444957, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => a
}), require("./642613.js");
var Chunk237292 = require("./237292.js"),
  Chunk403485 = require("./403485.js"),
  Chunk604849 = require("./604849.js");

function a(e) {
  let t = (0, r.y0)({
      location: "safety-tools-button"
    }),
    n = (0, l.c)(),
    a = (0, i.h)(e);
  if (!t || !n) return;
  let s = a.filter(e => null != e.dismiss_timestamp);
  if (0 !== s.length) return s.sort((e, t) => e.type > t.type || e.dismiss_timestamp < t.dismiss_timestamp ? 1 : false)[0]
}