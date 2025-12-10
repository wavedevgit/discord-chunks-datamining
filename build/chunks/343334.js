/** Chunk was on 17302 **/
/** chunk id: 343334, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js"), require("./457542.js");
var Chunk473749 = require("./473749.js"),
  Chunk713081 = require("./713081.js");

function l(e, t) {
  let [n, l] = r.useState(false), [o, a] = r.useState(true);
  return {
    isLoading: n,
    error: o,
    onToggle: r.useCallback(n => {
      if (null == t) return Promise.resolve();
      let r = n ? i.H6 : i.Th;
      return l(true), a(true), r(e, t.skuId).catch(e => {
        var t;
        throw a(null != (t = e.body.message) ? t : true), e
      }).finally(() => {
        l(false)
      })
    }, [e, t])
  }
}