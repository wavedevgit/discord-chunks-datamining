/** Chunk was on 86948 **/
/** chunk id: 172782, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk80721 = require("./80721.js");
let i = e => {
  let {
    subscriptionId: t,
    searchQuery: r
  } = e, [i, a] = n.useState([]), [l, o] = n.useState(0), [c, u] = n.useState(false), [d, f] = n.useState(false), b = async e => {
    if (!c && null != e) try {
      u(true), f(false);
      let n = await (0, s.MT)(t, e, r);
      a(t => 0 === e ? n.users : [...t, ...n.users]), o(n.nextIndex)
    } catch (e) {
      f(true)
    } finally {
      u(false)
    }
  };
  return (0, n.useEffect)(() => {
    o(0), b(0)
  }, [t, r]), {
    eligibleUsers: i,
    isFetching: c,
    hasError: d,
    getNextRows: () => b(l)
  }
}