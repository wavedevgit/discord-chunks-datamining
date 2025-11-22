/** Chunk was on 1272 **/
/** chunk id: 452081, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z: () => c
}), require("./35282.js");
var Chunk473749 = require("./473749.js"),
  Chunk828700 = require("./828700.js"),
  Chunk823379 = require("./823379.js"),
  Chunk313481 = require("./313481.js"),
  Chunk283833 = require("./283833.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    withClaimedQuestsTab: t = true
  } = e, n = s.Z.useField("tab"), c = (0, i.TH)(), u = (0, a.aV)();
  r.useEffect(() => {
    s.Z.getState().initializeFromUrl(c.search, u)
  }, [c.search, u]);
  let d = r.useCallback(e => {
    s.Z.getState().setTab(e)
  }, []);
  return {
    tabs: r.useMemo(() => [{
      id: a.e5.ALL,
      label: o.intl.string(o.t["0SzXmi"])
    }, t ? {
      id: a.e5.CLAIMED,
      label: o.intl.string(o.t.zyNYNB)
    } : null, t && u ? {
      id: a.e5.PREVIEW_TOOL,
      label: o.intl.string(o.t.BDUDau)
    } : null].filter(l.lm), [t, u]),
    selectedTab: n,
    onSelectTab: d
  }
}