/** Chunk was on 83667 **/
/** chunk id: 480466, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  Z: () => r
}), require("./388685.js");
var Chunk647438 = require("./647438.js");
let r = function(e, t) {
  let [s, r] = n.useState(e);
  return n.useEffect(() => {
    let s = setTimeout(() => {
      r(e)
    }, t);
    return () => {
      clearTimeout(s)
    }
  }, [e, t]), s
}