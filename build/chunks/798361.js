/** Chunk was on web.js **/
/** chunk id: 798361, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => a
});
var Chunk256402 = require("./256402.js"),
  Chunk955817 = require("./955817.js"),
  Chunk647438 = require("./647438.js");

function a(e) {
  let [t, n] = (0, o.useState)(e), a = (0, o.useRef)(null), s = (0, r.i)(() => {
    if (!a.current) return;
    let e = a.current.next();
    if (e.done) {
      a.current = null;
      return
    }
    t === e.value ? s() : n(e.value)
  });
  (0, i.b)(() => {
    a.current && s()
  });
  let l = (0, r.i)(e => {
    a.current = e(t), s()
  });
  return [t, l]
}