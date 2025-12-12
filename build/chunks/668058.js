/** Chunk was on web.js **/
/** chunk id: 668058, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk881052 = require("./881052.js");

function a(e) {
  let {
    onError: t,
    onSuccess: n,
    report: a
  } = e, [o, s] = r.useState(false), l = o;
  return {
    reportFalsePositive: r.useCallback(async () => {
      if (!l) {
        s(true);
        try {
          await a(), null == n || n()
        } catch (n) {
          let e = new i.Hx(n);
          null == t || t(e)
        } finally {
          s(false)
        }
      }
    }, [l, t, n, a]),
    isReportFalsePositiveLoading: o
  }
}