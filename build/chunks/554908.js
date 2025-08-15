/** Chunk was on web.js **/
/** chunk id: 554908, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk73800 = require("./73800.js"),
  Chunk813841 = require("./813841.js");
let a = [];

function o(e, t) {
  let n = (0, r.useRef)(),
    o = (0, r.useRef)(a);
  return o.current === a ? (n.current = e(), o.current = t) : (0, i.Z)(t, o.current) || (n.current = e(), o.current = t), n.current
}