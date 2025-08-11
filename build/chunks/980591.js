/** Chunk was on web.js **/
/** chunk id: 980591, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk73800 = require("./73800.js");
let i = (e, t) => {
  let n = (0, r.useRef)(e);
  (0, r.useEffect)(() => {
    n.current = e
  }, [e]), (0, r.useEffect)(() => {
    if (null === t) return;
    let e = setTimeout(() => n.current(), t);
    return () => clearTimeout(e)
  }, [t, n])
}