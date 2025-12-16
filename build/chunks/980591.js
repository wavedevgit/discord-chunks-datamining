/** Chunk was on 12581 **/
/** chunk id: 980591, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => n
});
var Chunk473749 = require("./473749.js");
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