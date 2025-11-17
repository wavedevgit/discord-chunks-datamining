/** Chunk was on 22173 **/
/** chunk id: 265641, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js");
let l = e => {
  let [t, n] = a.useState(false);
  return {
    isFocused: t,
    handleFocus: a.useCallback(t => {
      e(t), n(true)
    }, [e, n]),
    handleBlur: () => {
      n(false)
    }
  }
}