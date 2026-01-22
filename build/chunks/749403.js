/** Chunk was on 16939 **/
/** chunk id: 749403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => i
});
var Chunk64700 = require("./64700.js"),
  Chunk456647 = require("./456647.js");

function i(e) {
  let {
    loading: t,
    hasConnection: n,
    canConnect: i,
    startConnection: a,
    account: o
  } = (0, r.X)(e);
  return {
    loading: t,
    hasConnection: n,
    canConnect: i,
    startConnection: l.useCallback(async e => {
      let t = await a(e);
      if (t.success && null != t.url) {
        let e = window.open(t.url, "_blank");
        return null == e ? {
          success: false
        } : {
          success: true,
          popup: e
        }
      }
      return {
        success: false
      }
    }, [a]),
    account: o
  }
}