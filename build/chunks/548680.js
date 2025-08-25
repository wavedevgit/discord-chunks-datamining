/** Chunk was on web.js **/
/** chunk id: 548680, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk647438 = require("./647438.js"),
  Chunk520757 = require("./520757.js");
let o = [];

function a(e, t) {
  let n = (0, r.useRef)(),
    a = (0, r.useRef)(o);
  return a.current === o ? (n.current = e(), a.current = t) : (0, i.Z)(t, a.current) || (n.current = e(), a.current = t), n.current
}