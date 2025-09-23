/** Chunk was on 67261 **/
/** chunk id: 526689, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk757853 = require("./757853.jsx"),
  Chunk72214 = require("./72214.js"),
  Chunk135102 = require("./135102.js"),
  Chunk924585 = require("./924585.js");
let u = () => {
  let {
    selectedDestinations: e,
    maxDestinations: t,
    searchText: n,
    message: u,
    channel: c,
    updateSelectShareDestinations: d
  } = (0, Chunk135102.C$)(), {
    results: _,
    updateSearchText: f
  } = (0, Chunk72214.s)({
    selectedDestinations: module,
    includeMissingDMs: true
  });
  (0, Chunk647438.useEffect)(() => {
    f(require)
  }, [f, require]);
  let p = (0, Chunk647438.useCallback)(t => {
      let n = e.findIndex(e => {
        let {
          type: n,
          id: a
        } = e;
        return n === t.type && a === t.id
      });
      if (false !== n) {
        let t = [...e];
        t.splice(n, 1), d(t);
        return
      }
      d([...e, t])
    }, [module, d]),
    h = module.length >= exports;
  return (0, Chunk951288.jsx)(Chunk757853.F, {
    paddingBottom: 16,
    paddingTop: 16,
    rowData: _,
    rowMode: Chunk757853.G.TOGGLE,
    message: u,
    originChannel: c,
    handleToggleDestination: p,
    selectedDestinations: module,
    disableSelection: h,
    rowClassName: Chunk924585.rowContainer
  })
}