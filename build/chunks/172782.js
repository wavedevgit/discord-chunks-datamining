/** Chunk was on 86948 **/
/** chunk id: 172782, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk80721 = require("./80721.js");
let a = e => {
  let {
    subscriptionId: t,
    searchQuery: n
  } = e, [a, s] = r.useState([]), [o, l] = r.useState(false), [c, u] = r.useState(false);
  return (0, r.useEffect)(() => {
    (async () => {
      try {
        l(true);
        let e = await (0, i.MT)(t);
        s(e)
      } catch (e) {
        u(true)
      } finally {
        l(false)
      }
    })()
  }, [t, n]), {
    eligibleUsers: a,
    isFetching: o,
    hasError: c,
    fetchUsers: () => {}
  }
}