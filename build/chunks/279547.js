/** Chunk was on 92917 **/
/** chunk id: 279547, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk198982 = require("./198982.js");

function l(e) {
  let {
    onError: t,
    onSuccess: n,
    report: l
  } = e, [a, s] = r.useState(false);
  return {
    reportFalsePositive: r.useCallback(async () => {
      if (!a) {
        s(true);
        try {
          await l(), null == n || n()
        } catch (n) {
          let e = new i.LG(n);
          null == t || t(e)
        } finally {
          s(false)
        }
      }
    }, [a, t, n, l]),
    isReportFalsePositiveLoading: a
  }
}