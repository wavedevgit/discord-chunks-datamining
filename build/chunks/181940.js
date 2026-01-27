/** Chunk was on 77870 **/
/** chunk id: 181940, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./896048.js"), require("./492834.js");
var Chunk64700 = require("./64700.js"),
  Chunk942975 = require("./942975.js");

function i(e, t) {
  let [n, i] = r.useState(false), [s, a] = r.useState(true);
  return {
    isLoading: n,
    error: s,
    onToggle: r.useCallback(n => {
      if (null == t) return Promise.resolve();
      let r = n ? l.Qh : l.pz;
      return i(true), a(true), r(e, t.skuId).catch(e => {
        var t;
        throw a(null != (t = e.body.message) ? t : true), e
      }).finally(() => {
        i(false)
      })
    }, [e, t])
  }
}