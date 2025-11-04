/** Chunk was on 26494 **/
/** chunk id: 298692, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  B: () => a
});
var Chunk647438 = require("./647438.js"),
  Chunk788956 = require("./788956.js");

function a(e) {
  let {
    loading: n,
    hasConnection: t,
    canConnect: a,
    startConnection: o,
    account: r
  } = (0, i.d)(e);
  return {
    loading: n,
    hasConnection: t,
    canConnect: a,
    startConnection: l.useCallback(async e => {
      let n = await o(e);
      if (n.success && null != n.url) {
        let e = window.open(n.url, "_blank");
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
    }, [o]),
    account: r
  }
}