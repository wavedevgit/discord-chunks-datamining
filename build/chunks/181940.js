/** Chunk was on 97492 **/
/** chunk id: 181940, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./896048.js"), require("./492834.js");
var Chunk64700 = require("./64700.js"),
  Chunk942975 = require("./942975.js");

function i(e, t) {
  let [n, i] = r.useState(false), [a, s] = r.useState(true);
  return {
    isLoading: n,
    error: a,
    onToggle: r.useCallback(n => {
      if (null == t) return Promise.resolve();
      let r = n ? l.Qh : l.pz;
      return i(true), s(true), r(e, t.skuId).catch(e => {
        var t;
        throw s(null != (t = e.body.message) ? t : true), e
      }).finally(() => {
        i(false)
      })
    }, [e, t])
  }
}