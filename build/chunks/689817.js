/** Chunk was on 21738 **/
/** chunk id: 689817, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk965660 = require("./965660.js"),
  Chunk601193 = require("./601193.js"),
  Chunk324580 = require("./324580.js");

function s() {
  let e = l.A.useField("selectedTab"),
    t = r.useMemo(() => [a.o.FEATURED, a.o.GAMING, a.o.MUSIC, a.o.ENTERTAINMENT, a.o.TECH, a.o.EDUCATION, a.o.HUBS].map(e => ({
      id: e,
      label: (0, i.jR)(e)
    })), []),
    n = r.useCallback(e => {
      l.A.setState({
        selectedTab: e
      })
    }, []);
  return r.useEffect(() => {
    null != e && t.some(t => t.id === e) || n(t[0].id)
  }, [e, t, n]), {
    tabs: t,
    selectedTab: null != e ? e : t[0].id,
    setSelectedTab: n
  }
}