/** Chunk was on 26494 **/
/** chunk id: 298692, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => r
});
var Chunk647438 = require("./647438.js"),
  Chunk788956 = require("./788956.js");

function r(e) {
  let {
    loading: t,
    hasConnection: n,
    canConnect: r,
    startConnection: o,
    account: a
  } = (0, i.d)(e);
  return {
    loading: t,
    hasConnection: n,
    canConnect: r,
    startConnection: l.useCallback(async e => {
      let t = await o(e);
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
    }, [o]),
    account: a
  }
}