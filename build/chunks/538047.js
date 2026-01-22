/** Chunk was on web.js **/
/** chunk id: 538047, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => s
});
var Chunk959462 = require("./959462.js"),
  Chunk3388 = require("./3388.js"),
  Chunk64700 = require("./64700.js");

function s(e) {
  let [t, n] = (0, a.useState)(e), s = (0, a.useRef)(null), o = (0, r.J)(() => {
    if (!s.current) return;
    let e = s.current.next();
    if (e.done) {
      s.current = null;
      return
    }
    t === e.value ? o() : n(e.value)
  });
  (0, i.N)(() => {
    s.current && o()
  });
  let l = (0, r.J)(e => {
    s.current = e(t), o()
  });
  return [t, l]
}