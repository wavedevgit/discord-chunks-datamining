/** Chunk was on 1272 **/
/** chunk id: 452081, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z: () => c
}), require("./35282.js");
var Chunk647438 = require("./647438.js"),
  Chunk843611 = require("./843611.js"),
  Chunk823379 = require("./823379.js"),
  Chunk113434 = require("./113434.js"),
  Chunk220068 = require("./220068.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    withClaimedQuestsTab: t = true
  } = e, n = o.Z.useField("tab"), c = (0, i.TH)(), u = (0, a.aV)();
  r.useEffect(() => {
    o.Z.getState().initializeFromUrl(c.search, u)
  }, [c.search, u]);
  let d = r.useCallback(e => {
    o.Z.getState().setTab(e)
  }, []);
  return {
    tabs: r.useMemo(() => [{
      id: a.e5.ALL,
      label: s.intl.string(s.t["0SzXmi"])
    }, t ? {
      id: a.e5.CLAIMED,
      label: s.intl.string(s.t.zyNYNB)
    } : null, t && u ? {
      id: a.e5.PREVIEW_TOOL,
      label: s.intl.string(s.t.BDUDau)
    } : null].filter(l.lm), [t, u]),
    selectedTab: n,
    onSelectTab: d
  }
}