/** Chunk was on 60458 **/
/** chunk id: 909707, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
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