/** Chunk was on 1272 **/
/** chunk id: 452081, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z: () => c
}), require("./35282.js");
var Chunk473749 = require("./473749.js"),
  Chunk828700 = require("./828700.js"),
  Chunk823379 = require("./823379.js"),
  Chunk283833 = require("./283833.js"),
  Chunk968843 = require("./968843.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    withClaimedQuestsTab: t = true
  } = e, n = a.Z.useField("tab"), c = (0, i.TH)(), u = (0, o.aV)();
  r.useEffect(() => {
    a.Z.getState().initializeFromUrl(c.search, u)
  }, [c.search, u]);
  let d = r.useCallback(e => {
    a.Z.getState().setTab(e)
  }, []);
  return {
    tabs: r.useMemo(() => [{
      id: o.e5.ALL,
      label: s.intl.string(s.t["0SzXmi"])
    }, t ? {
      id: o.e5.CLAIMED,
      label: s.intl.string(s.t.zyNYNB)
    } : null, t && u ? {
      id: o.e5.PREVIEW_TOOL,
      label: s.intl.string(s.t.BDUDau)
    } : null].filter(l.lm), [t, u]),
    selectedTab: n,
    onSelectTab: d
  }
}