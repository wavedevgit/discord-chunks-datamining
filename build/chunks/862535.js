/** Chunk was on web.js **/
/** chunk id: 862535, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => a
});
var Chunk3388 = require("./3388.js"),
  Chunk64700 = require("./64700.js");

function a(e, t) {
  let n = (0, i.useRef)(true),
    a = (0, i.useRef)(null);
  (0, r.N)(() => (n.current = true, () => {
    n.current = false
  }), []), (0, r.N)(() => {
    n.current ? n.current = false : (!a.current || t.some((e, t) => !Object.is(e, a[t]))) && e(), a.current = t
  }, t)
}