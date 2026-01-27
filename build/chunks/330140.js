/** Chunk was on web.js **/
/** chunk id: 330140, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk161591 = require("./161591.js");
let a = [];

function o(e, t) {
  let n = (0, r.useRef)(),
    o = (0, r.useRef)(a);
  return o.current === a ? (n.current = e(), o.current = t) : (0, i.A)(t, o.current) || (n.current = e(), o.current = t), n.current
}