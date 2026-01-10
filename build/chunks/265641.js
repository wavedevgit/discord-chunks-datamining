/** Chunk was on 87646 **/
/** chunk id: 265641, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js");
let s = e => {
  let [t, n] = i.useState(false);
  return {
    isFocused: t,
    handleFocus: i.useCallback(t => {
      e(t), n(true)
    }, [e, n]),
    handleBlur: () => {
      n(false)
    }
  }
}