/** Chunk was on web.js **/
/** chunk id: 765112, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => i
});
var Chunk647438 = require("./647438.js");

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