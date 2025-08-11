/** Chunk was on 1272 **/
/** chunk id: 452081, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z: () => s
});
var Chunk73800 = require("./73800.js"),
  Chunk703656 = require("./703656.js"),
  Chunk113434 = require("./113434.js"),
  Chunk220068 = require("./220068.js"),
  Chunk388032 = require("./388032.jsx");

function s() {
  let e = Chunk220068.Z.useField("tab"),
    t = Chunk73800.useCallback(e => {
      (0, i.dL)("#"), a.Z.setState({
        tab: e
      })
    }, []);
  return {
    tabs: Chunk73800.useMemo(() => [{
      id: Chunk113434.e5.ALL,
      label: Chunk388032.intl.string(Chunk388032.t["0SzXmp"])
    }, {
      id: Chunk113434.e5.CLAIMED,
      label: Chunk388032.intl.string(Chunk388032.t.zyNYND)
    }], []),
    selectedTab: module,
    onSelectTab: exports
  }
}