/** Chunk was on 22173 **/
/** chunk id: 265641, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js");
let l = e => {
  let [t, n] = s.useState(false);
  return {
    isFocused: t,
    handleFocus: s.useCallback(t => {
      e(t), n(true)
    }, [e, n]),
    handleBlur: () => {
      n(false)
    }
  }
}