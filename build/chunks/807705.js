/** Chunk was on 81985 **/
/** chunk id: 807705, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk990169 = require("./990169.js");

function l(e, t) {
  let n = (0, r.useRef)(false),
    l = (0, r.useRef)(e);
  (0, r.useEffect)(() => {
    n.current = e !== l.current, l.current = e
  }, [e]), (0, r.useEffect)(() => {
    let e = setTimeout(() => n.current = false, t);
    return () => clearTimeout(e)
  }, [e, t]);
  let a = e !== (0, i.Z)(l),
    o = (0, i.Z)(n);
  return a || o
}