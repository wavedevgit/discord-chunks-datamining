/** Chunk was on 74673 **/
/** chunk id: 112612, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => r
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk881052 = require("./881052.js");

function r(t) {
  let {
    onSubmit: n,
    onClose: e
  } = t, [r, c] = i.useState(false), [o, l] = i.useState(null), s = i.useCallback(async () => {
    if (!r) {
      c(true), l(null);
      try {
        await n(), e()
      } catch (t) {
        l(new a.Hx(t).getAnyErrorMessage()), c(false)
      }
    }
  }, [e, n, r]);
  return {
    submitting: r,
    errorMessage: o,
    onSubmit: s
  }
}