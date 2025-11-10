/** Chunk was on 64982 **/
/** chunk id: 776155, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk295141 = require("./295141.js");

function l(e) {
  let [t, n] = r.useState(true), [l, a] = r.useState(), [s, o] = r.useState(), c = r.useCallback(async e => {
    n(true), a(true);
    try {
      let t = await i.HT(e);
      o(t)
    } catch (e) {
      a(e)
    } finally {
      n(false)
    }
  }, []);
  return r.useEffect(() => {
    c(e)
  }, [e, c]), {
    isLoading: t,
    error: l,
    highlightedCreatorDetails: s
  }
}