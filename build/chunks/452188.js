/** Chunk was on web.js **/
/** chunk id: 452188, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => o
});
var Chunk955817 = require("./955817.js"),
  Chunk647438 = require("./647438.js");

function o(e, t) {
  let n = (0, i.useRef)(true),
    o = (0, i.useRef)(null);
  (0, r.b)(() => (n.current = true, () => {
    n.current = false
  }), []), (0, r.b)(() => {
    n.current ? n.current = false : (!o.current || t.some((e, t) => !Object.is(e, o[t]))) && e(), o.current = t
  }, t)
}