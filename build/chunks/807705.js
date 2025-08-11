/** Chunk was on web.js **/
/** chunk id: 807705, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk73800 = require("./73800.js"),
  Chunk990169 = require("./990169.js");

function o(e, t) {
  let n = (0, r.useRef)(false),
    o = (0, r.useRef)(e);
  (0, r.useEffect)(() => {
    n.current = e !== o.current, o.current = e
  }, [e]), (0, r.useEffect)(() => {
    let e = setTimeout(() => n.current = false, t);
    return () => clearTimeout(e)
  }, [e, t]);
  let a = e !== (0, i.Z)(o),
    s = (0, i.Z)(n);
  return a || s
}