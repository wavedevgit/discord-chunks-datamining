/** Chunk was on 11868 **/
/** chunk id: 346683, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk542094 = require("./542094.js");

function l(e) {
  let [t, n] = r.useState(e);
  return r.useLayoutEffect(() => {
    if (e === i.JS.LEAVE) {
      let t = setTimeout(() => n(e), 100);
      return () => clearTimeout(t)
    }
    n(e)
  }, [e]), t
}