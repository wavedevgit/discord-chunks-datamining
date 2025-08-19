/** Chunk was on 84533 **/
/** chunk id: 480466, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js");
let s = function(e, t) {
  let [r, s] = a.useState(e);
  return a.useEffect(() => {
    let r = setTimeout(() => {
      s(e)
    }, t);
    return () => {
      clearTimeout(r)
    }
  }, [e, t]), r
}