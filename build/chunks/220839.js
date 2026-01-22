/** Chunk was on 99673 **/
/** chunk id: 220839, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  A: () => n
});
var Chunk64700 = require("./64700.js");
let n = (t, e) => {
  let i = (0, s.useRef)(t);
  (0, s.useEffect)(() => {
    i.current = t
  }, [t]), (0, s.useEffect)(() => {
    if (null === e) return;
    let t = setTimeout(() => i.current(), e);
    return () => clearTimeout(t)
  }, [e, i])
}