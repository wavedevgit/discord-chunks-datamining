/** Chunk was on 15646 **/
/** chunk id: 199029, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  o: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk77555 = require("./77555.jsx"),
  Chunk151054 = require("./151054.js"),
  Chunk457417 = require("./457417.js"),
  Chunk848193 = require("./848193.js");
let c = () => {
  let {
    selectedDestinations: e,
    maxDestinations: t,
    searchText: r,
    message: c,
    channel: u,
    updateSelectShareDestinations: d
  } = (0, s.Vw)(), {
    results: f,
    updateSearchText: b
  } = (0, o.R)({
    selectedDestinations: e,
    includeMissingDMs: true
  });
  (0, l.useEffect)(() => {
    b(r)
  }, [b, r]);
  let p = (0, l.useCallback)(t => {
      let r = e.findIndex(e => {
        let {
          type: r,
          id: n
        } = e;
        return r === t.type && n === t.id
      });
      if (false !== r) {
        let t = [...e];
        t.splice(r, 1), d(t);
        return
      }
      d([...e, t])
    }, [e, d]),
    g = e.length >= t;
  return (0, n.jsx)(a.z, {
    paddingBottom: 16,
    paddingTop: 16,
    rowData: f,
    message: c,
    originChannel: u,
    handleToggleDestination: p,
    selectedDestinations: e,
    disableSelection: g,
    rowClassName: i.q
  })
}