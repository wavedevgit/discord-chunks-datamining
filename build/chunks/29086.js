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
  let e = Chunk859921.Z.useField("selectedTab"),
    t = Chunk473749.useMemo(() => [Chunk128449.vf.FEATURED, Chunk128449.vf.GAMING, Chunk128449.vf.MUSIC, Chunk128449.vf.ENTERTAINMENT, Chunk128449.vf.TECH, Chunk128449.vf.EDUCATION, Chunk128449.vf.HUBS].map(e => ({
      id: e,
      label: (0, i.vb)(e)
    })), []),
    n = Chunk473749.useCallback(e => {
      l.Z.setState({
        selectedTab: e
      })
    }, []);
  return Chunk473749.useEffect(() => {
    null != module && exports.some(t => t.id === e) || require(exports[0].id)
  }, [module, exports, require]), {
    tabs: exports,
    selectedTab: null != module ? module : exports[0].id,
    setSelectedTab: require
  }
}