/** Chunk was on web.js **/
/** chunk id: 960731, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => o
});
var Chunk124651 = require("./124651.js"),
  Chunk716115 = require("./716115.js"),
  Chunk82180 = require("./82180.js");

function o(e, t = r.rO.STRING) {
  switch (e) {
    case r.LN.BOOL:
      returnfalse;
    case r.LN.UINT64:
    case r.LN.FIXED64:
      return (0, i.l)(a.e.ZERO, t);
    case r.LN.INT64:
    case r.LN.SFIXED64:
    case r.LN.SINT64:
      return (0, i.l)(a.h.ZERO, t);
    case r.LN.DOUBLE:
    case r.LN.FLOAT:
      return 0;
    case r.LN.BYTES:
      return new Uint8Array(0);
    case r.LN.STRING:
      return "";
    default:
      return 0
  }
}