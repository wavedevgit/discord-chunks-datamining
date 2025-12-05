/** Chunk was on 75393 **/
/** chunk id: 980591, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk473749 = require("./473749.js");
let l = (e, t) => {
  let n = (0, a.useRef)(e);
  (0, a.useEffect)(() => {
    n.current = e
  }, [e]), (0, a.useEffect)(() => {
    if (null === t) return;
    let e = setTimeout(() => n.current(), t);
    return () => clearTimeout(e)
  }, [t, n])
}