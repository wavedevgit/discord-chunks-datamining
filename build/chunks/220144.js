/** Chunk was on 78528 **/
/** chunk id: 220144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk64700 = require("./64700.js"),
  Chunk724442 = require("./724442.js");

function i(e, t) {
  let n = (0, r.useRef)(false),
    i = (0, r.useRef)(e);
  (0, r.useEffect)(() => {
    n.current = e !== i.current, i.current = e
  }, [e]), (0, r.useEffect)(() => {
    let e = setTimeout(() => n.current = false, t);
    return () => clearTimeout(e)
  }, [e, t]);
  let s = e !== (0, l.A)(i),
    a = (0, l.A)(n);
  return s || a
}