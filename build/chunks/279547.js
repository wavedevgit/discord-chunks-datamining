/** Chunk was on web.js **/
/** chunk id: 279547, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk198982 = require("./198982.js");

function a(e) {
  let {
    onError: t,
    onSuccess: n,
    report: a
  } = e, [s, o] = r.useState(false), l = s;
  return {
    reportFalsePositive: r.useCallback(async () => {
      if (!l) {
        o(true);
        try {
          await a(), null == n || n()
        } catch (n) {
          let e = new i.LG(n);
          null == t || t(e)
        } finally {
          o(false)
        }
      }
    }, [l, t, n, a]),
    isReportFalsePositiveLoading: s
  }
}