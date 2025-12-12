/** Chunk was on web.js **/
/** chunk id: 408437, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => o
});
var Chunk484948 = require("./484948.js"),
  Chunk159447 = require("./159447.js"),
  Chunk473749 = require("./473749.js");

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