/** Chunk was on 22173 **/
/** chunk id: 265641, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js");
let l = e => {
  let [n, t] = s.useState(false);
  return {
    isFocused: n,
    handleFocus: s.useCallback(n => {
      e(n), t(true)
    }, [e, t]),
    handleBlur: () => {
      t(false)
    }
  }
}