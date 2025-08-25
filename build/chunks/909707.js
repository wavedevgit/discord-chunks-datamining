/** Chunk was on 52721 **/
/** chunk id: 909707, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk268350 = require("./268350.js");

function l(e) {
  let [t, n] = r.useState(true);
  return r.useEffect(() => {
    let t = false;
    return (async () => {
      n(true), await (0, i.pk)(e), t || n(false)
    })(), () => {
      t = true
    }
  }, [e]), {
    isLoading: t
  }
}