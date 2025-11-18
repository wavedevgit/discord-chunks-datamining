/** Chunk was on 64789 **/
/** chunk id: 513646, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  h: () => r
}), require("./642613.js");
var Chunk237292 = require("./237292.js"),
  Chunk403485 = require("./403485.js"),
  Chunk604849 = require("./604849.js");

function r(t) {
  let e = (0, n.y0)({
      location: "safety-tools-button"
    }),
    i = (0, o.c)(),
    r = (0, s.h)(t);
  if (!e || !i) return;
  let l = r.filter(t => null != t.dismiss_timestamp);
  if (0 !== l.length) return l.sort((t, e) => t.type > e.type || t.dismiss_timestamp < e.dismiss_timestamp ? 1 : false)[0]
}