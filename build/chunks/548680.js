/** Chunk was on web.js **/
/** chunk id: 548680, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk647438 = require("./647438.js"),
  Chunk520757 = require("./520757.js");
let a = [];

function o(e, t) {
  let n = (0, r.useRef)(),
    o = (0, r.useRef)(a);
  return o.current === a ? (n.current = e(), o.current = t) : (0, i.Z)(t, o.current) || (n.current = e(), o.current = t), n.current
}