/** Chunk was on web.js **/
/** chunk id: 436759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => a
});
var Chunk36056 = require("./36056.js"),
  Chunk929412 = require("./929412.js"),
  Chunk69122 = require("./69122.js");

function a(e, t = r.pz.STRING) {
  switch (e) {
    case r.wx.BOOL:
      returnfalse;
    case r.wx.UINT64:
    case r.wx.FIXED64:
      return (0, i._)(o.p.ZERO, t);
    case r.wx.INT64:
    case r.wx.SFIXED64:
    case r.wx.SINT64:
      return (0, i._)(o.M.ZERO, t);
    case r.wx.DOUBLE:
    case r.wx.FLOAT:
      return 0;
    case r.wx.BYTES:
      return new Uint8Array(0);
    case r.wx.STRING:
      return "";
    default:
      return 0
  }
}