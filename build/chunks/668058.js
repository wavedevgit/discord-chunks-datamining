/** Chunk was on 57539 **/
/** chunk id: 668058, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  $: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk881052 = require("./881052.js");

function o(t) {
  let {
    onError: e,
    onSuccess: n,
    report: o
  } = t, [l, r] = i.useState(false);
  return {
    reportFalsePositive: i.useCallback(async () => {
      if (!l) {
        r(true);
        try {
          await o(), null == n || n()
        } catch (n) {
          let t = new a.Hx(n);
          null == e || e(t)
        } finally {
          r(false)
        }
      }
    }, [l, e, n, o]),
    isReportFalsePositiveLoading: l
  }
}