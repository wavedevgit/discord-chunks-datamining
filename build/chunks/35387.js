/** Chunk was on web.js **/
/** chunk id: 35387, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk473749 = require("./473749.js"),
  Chunk181501 = require("./181501.js");
let o = [];

function a(e, t) {
  let n = (0, r.useRef)(),
    a = (0, r.useRef)(o);
  return a.current === o ? (n.current = e(), a.current = t) : (0, i.Z)(t, a.current) || (n.current = e(), a.current = t), n.current
}