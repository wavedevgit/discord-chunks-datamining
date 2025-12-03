/** Chunk was on 74673 **/
/** chunk id: 112612, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk881052 = require("./881052.js");

function c(t) {
  let {
    onSubmit: n,
    onClose: i
  } = t, [c, l] = e.useState(false), [r, o] = e.useState(null), s = e.useCallback(async () => {
    if (!c) {
      l(true), o(null);
      try {
        await n(), i()
      } catch (t) {
        o(new a.Hx(t).getAnyErrorMessage()), l(false)
      }
    }
  }, [i, n, c]);
  return {
    submitting: c,
    errorMessage: r,
    onSubmit: s
  }
}