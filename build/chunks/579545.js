/** Chunk was on web.js **/
/** chunk id: 579545, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk406434 = require("./406434.js");
let i = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: function(e) {
    var t = e.state,
      n = e.name;
    t.modifiersData[n] = (0, r.Z)({
      reference: t.rects.reference,
      element: t.rects.popper,
      strategy: "absolute",
      placement: t.placement
    })
  },
  data: {}
}