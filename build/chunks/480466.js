/** Chunk was on 83667 **/
/** chunk id: 480466, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  Z: () => n
}), require("./388685.js");
var Chunk73800 = require("./73800.js");
let n = function(e, t) {
  let [s, n] = r.useState(e);
  return r.useEffect(() => {
    let s = setTimeout(() => {
      n(e)
    }, t);
    return () => {
      clearTimeout(s)
    }
  }, [e, t]), s
}