/** Chunk was on 86948 **/
/** chunk id: 172782, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk80721 = require("./80721.js");
let l = e => {
  let {
    subscriptionId: t,
    searchQuery: n
  } = e, [l, a] = r.useState([]), [i, o] = r.useState(0), [c, u] = r.useState(false), [p, f] = r.useState(false), h = async e => {
    if (!c && null != e) try {
      u(true), f(false);
      let r = await (0, s.MT)(t, e, n);
      a(t => 0 === e ? r.users : [...t, ...r.users]), o(r.nextIndex)
    } catch (e) {
      f(true)
    } finally {
      u(false)
    }
  };
  return (0, r.useEffect)(() => {
    o(0), h(0)
  }, [t, n]), {
    eligibleUsers: l,
    isFetching: c,
    hasError: p,
    getNextRows: () => h(i)
  }
}