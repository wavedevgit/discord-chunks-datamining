/** Chunk was on 48898 **/
/** chunk id: 504261, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js");
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