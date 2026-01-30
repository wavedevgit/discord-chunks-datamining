/** Chunk was on 66009 **/
/** chunk id: 279547, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  d: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk198982 = require("./198982.js");

function a(t) {
  let {
    onError: e,
    onSuccess: n,
    report: a
  } = t, [r, o] = i.useState(false);
  return {
    reportFalsePositive: i.useCallback(async () => {
      if (!r) {
        o(true);
        try {
          await a(), null == n || n()
        } catch (n) {
          let t = new l.LG(n);
          null == e || e(t)
        } finally {
          o(false)
        }
      }
    }, [r, e, n, a]),
    isReportFalsePositiveLoading: r
  }
}