/** Chunk was on web.js **/
/** chunk id: 452188, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => a
});
var Chunk955817 = require("./955817.js"),
  Chunk647438 = require("./647438.js");

function a(e, t) {
  let n = (0, i.useRef)(true),
    a = (0, i.useRef)(null);
  (0, r.b)(() => (n.current = true, () => {
    n.current = false
  }), []), (0, r.b)(() => {
    n.current ? n.current = false : (!a.current || t.some((e, t) => !Object.is(e, a[t]))) && e(), a.current = t
  }, t)
}