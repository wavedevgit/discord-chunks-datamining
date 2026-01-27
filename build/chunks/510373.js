/** Chunk was on web.js **/
/** chunk id: 510373, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./228524.js");
var Chunk64700 = require("./64700.js"),
  Chunk71526 = require("./71526.js");
let a = Symbol();

function o(e, t, n) {
  let o = (0, i.A)(e),
    s = (0, r.useRef)(a);
  return s.current === a ? s.current = t : n(s.current, t) || (o.current = e(), s.current = t), o.current
}