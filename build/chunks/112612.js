/** Chunk was on 74673 **/
/** chunk id: 112612, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk881052 = require("./881052.js");

function c(t) {
  let {
    onSubmit: n,
    onClose: e
  } = t, [c, r] = i.useState(false), [l, o] = i.useState(null), s = i.useCallback(async () => {
    if (!c) {
      r(true), o(null);
      try {
        await n(), e()
      } catch (t) {
        o(new a.Hx(t).getAnyErrorMessage()), r(false)
      }
    }
  }, [e, n, c]);
  return {
    submitting: c,
    errorMessage: l,
    onSubmit: s
  }
}