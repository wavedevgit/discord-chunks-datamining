/** Chunk was on 58973 **/
/** chunk id: 526689, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => i
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk757853 = require("./757853.jsx"),
  Chunk72214 = require("./72214.js"),
  Chunk135102 = require("./135102.js"),
  Chunk409805 = require("./409805.js");
let i = () => {
  let {
    selectedDestinations: e,
    maxDestinations: t,
    searchText: n,
    message: i,
    channel: u,
    updateSelectShareDestinations: d
  } = (0, Chunk135102.C$)(), {
    results: b,
    updateSearchText: f
  } = (0, Chunk72214.s)({
    selectedDestinations: module,
    includeMissingDMs: true
  });
  (0, Chunk473749.useEffect)(() => {
    f(require)
  }, [f, require]);
  let p = (0, Chunk473749.useCallback)(t => {
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
  return (0, Chunk54381.jsx)(Chunk757853.F, {
    paddingBottom: 16,
    paddingTop: 16,
    rowData: b,
    message: i,
    originChannel: u,
    handleToggleDestination: p,
    selectedDestinations: module,
    disableSelection: g,
    rowClassName: Chunk409805.rowContainer
  })
}