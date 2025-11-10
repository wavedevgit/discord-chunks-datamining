/** Chunk was on 26196 **/
/** chunk id: 526689, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk757853 = require("./757853.jsx"),
  Chunk72214 = require("./72214.js"),
  Chunk135102 = require("./135102.js"),
  Chunk727350 = require("./727350.js");
let c = () => {
  let {
    selectedDestinations: e,
    maxDestinations: t,
    searchText: n,
    message: c,
    channel: u,
    updateSelectShareDestinations: d
  } = (0, Chunk135102.C$)(), {
    results: f,
    updateSearchText: b
  } = (0, Chunk72214.s)({
    selectedDestinations: module,
    includeMissingDMs: true
  });
  (0, Chunk647438.useEffect)(() => {
    b(require)
  }, [b, require]);
  let p = (0, Chunk647438.useCallback)(t => {
      let n = e.findIndex(e => {
        let {
          type: n,
          id: r
        } = e;
        return n === t.type && r === t.id
      });
      if (false !== n) {
        let t = [...e];
        t.splice(n, 1), d(t);
        return
      }
      d([...e, t])
    }, [module, d]),
    g = module.length >= exports;
  return (0, Chunk951288.jsx)(Chunk757853.F, {
    paddingBottom: 16,
    paddingTop: 16,
    rowData: f,
    message: c,
    originChannel: u,
    handleToggleDestination: p,
    selectedDestinations: module,
    disableSelection: g,
    rowClassName: Chunk727350.rowContainer
  })
}