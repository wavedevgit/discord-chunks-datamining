/** Chunk was on 91173 **/
/** chunk id: 668058, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk881052 = require("./881052.js");

function l(e) {
  let {
    onError: t,
    onSuccess: n,
    report: l
  } = e, [a, o] = r.useState(false);
  return {
    reportFalsePositive: r.useCallback(async () => {
      if (!a) {
        o(true);
        try {
          await l(), null == n || n()
        } catch (n) {
          let e = new i.Hx(n);
          null == t || t(e)
        } finally {
          o(false)
        }
      }
    }, [a, t, n, l]),
    isReportFalsePositiveLoading: a
  }
}