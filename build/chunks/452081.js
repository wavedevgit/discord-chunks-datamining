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
  } = e, n = a.Z.useField("tab"), c = (0, i.TH)(), u = (0, s.aV)();
  r.useEffect(() => {
    a.Z.getState().initializeFromUrl(c.search, u)
  }, [c.search, u]);
  let d = r.useCallback(e => {
    a.Z.getState().setTab(e)
  }, []);
  return {
    tabs: r.useMemo(() => [{
      id: s.e5.ALL,
      label: o.intl.string(o.t["0SzXmi"])
    }, t ? {
      id: s.e5.CLAIMED,
      label: o.intl.string(o.t.zyNYNB)
    } : null, t && u ? {
      id: s.e5.PREVIEW_TOOL,
      label: o.intl.string(o.t.BDUDau)
    } : null].filter(l.lm), [t, u]),
    selectedTab: n,
    onSelectTab: d
  }
}