/** Chunk was on web.js **/
/** chunk id: 36262, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk638704 = require("./638704.js");
let i = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: function(e) {
    var t = e.state,
      n = e.name;
    t.modifiersData[n] = (0, r.A)({
      reference: t.rects.reference,
      element: t.rects.popper,
      strategy: "absolute",
      placement: t.placement
    })
  },
  data: {}
}