/** Chunk was on 22173 **/
/** chunk id: 265641, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js");
let a = e => {
  let [t, n] = l.useState(false);
  return {
    isFocused: t,
    handleFocus: l.useCallback(t => {
      e(t), n(true)
    }, [e, n]),
    handleBlur: () => {
      n(false)
    }
  }
}