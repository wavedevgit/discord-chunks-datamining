/** Chunk was on web.js **/
/** chunk id: 798361, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => o
});
var Chunk256402 = require("./256402.js"),
  Chunk955817 = require("./955817.js"),
  Chunk647438 = require("./647438.js");

function o(e) {
  let [t, n] = (0, a.useState)(e), o = (0, a.useRef)(null), s = (0, r.i)(() => {
    if (!o.current) return;
    let e = o.current.next();
    if (e.done) {
      o.current = null;
      return
    }
    t === e.value ? s() : n(e.value)
  });
  (0, i.b)(() => {
    o.current && s()
  });
  let l = (0, r.i)(e => {
    o.current = e(t), s()
  });
  return [t, l]
}