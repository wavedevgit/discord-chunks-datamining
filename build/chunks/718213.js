/** Chunk was on 92917 **/
/** chunk id: 718213, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./896048.js");
var Chunk64700 = require("./64700.js");
let i = function(e, t) {
  let [n, i] = r.useState(e);
  return r.useEffect(() => {
    let n = setTimeout(() => {
      i(e)
    }, t);
    return () => {
      clearTimeout(n)
    }
  }, [e, t]), n
}