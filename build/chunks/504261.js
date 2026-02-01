/** Chunk was on 7602 **/
/** chunk id: 504261, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  A: () => n
}), require("./896048.js");
var Chunk64700 = require("./64700.js");
let n = e => {
  let [t, s] = i.useState(false);
  return {
    isFocused: t,
    handleFocus: i.useCallback(t => {
      e(t), s(true)
    }, [e, s]),
    handleBlur: () => {
      s(false)
    }
  }
}