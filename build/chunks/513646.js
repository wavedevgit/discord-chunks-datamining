/** Chunk was on 98932 **/
/** chunk id: 513646, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  h: () => a
}), require("./642613.js");
var Chunk237292 = require("./237292.js"),
  Chunk403485 = require("./403485.js"),
  Chunk604849 = require("./604849.js");

function a(t) {
  let e = (0, n.y0)({
      location: "safety-tools-button"
    }),
    i = (0, o.c)(),
    a = (0, s.h)(t);
  if (!e || !i) return;
  let r = a.filter(t => null != t.dismiss_timestamp);
  if (0 !== r.length) return r.sort((t, e) => t.type > e.type || t.dismiss_timestamp < e.dismiss_timestamp ? 1 : false)[0]
}