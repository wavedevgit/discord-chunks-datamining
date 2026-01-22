/** Chunk was on 73987 **/
/** chunk id: 783437, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk677185 = require("./677185.js");
let i = e => {
  let {
    subscriptionId: t,
    searchQuery: r
  } = e, [i, l] = n.useState([]), [a, c] = n.useState(0), [o, u] = n.useState(false), [d, f] = n.useState(false), p = async e => {
    if (!o && null != e) try {
      u(true), f(false);
      let n = await (0, s.EQ)(t, e, r);
      l(t => 0 === e ? n.users : [...t, ...n.users]), c(n.nextIndex)
    } catch (e) {
      f(true)
    } finally {
      u(false)
    }
  };
  return (0, n.useEffect)(() => {
    c(0), p(0)
  }, [t, r]), {
    eligibleUsers: i,
    isFetching: o,
    hasError: d,
    getNextRows: () => p(a)
  }
}