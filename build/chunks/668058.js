/** Chunk was on 66866 **/
/** chunk id: 668058, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => l
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
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