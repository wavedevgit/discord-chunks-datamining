/** Chunk was on 28532 **/
/** chunk id: 980591, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk647438 = require("./647438.js");
let i = (e, t) => {
  let n = (0, a.useRef)(e);
  (0, a.useEffect)(() => {
    n.current = e
  }, [e]), (0, a.useEffect)(() => {
    if (null === t) return;
    let e = setTimeout(() => n.current(), t);
    return () => clearTimeout(e)
  }, [t, n])
}