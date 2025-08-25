/** Chunk was on web.js **/
/** chunk id: 776862, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk522474 = require("./522474.js");

function a(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = o.Z.getWindow(e);
  null == n || n.closed || (r.isPlatformEmbedded ? i.ZP.focus(e, t) : n.focus())
}