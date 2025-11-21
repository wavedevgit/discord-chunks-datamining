/** Chunk was on 86948 **/
/** chunk id: 172782, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk80721 = require("./80721.js");
let s = e => {
  let {
    subscriptionId: t,
    searchQuery: r
  } = e, [s, a] = n.useState([]), [o, c] = n.useState(false), [l, u] = n.useState(false);
  return (0, n.useEffect)(() => {
    (async () => {
      try {
        c(true);
        let e = await (0, i.MT)(t);
        a(e)
      } catch (e) {
        u(true)
      } finally {
        c(false)
      }
    })()
  }, [t, r]), {
    eligibleUsers: s,
    isFetching: o,
    hasError: l,
    fetchUsers: () => {}
  }
}