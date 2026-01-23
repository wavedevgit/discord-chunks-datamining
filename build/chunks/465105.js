/** Chunk was on 5705 **/
/** chunk id: 465105, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk198982 = require("./198982.js");

function l(t) {
  let {
    onSubmit: n,
    onClose: e
  } = t, [l, r] = a.useState(false), [s, c] = a.useState(null), o = a.useCallback(async () => {
    if (!l) {
      r(true), c(null);
      try {
        await n(), e()
      } catch (t) {
        c(new i.LG(t).getAnyErrorMessage()), r(false)
      }
    }
  }, [e, n, l]);
  return {
    submitting: l,
    errorMessage: s,
    onSubmit: o
  }
}