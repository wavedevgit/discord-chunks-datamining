/** Chunk was on web.js **/
/** chunk id: 816488, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./953529.js");
var Chunk473749 = require("./473749.js"),
  Chunk29133 = require("./29133.js");
let a = Symbol();

function o(e, t, n) {
  let o = (0, i.Z)(e),
    s = (0, r.useRef)(a);
  return s.current === a ? s.current = t : n(s.current, t) || (o.current = e(), s.current = t), o.current
}