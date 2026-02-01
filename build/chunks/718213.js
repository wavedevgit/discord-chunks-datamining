/** Chunk was on 37997 **/
/** chunk id: 718213, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js");
let a = function(e, t) {
  let [r, a] = n.useState(e);
  return n.useEffect(() => {
    let r = setTimeout(() => {
      a(e)
    }, t);
    return () => {
      clearTimeout(r)
    }
  }, [e, t]), r
}