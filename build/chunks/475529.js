/** Chunk was on 21738 **/
/** chunk id: 475529, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => c
}), require("./747238.js");
var Chunk64700 = require("./64700.js"),
  Chunk960488 = require("./960488.js"),
  Chunk403362 = require("./403362.js"),
  Chunk631001 = require("./631001.js"),
  Chunk890687 = require("./890687.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  let {
    withClaimedQuestsTab: t = true
  } = e, n = a.A.useField("tab"), c = (0, i.zy)(), u = (0, s.p5)();
  r.useEffect(() => {
    a.A.getState().initializeFromUrl(c.search, u)
  }, [c.search, u]);
  let d = r.useCallback(e => {
    a.A.getState().setTab(e)
  }, []);
  return {
    tabs: r.useMemo(() => [{
      id: s.NC.ALL,
      label: o.intl.string(o.t["0SzXmi"])
    }, t ? {
      id: s.NC.CLAIMED,
      label: o.intl.string(o.t.zyNYNB)
    } : null, t && u ? {
      id: s.NC.PREVIEW_TOOL,
      label: o.intl.string(o.t.BDUDau)
    } : null].filter(l.Vq), [t, u]),
    selectedTab: n,
    onSelectTab: d
  }
}