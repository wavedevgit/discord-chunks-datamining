/** Chunk was on web.js **/
/** chunk id: 510373, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./228524.js");
var Chunk64700 = require("./64700.js"),
  Chunk71526 = require("./71526.js");
let a = Symbol();

function s(e, t, n) {
  let s = (0, i.A)(e),
    o = (0, r.useRef)(a);
  return o.current === a ? o.current = t : n(o.current, t) || (s.current = e(), o.current = t), s.current
}