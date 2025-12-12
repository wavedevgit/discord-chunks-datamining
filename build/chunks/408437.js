/** Chunk was on web.js **/
/** chunk id: 408437, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => a
});
var Chunk484948 = require("./484948.js"),
  Chunk159447 = require("./159447.js"),
  Chunk473749 = require("./473749.js");

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