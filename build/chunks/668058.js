/** Chunk was on web.js **/
/** chunk id: 668058, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk881052 = require("./881052.js");

function o(e) {
  let {
    onError: t,
    onSuccess: n,
    report: o
  } = e, [a, s] = r.useState(false), l = a;
  return {
    reportFalsePositive: r.useCallback(async () => {
      if (!l) {
        s(true);
        try {
          await o(), null == n || n()
        } catch (n) {
          let e = new i.Hx(n);
          null == t || t(e)
        } finally {
          s(false)
        }
      }
    }, [l, t, n, o]),
    isReportFalsePositiveLoading: a
  }
}