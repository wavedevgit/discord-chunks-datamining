/** Chunk was on web.js **/
/** chunk id: 330140, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk161591 = require("./161591.js");
let a = [];

function s(e, t) {
  let n = (0, r.useRef)(),
    s = (0, r.useRef)(a);
  return s.current === a ? (n.current = e(), s.current = t) : (0, i.A)(t, s.current) || (n.current = e(), s.current = t), n.current
}