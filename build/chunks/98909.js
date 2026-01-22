/** Chunk was on web.js **/
/** chunk id: 98909, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => i
});
var Chunk64700 = require("./64700.js");

function i(e, t) {
  let n = (0, r.useRef)(true),
    i = (0, r.useRef)(null);
  (0, r.useEffect)(() => (n.current = true, () => {
    n.current = false
  }), []), (0, r.useEffect)(() => {
    let r = i.current;
    n.current ? n.current = false : (!r || t.some((e, t) => !Object.is(e, r[t]))) && e(), i.current = t
  }, t)
}