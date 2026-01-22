/** Chunk was on 5705 **/
/** chunk id: 465105, original params: t,n,a (module,exports,require) **/
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk198982 = require("./198982.js");

function l(t) {
  let {
    onSubmit: n,
    onClose: a
  } = t, [l, r] = e.useState(false), [s, c] = e.useState(null), o = e.useCallback(async () => {
    if (!l) {
      r(true), c(null);
      try {
        await n(), a()
      } catch (t) {
        c(new i.LG(t).getAnyErrorMessage()), r(false)
      }
    }
  }, [a, n, l]);
  return {
    submitting: l,
    errorMessage: s,
    onSubmit: o
  }
}