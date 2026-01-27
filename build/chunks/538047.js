/** Chunk was on web.js **/
/** chunk id: 538047, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => o
});
var Chunk959462 = require("./959462.js"),
  Chunk3388 = require("./3388.js"),
  Chunk64700 = require("./64700.js");

function o(e) {
  let [t, n] = (0, a.useState)(e), o = (0, a.useRef)(null), s = (0, r.J)(() => {
    if (!o.current) return;
    let e = o.current.next();
    if (e.done) {
      o.current = null;
      return
    }
    t === e.value ? s() : n(e.value)
  });
  (0, i.N)(() => {
    o.current && s()
  });
  let l = (0, r.J)(e => {
    o.current = e(t), s()
  });
  return [t, l]
}