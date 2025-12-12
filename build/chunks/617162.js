/** Chunk was on web.js **/
/** chunk id: 617162, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => a
});
var Chunk159447 = require("./159447.js"),
  Chunk473749 = require("./473749.js");

function a(e, t) {
  let n = (0, i.useRef)(true),
    a = (0, i.useRef)(null);
  (0, r.b)(() => (n.current = true, () => {
    n.current = false
  }), []), (0, r.b)(() => {
    n.current ? n.current = false : (!a.current || t.some((e, t) => !Object.is(e, a[t]))) && e(), a.current = t
  }, t)
}