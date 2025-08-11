/** Chunk was on web.js **/
/** chunk id: 554908, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk73800 = require("./73800.js"),
  Chunk813841 = require("./813841.js");
let o = [];

function a(e, t) {
  let n = (0, r.useRef)(),
    a = (0, r.useRef)(o);
  return a.current === o ? (n.current = e(), a.current = t) : (0, i.Z)(t, a.current) || (n.current = e(), a.current = t), n.current
}