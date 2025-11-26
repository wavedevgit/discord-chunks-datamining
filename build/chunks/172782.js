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
  } = e, [s, a] = n.useState([]), [o, l] = n.useState(0), [c, u] = n.useState(false), [d, p] = n.useState(false), f = async e => {
    if (!c && null != e) try {
      u(true), p(false);
      let n = await (0, i.MT)(t, e, r);
      a(t => 0 === e ? n.users : [...t, ...n.users]), l(n.nextIndex)
    } catch (e) {
      p(true)
    } finally {
      u(false)
    }
  };
  return (0, n.useEffect)(() => {
    l(0), f(0)
  }, [t, r]), {
    eligibleUsers: s,
    isFetching: c,
    hasError: d,
    getNextRows: () => f(o)
  }
}