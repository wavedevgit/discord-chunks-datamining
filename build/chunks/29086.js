/** Chunk was on 1272 **/
/** chunk id: 29086, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk726115 = require("./726115.js"),
  Chunk859921 = require("./859921.js"),
  Chunk128449 = require("./128449.js");

function o() {
  let e = l.Z.useField("selectedTab"),
    t = r.useMemo(() => [a.vf.FEATURED, a.vf.GAMING, a.vf.MUSIC, a.vf.ENTERTAINMENT, a.vf.TECH, a.vf.EDUCATION, a.vf.HUBS].map(e => ({
      id: e,
      label: (0, i.vb)(e)
    })), []),
    n = r.useCallback(e => {
      l.Z.setState({
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