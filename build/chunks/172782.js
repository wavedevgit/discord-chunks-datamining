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
  } = e, [a, s] = r.useState([]), [i, o] = r.useState(0), [u, c] = r.useState(false), [p, h] = r.useState(false), d = async e => {
    if (!u && null != e) try {
      c(true), h(false);
      let r = await (0, l.MT)(t, e, n);
      s(t => 0 === e ? r.users : [...t, ...r.users]), o(r.nextIndex)
    } catch (e) {
      h(true)
    } finally {
      c(false)
    }
  };
  return (0, r.useEffect)(() => {
    o(0), d(0)
  }, [t, n]), {
    eligibleUsers: a,
    isFetching: u,
    hasError: p,
    getNextRows: () => d(i)
  }
}