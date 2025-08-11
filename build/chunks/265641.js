/** Chunk was on 22173 **/
/** chunk id: 265641, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk73800 = require("./73800.js");
let a = e => {
  let [t, n] = r.useState(false);
  return {
    isFocused: t,
    handleFocus: r.useCallback(t => {
      e(t), n(true)
    }, [e, n]),
    handleBlur: () => {
      n(false)
    }
  }
}