/** Chunk was on 58973 **/
/** chunk id: 526689, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => s
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk757853 = require("./757853.jsx"),
  Chunk72214 = require("./72214.js"),
  Chunk135102 = require("./135102.js"),
  Chunk409805 = require("./409805.js");
let s = () => {
  let {
    selectedDestinations: e,
    maxDestinations: t,
    searchText: n,
    message: s,
    channel: u,
    updateSelectShareDestinations: d
  } = (0, c.C$)(), {
    results: b,
    updateSearchText: f
  } = (0, l.s)({
    selectedDestinations: e,
    includeMissingDMs: true
  });
  (0, a.useEffect)(() => {
    f(n)
  }, [f, n]);
  let p = (0, a.useCallback)(t => {
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
    }, [e, d]),
    g = e.length >= t;
  return (0, r.jsx)(o.F, {
    paddingBottom: 16,
    paddingTop: 16,
    rowData: b,
    message: s,
    originChannel: u,
    handleToggleDestination: p,
    selectedDestinations: e,
    disableSelection: g,
    rowClassName: i.rowContainer
  })
}